import { Component }          from '@angular/core';

@Component({
    selector: 'a01Component',
    templateUrl: './html/a01_view.html',
    styleUrls: ['./css/a01_style.css']
    // template: `
    //     <div class="card-body">
    //         <div class="card-heading">
    //             <h3>1. Template Sample</h3>
    //         </div>

    //         <div>
    //             Name: {{name}}<br>
    //             Obj ID: {{obj.id}}, Address: {{obj.address}}<br>
    //             Ary: {{ary[0]}}, {{ary[1]}}, {{ary[2]}}
    //         </div>
    //     </div>
    // `,
    // styles: [`
    //     h3 { color: lightgreen; }
    // `]
})
export class A01Component{
    public name: string = 'HongGilDong';
    
    public obj: {id: number, address: string} = {
        id: 1,
        address: 'Seoul',
    };

    public ary: string[] = ['One', 'Two', 'Three'];

    
}
