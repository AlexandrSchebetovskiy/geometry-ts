import IFigure from './interfaces/figure.interface';
export default class Rectangle implements IFigure {
    type: string;
    sideA: number;
    sideB: number;
    constructor(sideA: number, sideB: number);
    getPerimeter(): number;
    getArea(): number;
}
