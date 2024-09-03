type HeroCard = {
  title: string;
  description: string;
  icon: CardIcon;
}

type CardIcon = {
  name: "trophy" | "tunnel" | "tv";
  alt: string;
  iconSrc: any;
  bgSrc: any;
  className: string;
}