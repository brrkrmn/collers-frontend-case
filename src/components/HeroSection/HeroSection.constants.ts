import RectangleBlue from '../../../public/icons/rectangle-blue.png'
import RectangleGreen from '../../../public/icons/rectangle-green.png'
import Rectanglepink from '../../../public/icons/rectangle-pink.png'
import Trophy from '../../../public/icons/trophy.png'
import Tunnel from '../../../public/icons/tunnel.png'
import Tv from '../../../public/icons/tv.png'

export const cardContents: HeroCard[] = [
  {
    title: "Nibh viverra",
    description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    icon: {
      name: 'trophy',
      alt: "Trophy",
      iconSrc: Trophy,
      bgSrc: RectangleBlue,
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
      bgSrc: RectangleGreen,
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
      bgSrc: Rectanglepink,
      className: "top-1 -right-5 w-11 h-11"
    }
  }
]