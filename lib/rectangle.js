export default class Rectangle {
    constructor(sideA, sideB) {
        this.type = 'rectangle';
        if (sideA < 0 || sideB < 0) {
            throw new Error('Argument out of range exception');
        }
        this.sideA = sideA;
        this.sideB = sideB;
    }
    getPerimeter() {
        return (this.sideA + this.sideB) * 2;
    }
    getArea() {
        return this.sideA * this.sideB;
    }
}
//# sourceMappingURL=rectangle.js.map