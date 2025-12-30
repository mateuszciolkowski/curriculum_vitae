export const HOBBIES = [
  {
    icon: "🎣",
    label: "Wędkarstwo",
    images: [
      "/src/assets/images/hobbies/wedkarstwo.jpeg",
      "/src/assets/images/hobbies/wedkarstwo2.jpeg",
    ],
  },
  {
    icon: "🏋️",
    label: "Siłownia",
    images: [],
  },
] as const;

export type Hobby = (typeof HOBBIES)[number];
