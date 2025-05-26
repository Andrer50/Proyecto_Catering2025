export interface Categoria {
  idCategoria: number;
  nombre: string;
  descripcion: string;
  activo: boolean;
}

export interface Item {
  idItem: number;
  nombre: string;
  categoria: Categoria;
}
