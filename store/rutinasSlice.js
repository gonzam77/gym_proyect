import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rutinas: [],
};

const rutinasSlice = createSlice({
  name: 'rutinas',
  initialState,
  reducers: {
    setRutinas: (state, action) => {
      state.rutinas = action.payload;
    },
    agregarRutina: (state, action) => {
      state.rutinas.push(action.payload);
    },
    eliminarRutina: (state, action) => {
      state.rutinas = state.rutinas.filter(r => r.id !== action.payload);
    },
    agregarEjercicio: (state, action) => {
      const { idRutina, nuevoEjercicio } = action.payload;
      const rutina = state.rutinas.find(r => r.id === idRutina);
      if (rutina) {
        rutina.ejercicios.push(nuevoEjercicio);
      }
    },
    modificarEjercicio: (state, action) => {
      const { idRutina, idEjercicio, cambios } = action.payload;
      const rutina = state.rutinas.find(r => r.id === idRutina);
      if (rutina) {
        const ejercicio = rutina.ejercicios.find(e => e.id === idEjercicio);
        if (ejercicio) {
          Object.assign(ejercicio, cambios);
        }
      }
    },
    eliminarEjercicio: (state, action) => {
      const { idRutina, idEjercicio } = action.payload;
      const rutina = state.rutinas.find(r => r.id === idRutina);
      if (rutina) {
        rutina.ejercicios = rutina.ejercicios.filter(e => e.id !== idEjercicio);
      }
    }
  }
});

export const {
  setRutinas,
  agregarRutina,
  eliminarRutina,
  agregarEjercicio,
  modificarEjercicio,
  eliminarEjercicio
} = rutinasSlice.actions;

export default rutinasSlice.reducer;
