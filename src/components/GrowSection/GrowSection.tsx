import Image from "next/image";
import Shoe from '../../../public/images/grow/front.png';
import { DesktopScreen } from "./components/DesktopScreen";
import { Tabs } from "./components/Tabs";
import { desktopScreenImages } from "./GrowSection.constants";

const GrowSection = () => {
  return (
    <div className="w-screen background-wave pb-48 overflow-hidden">
      <div className="mx-auto max-w-[1440px] h-screen laptop:p-20 laptop:pb-32 px-4 pt-12 pb-24 flex flex-col gap-8 laptop:gap-20">
        <div className="flex flex-col gap-8 text-foreground-dark-primary items-center laptop:items-start">
          <h3 className="text-[32px] laptop:text-[56px] font-extrabold">Grow your collection</h3>
          <p className="text-[16px] laptop:text-[18px] font-normal text-center laptop:text-start">Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
          Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
        </div>
        <div className="flex flex-col laptop:flex-row gap-8 laptop:gap-[80px] items-start justify-between">
          <div className="">
            <Tabs />
          </div>
          <div className="flex relative w-full scale-[0.5] laptop:scale-[1]">
            <div className="absolute w-full">
              <DesktopScreen image={desktopScreenImages[1]} />
            </div>
            <div className="absolute w-full top-20 left-24">
              <DesktopScreen image={desktopScreenImages[0]}/>
            </div>
            <div className="absolute w-full left-[650px] top-[150px]">
              <Image src={Shoe} alt="Shoes" className="w-full max-w-[340px] h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrowSection