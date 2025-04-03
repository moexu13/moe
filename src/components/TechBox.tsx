import Image from "next/image";

interface TechBoxProps {
  icon: string;
  label: string;
}

const TechBox = ({ icon, label }: TechBoxProps) => {
  return (
    <div
      className="w-36 h-28 flex flex-col justify-between items-center px-4 pt-4 pb-2 border border-white/40 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors self-center"
    >
      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center mt-1">
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
      <span className="text-white text-sm text-center mb-2">{label}</span>
    </div>
  );
};

export default TechBox;
