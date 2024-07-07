import { Button } from "./ui/button";

export function DocumentCard({document}) {
  return (
    <div className={`w-full flex flex-row justify-between items-center gap-4 px-4 shadow-md`}>
      <div className='h-full w-full flex flex-row gap-2 py-4 items-center'>
        <div className='flex flex-col self-start items-start gap-1 w-3/4'>
          <h1 className='text-xl font-bold'>{document.name}</h1>
          <p>{document.description}</p>
        </div>
      </div>
      <Button variant="outline" onClick={() => window.open(document.url, '_blank')} className="flex flex-col justify-self-end gap-2 w-1/4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md"
      >
        Descargar
      </Button>
    </div>
  )
}
