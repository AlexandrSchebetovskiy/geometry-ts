export default class Triangle {
    constructor(sideA, sideB, sideC) {
        this.type = 'triangle';
        if (sideA < 0 || sideB < 0) {
            throw new Error('Argument out of range exception');
        }
        const sides = [sideA, sideB, sideC];
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
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    /**
    * @returns Area of the triangle
    *
    */
    getArea() {
        const p = this.getSemiPerimeter();
        return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    }
    getSemiPerimeter() {
        return this.getPerimeter() / 2;
    }
}
//# sourceMappingURL=triangle.js.map