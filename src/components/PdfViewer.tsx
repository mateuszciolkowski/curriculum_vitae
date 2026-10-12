import { type ReactElement, useEffect, useRef, useState } from "react";

type PdfViewerProps = {
  url: string;
  errorLabel: string;
};

// Własny podgląd PDF: pdf.js rysuje każdą stronę na <canvas>, dopasowaną do szerokości kontenera.
export function PdfViewer({ url, errorLabel }: PdfViewerProps): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [pages, setPages] = useState(0);
  const [failed, setFailed] = useState(false);
  const pdfRef = useRef<import("pdfjs-dist").PDFDocumentProxy | null>(null);
  const taskRef = useRef<import("pdfjs-dist").PDFDocumentLoadingTask | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver(([entry]) => setWidth(Math.floor(entry.contentRect.width)));
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    setFailed(false);
    setPages(0);
    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default;
        pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
        const task = pdfjs.getDocument({ url });
        taskRef.current = task;
        const pdf = await task.promise;
        if (cancelled) return;
        pdfRef.current = pdf;
        setPages(pdf.numPages);
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();
    return () => {
      cancelled = true;
      void taskRef.current?.destroy();
      taskRef.current = null;
      pdfRef.current = null;
    };
  }, [url]);

  useEffect(() => {
    const pdf = pdfRef.current;
    const container = containerRef.current;
    if (!pdf || !container || !width || !pages) return;
    const canvases = container.querySelectorAll("canvas");
    const tasks: { cancel: () => void }[] = [];
    let cancelled = false;
    (async () => {
      for (let i = 1; i <= pages; i++) {
        const page = await pdf.getPage(i);
        if (cancelled) return;
        const base = page.getViewport({ scale: 1 });
        const viewport = page.getViewport({ scale: width / base.width });
        const dpr = window.devicePixelRatio || 1;
        const canvas = canvases[i - 1];
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${Math.floor(viewport.width)}px`;
        canvas.style.height = `${Math.floor(viewport.height)}px`;
        const task = page.render({ canvas, viewport, transform: [dpr, 0, 0, dpr, 0, 0] });
        tasks.push(task);
        await task.promise.catch(() => undefined);
      }
    })();
    return () => {
      cancelled = true;
      tasks.forEach((t) => t.cancel());
    };
  }, [width, pages]);

  return (
    <div className="flex-1 overflow-y-auto bg-stone-300/60 dark:bg-stone-900 p-2 sm:p-4">
      <div ref={containerRef} className="mx-auto flex max-w-3xl flex-col gap-3">
        {failed && <p className="p-6 text-center text-sm text-stone-600 dark:text-stone-300">{errorLabel}</p>}
        {Array.from({ length: pages }, (_, i) => (
          <canvas key={i} className="rounded-sm bg-white shadow-md" />
        ))}
      </div>
    </div>
  );
}
