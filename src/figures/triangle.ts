import IFigure from '../interfaces/figure.interface';

export default class Triangle implements IFigure {
  type: string;
  sideA: number;
  sideB: number;
  sideC: number;
  
  constructor(sideA: number, sideB: number, sideC: number) {
    this.type = 'triangle';
    if (sideA < 0 || sideB < 0) {
      throw new Error('Argument out of range exception');
    }
    const  sides = [sideA, sideB, sideC];
    sides.sort((a, b) => b - a);
    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error("Incorrect arguments, longest side can't be shorter than sum of two other sides");
    }
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  /**
  * @returns Perimeter of the triangle
  *
  */
  public getPerimeter(): number {
    return this.sideA + this.sideB + this.sideC
  }
  /**
  * @returns Area of the triangle
  *
  */
  public getArea(): number {
    const p = this.getSemiPerimeter()
    return Math.sqrt(p*(p-this.sideA)*(p-this.sideB)*(p-this.sideC))
  }
  private getSemiPerimeter(): number{
    return this.getPerimeter()/2
  }
}
