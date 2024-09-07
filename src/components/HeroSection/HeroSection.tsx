import Image from "next/image";
import Play from '../../../public/icons/hero/play.svg';
import Sneaker from '../../../public/images/hero/sneaker.png';
import { Button } from "../Button";
import { cardContents } from "./HeroSection.constants";
import { CardIcon } from "./components/CardIcon";

const HeroSection = () => {
  return (
    <div className="w-screen background-hero">
      <div className="mx-auto max-w-[1440px] h-full flex flex-col items-center justify-center px-4 laptop:px-20 tablet:gap-12 overflow-hidden">
        <div className="py-16 laptop:py-24 gap-12 flex flex-col laptop:flex-row items-center justify-center">
          <div className="flex flex-col items-center laptop:items-start justify-center gap-8 laptop:pt-10 text-center laptop:text-left">
            <h1 className="text-foreground-dark-primary laptop:text-7xl text-6xl font-bold">Collectible Sneakers</h1>
            <p className="text-[18px] font-normal">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
            <div className="flex items-center justify-center gap-4">
              <Button variant="outlined" color="foreground-amber" className="text-lg h-14">
                Sign up now
              </Button>
              <Button color="foreground-amber" className="flex items-center justify-center gap-2">
                <Image src={Play} alt="Play Icon" className="text-xl" />
                <p>
                  Watch Demo
                </p>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center relative max-w-[367px] w-full">
            <Image src={Sneaker} alt="Sneaker" className="z-10 w-[120%] tablet:scale-[1.5] max-h-[350px] object-cover overflow-visible" />
            <span className="absolute tablet:top-10 bg-yellow-dark rounded-2xl w-[60%] tablet:w-[80%] h-[60%] tablet:h-full max-w-[367px] aspect-[3/5]"></span>
          </div>
        </div>
        <div className="pb-16 tablet:pt-16 flex flex-col tablet:flex-row items-center justify-center w-full gap-14 laptop:gap-20">
          {cardContents.map((content, index) => (
            <div key={index} className="flex flex-col justify-center items-center tablet:items-start w-full gap-[10px] text-foreground-dark-primary">
              <CardIcon icon={content.icon} />
              <h5 className="text-[20px] font-medium">{content.title}</h5>
              <p className="text-[20px] tablet:text-[18px] font-normal text-center tablet:text-left leading-8">{content.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
  )
}

export default HeroSection