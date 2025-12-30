export const HOBBIES = [
  {
    icon: "🎣",
    label: "Wędkarstwo",
    images: [
      new URL("../assets/images/hobbies/wedkarstwo.jpeg", import.meta.url).href,
      new URL("../assets/images/hobbies/wedkarstwo2.jpeg", import.meta.url)
        .href,
    ],
  },
  {
    icon: "🏋️",
    label: "Siłownia",
    images: [],
  },
] as const;

export type Hobby = (typeof HOBBIES)[number];
