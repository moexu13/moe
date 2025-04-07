import Image from "next/image";
import Link from "next/link";


interface PortfolioProjectProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  github: string;
  link: string;
}

const PortfolioProject = ({
  title,
  description,
  image,
  techStack,
  github,
  link,
}: PortfolioProjectProps) => {
  return (
    <div className="w-[90%] lg:w-[75%] mx-auto rounded-xl p-6 mt-12 bg-(--color-primary)/90 flex flex-col md:flex-row gap-6">
      <div className="md:w-1/3 flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={500}
          height={309}
          className="w-full rounded-lg object-cover"
        />
      </div>
      <div className="md:w-2/3 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-white/10 text-white/90 text-sm px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <p className="my-4 text-white/80">{description}</p>
        <div className="flex gap-14 mt-auto">
          <Link
            href={github}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            <Image
              src={"/icons/github.svg"}
              alt={"Github icon"}
              width={24}
              height={24}
              className="filter invert"
            />
            GitHub
          </Link>
          <Link
            href={link}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
          >
            Live Site
            <Image
              src="/icons/arrow.svg"
              alt="arrow"
              width={24}
              height={24}
              className="filter invert"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject;
