import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <>
      <div>
        <PortfolioItem
          title="Code Squeak"
          image="/placeholder.jpeg"
          description="A GitHub app that does AI code reviews."
          techStack={["TypeScript", "Node", "Hono"]}
          github="https://github.com/moexu13/code-squeak-api"
          link="https://example.com/portfolio-item-1"
        />
      </div>

      <div>
        <PortfolioItem
          title="Subordinate Clause"
          image="/placeholder.jpeg"
          description="A Goodreads clone with an AI-powered book recommendation system."
          techStack={["TypeScript", "Next.js", "Tailwind CSS"]}
          github="https://github.com/moexu13/sc"
          link="https://example.com/portfolio-item-1"
        />
      </div>
      <div>
        <PortfolioItem
          title="Hestian"
          image="/placeholder.jpeg"
          description="An application that stores a list of your possessions and related documentation in case of an insurance claim."
          techStack={["TypeScript", "Next.js", "Tailwind CSS", "MongoDB", "Prisma"]}
          github="https://github.com/moexu13/hestian"
          link="https://example.com/portfolio-item-1"
        />
      </div>
      <div>
        <PortfolioItem
          title="Claimjump"
          image="/placeholder.jpeg"
          description="An application to help distribute items among interested parties."
          techStack={["TypeScript", "Next.js", "Tailwind CSS"]}
          github="https://github.com/moexu13/claimjump"
          link="https://example.com/portfolio-item-1"
        />
      </div>
    </>
  );
};

export default Portfolio;
