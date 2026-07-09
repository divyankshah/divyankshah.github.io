import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type LightboxImage = { src: string; alt: string };

type LightboxContextValue = {
  open: (image: LightboxImage) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null);

  const open = useCallback((img: LightboxImage) => setImage(img), []);
  const close = useCallback(() => setImage(null), []);

  useEffect(() => {
    if (!image) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [image, close]);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      {image && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true" aria-label={image.alt}>
          <button className="lightbox__close" onClick={close} aria-label="Close">
            ×
          </button>
          <img
            src={image.src}
            alt={image.alt}
            className="lightbox__image"
            onClick={(e) => e.stopPropagation()}
          />
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
