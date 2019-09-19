// A04_Arrow.ts

namespace A04Arrow {
    // 변수때 빼 먹고 진행
    // 타입 스크립트는 값도 타입을 가지고 있다(초기화때만 진행됨)
    let fName = "Hong";
    let age = 20;

    let today = new Date();

    // 일반 함수
    let showName = function() {
        console.log(`Name: ${fName} - Age: ${age}`);
    }

    // arrow 함수 (화살표 함수)
    // 위 함수에서 function을 삭제하고 매개변수 지정() 뒤에 =>를 붙인다
    let arrowName = () => {
        console.log(`Name: ${fName} - Age: ${age}`);
    }
    
    showName();
    arrowName();
    console.log("");


    // Arrow 함수에 내용이 return 한 줄만 있는 경우 return과 {}을 생략하고 한줄에 기술
    // 내용이 한줄 이상인 경우는 { } 안에 일반 함수와 동일하게 기술

    // 일반함수
    let getAge = function() {
        return age;
    }

    // arrow 함수
    let arrowAge = () => `${fName} / ${age}`;

    console.log(getAge());
    console.log(arrowAge());
    console.log("");

    // 위의 Arrow 함수의 값이 value가 아닌 명령의 경우는 실행만 된다
    let arrowAge1 = () => console.log(`${fName} / ${age}`);

    let arrowAge2 = () => {
        console.log(`${fName} / ${age}`);
    }

    arrowAge1();
    arrowAge2();


    // javascript만 가능
    // 매개변수가 1개인 경우는 () 생략 가능. 
    // let jsFn = num => num * 10;

    // 타입 스크립트는 타입이 있어서 불가능(에러). 타입을 ()안에 묶어서 적어야 함
    let tsFn = (num: number) => num * 10;
    console.log(tsFn(2));


    type calcType = (state: string, amount: number, person: number) => number;

    let calcTxt: calcType = (state: string, amount: number, person: number): number => {
        if(state === 'NY'){
            return amount * 0.06 - person * 500;
        }else  if(state === 'NJ'){
            return amount * 0.03 - person * 300;
        }

        return -1;
    }


    // this의 참조가 다르다
    class TodayClass {
        private today: Date = new Date();

        public getTime(): void {

            let _this = this;

            // javascript은 사용하는 함수가 정의된 영역을 this로 인식함
            // 여기서는 window
            window.setTimeout( function(){
                // console.log(this.today.toLocaleString());
                console.log( _this.today.toLocaleString() );
            }, 1000 )
        }
    }


    class NowClass {
        private today: Date = new Date();

        public getTime(): void {
            // arrow 함수는 항상 선언된 함수가 this
            window.setTimeout( () => {
                console.log( this.today.toLocaleString() );
            }, 2000 )
        }
    }


    let one: TodayClass = new TodayClass();
    let two: NowClass = new NowClass();

    console.log(one.getTime());
    console.log(two.getTime());

}