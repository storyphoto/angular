import { Component } from '@angular/core';

@Component({
    selector: 'a02Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3>2. 단방향 바인딩</h3>
            </div>
            
            <div class="card-body">
                <div>일반적인 연산: 1 + 2 = {{1 + 2}}</div>
                <div>좋아하는 과일의 개수: {{person.fruit.length}}</div>
                <div>과일의 개수 * 100 : {{person.fruit.length * 100}}</div>
                <div>Are you Hong? {{person.name === 'Hong'}}</div>
                <div>Are you Hong? {{person.name === 'NolBu' ? "놀부" : "Guest" }}</div>
                <div>과일 개수가 4개보다 많은가? {{ person.fruit.length > 4 }}</div>
            </div>
	    </div>
    `
})
export class A02Component{

    public person: {name: string, fruit: Array<string> } = {
        name: "NolBu",
        fruit: ["Apple", "Banana", "Lemon"]
    }
}
