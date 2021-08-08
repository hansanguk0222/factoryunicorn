export interface IFigure {
  width: number;
  length: number;
}

export interface IClothes {
  name: string;
  figure: IFigure;
}

export interface IService {
  getSize: () => Promise<IClothes[]>;
}

export interface IStyledA {
  shape: string;
}

export interface IImg {
  shape: string;
}

export interface IStyledSpan {
  shape: string;
  selected?: boolean;
  bold?: boolean;
}

export interface ILeftHeaderMenu {
  isHoverd: boolean;
}

export interface IStyledButton {
  shape: string;
  background?: string;
  needMargin?: boolean;
}

export interface ICarousel {
  changeDirection: number;
}

export interface ICardItem {
  order: number;
}

export interface IContainer {
  order: number;
}
