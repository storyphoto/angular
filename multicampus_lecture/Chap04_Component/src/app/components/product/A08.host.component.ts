import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'a08OneComponent',
    template: `
        <div class="card-body">
            <div class="first">First Child Component</div>
            <div class="second">First Child Component</div>
        </div>
        <br>
        <br>
    `,
    // body처럼 요소 전체를 의미하는 :host (inline 요소로 취급됨)
    styles: [`
        :host {
            display: block;
            width: 300px;
            height: 200px;
            border: 1px solid orange;
        }

        :host(:hover) {
            border: 3px solid green;
        }

        :host(:active) {
            background-color: yellow;
        }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class A08OneComponent {

}

@Component({
    selector: 'a08Component',
    template: `
        <div class="card-body">
            <div class="card-heading">
                <h3 class="first">8. Host, Host deep, Host Context</h3>
            </div>

            <div class="card-body">
                <span class="second">This is A08 Component.</span>

                <br>
                <a08OneComponent></a08OneComponent>
            </div>
        </div>
    `,
    // body처럼 요소 전체를 의미하는 :host (inline 요소로 취급됨)
    styles: [`
        :host {
            display: block;
            width: 500px;
            height: 300px;
            border: 1px solid red;
        }

        :host(:hover) {
            border: 3px solid green;
        }

        :host(:active) {
            background-color: lightgray;
        }

        .first { color: green; }
        /deep/ .second { color: orange; }
    `],
    encapsulation: ViewEncapsulation.Emulated
})
export class A08Component {

}