
import { TwoJumsu } from "./A07_TwoJumsu";
import { ThreeJumsu } from "./A07_ThreeJumsu";
import { AJumsu } from "./A07_AJumsu";

let hungBu: AJumsu = new TwoJumsu("흥부", 90, 80);
let chun: AJumsu = new ThreeJumsu("춘향", 90, 100, 80);
let lee: AJumsu = new ThreeJumsu("몽룡", 90, 100, 90);

let student: Array<AJumsu> = [hungBu, chun, lee];

for( let item of student){
    item.onTotal();

    if(item instanceof TwoJumsu ){
        item.onAvg(2);
    }else{
        item.onAvg(3);
    }
    
    let result = item.display();
    console.log(result);
}

