import Image from "next/image";
import Background from "../../../public/icons/join/background.svg";
import Check from '../../../public/icons/join/check.svg';
import Circle from '../../../public/icons/join/circle.svg';
import Video from '../../../public/images/join/video.png';
import { Button } from "../Button";
import { DesktopScreen } from "../GrowSection/components/DesktopScreen";
import { cardList } from "./JoinSection.constants";

const JoinSection = () => {
  return (
    <div className="w-full h-full laptop:px-20 px-4 py-8 laptop:py-40 flex items-center justify-center overflow-hidden">
      <div className="w-full h-full rounded-xl bg-background-light overflow-visible px-4 pb-72 laptop:p-20 shadow-sm flex flex-col laptop:flex-row items-center justify-center">
        <div className="w-full flex flex-col items-center laptop:items-start justify-center py-6 gap-6">
          <h3 className="text-[32px] tablet:text-[44px] laptop:text-[56px] font-extrabold text-foreground-dark-primary">Why join us</h3>
          <div className="flex flex-col items-start justify-center gap-2">
            {cardList.map((content, index) => (
              <div key={index} className="flex items-center justify-start gap-2">
                <Image src={Check} alt="Check" />
                <p className="text-[16px] tablet:text-[18px] laptop:text-xl font-normal text-foreground-dark-primary tracking-normal">{content}</p>
              </div>
            ))}
          </div>
          <Button variant="outlined" color="foreground-amber" className="text-xl font-normal h-14">Sign up now</Button>
        </div>
        <div className="laptop:w-full mt-10 w-full mobile:w-[70%] tablet:w-[40%] h-full relative flex items-center justify-center overflow-visible">
          <DesktopScreen image={Video} className="absolute z-10 aspect-[6/4] scale-[0.95] laptop:-right-4 top-0 laptop:-top-[162px]" />
          <Image src={Background} alt="Background" className="absolute scale-[1.3] laptop:-right-10 top-0 laptop:-top-56 drop-shadow-xl" />
          <Image src={Circle} alt="Circle" className="absolute z-20 -bottom-48 laptop:-bottom-60 left-4 laptop:left-24" />
        </div>
      </div>
    </div>
  )
}

export default JoinSection;