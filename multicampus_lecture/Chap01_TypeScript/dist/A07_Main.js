"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var A07_TwoJumsu_1 = require("./A07_TwoJumsu");
var A07_ThreeJumsu_1 = require("./A07_ThreeJumsu");
var hungBu = new A07_TwoJumsu_1.TwoJumsu("흥부", 90, 80);
var chun = new A07_ThreeJumsu_1.ThreeJumsu("춘향", 90, 100, 80);
var lee = new A07_ThreeJumsu_1.ThreeJumsu("몽룡", 90, 100, 90);
var student = [hungBu, chun, lee];
for (var _i = 0, student_1 = student; _i < student_1.length; _i++) {
    var item = student_1[_i];
    item.onTotal();
    if (item instanceof A07_TwoJumsu_1.TwoJumsu) {
        item.onAvg(2);
    }
    else {
        item.onAvg(3);
    }
    var result_1 = item.display();
    console.log(result_1);
}
//# sourceMappingURL=A07_Main.js.map