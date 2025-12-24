export const HOBBIES = [
  {
    icon: "🎣",
    label: "Wędkarstwo",
    image: "/src/assets/images/hobbies/wedkarstwo.jpeg",
  },
  {
    icon: "🏋️",
    label: "Siłownia",
    image: "/src/assets/images/hobbies/silownia.jpeg",
  },
] as const;

export type Hobby = (typeof HOBBIES)[number];
