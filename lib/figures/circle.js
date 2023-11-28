export default class Circle {
    constructor(radius) {
        this.type = 'circle';
        if (radius < 0) {
            throw new Error('Argument out of range exception');
        }
        this.radius = radius;
    }
    getDiameter() {
        return this.radius * 2;
    }
    getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
}
//# sourceMappingURL=circle.js.map