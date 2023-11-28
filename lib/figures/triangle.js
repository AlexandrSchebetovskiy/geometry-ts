"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangle = /** @class */ (function () {
    function Triangle(sideA, sideB, sideC) {
        this.type = 'triangle';
        if (sideA < 0 || sideB < 0) {
            throw new Error('Argument out of range exception');
        }
        var sides = [sideA, sideB, sideC];
        sides.sort(function (a, b) { return b - a; });
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
    Triangle.prototype.getPerimeter = function () {
        return this.sideA + this.sideB + this.sideC;
    };
    /**
    * @returns Area of the triangle
    *
    */
    Triangle.prototype.getArea = function () {
        var p = this.getSemiPerimeter();
        return Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
    };
    Triangle.prototype.getSemiPerimeter = function () {
        return this.getPerimeter() / 2;
    };
    return Triangle;
}());
exports.default = Triangle;
//# sourceMappingURL=triangle.js.map