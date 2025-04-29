export interface Festivo {
    id: number;
    nombre: string;
    dia: number;
    mes: number;
    diasPascua: number;
    idTipo: number;
    tipo?: Tipo;
  }
  
  export interface Tipo {
    id: number;
    nombre: string;
    festivos?: Festivo[];
  }