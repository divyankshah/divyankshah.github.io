import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React & Vite, deployed on GitHub Pages.
      </p>
    </footer>
  );
}
