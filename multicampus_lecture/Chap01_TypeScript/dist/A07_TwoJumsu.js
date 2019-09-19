"use strict";
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
// A07_TwoJumsu.ts
var TwoJumsu = /** @class */ (function (_super) {
    __extends(TwoJumsu, _super);
    function TwoJumsu(name, kor, eng) {
        return _super.call(this, name, kor, eng) || this;
    }
    TwoJumsu.prototype.onTotal = function () {
        // AJumsu의 getter kor를 참조
        this._total = this.kor + this._eng;
        return this._total;
    };
    TwoJumsu.prototype.onAvg = function (num) {
        this._avg = this._total / num;
        return this._avg;
    };
    TwoJumsu.prototype.display = function () {
        // AJumsu의 getName() 메서드를 참조
        return this.getName() + "\uB2D8\uC758 \uCD1D\uC810\uC740 " + this._total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this._avg + "\uC785\uB2C8\uB2E4";
    };
    return TwoJumsu;
}(A07_AJumsu_1.AJumsu));
exports.TwoJumsu = TwoJumsu;
//# sourceMappingURL=A07_TwoJumsu.js.map