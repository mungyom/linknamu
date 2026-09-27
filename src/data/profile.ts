export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// TODO: 아래 값은 모두 보여 주기용 더미 값이다. 실제 내용으로 교체할 것.

export const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  // public/ 폴더에 실제 사진을 넣고 경로를 바꾸면 된다. 비워두면 이니셜이 표시된다.
  image: "/profile-dummy.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/your-id" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/your-id" },
  { id: "blog", title: "Blog", url: "https://velog.io/@your-id" },
];
