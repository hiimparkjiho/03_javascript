/* 
    Variable Enviroment
    컨택스트 실행시 최초의 스냅샷을 유지하고 있으며 컨텍스트를 생성할 때 가장 먼저 정보를 담고
    이를 복사하여 LexicalEnviroment를 만들어 이후에 LexicalEnviroment를 주로 활용한다.
    이로 인해 초기에는 LexicalEnviroment와 같은 상태를 유지한다.

    Lexical Enviroment
    변수, 함수, 선언 및 스코프를 관리하는데 사용되는 내부 데이터 구조

    1. Enviroment Record (환경 레코드): 변수 및 함수 선언을 저장하고 식별자와 매핑하는 방법을 제공하여
    현재 스코프 내에 식별자를 관리한다. 변수명과 해당 변수가 가리키는 값, 함수 선언 등을 기록한다.

    2. Reference to the outer enviroment(외부 환경에 대한 참조): 현재 Lexical Enviroment가 포함된 
    외부 Lexical Enviroment에 대한 참조를 포함하고 이를 통해 중첩된 스코프(스코프 체인)이 형성되어 변수나 함수를 찾을 때
    외부 Lexical Enviroment로 계속 해서 올라가게 된다.
*/

    function outerFuntion(){
        let outerVaralbe = "Outer";

        function innerFunction(){
            let innerVariable = "Inner";
            console.log("inner : " , outerVaralbe );    // 내부 함수에서 외부 함수의 변수 접근 가능
            console.log("inner : " , innerVariable );   // 내부 함수에서 내부 변수 접근 가능
        }
        
        console.log("outer: " + outerVaralbe);  // 외부 함수에서 외부 변수 접근 가능
        //console.log("outer: " + innerVariable); // 오류 발샹

        innerFunction();
    }

    outerFuntion();