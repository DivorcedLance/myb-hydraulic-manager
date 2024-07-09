import { useEffect } from "react";

export function TecnicoLibrePage() {
  useEffect(() => {
    const root = document.getElementById("root");
    root.className = "flex h-screen";
    return () => {
      root.className = "";
    };
  }, []);
  return (
    <div className="my-auto mx-auto">
      <h1 className="font-bold text-4xl">NO TIENE TAREAS ASIGNADAS</h1>
    </div>
  );
}
