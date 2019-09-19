// A02_Type.ts
namespace A02Type {
    let fName: string = "Hong";
    let lName: string = "GilDong";

    // fName = 20;
    // fName = true;
    console.log(`fName: ${fName}, typeof ${typeof fName}`);

    let age: number = 20;
    let check: boolean = true;
    age = 10.25;
    // check = 1;       // javascript에서는 가능
    console.log(`age: ${age}, typeof ${typeof age}`);
    console.log(`age: ${check}, typeof ${typeof check}`);
    console.log("");

    // any => javascript과의 호환 문제로 만들어진 타입
    // any => 모든 타입을 다 지원한다. 즉 자바스크립트와 마찬가지로 어떤 값이든 대입 가능
    let anyType: any = '문자열 데이터';
    console.log(`anyType: ${anyType}, typeof ${typeof anyType}`);

    anyType = 10;
    console.log(`anyType: ${anyType}, typeof ${typeof anyType}`);


    // 다음과 같은 경우도 다 any 타입으로 정의됨
    let anyType1;               // 변수을 정의하고 타입, 초기화를 안함
    let anyType2 = undefined;   // 변수을 정의하고 타입없이 undefined 대입
    let anyType3 = null;        // 변수을 정의하고 타입없이 undefined 대입

    anyType3 = 10;
    anyType3 = "문자열";


    // undefined, null 타입으로 타입을 정의하지 않는다
    // 정의한 타입으로만 초기화가 가능하다.
    let nullType: null;
    let unType: undefined;

    // nullType = 10;
    // nullType = undefined;
    nullType = null;
    
    // unType = 10;
    // unType = null;
    unType = undefined;

    // 이 목적으로는 사용 
    let str: string | null = null;
    str = "NolBu";
    console.log("");


    // 리퍼런스(참조형)
    let today: Date = new Date();
    console.log(`today: ${today}, typeof ${typeof today}, constructor: ${today.constructor}`);

    let time: string = today.toLocaleString();
    console.log(time);

    
    // 제너릭을 이용해 배열 안쪽의 요소의 타입을 정의
    let numAry: Array<number> = [10, 11, 100];
    console.log(`numAry: ${numAry}, typeof ${typeof numAry}, constructor: ${numAry.constructor}`);


    // FOR
    let strAry: string[] = ['NolBu', 'HungBu', 'Hong'];

    for(let i = 0; i < strAry.length; i++){
        console.log(`${i} => ${strAry[i]}`);
    }
    console.log("");
    // console.log(`i의 값 => ${i}`);   // 위 for문이 var i = 0 형태가 되어야 함

    // ForEach
    strAry.forEach( function(item, i){
        console.log(`${i} => ${item}`);
    });
    console.log("");

    // For in       // ES5
    for(let i in strAry) {      // i는 index
        console.log(`${i} => ${strAry[i]}`);
    }
    console.log("");

    // For of       // ES6(ES2015). Angular에서도 view를 반복할 목적의 지시자로 사용
    for(let i of strAry) {      // i는 value. index는 존재하지 않는다
        console.log(`${i}`);
    }

}