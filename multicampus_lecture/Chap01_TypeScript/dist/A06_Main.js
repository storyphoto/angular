"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// A06_Main.ts
var A06_JumsuTwo_1 = require("./A06_JumsuTwo");
var A06_JumsuThree_1 = require("./A06_JumsuThree");
var two = new A06_JumsuTwo_1.JumsuTwo("홍길동", 100, 90);
var three = new A06_JumsuThree_1.JumsuThree("놀부", 100, 90, 80);
two.onTotal();
two.onAvg(2);
var twoResult = two.display();
three.onTotal();
three.onAvg(3);
var threeResult = three.display();
console.log(twoResult);
console.log(threeResult);
console.log(A06_JumsuTwo_1.MY_PI);
console.log(A06_JumsuTwo_1.num);
console.log(A06_JumsuTwo_1.getName());
// 브라우저로 확인하면 에러 발생 (모듈을 지원하지 않음 - webpack이 필요)
// 도스창에서 node 명령으로 확인
//# sourceMappingURL=A06_Main.js.map