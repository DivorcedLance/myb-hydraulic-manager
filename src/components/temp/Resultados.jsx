import { Counter } from "@/components/RepuestoCard2/Counter";

const pruebas = [
    { tipoPruebaId: "1", nombre: "Prueba de presión" },
    { tipoPruebaId: "2", nombre: "Prueba de fugas" },
    { tipoPruebaId: "3", nombre: "Prueba de caudal" },
    { tipoPruebaId: "4", nombre: "Prueba de temperatura" },
    { tipoPruebaId: "5", nombre: "Prueba de resistencia" }
];

const params = [
    { parametroId: "1", tipoPruebaId: "1", unidades: "bar", nombre: "Presión máxima", valorMax: "250", valorMin: "100" },
    { parametroId: "2", tipoPruebaId: "1", unidades: "bar", nombre: "Presión mínima", valorMax: "120", valorMin: "50" },
    { parametroId: "3", tipoPruebaId: "2", unidades: "L/min", nombre: "Tasa de fuga", valorMax: "5", valorMin: "0" },
    { parametroId: "4", tipoPruebaId: "2", unidades: "L/h", nombre: "Fugas acumuladas", valorMax: "20", valorMin: "1" },
    { parametroId: "5", tipoPruebaId: "3", unidades: "L/min", nombre: "Caudal máximo", valorMax: "80", valorMin: "30" },
    { parametroId: "6", tipoPruebaId: "3", unidades: "L/min", nombre: "Caudal mínimo", valorMax: "40", valorMin: "10" },
    { parametroId: "7", tipoPruebaId: "4", unidades: "°C", nombre: "Temperatura máxima", valorMax: "90", valorMin: "40" },
    { parametroId: "8", tipoPruebaId: "4", unidades: "°C", nombre: "Temperatura mínima", valorMax: "60", valorMin: "20" },
    { parametroId: "9", tipoPruebaId: "5", unidades: "N", nombre: "Resistencia máxima", valorMax: "5000", valorMin: "2000" },
    { parametroId: "10", tipoPruebaId: "5", unidades: "N", nombre: "Resistencia mínima", valorMax: "3000", valorMin: "1000" }
];

export function Resultados({ fail }) {
    return (
        <div className="grid grid-cols-2 gap-x-3 gap-y-4 mb-2" >
            {pruebas.map((item) => (
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
                                            Resultado
                                        </th>
                                        {!fail && (
                                            <>
                                                <th scope="col" className="px-2 py-3">
                                                    Valor Min.
                                                </th>
                                                <th scope="col" className="px-2 py-3">
                                                    Valor Max.
                                                </th>
                                            </>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    {params.filter((p) => p.tipoPruebaId === item.tipoPruebaId).map((p, index) => (
                                        <tr key={p.parametroId} className="bg-gray-100 text-black">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                {`${p.nombre}( ${p.unidades} )`}
                                            </th>
                                            <td className="px-2 py-4">
                                                <Counter
                                                    initValue={fail && p.valorMin}
                                                    className={`w-full ${fail && "bg-red-200"}`}
                                                />
                                            </td>
                                            {!fail && (
                                                <>
                                                    <td className="px-2 min-w-16 py-4">
                                                        <Counter
                                                            initValue={p.valorMin}
                                                            onChange={(e) => console.log(e.target.value)}
                                                            className="w-full"
                                                        />
                                                    </td>
                                                    <td className="px-2 py-4">
                                                        <Counter
                                                            initValue={p.valorMax}
                                                            onChange={(e) => console.log(e.target.value)}
                                                            className="w-full"
                                                        />
                                                    </td>
                                                </>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}