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
          className="h-28 w-28 rounded-full object-cover shadow-[0_12px_32px_-8px_rgba(120,60,30,0.35),0_4px_10px_-4px_rgba(120,60,30,0.2)] ring-4 ring-white/80 dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] dark:ring-white/10"
        />
      ) : (
        <div
          aria-label={`${name} 프로필 사진`}
          className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-orange-300 to-rose-400 text-4xl font-bold text-white shadow-[0_12px_32px_-8px_rgba(120,60,30,0.35),0_4px_10px_-4px_rgba(120,60,30,0.2)] ring-4 ring-white/80 dark:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] dark:ring-white/10"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">{name}</h1>
      <p className="mt-2 text-balance text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">{bio}</p>
    </section>
  );
}
