import { MongoClient } from "mongodb";

declare global {
  // 개발 모드 HMR이나 서버리스 재사용 시 연결을 새로 만들지 않도록 전역에 보관한다.
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getClicksCollection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  // DB에 닿지 않을 때 요청이 오래 매달리지 않도록 서버 선택 대기 시간을 줄인다.
  global._mongoClientPromise ??= new MongoClient(uri, { serverSelectionTimeoutMS: 5000 })
    .connect()
    .catch((error) => {
      // 실패한 연결을 캐시에 남기면 서버를 재시작할 때까지 계속 실패하므로 비운다.
      global._mongoClientPromise = undefined;
      throw error;
    });
  const client = await global._mongoClientPromise;

  return client
    .db(process.env.MONGODB_DB ?? "linknamu")
    .collection<{ _id: string; count: number }>("clicks");
}
