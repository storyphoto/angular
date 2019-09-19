// A06_Main.ts
import { MY_PI, num, getName, JumsuTwo } from "./A06_JumsuTwo";
import { JumsuThree } from "./A06_JumsuThree";

let two: JumsuTwo = new JumsuTwo("홍길동", 100, 90);
let three: JumsuThree = new JumsuThree("놀부", 100, 90, 80);

two.onTotal();
two.onAvg(2);
let twoResult = two.display();

three.onTotal();
three.onAvg(3);
let threeResult = three.display();

console.log(twoResult);
console.log(threeResult);

console.log(MY_PI);
console.log(num);
console.log(getName());

// 브라우저로 확인하면 에러 발생 (모듈을 지원하지 않음 - webpack이 필요)
// 도스창에서 node 명령으로 확인
