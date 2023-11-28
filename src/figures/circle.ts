import IFigure from '../interfaces/figure.interface';

export default class Circle implements IFigure {
  type: string;
  radius: number;

  constructor(radius: number) {
    this.type = 'circle';
    if (radius < 0) {
      throw new Error('Argument out of range exception');
    }
    this.radius = radius;
  }
  public getDiameter(): number {
    return this.radius * 2;
  }
  public getArea(): number {
    return Math.pow(this.radius, 2) * Math.PI;
  }
}
