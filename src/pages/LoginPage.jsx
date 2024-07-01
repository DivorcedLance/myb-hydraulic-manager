import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function LoginPage() {
  return (
    <div className="flex flex-col gap-3">
      <Link to="/projectList">
        <Button className="w-4/12">Proyectos</Button>
      </Link>
      <Link to="/projectView">
        <Button className="w-4/12">Proyecto</Button>
      </Link>
      <Link to="/crearProyecto">
        <Button className="w-4/12">Crear proyecto</Button>
      </Link>
      <Link to="/proyeccionRepuestos">
        <Button className="w-4/12">Proyeccion Repuestos</Button>
      </Link>
    </div>

  )
}