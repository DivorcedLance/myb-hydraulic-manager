import { ReplacementCard } from "./ReplacementCard";

export function ReplacementList({ replacements }) {
  return (
    <div className="flex flex-col w-full items-center">
      {replacements.map((replacement) => (
        <ReplacementCard
          key={replacement.id}
          name={replacement.name}
          description={replacement.description}
          imgSrc={replacement.imgSrc}
          currentAmount={replacement.amountNeeded}
        />
      ))}
    </div>
  )
}
