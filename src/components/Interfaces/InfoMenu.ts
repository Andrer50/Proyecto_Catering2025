import { DetailExtra } from "./DetailExtra";
import { DetailPersonal } from "./DetailPersonal";
import { TipoServicio } from "./TipoServicio";

export interface InfoMenu {
  idInfoMenu: number;
  tipoServicio: TipoServicio;
  title: string;
  description: string;
  price: number;
  detailPersonal: DetailPersonal;
  detailExtra: DetailExtra;
  imageURL: string;
}
