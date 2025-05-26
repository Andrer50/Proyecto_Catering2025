import { Categoria, Item } from "./Item";

export interface TipoServicio {
  idTipoServicio: number;
  nombre: string;
  config: ServicioConfigNullable;
}
type ServicioConfigNullable = ServicioConfig | null;
export type ServicioConfig = GourmetConfig | BuffetConfig | PlatoServidoConfig;

export interface GourmetConfig {
  tipo: "gourmet"; // campo discriminante
  idGourmetConfig: number;
  tiempoGourmet: TiempoGourmet[];
}

export interface BuffetConfig {
  tipo: "buffet"; // campo discriminante
  idBuffetConfig: number;
  estacionBuffet: EstacionBuffet[];
}

export interface PlatoServidoConfig {
  tipo: "platoServido"; // campo discriminante
  idPlatoServidoConfig: number;
  platosServidos: PlatosServidos[];
}

// ServicioConfig es la unión discriminada de las tres interfaces:

export interface TiempoGourmet {
  idTiempoGourmet: number;
  categoria: Categoria;
  item: Item;
}
export interface EstacionBuffet {
  idEstacionBuffet: number;
  categoria: Categoria;
  item: Item;
}
export interface PlatosServidos {
  idPlatosServidos: number;
  categoria: Categoria;
  item: Item;
}
