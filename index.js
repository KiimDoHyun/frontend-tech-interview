"use strict";

const checkVarLetConst = () => {
    console.log("------------< var >--------------");
    var var1 = true;

    if (true) {
        var var1 = 123;
    }

    console.log("var", var1);
    console.log("window", window);
    console.log("=====================================================");
};

const callByWhat = () => {
    console.log("------------< Call by Value / Reference >--------------");
    let value1 = 123;
    const func1 = (input) => {
        console.log("값에의한", value1 === input);
    };

    let value2 = [1, 2, 3];
    const func2 = (input) => {
        console.log("참조에 의한", value2 === input);
    };

    func1(value1);
    func2(value2);
    console.log("=====================================================");
};

const checkThis = () => {
    console.log("------------< this >--------------");
    console.log("일반/내부 함수", this); // window

    const func2 = () => {
        console.log("callback", this); // window
    };

    const func1 = (callback) => {
        callback();
    };

    func1(func2);

    // 객체 생성자 함수
    function Circle(radius) {
        console.log("생성자 함수 시작", this); // 생성자 함수가 생성할 인스턴스 (비어있음)
        this.radius = radius;
        this.getDiameter = function () {
            console.log("메소드", this); // 메서드를 호출한 객체 자체 (circle1 이 들어있음)
            return 2 * this.radius;
        };
        console.log("생성자 함수 종료", this); // 생성자 함수가 생성할 인스턴스 (생성된 결과값)
    }

    // 생성자 함수에 의해 생성된 '인스턴스'
    const circle1 = new Circle(3);
    circle1.getDiameter();
    console.log("=====================================================");
};

const makeError = () => {
    console.log("------------< Error >--------------");
    const func1 = () => {
        func2();
    };

    const func2 = () => {
        func3();
    };

    const func3 = () => {
        try {
            // 에러가 어디서 발생했는지, 에러 발생 지점 까지 스택정보도 보여준다.
            throw new Error("에러 발생");
        } catch (e) {
            console.log(e);
        }
    };

    func1();
    console.log("=====================================================");
};

const main = () => {
    checkVarLetConst();
    callByWhat();
    checkThis();
    makeError();
};

main();
