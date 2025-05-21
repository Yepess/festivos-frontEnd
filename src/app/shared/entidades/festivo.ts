import { Tipo } from "./tipo";

export interface Festivo {
  id: number;
  nombre: string;
  dia: number;
  mes: number;
  diasPascua: number;
  idTipo: number;
  tipo?: Tipo;
  fecha: Date;
}
