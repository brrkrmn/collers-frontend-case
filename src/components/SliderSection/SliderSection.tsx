'use client'

import Image from "next/image";
import { useRef } from "react";
import ArrowLeft from "../../../public/icons/slider/arrow-left.svg";
import ArrowRight from "../../../public/icons/slider/arrow-right.svg";
import { Slider } from "./components/Slider";

const SliderSection = () => {
  const sliderRef = useRef(null)

  const scrollLeft = () => {
    if (sliderRef.current) {
      // @ts-ignore
      sliderRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      // @ts-ignore
      sliderRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="overflow-visible relative h-[459px] laptop:h-[732px] w-full px-4 mb-10 py-12 tablet:p-20 flex flex-col gap-8 laptop:gap-20 items-center justify-start">
      <div className="w-full flex items-center justify-center laptop:justify-between">
        <h4 className="text-[32px] laptop:text-[56px] font-extrabold text-foreground-dark-primary">Because they love us</h4>
        <div className="*:transition hidden laptop:flex items-center justify-center gap-6">
          <button onClick={scrollLeft} className="hover:bg-yellow-light w-12 h-12 rounded-full border-amber border-2 flex items-center justify-center">
            <Image src={ArrowLeft} alt="left arrow" />
          </button>
          <button onClick={scrollRight} className="hover:bg-yellow-light w-12 h-12 rounded-full border-amber border-2 flex items-center justify-center">
            <Image src={ArrowRight} alt="right arrow" />
          </button>
        </div>
      </div>
      <div className="z-10 w-screen overflow-visible">
        <Slider ref={sliderRef} />
      </div>
      <span className="absolute bg-yellow-neutral w-full laptop:w-[95vw] h-[277px] laptop:h-[421px] top-[120px] tablet:top-[140px] laptop:top-[26%]"></span>
    </div>
  )
}

export default SliderSection;