"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [clicks, setClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : {}))
      .then(setClicks)
      .catch(() => {});
  }, []);

  const handleClick = (id: string) => {
    setClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // 새 탭으로 이동해도 요청이 끊기지 않도록 keepalive를 사용한다.
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch(() => {});
  };

  return (
    <ul className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} clicks={clicks[link.id] ?? 0} onClick={handleClick} />
        </li>
      ))}
    </ul>
  );
}
