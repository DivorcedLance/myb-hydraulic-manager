import { PictureCard } from './PictureCard'

export function ReplacementCard({
  name,
  description,
  imgSrc,
  currentAmount,
  totalAmount,
  ...props
}) {
  return (
    <div className={`w-full flex flex-row justify-between items-center gap-4 px-4 shadow-md ${props.className}`}>
      <div className='h-full w-full flex flex-row gap-2 py-4 items-center'>
        <PictureCard imageSrc={imgSrc} name={name} className="w-1/4"/>
        <div className='flex flex-col self-start items-start gap-1 w-3/4'>
          <h1 className='text-xl font-bold'>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className='flex flex-col justify-self-end gap-2 px-3'>
        <p className='text-4xl font-extralight'>{currentAmount}/{totalAmount}</p>
      </div>
    </div>
  )
}
