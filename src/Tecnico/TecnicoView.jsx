import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import useStore from "@/store/useStore";

export default function TecnicoView() {
  const { setCurrentProjectId } = useStore();
  return (
    <div className="flex flex-col gap-3">
      <Link
        to="/projectView"
        onClick={() => {
          setCurrentProjectId(3);
        }}
      >
        <Button className="w-4/12">Reparación</Button>
      </Link>
      <Link
        to="/projectView"
        onClick={() => {
          setCurrentProjectId(7);
        }}
      >
        <Button className="w-4/12">Pintado y embalado 1</Button>
      </Link>
      <Link
        to="/projectView"
        onClick={() => {
          setCurrentProjectId(4);
        }}
      >
        <Button className="w-4/12">Pintado y embalado 2</Button>
      </Link>
      <Link to="/tecnicoLibre">
        <Button className="w-4/12">Sin tareas</Button>
      </Link>
    </div>
  );
}
