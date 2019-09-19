"use strict";
// A03_Function.ts
var A03Function;
(function (A03Function) {
    var su = calcTxt5(undefined, 10000, 3);
    console.log("calcTxt4 => " + su);
    console.log("");
    // 반환 타입을 정의하지 않으면 반환되는 결과에 의해 반환 타입이 결정된다.
    // 함수명에 마우스 커서를 올려보면 코드 힌트로 알수 있음.
    function calcTxt1(state, amount, person) {
        if (state === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (state === 'NJ') {
            return amount * 0.03 - person * 300;
        }
    }
    var value = calcTxt1("NS", 10000, 3);
    console.log("calcTxt1 => " + value);
    // 반환 타입을 정의
    // 반드시 반환 타입과 맞는 값이 반환되어야 함
    function calcTxt2(state, amount, person) {
        if (state === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (state === 'NJ') {
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
    var result = calcTxt2("NS", 10000, 3);
    console.log("calcTxt2 => " + result);
    // 생략 가능한 매개변수는 ?를 붙이고 매개변수 맨 뒤에 위치시킨다
    function calcTxt3(amount, person, state) {
        // 매개변수가 넘어오지 않는 경우의 처리 로직을 필요에 따라 작성
        var area = state || 'NY';
        if (area === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (state === 'NJ') {
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
    result = calcTxt3(10000, 3);
    console.log("calcTxt3 => " + result);
    result = calcTxt3(10000, 3, 'NJ');
    console.log("calcTxt3 => " + result);
    // 기본 값을 가진 매개변수는 매개변수명 = value형태로 
    // 기본 값이 없는 매개변수 뒤에 위치시킨다
    function calcTxt4(amount, person, state) {
        if (state === void 0) { state = 'NY'; }
        if (state === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (state === 'NJ') {
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
    result = calcTxt4(10000, 3);
    console.log("calcTxt4 => " + result);
    result = calcTxt4(10000, 3, 'NY');
    console.log("calcTxt4 => " + result);
    // 사실 초기화된 매개변수의 위치는 상관없음. 호출할때의 문제
    function calcTxt5(state, amount, person) {
        if (state === void 0) { state = 'NY'; }
        if (state === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (state === 'NJ') {
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
    // 초기화된 매개변수에 값을 안 주려면 undefined 할당
    result = calcTxt5(undefined, 10000, 3);
    console.log("calcTxt4 => " + result);
    result = calcTxt5('NJ', 10000, 3);
    console.log("calcTxt4 => " + result);
    // 함수의 타입
    var calcTxt6 = function (state, amount, person) {
        if (state === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (state === 'NJ') {
            return amount * 0.03 - person * 300;
        }
        return -1;
    };
    console.log(calcTxt6); // 문자가 출력됨(함수 리터럴)
    (function () {
        console.log("함수 구현");
    })();
    var fn = calcTxt6;
    result = fn('NY', 5000, 2);
    console.log("calcTxt6(fn) => " + result);
    // 타입을 정의. 타입이 정의되면 익명함수에 매개변수의 타입 선언은 필요 없음
    var calcTxt7 = function (state, amount, person) {
        if (state === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (state === 'NJ') {
            return amount * 0.03 - person * 300;
        }
        return -1;
    };
    // 위에서 정의한 커스텀 타입을 사용해서 함수 타입을 정의
    var calcTxt8 = function (state, amount, person) {
        if (state === 'NY') {
            return amount * 0.06 - person * 500;
        }
        else if (state === 'NJ') {
            return amount * 0.03 - person * 300;
        }
        return -1;
    };
})(A03Function || (A03Function = {}));
//# sourceMappingURL=A03_Function.js.map