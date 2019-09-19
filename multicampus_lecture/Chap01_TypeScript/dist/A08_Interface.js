"use strict";
// A08_Interface.ts
var A08Interface;
(function (A08Interface) {
    var objOne = {
        name: "홍길동",
        age: 20,
        info: {
            tel: '010-7894-5612',
            address: 'Seoul'
        },
        numAry: [10, 11, 100]
    };
    var objTwo = {
        name: "놀부",
        age: 30,
        info: {
            tel: '010-7894-5612',
            address: 'Seoul'
        },
        numAry: [10, 11, 100]
    };
    // map과 비슷한 오브젝트
    var objThree = {
        'javaScript': { name: "JavaScript", price: 50000 },
        'typeScript': { name: "TypeScript", price: 35000 },
        'angular': { name: "Angular", price: 25000 },
    };
    for (var i in objThree) {
        // console.log(i);
        var item = objThree[i];
        console.log(item.name + " / " + item.price);
    }
})(A08Interface || (A08Interface = {}));
//# sourceMappingURL=A08_Interface.js.map