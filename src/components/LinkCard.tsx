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
      className="relative flex min-h-[60px] w-full items-center justify-center rounded-2xl border border-white/60 bg-white/45 px-14 py-4 text-[15px] font-semibold text-stone-800 shadow-[0_4px_20px_-8px_rgba(120,60,30,0.15)] backdrop-blur-md transition duration-300 ease-out hover:bg-white/65 hover:shadow-[0_8px_28px_-10px_rgba(120,60,30,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 motion-safe:hover:-translate-y-px dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:shadow-[0_4px_20px_-8px_rgba(0,0,0,0.5)] dark:hover:bg-white/[0.1]"
    >
      {title}
      {clicks !== undefined && (
        <span className="absolute right-5 text-xs font-medium tabular-nums text-stone-400 dark:text-stone-500">
          {clicks.toLocaleString()}회
        </span>
      )}
    </a>
  );
}
