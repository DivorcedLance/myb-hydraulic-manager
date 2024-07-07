export function PictureCard({imageSrc, name, ...props}) {
  return (
    <div
      key={name}
      className={`h-full flex flex-col justify-center items-center ${props.className}`}
    >
      <img src={imageSrc} alt={name} className="h-full w-auto object-contain"/>
    </div>
  )
}
