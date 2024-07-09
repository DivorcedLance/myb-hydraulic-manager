// useStore.js
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Función para obtener el estado inicial del local storage
const getInitialState = () => {
  const state = localStorage.getItem("appState");
  return state
    ? JSON.parse(state)
    : { currentProjectId: null, currentRole: null };
};

const useStore = create((set) => ({
  ...getInitialState(), // Inicializa el estado con los valores del local storage
  // Función para actualizar el estado
  set: (state) =>
    set((prev) => {
      const newState = { ...prev, ...state };
      localStorage.setItem("appState", JSON.stringify(newState));
      return newState;
    }),
  // Función para limpiar el estado
  clear: () => set(getInitialState()),
  setCurrentProjectId: (currentProjectId) => set({ currentProjectId }),
  setCurrentRole: (currentRole) => set({ currentRole }),
}));

//available: disponible | asignados | esperando

export const useAssign = create()(
  persist(
    (set) => ({
      available: "disponibles",
      setAvaible: (available) => set({available}),
    }),
    { name: "assignState", storage: createJSONStorage(() => localStorage) }
  )
);

//rechazado: true | false
export const useRejected = create()(
  persist(
    (set) => ({
      rejected: false,
      setRejected: (rejected) => set({ rejected }),
    }),
    { name: "rejectedState", storage: createJSONStorage(() => localStorage) }
  )
);

export default useStore;
