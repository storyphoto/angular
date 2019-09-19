// A08_Interface.ts

namespace A08Interface {

    let objOne: {
        name: string, 
        age: number, 
        info: {tel: string, address: string},
        numAry: Array<number>
    } = {
        name: "홍길동",
        age: 20,
        info: {
            tel: '010-7894-5612',
            address: 'Seoul'
        },
        numAry: [10, 11, 100]
    }


    export interface objType {
        name: string; 
        age: number;
        info: {tel: string, address: string};
        numAry: Array<number>;
    }

    let objTwo: objType = {
        name: "놀부",
        age: 30,
        info: {
            tel: '010-7894-5612',
            address: 'Seoul'
        },
        numAry: [10, 11, 100]
    }


    // map과 비슷한 오브젝트
    let objThree: { [key: string]: {name:string, price: number} } = {
        'javaScript': {name: "JavaScript", price: 50000 },
        'typeScript': {name: "TypeScript", price: 35000 },
        'angular': {name: "Angular", price: 25000 },
    }

    for(let i in objThree) {
        // console.log(i);
        
        let item: {name:string, price: number} = objThree[i]
        console.log(`${item.name} / ${item.price}`);
    }


}