"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A07_AJumsu.ts
var AJumsu = /** @class */ (function () {
    function AJumsu(name, kor, eng) {
        this.iname = "JumsuTwo";
        this._total = 0;
        this._name = name;
        this._kor = kor;
        this._eng = eng;
        this._avg = 0;
    }
    AJumsu.prototype.getName = function () {
        return this._name;
    };
    Object.defineProperty(AJumsu.prototype, "kor", {
        get: function () {
            return this._kor;
        },
        set: function (kor) {
            this._kor = kor;
        },
        enumerable: true,
        configurable: true
    });
    AJumsu.prototype.onAvg = function (num) {
        this._avg = this._total / num;
        return this._avg;
    };
    AJumsu.prototype.display = function () {
        return this._name + "\uB2D8\uC758 \uCD1D\uC810\uC740 " + this._total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this._avg + "\uC785\uB2C8\uB2E4";
    };
    return AJumsu;
}());
exports.AJumsu = AJumsu;
//# sourceMappingURL=A07_AJumsu.js.map