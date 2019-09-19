"use strict";
// A06_JumsuTwo
Object.defineProperty(exports, "__esModule", { value: true });
var name = "홍길동";
exports.MY_PI = Math.PI;
exports.num = 10;
function getName() {
    return name;
}
exports.getName = getName;
// export가 달리면 module이 된다
var JumsuTwo = /** @class */ (function () {
    function JumsuTwo(name, kor, eng) {
        this._total = 0;
        this._name = name;
        this._kor = kor;
        this._eng = eng;
        this._avg = 0;
    }
    JumsuTwo.prototype.getName = function () {
        return this._name;
    };
    Object.defineProperty(JumsuTwo.prototype, "kor", {
        get: function () {
            return this._kor;
        },
        set: function (kor) {
            this._kor = kor;
        },
        enumerable: true,
        configurable: true
    });
    JumsuTwo.prototype.onTotal = function () {
        this._total = this._kor + this._eng;
        return this._total;
    };
    JumsuTwo.prototype.onAvg = function (num) {
        this._avg = this._total / num;
        return this._avg;
    };
    JumsuTwo.prototype.display = function () {
        return this._name + "\uB2D8\uC758 \uCD1D\uC810\uC740 " + this._total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this._avg + "\uC785\uB2C8\uB2E4";
    };
    return JumsuTwo;
}());
exports.JumsuTwo = JumsuTwo;
//# sourceMappingURL=A06_JumsuTwo.js.map