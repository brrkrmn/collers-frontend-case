import Image from "next/image";
import AppStore from "../../../public/icons/footer/app-store.svg";
import GooglePlay from "../../../public/icons/footer/google-play.svg";
import Lang from "../../../public/icons/footer/lang.svg";
import { content, links, socialIcons } from "./Footer.constants";

const Footer = () => {
  return (
    <div className="bg-background-dark w-screen">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center justify-center px-4 pt-2 tablet:px-20">
        <div className="w-full flex flex-col tablet:flex-row items-start justify-center py-12 gap-20 tablet:gap-10 laptop:gap-20">
          {content.map((column, index) => (
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
              <Image src={AppStore} alt="App Store" className=" text-2xl" />
              <Image src={GooglePlay} alt="icon" />
          </div>
          <div className="w-full flex flex-col items-center tablet:items-start justify-center tablet:justify-start text-[16px] gap-4">
            <p className="text-foreground-light font-normal text-[16px]">Follow Us</p>
            <div className="flex items-center justify-center gap-6 text-foreground-light-secondary text-xl flex-wrap">
                {socialIcons.map(icon => (
                  <Image src={icon.icon} alt={icon.alt} key={icon.alt} />
              ))}
            </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t-[1px] text-base border-divider font-light text-foreground-light-secondary flex flex-col tablet:flex-row justify-center items-center tablet:items-start tablet:justify-between gap-10 py-9 mb-12 tablet:mb-0">
          <div className="font-light text-center text-nowrap">Collers @ 2023. All rights reserved.</div>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            {links.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
            <div className="flex items-center justify-center gap-2">
              <Image src={Lang} alt="Lang Icon" className="text-foreground-light text-xl"/>
              EN
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;