import TrophyBackground from '../../../public/icons/hero/trophy-background.svg'
import Trophy from '../../../public/icons/hero/trophy.svg'
import TunnelBackground from '../../../public/icons/hero/tunnel-background.svg'
import Tunnel from '../../../public/icons/hero/tunnel.svg'
import TvBackground from '../../../public/icons/hero/tv-background.svg'
import Tv from '../../../public/icons/hero/tv.svg'

export const cardContents: HeroCard[] = [
  {
    title: "Nibh viverra",
    description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    icon: {
      name: 'trophy',
      alt: "Trophy",
      iconSrc: Trophy,
      bgSrc: TrophyBackground,
      className: "top-0 -right-2 w-[36px] h-[36px]"
    }
  },
  {
    title: "Cursus amet",
    description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    icon: {
      name: 'tunnel',
      alt: "Tunnel",
      iconSrc: Tunnel,
      bgSrc: TunnelBackground,
      className: "top-0 right-0 w-10 h-10"
    }
  },
  {
    title: "Ipsum fermentum",
    description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    icon: {
      name: "tv",
      alt: "Tv",
      iconSrc: Tv,
      bgSrc: TvBackground,
      className: "top-1 -right-5 w-11 h-11"
    }
  }
]