import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image?: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {image ? (
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={112}
          height={112}
          priority
          // next/image는 SVG 최적화를 지원하지 않으므로 원본 그대로 쓴다.
          unoptimized={image.endsWith(".svg")}
          className="h-28 w-28 rounded-full object-cover ring-4 ring-white shadow-md dark:ring-gray-800"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 text-4xl font-bold text-white shadow-md ring-4 ring-white dark:ring-gray-800"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-5 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{bio}</p>
    </section>
  );
}
