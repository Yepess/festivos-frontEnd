import { Tipo } from "./tipo";

export interface Festivo {
  id: number;
  nombre: string;
  fecha: Date | null; 
  dia: number;
  mes: number;
  diasPascua: number;
  idTipo: number;
}
