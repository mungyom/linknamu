"use client";

type LinkCardProps = {
  id: string;
  title: string;
  url: string;
  clicks?: number;
  onClick: (id: string) => void;
};

export default function LinkCard({ id, title, url, clicks, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onClick(id)}
      className="relative flex min-h-14 w-full items-center justify-center rounded-2xl border border-gray-200 bg-white px-12 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 dark:border-gray-800 dark:bg-gray-900"
    >
      {title}
      {clicks !== undefined && (
        <span className="absolute right-4 text-xs text-gray-400 dark:text-gray-500">
          {clicks.toLocaleString()}회
        </span>
      )}
    </a>
  );
}
