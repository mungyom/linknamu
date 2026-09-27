import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-12">
      <div className="fixed right-4 top-4">
        <ThemeToggle />
      </div>
      <Profile {...profile} />
      <div className="mt-8 w-full">
        <LinkList links={links} />
      </div>
      <footer className="mt-auto pt-12 text-xs text-gray-400 dark:text-gray-600">링크나무</footer>
    </main>
  );
}
