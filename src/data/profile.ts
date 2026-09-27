export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// TODO: 아래 값은 모두 보여 주기용 더미 값이다. 실제 내용으로 교체할 것.

export const profile = {
  name: "김장닭",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  // public/ 폴더 기준 경로. 비워두면 이니셜이 표시된다.
  image: "/mgkim.jpg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/your-id" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/in/your-id" },
  { id: "blog", title: "Blog", url: "https://velog.io/@your-id" },
];
