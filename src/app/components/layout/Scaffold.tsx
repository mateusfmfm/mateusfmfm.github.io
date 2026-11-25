import { useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";

interface ScaffoldProps {
  children: ReactNode;
}

export default function Scaffold({ children }: ScaffoldProps) {
  const { t, i18n } = useTranslation();
  const [isDownloadingAts, setIsDownloadingAts] = useState(false);
  const [isDownloadingAtsWithoutContacts, setIsDownloadingAtsWithoutContacts] = useState(false);

  async function handleDownloadAts() {
    if (isDownloadingAts) return;

    setIsDownloadingAts(true);
    try {
      const { downloadCv } = await import("../../cv/downloadCv");
      await downloadCv(t, i18n.language);
    } finally {
      setIsDownloadingAts(false);
    }
  }

  async function handleDownloadAtsWithoutContacts() {
    if (isDownloadingAtsWithoutContacts) return;

    setIsDownloadingAtsWithoutContacts(true);
    try {
      const { downloadCv } = await import("../../cv/downloadCv");
      await downloadCv(t, i18n.language, { omitContacts: true });
    } finally {
      setIsDownloadingAtsWithoutContacts(false);
    }
  }

  return (
    <div className="page-shell">
      <Header />

      <main className="page-main">
        <div className="page-content">{children}</div>
      </main>

      <footer className="site-footer">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <button
            type="button"
            className="ats-download-link"
            disabled={isDownloadingAts}
            aria-busy={isDownloadingAts}
            onClick={() => void handleDownloadAts()}
          >
            {t("header.downloadAts")}
          </button>
          <button
            type="button"
            className="ats-download-link"
            disabled={isDownloadingAtsWithoutContacts}
            aria-busy={isDownloadingAtsWithoutContacts}
            onClick={() => void handleDownloadAtsWithoutContacts()}
          >
            {t("header.downloadAtsWithoutContacts")}
          </button>
        </div>
        <p>© {new Date().getFullYear()} Mateus Félix. Feito com React + Tailwind.</p>
      </footer>
    </div>
  );
}
