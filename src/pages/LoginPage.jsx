import { Combobox } from '@/components/ComboBox'
import { Button } from '@/components/ui/button'
import useStore from '@/store/useStore'
import { Link } from 'react-router-dom'

export function LoginPage() {

  const { setCurrentRole } = useStore()

  return (
    <div className="flex flex-col gap-3">
      <div className="text-2xl font-bold flex items-start">
        <Combobox
          items={['Empleado', 'Jefe', 'Ventas']}
          getValue={(r) => r}
          getLabel={(r) => r}
          getRealValue={(r) => r}
          onSelection={(r) => {
            setCurrentRole(r)
          }}
          itemName={'Rol'}
        />
      </div>
      <Link to="/projectList">
        <Button className="w-4/12">Seguimiento de Proyectos</Button>
      </Link>
      <Link to="/proyeccionRepuestos">
        <Button className="w-4/12">Proyección de Repuestos</Button>
      </Link>
      <Link to="/createProject">
        <Button className="w-4/12">Registro de Proyectos</Button>
      </Link>
      <Link to="/closeProject">
        <Button className="w-4/12">Cierre de Proyectos</Button>
      </Link>
    </div>
  )
}
