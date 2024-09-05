import Image from "next/image";
import Check from '../../../public/icons/join/check.svg';
import { Button } from "../Button";
import { cardList } from "./JoinSection.constants";

const JoinSection = () => {
  return (
    <div className="h-screen w-full laptop:px-20 px-4 flex items-center justify-center">
      <div className="w-full rounded-xl bg-background-light px-4 py-8 laptop:p-20 shadow-sm flex flex-col laptop:flex-row items-center justify-center">
        <div className="w-full flex flex-col items-center laptop:items-start justify-center gap-6">
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
        <div className="w-full border-2"></div>
      </div>
    </div>
  )
}

export default JoinSection;