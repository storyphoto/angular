"use strict";
// A02_Type.ts
var A02Type;
(function (A02Type) {
    var fName = "Hong";
    var lName = "GilDong";
    // fName = 20;
    // fName = true;
    console.log("fName: " + fName + ", typeof " + typeof fName);
    var age = 20;
    var check = true;
    age = 10.25;
    // check = 1;       // javascript에서는 가능
    console.log("age: " + age + ", typeof " + typeof age);
    console.log("age: " + check + ", typeof " + typeof check);
    console.log("");
    // any => javascript과의 호환 문제로 만들어진 타입
    // any => 모든 타입을 다 지원한다. 즉 자바스크립트와 마찬가지로 어떤 값이든 대입 가능
    var anyType = '문자열 데이터';
    console.log("anyType: " + anyType + ", typeof " + typeof anyType);
    anyType = 10;
    console.log("anyType: " + anyType + ", typeof " + typeof anyType);
    // 다음과 같은 경우도 다 any 타입으로 정의됨
    var anyType1; // 변수을 정의하고 타입, 초기화를 안함
    var anyType2 = undefined; // 변수을 정의하고 타입없이 undefined 대입
    var anyType3 = null; // 변수을 정의하고 타입없이 undefined 대입
    anyType3 = 10;
    anyType3 = "문자열";
    // undefined, null 타입으로 타입을 정의하지 않는다
    // 정의한 타입으로만 초기화가 가능하다.
    var nullType;
    var unType;
    // nullType = 10;
    // nullType = undefined;
    nullType = null;
    // unType = 10;
    // unType = null;
    unType = undefined;
    // 이 목적으로는 사용 
    var str = null;
    str = "NolBu";
    console.log("");
    // 리퍼런스(참조형)
    var today = new Date();
    console.log("today: " + today + ", typeof " + typeof today + ", constructor: " + today.constructor);
    var time = today.toLocaleString();
    console.log(time);
    // 제너릭을 이용해 배열 안쪽의 요소의 타입을 정의
    var numAry = [10, 11, 100];
    console.log("numAry: " + numAry + ", typeof " + typeof numAry + ", constructor: " + numAry.constructor);
    // FOR
    var strAry = ['NolBu', 'HungBu', 'Hong'];
    for (var i = 0; i < strAry.length; i++) {
        console.log(i + " => " + strAry[i]);
    }
    console.log("");
    // console.log(`i의 값 => ${i}`);   // 위 for문이 var i = 0 형태가 되어야 함
    // ForEach
    strAry.forEach(function (item, i) {
        console.log(i + " => " + item);
    });
    console.log("");
    // For in       // ES5
    for (var i in strAry) { // i는 index
        console.log(i + " => " + strAry[i]);
    }
    console.log("");
    // For of       // ES6(ES2015). Angular에서도 view를 반복할 목적의 지시자로 사용
    for (var _i = 0, strAry_1 = strAry; _i < strAry_1.length; _i++) { // i는 value. index는 존재하지 않는다
        var i = strAry_1[_i];
        console.log("" + i);
    }
})(A02Type || (A02Type = {}));
//# sourceMappingURL=A02_Type.js.map