"use client";

import { useEffect, useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkCard from "./LinkCard";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [clicks, setClicks] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : {}))
      // 조회 응답보다 먼저 누른 클릭은 서버 값이 들어와도 덮어쓰지 않는다.
      .then((data: Record<string, number>) => setClicks((prev) => ({ ...data, ...prev })))
      .catch(() => {});
  }, []);

  const handleClick = (id: string) => {
    // 누르는 즉시 1 올려 보여 주고, 서버 응답이 오면 실제 값으로 맞춘다.
    setClicks((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // 새 탭으로 이동해도 요청이 끊기지 않도록 keepalive를 사용한다.
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then(({ count }: { count: number }) => setClicks((prev) => ({ ...prev, [id]: count })))
      // 기록에 실패하면 미리 올려 둔 1을 되돌린다.
      .catch(() => setClicks((prev) => ({ ...prev, [id]: Math.max((prev[id] ?? 1) - 1, 0) })));
  };

  return (
    <ul className="flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard {...link} clicks={clicks[link.id] ?? 0} onClick={handleClick} />
        </li>
      ))}
    </ul>
  );
}
