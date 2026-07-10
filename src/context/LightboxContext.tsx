import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type LightboxImage = { src: string; alt: string };

type LightboxContextValue = {
  open: (images: LightboxImage[], startIndex?: number) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<LightboxImage[] | null>(null);
  const [index, setIndex] = useState(0);

  const open = useCallback((imgs: LightboxImage[], startIndex = 0) => {
    setImages(imgs);
    setIndex(startIndex);
  }, []);
  const close = useCallback(() => setImages(null), []);
  const next = useCallback(() => {
    setIndex((i) => (images ? (i + 1) % images.length : i));
  }, [images]);
  const prev = useCallback(() => {
    setIndex((i) => (images ? (i - 1 + images.length) % images.length : i));
  }, [images]);

  useEffect(() => {
    if (!images) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [images, close, next, prev]);

  const image = images ? images[index] : null;
  const hasMultiple = !!images && images.length > 1;

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {image && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true" aria-label={image.alt}>
          <button className="lightbox__close" onClick={close} aria-label="Close">
            ×
          </button>
          {hasMultiple && (
            <button
              className="lightbox__nav lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}
          <img src={image.src} alt={image.alt} className="lightbox__image" onClick={(e) => e.stopPropagation()} />
          {hasMultiple && (
            <button
              className="lightbox__nav lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
            >
              ›
            </button>
          )}
          {hasMultiple && (
            <span className="lightbox__counter">
              {index + 1} / {images!.length}
            </span>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within a LightboxProvider");
  return ctx;
}
