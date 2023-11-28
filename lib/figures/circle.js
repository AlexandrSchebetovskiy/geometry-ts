"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.type = 'circle';
        if (radius < 0) {
            throw new Error('Argument out of range exception');
        }
        this.radius = radius;
    }
    Circle.prototype.getDiameter = function () {
        return this.radius * 2;
    };
    Circle.prototype.getArea = function () {
        return Math.pow(this.radius, 2) * Math.PI;
    };
    return Circle;
}());
exports.default = Circle;
//# sourceMappingURL=circle.js.map