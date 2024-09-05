import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";
import Backlights from '../../../public/icons/card/backlights.svg';
import { Button } from "../Button";
import { cardSectionContent } from "./CardSection.constants";

const CardSection = () => {
  return (
    <div className="w-screen bg-background-dark overflow-hidden">
    <div className="mx-auto max-w-[1440px] px-4 laptop:px-20 py-12 tablet:py-20 flex flex-col items-center justify-star gap-10 tablet:gap-16">
      <div className="w-full flex flex-col tablet:flex-row items-center justify-between gap-6">
        <h2 className="text-foreground-light text-[32px] tablet:text-[40px] laptop:text-[56px] font-medium text-center tablet:text-left">The best of the best</h2>
        <Button variant="outlined" className="h-14 text-xl px-10 font-normal">Sign up now</Button>
      </div>
      <div className="relative flex flex-col tablet:flex-row items-center justify-center bg-backlights gap-6 laptop:gap-12">
        <Image src={Backlights} alt="backlights" className="rotate-90 object-cover tablet:rotate-0 absolute scale-[2] tablet:scale-[1.05]" />
        {cardSectionContent.map((content, index) => (
          <div key={index} className="z-10 bg-background-dark flex flex-col rounded-md border-[1px] overflow-hidden border-background-dark shadow-light">
            <Image src={content.image} alt="card" className="w-full" />
            <div className="flex flex-col items-center justify-center p-8 gap-4">
              <h5 className="text-foreground-light text-2xl font-medium self-start">{content.title}</h5>
              <div className="text-foreground-light-secondary text-lg">{content.description}</div>
              <Button variant="outlined" className="mt-4 h-14 flex items-center w-full justify-center font-normal text-lg gap-4">
                <LuShoppingCart className="w-5 h-5" />
                Buy Now
              </Button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default CardSection