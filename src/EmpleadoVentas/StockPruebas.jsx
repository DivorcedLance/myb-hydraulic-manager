import { Modal } from "@/components/Modal";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react";



export function StockPruebas({ pruebas, parametros, isOpen, onClose, onAdd }) {
    const [selected, setSelected] = useState([]);

    const handleSelect = (item, checked) => {
        if (checked) {
            setSelected([...selected, item]);
        } else {
            setSelected(selected.filter((item) => item !== item.tipoPruebaId));
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h1 className="text-2xl pb-6 text-left font-medium leading-none">
                Pruebas Registradas
            </h1>
            <div className="h-80 overflow-y-auto px-1">
                <Accordion type="single" collapsible className="w-full">
                    {pruebas.map((item) => (
                        <div key={item.tipoPruebaId} className="flex flex-row gap-2">
                            <Checkbox className="mt-5"
                                onCheckedChange={(checked) => handleSelect(item, checked)}
                            />
                            <AccordionItem value={item.tipoPruebaId} className="w-full">
                                <AccordionTrigger>{item.nombre}</AccordionTrigger>
                                <AccordionContent>
                                    <div className="relative overflow-x-auto">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                            <thead className="text-xs text-gray-900">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3">
                                                        Parametro
                                                    </th>
                                                    <th scope="col" className="px-6 py-3">
                                                        Unidad
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    parametros.filter((parametro) => parametro.tipoPruebaId === item.tipoPruebaId).map((parametro) => (
                                                        <tr key={parametro.parametroId} className="bg-gray-100 text-black">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                {parametro.nombre}
                                                            </th>
                                                            <td className="px-6 py-4">
                                                                {parametro.unidades}
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </div>))}
                </Accordion>
            </div>
            <Button className="w-full mt-2" onClick={() => {
                onAdd(selected);
                setSelected([]);
            }} type="button">
                Agregar Pruebas
            </Button>
        </Modal >
    );
}