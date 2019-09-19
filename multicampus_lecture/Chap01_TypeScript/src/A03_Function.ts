// A03_Function.ts

namespace A03Function {

    let su = calcTxt5(undefined, 10000, 3);
    console.log(`calcTxt4 => ${su}`);
    console.log("");


    // 반환 타입을 정의하지 않으면 반환되는 결과에 의해 반환 타입이 결정된다.
    // 함수명에 마우스 커서를 올려보면 코드 힌트로 알수 있음.
    function calcTxt1(state: string, amount: number, person: number) {
        if(state === 'NY'){
            return amount * 0.06 - person * 500;
        }else  if(state === 'NJ'){
            return amount * 0.03 - person * 300;
        }
    }

    let value: number | undefined = calcTxt1("NS", 10000, 3);
    console.log(`calcTxt1 => ${value}`);


    // 반환 타입을 정의
    // 반드시 반환 타입과 맞는 값이 반환되어야 함
    function calcTxt2(state: string, amount: number, person: number): number {
        if(state === 'NY'){
            return amount * 0.06 - person * 500;
        }else  if(state === 'NJ'){
            return amount * 0.03 - person * 300;
        }

        return -1;
    }

    let result: number = calcTxt2("NS", 10000, 3);
    console.log(`calcTxt2 => ${result}`);

    // 생략 가능한 매개변수는 ?를 붙이고 매개변수 맨 뒤에 위치시킨다
    function calcTxt3(amount: number, person: number, state?: string ): number {
        // 매개변수가 넘어오지 않는 경우의 처리 로직을 필요에 따라 작성
        let area = state || 'NY';

        if(area === 'NY'){
            return amount * 0.06 - person * 500;
        }else  if(state === 'NJ'){
            return amount * 0.03 - person * 300;
        }

        return -1;
    }

    result = calcTxt3(10000, 3);
    console.log(`calcTxt3 => ${result}`);

    result = calcTxt3(10000, 3, 'NJ');
    console.log(`calcTxt3 => ${result}`);



    // 기본 값을 가진 매개변수는 매개변수명 = value형태로 
    // 기본 값이 없는 매개변수 뒤에 위치시킨다
    function calcTxt4(amount: number, person: number, state: string = 'NY' ): number {

        if(state === 'NY'){
            return amount * 0.06 - person * 500;
        }else  if(state === 'NJ'){
            return amount * 0.03 - person * 300;
        }

        return -1;
    }

    result = calcTxt4(10000, 3);
    console.log(`calcTxt4 => ${result}`);

    result = calcTxt4(10000, 3, 'NY');
    console.log(`calcTxt4 => ${result}`);


     // 사실 초기화된 매개변수의 위치는 상관없음. 호출할때의 문제
     function calcTxt5(state: string = 'NY', amount: number, person: number ): number {

        if(state === 'NY'){
            return amount * 0.06 - person * 500;
        }else  if(state === 'NJ'){
            return amount * 0.03 - person * 300;
        }

        return -1;
    }

    // 초기화된 매개변수에 값을 안 주려면 undefined 할당
    result = calcTxt5(undefined, 10000, 3);
    console.log(`calcTxt4 => ${result}`);

    result = calcTxt5('NJ', 10000, 3);
    console.log(`calcTxt4 => ${result}`);


    // 함수의 타입
    let calcTxt6 = function(state: string, amount: number, person: number):number {
        if(state === 'NY'){
            return amount * 0.06 - person * 500;
        }else  if(state === 'NJ'){
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
    console.log(calcTxt6);      // 문자가 출력됨(함수 리터럴)

    (function(){
        console.log("함수 구현");
    })()

    let fn = calcTxt6;
    result = fn('NY', 5000, 2)
    console.log(`calcTxt6(fn) => ${result}`);


    // 타입을 정의. 타입이 정의되면 익명함수에 매개변수의 타입 선언은 필요 없음
    let calcTxt7: (state: string, amount: number, person: number)=>number = function(state, amount, person) {
        if(state === 'NY'){
            return amount * 0.06 - person * 500;
        }else  if(state === 'NJ'){
            return amount * 0.03 - person * 300;
        }
        return -1;
    }

    // 사용자 정의 custom type을 정의한다
    type calcType = (state: string, amount: number, person: number) => number;

    // 위에서 정의한 커스텀 타입을 사용해서 함수 타입을 정의
    let calcTxt8: calcType = function(state, amount, person) {
        if(state === 'NY'){
            return amount * 0.06 - person * 500;
        }else  if(state === 'NJ'){
            return amount * 0.03 - person * 300;
        }
        return -1;
    }
}