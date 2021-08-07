class Stack {
    constructor(){
        this.storage = {};
        this.top = 0; //스택의 가장 상단을 가리키는 포인터 변수를 초기화
    }

    size() {
        return this.top
    }

    //스택에 데이터를 추가 할 수 있어야 합니다.
    push(element) {
        this.storage[this.top] = element
        this.top += 1;
    }

    //가장 나중에 추가된 데이터가 가장 먼저 추출되어야 합니다.
    pop() {
        if(this.top === 0) {
            return;
        }

        const result = this.storage[this.top - 1];
        delete this.storage[this.top - 1];
        this.top -= 1;

        return result
    }
}