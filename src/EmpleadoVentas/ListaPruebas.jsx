import { Button } from "@/components/ui/button";
import { Counter } from "@/components/RepuestoCard2/Counter";

export function ListaPruebas({ fields, fr, onDelete }) {
    return (
        <div className="mx-3 overflow-y-auto" style={{ height: "40h" }}>
            {fields.length === 0 ? (
                <p>No hay pruebas añadidos</p>
            ) : (
                <div className="grid grid-cols-2 gap-x-3 gap-y-4 mb-2" >
                    {fields.map((item, index_prueba) => (
                        <div key={item.tipoPruebaId} className="relative">
                            <span className="text-2xl pb-6 text-left font-medium leading-none">
                                {item.nombre}
                            </span>
                            <div className="col-span-6 pt-2 flex">
                                <div className="overflow-x-auto w-full">
                                    <table className="w-full  text-sm text-left rtl:text-right text-gray-500">
                                        <thead className="text-xs text-gray-900">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    Parametro
                                                </th>
                                                <th scope="col" className="px-2 py-3">
                                                    Valor Min.
                                                </th>
                                                <th scope="col" className="px-2 py-3">
                                                    Valor Max.
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {item.especificaciones.map((especificacion, index) => (
                                                <tr key={especificacion.parametroId} className="bg-gray-100 text-black">
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                        {`${especificacion.nombre}( ${especificacion.unidades} )`}
                                                    </th>
                                                    <td className="px-2 min-w-16 py-4">
                                                        <Counter
                                                            defaultValue={"0"}
                                                            className="w-full"
                                                            {...fr.register(`pruebas.${index_prueba}.especificaciones.${index}.valorMin`, {
                                                                required: true,
                                                            })}
                                                        />
                                                    </td>
                                                    <td className="px-2 py-4">
                                                        <Counter
                                                            defaultValue={"0"}
                                                            className="w-full"
                                                            {...fr.register(`pruebas.${index_prueba}.especificaciones.${index}.valorMax`, {
                                                                required: true,
                                                            })}
                                                        />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <Button
                                className="absolute right-0 top-0 z-50"
                                onClick={() => {
                                    onDelete(item.tipoPruebaId);
                                }}
                                type="button"
                            >
                                &times;
                            </Button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
