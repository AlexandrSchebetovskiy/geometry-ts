"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = /** @class */ (function () {
    function Rectangle(sideA, sideB) {
        this.type = 'rectangle';
        if (sideA < 0 || sideB < 0) {
            throw new Error('Argument out of range exception');
        }
        this.sideA = sideA;
        this.sideB = sideB;
    }
    Rectangle.prototype.getPerimeter = function () {
        return (this.sideA + this.sideB) * 2;
    };
    Rectangle.prototype.getArea = function () {
        return this.sideA * this.sideB;
    };
    return Rectangle;
}());
exports.default = Rectangle;
//# sourceMappingURL=rectangle.js.map