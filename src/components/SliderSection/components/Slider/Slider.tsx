import Image from "next/image"
import { forwardRef } from "react"
import { sliderContent } from "./Slider.constants"

// eslint-disable-next-line react/display-name
const Slider = forwardRef((_props, ref) => {
  return (
    // @ts-ignore
    <div ref={ref} className="pb-10 px-6 tablet:px-10 laptop:px-20 w-full overflow-x-scroll hidden-scrollbar flex items-center justify-start gap-4 laptop:gap-6">
      {sliderContent.map(content => (
        <div key={content.title} className="px-6 laptop:px-8 py-8 laptop:py-12 flex flex-col items-start justify-between gap-4 laptop:gap-9 min-w-[319px] laptop:min-w-[384px] h-[296px] laptop:h-[430px] bg-background-light rounded-lg shadow-md">
          <div className="flex items-center justify-start gap-2">
            <Image src={content.icon} alt={content.title} />
            <p className="text-2xl font-medium text-foreground-dark-secondary">{content.title}</p>
          </div>
          <div className="text-[16px] laptop:text-[23px] laptop:tracking-wide laptop:leading-relaxed font-normal text-foreground-dark">
            {content.description}
          </div>
          <div className="flex items-center gap-4 justify-center">
            <Image src={content.user.avatar} alt={content.user.name} />
            <div className="flex flex-col items-start justify-center">
              <p className="text-lg">{content.user.name}</p>
              <p className="text-foreground-dark-secondary font-light">{content.user.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
})

export default Slider