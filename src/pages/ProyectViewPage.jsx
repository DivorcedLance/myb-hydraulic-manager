import { Combobox } from "../components/ComboBox"

export function ProyectViewPage() {

  const items = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "svelte", label: "Svelte" },
    { value: "angular", label: "Angular" },
  ]

  return (
    <>
      <Combobox items={items} />
      <div>ProyectViewPage</div>
    </>

  )
}