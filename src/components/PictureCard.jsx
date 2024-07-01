export function PictureCard({imageSrc, name}) {
  return (
    <div
      key={name}
      className="flex flex-col items-center border-black border-2"
    >
      <img src={imageSrc} alt={name} />
    </div>
  )
}
