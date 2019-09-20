import { Component } from '@angular/core';
import { WikiService } from '../service/A05_wiki.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'a05Component',
    template: `
    <div class="card-body">
        <div class="card-heading">
            <h3>4. JSONP</h3>
        </div>
        <div class="card-body">
            <label>검색어
            <input type="text" class="form-control" [formControl]="search">
            </label>
            <button class="btn btn-primary" (click)="getWiki()">Search</button>
        </div>
        <div class="card-body" *ngFor="let item of wikiData">
            <a [href]="item.url" target="_blank"><b>{{item.title}}</b></a><br>
            {{item.desc}}
        </div>
    </div>
    `,
    providers: [ WikiService ]
})
export class A05Component  { 
    // https://en.wikipedia.org/w/api.php?search=JAVASCRIPT&action=opensearch&format=json&callback=JSONP_CALLBACK
    // module에 HttpClientJsonpModule 모듈이 로드되어 있어야 사용 가능
    
    public search: FormControl = new FormControl('wiki', [Validators.required]);

    // View와 연결할 변수
    public wikiData: Array<{title: string, desc: string, url: string}>;

    constructor(private wiki: WikiService) {}

    public getWiki(): void {

        if(this.search.valid){
            // console.log("valid");
            // console.log(this.search.value);

            this.wiki.getData(this.search.value)
            .subscribe(
                (data: Array<{title: string, desc: string, url: string}> ) => {
                    console.log(data);
                    this.wikiData = data;
                    this.search.setValue('');
                },
                (error: string) => {
                    console.log(error);
                }
            )
        }

        
    }
    
}