export const HOBBIES = [
  {
    icon: "🎣",
    label: { pl: "Wędkarstwo", en: "Fishing" },
    images: [
      new URL("../assets/images/hobbies/wedkarstwo.jpeg", import.meta.url).href,
      new URL("../assets/images/hobbies/wedkarstwo2.jpeg", import.meta.url)
        .href,
    ],
  },
  {
    icon: "🏋️",
    label: { pl: "Siłownia", en: "Gym" },
    images: [],
  },
] as const;

export type Hobby = (typeof HOBBIES)[number];
