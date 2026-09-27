import { MongoClient } from "mongodb";

declare global {
  // 개발 모드 HMR이나 서버리스 재사용 시 연결을 새로 만들지 않도록 전역에 보관한다.
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getClicksCollection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  global._mongoClientPromise ??= new MongoClient(uri).connect();
  const client = await global._mongoClientPromise;

  return client
    .db(process.env.MONGODB_DB ?? "linknamu")
    .collection<{ _id: string; count: number }>("clicks");
}
