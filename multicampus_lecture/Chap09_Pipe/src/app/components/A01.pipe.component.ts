import { Component }          from '@angular/core';

@Component({
    selector: 'a01Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>Pipe Date / Currency / JSON</h3>
            </div>

            <div class="card-body">
                <h4>Date Pipe</h4>
                    1. {{today}}<br>
                    2. {{today | date }}<br>
                    3. {{todayUTC | date : 'yyyy-MM-dd EEEE a hh:mm:ss' }}<br>
                    4. {{todayISO | date : 'yy-M-d EEE a h:m:s' }}<br>
                    5. {{todayISO | date : 'y-M-d EEE a h:m:s' }}<br>
                    6. {{todayISO | date : 'MM' }}<br>  <!-- 월만 표시 -->
                <br>

                <h4>Date Pipe 단축형</h4>
                    1. 날짜: {{today | date : 'fullDate'}} - {{today | date : 'longDate'}} - {{today | date : 'mediumDate'}} - {{today | date : 'shortDate'}}<br>
                    2. 시간: {{today | date : 'mediumTime'}} - {{today | date : 'shortTime'}}<br>
                    3. 전체: {{today | date : 'medium'}} - {{today | date : 'short'}}<br>
            </div>

            <div class="card-body">
                <h4>통화코드 ISO 4217 규격에 따름.</h4>

                1. {{money | currency}}<br>
                2. {{money | currency : 'KWD'}}<br>
                3. {{money | currency : 'CNY' : 'symbol'}}<br>
                4. {{money | currency : 'CNY' : 'symbol-narrow'}}<br>
                5. {{money | currency : 'CNY' : 'code'}}<br>
                6. {{money | currency : 'CNY' : 'code' : '10.5'}}<br>
                <!-- 자리수 정수자리.소수점자리 표시수 
                    1. => 정수 값이 있는 것 만큼
                    .1 => 통화코드 ISO 4217의 기본 값보다 작게는 꼭 범위를 주어야 한다
                        기본이 통화코드 ISO 4217의 값(적게 주면 기본값으로 표시됨)
                    .1-1 => 한 자리로 고정

                    이 소수점은 decimal, percent 에서도 동일(버전마다 다르므로 확인 요망)
                -->
                6. {{money | currency : 'CNY' : 'code' : '1.1'}}<br>
                6. {{money | currency : 'CNY' : 'code' : '1.1-1'}}<br>

                <!-- 최대 5자리까지 표시. 값이 4자리만 있으면 4자리까지만 표시됨 -->
                6. {{money | currency : 'CNY' : 'code' : '1.1-5'}}<br>
                <br>

                7. {{ money | number : '1.2'}}<br>  <!-- 기본이 소수점은 3자리까지 표시됨 -->
                8. {{ money | number : '1.2-2'}}<br>

                9. {{ 123.456789 | percent : '1.1'}}<br> <!-- 기본이 소수점 범위가 없음 -->

                <!-- 자리수 지정을 안하면 기본 텍스트 모두 표시됨 -->
                10. {{ '동해물과 백두산이 마르고 닳도록' | slice : 5}}<br>
                10. {{ '동해물과 백두산이 마르고 닳도록' | slice : 5 :10}}<br>
                10. {{ '동해물과 백두산이 마르고 닳도록' | slice : -3}}<br>
                10. {{ '동해물과 백두산이 마르고 닳도록' | slice : -7: -3}}<br>
            </div>

            <div class="card-body">
                <h4>JSON</h4>
                {{obj}}<br>
                {{obj | json}}
            </div>
        </div>
    `,
})
export class A01Component{
    public today: Date = new Date();       // 날짜 형식
    public todayUTC: number = Date.now();  // 숫자 형식 1970.1.1 00:00:00의 mile sec
    public todayISO: string = this.today.toISOString();    // 문자 형태

    public money: number = 12345.6789;

    public obj: any = {
        name: 'Hong',
        age: 20,
        ary: ['One','Two'],
        info: {
            id: 10,
            add: 'Seoul'
        }
    }
}
