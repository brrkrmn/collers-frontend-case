import Image from "next/image";
import { FaApple, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";
import Bottom from '../../../public/icons/google-play/bottom.png';
import Left from '../../../public/icons/google-play/left.png';
import Right from '../../../public/icons/google-play/right.png';
import Top from '../../../public/icons/google-play/top.png';
import { FooterContent, FooterLinks } from "./Footer.constants";

const Footer = () => {
  return (
    <div className="bg-background-dark w-screen">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center justify-center px-4 tablet:px-20">
        <div className="w-full flex flex-col tablet:flex-row items-start justify-center py-12 gap-20 tablet:gap-10 laptop:gap-20">
          {FooterContent.map((column, index) => (
            <div key={index} className="w-full h-full flex flex-col items-center tablet:items-start justify-center tablet:justify-start text-[16px] gap-6">
              <p key={index} className="text-foreground-light font-normal">{column.title}</p>
              {column.content.map((subtitle, index) => (
                <p key={index} className="text-foreground-light-secondary font-light">{subtitle}</p>
              ))}
            </div>
          ))}
          <div className="flex flex-col w-full gap-16">
          <div className="w-full flex flex-col items-center tablet:items-start justify-center tablet:justify-start text-[16px] gap-4">
            <p className="text-foreground-light font-normal text-[16px]">Get the App</p>
            <div className="min-w-[115px] px-2 h-[40px] border-[1px] border-[#A6A6A6] text-foreground-light bg-foreground-dark rounded-sm flex items-center justify-center gap-1">
              <FaApple className=" text-2xl" />
              <div className="flex flex-col h-full items-start justify-end relative">
                <p className="text-[8px] font-light absolute top-1 tracking-wider">Download on the</p>
                <p className="pb-1 font-light">App Store</p>
              </div>
            </div>
            <div className="px-2 min-w-[130px] h-[40px] border-[1px] border-[#A6A6A6] text-foreground-light bg-foreground-dark rounded-sm flex items-center justify-center gap-1">
              <div className="w-6 h-full *:absolute relative py-2">
                <Image src={Left} alt="icon" className="left-0" />
                <Image src={Right} alt="icon" className="right-[4%] top-[34%]" />
                <Image src={Top} alt="icon" className="top-[15%]" />
                <Image src={Bottom} alt="icon" className="bottom-[14%]" />
              </div>
              <div className="flex flex-col h-full items-start justify-end relative">
                <p className="text-[8px] font-light absolute top-1 tracking-wider">GET IT ON</p>
                <p className="pb-1 font-light">Google Play</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center tablet:items-start justify-center tablet:justify-start text-[16px] gap-4">
            <p className="text-foreground-light font-normal text-[16px]">Follow Us</p>
            <div className="flex items-center justify-center gap-6 text-foreground-light-secondary text-xl flex-wrap">
              <FaYoutube />
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t-[1px] text-base border-divider font-light text-foreground-light-secondary flex flex-col tablet:flex-row justify-center items-center tablet:items-start tablet:justify-between gap-10 py-9 mb-12 tablet:mb-0">
          <div className="font-light text-center text-nowrap">Collers @ 2023. All rights reserved.</div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {FooterLinks.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
            <div className="flex items-center justify-center gap-2">
              <GrLanguage className="text-foreground-light text-xl"/>
              EN
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;