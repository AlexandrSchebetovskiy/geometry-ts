import IFigure from '../interfaces/figure.interface';
export default class Triangle implements IFigure {
    type: string;
    sideA: number;
    sideB: number;
    sideC: number;
    constructor(sideA: number, sideB: number, sideC: number);
    /**
    * @returns Perimeter of the triangle
    *
    */
    getPerimeter(): number;
    /**
    * @returns Area of the triangle
    *
    */
    getArea(): number;
    private getSemiPerimeter;
}
