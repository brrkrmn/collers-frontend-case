import Image from 'next/image';
const CardIcon = ({ icon }: { icon: CardIcon}) => {
  return (
    <div className="w-16 h-16 relative">
      <Image
        src={icon.iconSrc}
        alt={icon.alt}
        width={64}
        height={64}
        className="w-16 h-16"
      />
      <Image
        src={icon.bgSrc}
        alt="Rectangle"
        width={60}
        height={60}
        className={`overflow-visible absolute object-cover ${icon.className}`}
      />
    </div>
  )
}

export default CardIcon

