import IFigure from '../interfaces/figure.interface';

export default class Rectangle implements IFigure {
  type: string;
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.type = 'rectangle';
    if (sideA < 0 || sideB < 0) {
      throw new Error('Argument out of range exception');
    }
    this.sideA = sideA;
    this.sideB = sideB;
  }

  public getPerimeter(): number {
    return (this.sideA + this.sideB) * 2;
  }

  public getArea(): number {
    return this.sideA * this.sideB;
  }
}
