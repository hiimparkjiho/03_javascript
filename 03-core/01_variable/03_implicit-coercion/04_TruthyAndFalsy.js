// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.

let test1;
console.log(!!test1);

let test = {
    a : "",
    b : 1,
    fun: 0,
};

console.log(test.a);
console.log(!!test.fun);
if(!test.fun){
    console.log("true");
}else{
    console.log("false");
}

// test라는 객체의 프로퍼티에 b의 값이 존재해?
if(test?.b){
    console.log("true");
}else{
    console.log("false");
}

// test라는 객체의 프로펕티 b에 값이 존재하는 경우 
console.log(test.a && "a");
console.log("==========")
test.a ? console.log("true"): console.log("false");

console.log(test?.b);
