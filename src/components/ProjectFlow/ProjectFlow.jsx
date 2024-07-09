import { Arrow } from "../Arrow";
import { FlowStage } from "./FlowStage";

export function ProjectFlow({status = 0}) {

  const stageLabels = [
    "Asignando Repuestos",
    "Asignando Reparacion",
    "Reparando",
    "Control de Calidad",
    "Subiendo informe de Reparación",
    "Asignando pintado y embalaje",
    "Pintando y embalando",
    "Subiendo informe de ventas",
    "Terminado"
  ]

  return (
    <div className="flex justify-evenly w-10/12 items-center">
      {stageLabels.map((label, index) => (
        <div key={label} className="flex">
          <FlowStage status={index < status ? 2 : index === status ? 1 : 0} label={label} labelPosition={index % 2 !== 0 ?"bottom" : "top"} />
          <>
            {index < stageLabels.length - 1 && <Arrow/>}
          </>
        </div>
      ))}
    </div>
  )
}

