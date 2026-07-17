export default function DownloadButton() {
  return (
    <button
      type="button"
      className="download-toggle"
      onClick={() => window.print()}
      aria-label="Download portfolio as PDF"
      title="Download portfolio as PDF"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
    </button>
  );
}
