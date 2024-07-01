export function FileInput({ fileName="Archivo" }) {
  return (
    <div className="mb-4">
      <input
        type="file"
        className="hidden"
        id="file"
        name="file"
        accept="image/*"
      />
      <label
        htmlFor="file"
        className="block px-4 w-full bg-blue-500 text-white text-center py-2 rounded cursor-pointer"
      >
        {`Subir ${fileName}`}
      </label>
    </div>
  )
}