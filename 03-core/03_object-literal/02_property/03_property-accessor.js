/* 03_property-accessor(프로퍼티 접근) */

let dog = {
    name : "뽀삐",
    eat:function(food){
        console.log(`${this.name}은 ${food}를 맛있게 먹어요`);
    }
}

console.log(dog.name);
dog.eat("고구마");

dog['eat']('고구마');

var obj={
    'dash-key' : 'dash-value',
    0:1
}

// 프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름일 경우 반드시 대괄호 표기법을 사용한다.
// console.log(obj.dash-key);
// console.log(obj.'dash-key');
// console.log(obj.[dash-key]);
console.log(obj['dash-key']);

// 프로퍼티가 숫자로 이루어진 문자열인 경우
// console.log(obj.0);
// console.log(obj.'0');
console.log(obj[0]);
console.log(obj['0']);

let cat = {
    name : "나비",
    sound:function(crying){
        // 2번째로 출력?
        console.log(`${this.name}은(는) ${crying}하고 울어요`);
    }
}
// 먼저 출력?
console.log(cat.name);
cat.sound("야옹");

