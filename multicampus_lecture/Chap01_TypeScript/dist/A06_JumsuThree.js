"use strict";
// A06_JumsuThree.ts
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
var A06_JumsuTwo_1 = require("./A06_JumsuTwo");
var JumsuThree = /** @class */ (function (_super) {
    __extends(JumsuThree, _super);
    function JumsuThree(name, kor, eng, math) {
        var _this = _super.call(this, name, kor, eng) || this;
        _this._math = math;
        return _this;
    }
    // override
    JumsuThree.prototype.onTotal = function () {
        this._total = this.kor + this._eng + this._math;
        return this._total;
    };
    return JumsuThree;
}(A06_JumsuTwo_1.JumsuTwo));
exports.JumsuThree = JumsuThree;
//# sourceMappingURL=A06_JumsuThree.js.map