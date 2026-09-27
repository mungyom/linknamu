import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 pb-10 pt-20 sm:pt-24">
      <div className="fixed right-5 top-5">
        <ThemeToggle />
      </div>
      <Profile {...profile} />
      <div className="mt-10 w-full">
        <LinkList links={links} />
      </div>
      <footer className="mt-auto pt-16 text-xs font-medium tracking-wide text-stone-400 dark:text-stone-500">
        링크나무
      </footer>
    </main>
  );
}
