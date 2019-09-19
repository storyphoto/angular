namespace A05Class{
    class Jumsu {
        // 접근제한자는 private, protected, public 3개만 존재
        // default는 public이다
        private _name:string;
        private _kor:number;
        private _eng:number;
        private _total: number = 0;
        private _avg: number;
    
        public constructor(name: string, kor: number, eng: number){
            this._name = name;
            this._kor = kor;
            this._eng = eng;
            this._avg = 0;
        }

        // getter method(자바). 타입스크립트는 이런 방식으로 안쓴다(써도 됨)
        public getName(): string {
            return this._name;
        }

        // typescript 방식
        // 정의는 메서드 방식이지만 사용은 프로퍼티 방식으로 사용한다 즉 () 안쓴다
        public get kor(): number {
            return this._kor;
        }

        // setter 메서드는 리턴 타입(void)를 붙이면 에러 발생
        public set kor(kor: number) {
            this._kor = kor;
        }

    
        public onTotal(): number {
            this._total = this._kor + this._eng;
            return this._total;
        }
    
        public onAvg(num: number): number {
            this._avg = this._total / num;
            return this._avg;
        }
    
        public display(): string {
            return `${this._name}님의 총점은 ${this._total}이고 평균은 ${this._avg}입니다`;
        }
    
    }
    
    let nolbu: Jumsu = new Jumsu("Nolbu", 60, 82);
    nolbu.onTotal();
    nolbu.onAvg(2);
    let view = nolbu.display();
    console.log(view);
    
    let result: HTMLDivElement = document.getElementById("result") as HTMLDivElement;
    result.innerHTML = view;


    // 국어점수 출력
    let name: string = nolbu.getName();     // method

    nolbu.kor = 100;                        // setter 메서드지만 호출은 프로퍼티 방식
    let kor: number = nolbu.kor;            // getter 메서드지만 호출은 프로퍼티 방식

    let korDiv: HTMLDivElement = document.getElementById("kor") as HTMLDivElement;
    korDiv.innerHTML = `이름은 ${name}이고 국어 점수는 ${kor}입니다.`;
    
}