"use strict";
// A07_ThreeJumsu.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var A07_AJumsu_1 = require("./A07_AJumsu");
var ThreeJumsu = /** @class */ (function (_super) {
    __extends(ThreeJumsu, _super);
    function ThreeJumsu(name, kor, eng, math) {
        var _this = _super.call(this, name, kor, eng) || this;
        _this._math = math;
        return _this;
    }
    // override
    ThreeJumsu.prototype.onTotal = function () {
        this._total = this.kor + this._eng + this._math;
        return this._total;
    };
    return ThreeJumsu;
}(A07_AJumsu_1.AJumsu));
exports.ThreeJumsu = ThreeJumsu;
//# sourceMappingURL=A07_ThreeJumsu.js.map