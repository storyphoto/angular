"use strict";
var A05Class;
(function (A05Class) {
    var Jumsu = /** @class */ (function () {
        function Jumsu(name, kor, eng) {
            this._total = 0;
            this._name = name;
            this._kor = kor;
            this._eng = eng;
            this._avg = 0;
        }
        // getter method(자바). 타입스크립트는 이런 방식으로 안쓴다(써도 됨)
        Jumsu.prototype.getName = function () {
            return this._name;
        };
        Object.defineProperty(Jumsu.prototype, "kor", {
            // typescript 방식
            // 정의는 메서드 방식이지만 사용은 프로퍼티 방식으로 사용한다 즉 () 안쓴다
            get: function () {
                return this._kor;
            },
            // setter 메서드는 리턴 타입(void)를 붙이면 에러 발생
            set: function (kor) {
                this._kor = kor;
            },
            enumerable: true,
            configurable: true
        });
        Jumsu.prototype.onTotal = function () {
            this._total = this._kor + this._eng;
            return this._total;
        };
        Jumsu.prototype.onAvg = function (num) {
            this._avg = this._total / num;
            return this._avg;
        };
        Jumsu.prototype.display = function () {
            return this._name + "\uB2D8\uC758 \uCD1D\uC810\uC740 " + this._total + "\uC774\uACE0 \uD3C9\uADE0\uC740 " + this._avg + "\uC785\uB2C8\uB2E4";
        };
        return Jumsu;
    }());
    var nolbu = new Jumsu("Nolbu", 60, 82);
    nolbu.onTotal();
    nolbu.onAvg(2);
    var view = nolbu.display();
    console.log(view);
    var result = document.getElementById("result");
    result.innerHTML = view;
    // 국어점수 출력
    var name = nolbu.getName(); // method
    nolbu.kor = 100; // setter 메서드지만 호출은 프로퍼티 방식
    var kor = nolbu.kor; // getter 메서드지만 호출은 프로퍼티 방식
    var korDiv = document.getElementById("kor");
    korDiv.innerHTML = "\uC774\uB984\uC740 " + name + "\uC774\uACE0 \uAD6D\uC5B4 \uC810\uC218\uB294 " + kor + "\uC785\uB2C8\uB2E4.";
})(A05Class || (A05Class = {}));
//# sourceMappingURL=A05_Class.js.map