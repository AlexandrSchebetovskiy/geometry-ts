import IFigure from '../interfaces/figure.interface';
export default class Circle implements IFigure {
    type: string;
    radius: number;
    constructor(radius: number);
    getDiameter(): number;
    getArea(): number;
}
