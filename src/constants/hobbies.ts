export const HOBBIES = [
  {
    icon: "🎣",
    label: { pl: "Wędkarstwo", en: "Fishing" },
    description: {
      pl: "Wędkarstwo to mój sposób na reset — cierpliwość, cisza i natura. Najlepiej działa po intensywnym tygodniu przy komputerze.",
      en: "Fishing is my way to reset — patience, silence and nature. Works best after an intense week in front of the screen.",
    },
    images: [
      new URL("../assets/images/hobbies/wedkarstwo.jpeg", import.meta.url).href,
      new URL("../assets/images/hobbies/wedkarstwo2.jpeg", import.meta.url)
        .href,
    ],
  },
  {
    icon: "🏋️",
    label: { pl: "Siłownia", en: "Gym" },
    description: {
      pl: "Regularny trening to dla mnie nie tylko forma fizyczna, ale też sposób na utrzymanie dyscypliny i jasności umysłu na co dzień.",
      en: "Regular training is not just about staying in shape — it's how I maintain discipline and mental clarity in everyday life.",
    },
    images: [],
  },
] as const;

export type Hobby = (typeof HOBBIES)[number];
