"use strict";
// A01_Class.ts
var Jumsu = /** @class */ (function () {
    function Jumsu(name, kor, eng) {
        this._total = 0;
        this._name = name;
        this._kor = kor;
        this._eng = eng;
        this._avg = 0;
    }
    Jumsu.prototype.onTotal = function () {
        this._total = this._kor + this._eng;
        return this._total;
    };
    Jumsu.prototype.onAvg = function (num) {
        this._avg = this._total / num;
        return this._avg;
    };
    Jumsu.prototype.display = function () {
        this.onAvg(2);
        return this._name + "\uB2D8\uC758 \uCD1D\uC810\uC740 " + this._total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this._avg + "\uC785\uB2C8\uB2E4";
    };
    return Jumsu;
}());
var nolbu = new Jumsu("Nolbu", 60, 82);
nolbu.onTotal();
var view = nolbu.display();
console.log(view);
var result = document.getElementById("result");
result.innerHTML = view;
//# sourceMappingURL=A01_Class.js.map