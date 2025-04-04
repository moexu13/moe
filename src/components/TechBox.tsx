import Image from "next/image";

interface TechBoxProps {
  icon: string;
  label: string;
}

const TechBox = ({ icon, label }: TechBoxProps) => {
  return (
    <div
      className="w-28 sm:w-32 md:w-36 h-24 sm:h-26 md:h-28 flex flex-col items-center px-3 md:px-4 py-3 md:py-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors self-center"
    >
      <div className="h-2 md:h-3"></div>
      <div className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 flex-shrink-0 flex items-center justify-center">
        <Image
          src={icon}
          alt={label}
          width={32}
          height={32}
          style={{
            filter: `brightness(0) saturate(100%) invert(55%) sepia(39%) saturate(2259%) hue-rotate(307deg) brightness(92%) contrast(87%)`,
          }}
        />
      </div>
      <div className="flex-grow min-h-[1rem]"></div>
      <span className="text-white text-xs sm:text-sm text-center mb-1">{label}</span>
    </div>
  );
};

export default TechBox;
