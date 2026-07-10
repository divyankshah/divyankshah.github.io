import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import EventDrivenMockup from "../components/mockups/EventDrivenMockup";
import KycMockup from "../components/mockups/KycMockup";
import ExplainableAiMockup from "../components/mockups/ExplainableAiMockup";

type Project = {
  title: string;
  description: string;
  details: string[];
  tags: string[];
  image?: { src: string; alt: string };
  mockup?: "event" | "kyc" | "ai";
};

const mockups = {
  event: EventDrivenMockup,
  kyc: KycMockup,
  ai: ExplainableAiMockup,
};

type ProjectModalContextValue = {
  open: (project: Project) => void;
};

const ProjectModalContext = createContext<ProjectModalContextValue | null>(null);

export function ProjectModalProvider({ children }: { children: ReactNode }) {
  const [project, setProject] = useState<Project | null>(null);

  const open = useCallback((p: Project) => setProject(p), []);
  const close = useCallback(() => setProject(null), []);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, close]);

  const Mockup = project?.mockup ? mockups[project.mockup] : null;

  return (
    <ProjectModalContext.Provider value={{ open }}>
      {children}
      {project && (
        <div
          className="project-modal-backdrop"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal__close" onClick={close} aria-label="Close">
              ×
            </button>
            <div className="project-modal__media">
              {project.image ? (
                <img src={project.image.src} alt={project.image.alt} />
              ) : Mockup ? (
                <Mockup />
              ) : null}
            </div>
            <div className="project-modal__body">
              <h3 className="project-modal__title">{project.title}</h3>
              <div className="project-modal__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.details.map((paragraph, i) => (
                <p key={i} className="project-modal__paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </ProjectModalContext.Provider>
  );
}

export function useProjectModal() {
  const ctx = useContext(ProjectModalContext);
  if (!ctx) throw new Error("useProjectModal must be used within a ProjectModalProvider");
  return ctx;
}
