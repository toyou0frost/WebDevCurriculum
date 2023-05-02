# Quest 04. OOP의 기본

## Introduction
* 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍에 대해 알아볼 예정입니다.

## Topics
* 객체지향 프로그래밍
  * 프로토타입 기반 객체지향 프로그래밍
  * 자바스크립트 클래스
    * 생성자
    * 멤버 함수
    * 멤버 변수
  * 정보의 은폐
  * 다형성
* 코드의 재사용

## Resources
* [MDN - Classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
* [MDN - Inheritance and the prototype chain](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
* [MDN - Inheritance](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Inheritance)
* [Polymorphism](https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-3-polymorphism-fb564c9f1ce8)
* [Class Composition](https://alligator.io/js/class-composition/)
* [Inheritance vs Composition](https://woowacourse.github.io/javable/post/2020-05-18-inheritance-vs-composition/)

## Checklist
* 객체지향 프로그래밍은 무엇일까요?
  * `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?
  * 다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?
  * 상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?
  * OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요?

객체지향이란 객체를 중심으로 프로그램을 구성하는 프로그래밍 패러다임으로 코드의 순서보단 객체간의 상호작용을 중요시하며, 상속, 다형성, 캡슐화 등의 개념을 활용하여 코드의 재사용성과 유지보수성을 높이는 것이 목적이다.

#으로 시작하는 프라이빗 필드는 해당 클래스의 외부에서 직접적인 접근이 불가능한 프라이빗 멤버를 나타내기 위해 사용된다.
객체 내부의 데이터를 보호하면서 안정성과 유지보수성을 높일 수 있다.

다형성이란 여러 개체가 동일한 메세지를 수신할 때 각각의 객체가 다르게 반응하도록 하는 것을 의미한다.
쉽게 말해 같은 메서드 호출에 대해 객체에 따라 다르게 동작하는 것을 말한다.
당연하게 이것을 통해 코드의 유연성과 재사용성이 높아지고 다형성을 활용하여 유사한 객체를 그룹화하고 일반화할 수 있다.

상속이란 현실세계의 상속과 비슷하다.
부모 클래스의 특성을 자식클래스가 물려받아 사용하는 것이고 자식 클래스는 부모 클래스의 메소드와 필드를 그대로 사용하거나 수정할 수 있다.
이 또한 코드 중복을 줄이고 유지보수성을 높인다.

OOP의 합성이란 객체를 구성하는 다른 객체를 포함시키는 것을 의미하고 이를 통해 객체간의 관계를 더 유연하게 표현할 수 있다.
합성은 상속에 비해 클래스간의 결합도가 낮아져 유지보수성이 높아지고 필요한 기능만 포함시킬 수 있다.

* 자바스크립트의 클래스는 어떻게 정의할까요?
  * 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?
  * 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?

ES6부터 class문법이 도입되었다.
문법은 이러하다.
class MyClass {
  constructor(para1, para2){
    this.para1 = para1;
    this.para2 = para2;
  }

  MyMethod(para){
    console.log(`메소드 접근 ${para}`);
  }

  get info(){
    return `para1 : ${this.para1}, para2 : ${this.para2}`
  }
}

여기서 생성자 함수는 constructor 메소드로 정의할 수 있으며 프로토타입에 메소드를 추가할 때는 prototype 키워드를 사용한다.

프로토타입 기반의 객체지향 프로그래밍은 객체를 생성할 때 다른 객체를 프로토타입으로 사용하는 것이다.


## Quest
* 웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정입니다.
* 요구사항은 다음과 같습니다:
  * 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
  * 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
  * 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
  * 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
  * 여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
  * Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!

## Advanced
* 객체지향의 역사는 어떻게 될까요?
* Smalltalk, Java, Go, Kotlin 등의 언어들로 넘어오면서 객체지향 패러다임 측면에서 어떤 발전이 있었을까요?
