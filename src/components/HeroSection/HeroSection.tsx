import Image from "next/image";
import { LuPlayCircle } from "react-icons/lu";
import Sneaker from '../../../public/images/hero-sneaker.png';
import { Button } from "../Button";
import { cardContents } from "./HeroSection.constants";
import { CardIcon } from "./components/CardIcon";

const HeroSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 laptop:px-20 relative gap-12">
      <div className="py-24 gap-12 flex items-center justify-center">
        <div className="flex flex-col items-start justify-center gap-8 pt-10">
          <h1 className="text-foreground-dark-primary text-7xl font-extrabold">Collectible Sneakers</h1>
          <p className="text-[18px] font-normal ">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
          <div className="flex items-center justify-center gap-4">
            <Button variant="outlined" color="foreground-amber" className="text-lg h-14">
              Sign up now
            </Button>
            <Button color="foreground-amber" className="flex items-center justify-center gap-2">
              <LuPlayCircle className="text-xl" />
              <p>
                Watch Demo
              </p>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center relative">
          <Image src={Sneaker} alt="Sneaker" className="z-10 w-[800px] scale-[1.2] max-h-[350px] object-cover overflow-visible" />
          <span className="absolute top-10 bg-yellow-dark rounded-2xl w-full max-w-[367px] max-h-[372px] aspect-[3/5]"></span>
        </div>
      </div>
      <div className="py-20 flex items-center justify-center w-full gap-20">
        {cardContents.map((content, index) => (
          <div key={index} className="flex flex-col justify-center items-start w-full gap-[10px] text-foreground-dark-primary">
            <CardIcon icon={content.icon} />
            <h5 className="text-[20px] font-medium">{content.title}</h5>
            <p className="text-[18px] font-normal leading-8">{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSection