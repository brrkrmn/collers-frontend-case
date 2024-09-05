import Image from "next/image";

const DesktopScreen = ({image}: {image: any}) => {
  return (
    <div className="max-w-[759px] max-h-[440px] w-full h-auto aspect-[4/3] rounded-lg bg-background-light flex flex-col overflow-hidden p-1 shadow-lg">
      <div className="w-full h-[30px] flex items-center justify-start px-3 gap-[7px]">
        <span className="w-[8px] h-[8px] rounded-full bg-rose"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-yellow-dark"></span>
        <span className="w-[8px] h-[8px] rounded-full bg-green-light"></span>
      </div>
      <div className="h-full overflow-hidden rounded-b-[16px]">
        <Image src={image} alt="Image" className="h-full object-cover overflow-hidden" />
      </div>
    </div>
  )
}

export default DesktopScreen;