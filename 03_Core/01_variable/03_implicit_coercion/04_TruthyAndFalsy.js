// 자바 스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값(값이 존재하면 Truthy, 없다면 falsy)
// 또는 Falsy 값(거짓으로 평가되는 값)으로 구분한다.
// Trythy -> true, Falsy -> false로 암묵적 타입 변환 된다.

let test1;     // 현재 선언만 해놓아서 falsy인 상태
console.log(!test1);

let test = {
    a : "",
    b : 1,
    fun : 0
};

// test라는 객체의 프로퍼티에 b의 값이 존재해?
if(test?.b){
    console.log("true");
}else{
    console.log("false");
}

// test라는 객체의 프로퍼티 b에 값이 존재하는 경우
console.log(test.b && "a");
console.log("======================");
test.a ? console.log("true"): console.log("false");
console.log("======================");