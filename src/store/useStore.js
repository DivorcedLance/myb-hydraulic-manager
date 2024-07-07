// useStore.js
import { create } from 'zustand'

// Función para obtener el estado inicial del local storage
const getInitialState = () => {
  const state = localStorage.getItem('appState')
  return state ? JSON.parse(state) : { currentProjectId: null, currentRole: null }
}

const useStore = create((set) => ({
  ...getInitialState(), // Inicializa el estado con los valores del local storage
  // Función para actualizar el estado
  set: (state) => set((prev) => {
    const newState = { ...prev, ...state }
    localStorage.setItem('appState', JSON.stringify(newState))
    return newState
  }),
  // Función para limpiar el estado
  clear: () => set(getInitialState()),
  setCurrentProjectId: (currentProjectId) => set({ currentProjectId }),
  setCurrentRole: (currentRole) => set({ currentRole })
}))

export default useStore