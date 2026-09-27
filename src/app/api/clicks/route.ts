import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const linkIds = new Set(links.map((link) => link.id));

// 링크별 클릭 수 조회
export async function GET() {
  const clicks = await getClicksCollection();
  if (!clicks) return NextResponse.json({});

  const docs = await clicks.find({ _id: { $in: Array.from(linkIds) } }).toArray();
  return NextResponse.json(Object.fromEntries(docs.map((doc) => [doc._id, doc.count])));
}

// 링크 클릭 1회 기록
export async function POST(request: Request) {
  const { id } = await request.json().catch(() => ({ id: null }));
  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });
  }

  const result = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return NextResponse.json({ id, count: result?.count ?? 1 });
}
