import { BiMenuAltLeft } from "react-icons/bi";
import { Button } from "../Button";
import { navBarLinks } from "./NavBar.constants";

const Navbar = () => {
  return (
    <div className="w-full laptop:h-24 py-6 px-4 laptop:px-20 flex justify-between items-center h-[67px]">
      <div className="text-[32px] font-medium text-foreground-amber">Collers</div>
      <div className="hidden laptop:flex items-center justify-center gap-4">
        {navBarLinks.map((link, index) => (
          <Button
            key={index}
            variant={link.variant}
            color={"foreground-amber"}
          >
            {link.text}
          </Button>
        ))}
      </div>
      <div className="laptop:hidden flex justify-center items-center">
        <Button color="foreground-amber" className="!px-0 !py-0 w-fit h-fit">
          <BiMenuAltLeft className="rotate-180 w-7 h-7"/>
        </Button>
      </div>
    </div>
  )
}

export default Navbar;