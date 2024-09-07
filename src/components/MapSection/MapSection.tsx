import Image from "next/image"
import Shoes from "../../../public/images/map/shoes.png"

const MapSection = () => {
  return (
    <div className="bg-amber w-screen">
      <div className="relative max-w-[1440px] background-map mx-auto h-[717px] laptop:px-20 py-10 flex items-center justify-center">
        <div className="absolute top-0 tablet:left-48 flex flex-col items-center justify-center">
          <Image src={Shoes} alt="shoes" className="z-10" />
          <div className="p-2 pt-4 -mt-12 rounded-b-sm h-16 w-[250px] bg-foreground-light-secondary flex items-center justify-center">Emma Simpson collected one pair of Cool Shoes.</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-foreground-light-primary font-bold">
          <div className="text-6xl tablet:text-8xl ">11,658,467</div>
          <div className="text-4xl tablet:text-[56px] text-center">Shoes Collected</div>
        </div>
      </div>
    </div>
  )
}

export default MapSection