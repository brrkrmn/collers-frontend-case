import Image from "next/image"
import Arrow from '../../../../../public/icons/grow/tabs/arrow.svg'
import { tabsContent } from "./Tabs.constants"

const Tabs = () => {
  return (
    <div className="flex w-full laptop:flex-col overflow-x-scroll items-center justify-center tablet:justify-start gap-10 laptop:gap-4 laptop:w-[256px]">
      {tabsContent.map((content, index) => (
        <div key={index} className="cursor-pointer group flex items-center text-nowrap hover:bg-background-light hover:shadow-xs transition rounded-sm justify-start px-4 gap-4 text-xl w-[256px] h-[56px]">
          <Image src={content.icon} alt="Icon"/>
          {content.title}
          <Image src={Arrow} alt="Arrow Right" className="ml-auto hidden group-hover:block"/>
        </div>
      ))}
    </div>
  )
}

export default Tabs