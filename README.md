# CLI

- npm i -g typescript
- tsc : typescript compile
- tsc 'target file'
- tsc 'target file' -w : watch

# tsconfig

    $ tsc --init

- --allowJs : js -> ts 점진적 변경
- --checkJs : --allowJS와 같이
- --baseUrl : 기본경로 설정 (경로문제 발생시)
- --declaration / -d : .d.ts 생성
- `--esModuleInterop` : import \* as React from 'react'?
- --emitDecoratorMetadata : 데코레이터가 필요한 경우
- --experimentalDecorators : 데코레이터가 필요한 경우
- --help
- --init
- --jsx : tsx뿐만 아니라 jsx 또한 지원
- --lib : 컴파일에 포함할 라이브러리 목록 ["DOM", "ES5", "ES2015", "ES2020"]
- --outDir : tsc의 컴파일 결과물(js)를 다른 경로에 저장할 경우 설정
- --target / -t : default "ES3" (IE11까지 지원 "ES5", IE지원 안 할시 "ES6"이상)
- --types / --typeRoots : 개인 .d.ts 설정
- --strict / --strict~ : true (typescript 사용 의미)
- --noImplicit~ : true (typescript 사용 의미)
- --module / -m : IE 지원 "CommonJS", IE지원 안 할시 "ES6"
- --watch / -w
- include : 컴파일할 파일 설정 ([lecture.ts])
- exclude : 컴파일하지 않을 파일 설정 (["*.js"])
- extends : 상속한 tsconfig 파일 설정

# Array / Tuple

    `array[] / Array<number>`
    let arr: (string | number | boolean)[] = [true, 2, '3']; //string, number, boolean만 배열에 들어올 수 있음
    let arr: [boolean, number, string] = [true, 3, "3"]; //각 자리 고정 타입설정
    let arr: [boolean, 3, string] = [true, 3, "3"]; //number자리 3으로 고정
    let arr = [true, 2, "3"] as const; //상수화 (값 고정, readonly), 객체의 값 변형 방지(obj.a = 'c';)

# Object

    const obj: { a: string; b: number } = { a: "b", b: 3 }; //a, b 값 필수
    const obj: { a: string; b?: number } = { a: "b"}; //a 값 필수, b 값 나중에

# Enum

    enum Color { Red, Green, Blue }
    let c: Color = Color.Green;

# Function

    function add(a: number, b: number): number | string { //리턴 number or string
      return a + b;
    }

    function clg(a: number, b: number): void {  //리턴없는 함수
      console.log(a, b);
    }

    function func(a: number, b: number): (c: string) => number {  //함수를 타입으로 리턴
      return (c: string) => {
        return 3;
      };
    }

    function add(a: number, b: number): (c: string) => (b: string) => boolean { //함수 안의 함수 리턴
      return (c: string) => {
        return (d: string) => {
          return false;
        };
      };
    }

    const obj2: { a: (b: number, c?: string) => string } = {  //오버로딩 흉내
      a(b: number, c?: string) {
        return "hello";
      }
    };
    obj2.a(); // 에러
    obj2.a(3);  // b만
    obj2.a(3, "hello"); // b, c

# nerver

배열을 잘 못 만든 경우

    const arr: [] = []; // 배열에 어떠한 요소도 들어가지 못한다
    arr2.push(3);

# any

typescript에서 any는 지양한다

1. javascript === anyscript

2. 남이 만들어둔 잘못된 d.ts 파일의 수정을 위해

   const hello: number;

   (hello `as unknown` as string).substring(1, 2);  
   or  
   (<string><unkown>hello).substring(1, 2);

3. 타입 정의할 때 너무 복잡해서 못 만들겠을 경우

# 3강

    const resp = {
      ROCK: "0",
      SCISSORS: "-142px",
      PAPER: "-284px"
    } as const; //상수화

    const resp = {
      readonly ROCK: "0",
      readonly SCISSORS: "-142px",
      readonly PAPER: "-284px"
    } as const; //객체

# Interface

객체에 주로 쓰임

    interface RSP {
      ROCK: "0";
      SCISSORS: "-142px";
      PAPER: "-284px";
    } //객체의 인터페이스화
    interface Example extends RSP {

    } //인터페이스 상속
    const rsp: Example = {
      ROCK: '0',
      SCISSORS: '-142px',
      PAPER: '-284px'
    }

    interface RSP {
      readonly ROCK: "0";
    }
    interface RSP {
      readonly SCISSORS: "-142px";
      readonly PAPER: "-284px";
    } //인터페이스 합치기

    typeof RSP // RSP의 키값
    RSP[typeof RSP] // RSP의 값

    interface Example {
      a: 3;
      b: 7;
      [key: string]: number;  //객체의 interface가 확실하지 않을때 여유를 두는 방법
    }

# type alias

인터페이스 보다 넓은 범위

    type RSP = {
      readonly ROCK: "0";
      readonly SCISSORS: "-142px";
      readonly PAPER: "-284px";
    } | string; // interface와 다른 부분

# function의 this

    btn.addEventListener("click", function(this: HTMLButtonElement, e: Event) { //JS와 다른점 첫번째 매개변수가 this가 됨
      //this 사용가능
    }

# !

타임스크립트에 확인을 주는 방법

# string

타임스트립트는 document.querySelector("#computer")의 string값이 같다는걸 모른다  
변수 하나로 처기하거나 as를 쓸것!

    if (document.querySelector("#computer")) {
    (document.querySelector("#computer") as HTMLDivElement).style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoords} 0`;
    }

# tsc ignore

When input files are specified on the command line, tsconfig.json files are ignored.

# public / protected / private

- public : 아무 데서나 접근 가능 (default) / 내 클래스 or 상속받은 자식 or instance에서 접근 가능
- protected : 중간 권한 / 내 클래스 or 상속받은(extends) 자식은 접근가능
- private : 접근 불가 / 내 클래스 안에서만(constructor 내부) 접근 가능

- instance : 설계도를 바탕으로 소프트웨어 세계에 구현된 구체적인 실체

# interface / class

- interface : class의 모양을 규정, 실제로 쓰이지 않음
- class : instance의 모양을 규정

* class는 new를 통해 찍어내기 위함
* extends가 아닌 `implements`로 class에서 interface를 상속?
* public일 경우에만 구현 가능 (protected, private는 부모에서 접근 불가)

# 제네릭 generic

    function add(a: string, b: string): string {
      return a + b;
    }
    function add(a: number, b: number): number {
      return a + b;
    }
    //add 중복

    function add(a: string | number, b: string | number): string | number {
      return a + b;
    }
    add(1, 'abc'); // 원하는 결과가 아님


    function add<T>(a: T, b: T): T {
      return a + b;
    }


    interface obj<T> {  //선언
      add: (a: T, b: T) => T;
    }
    const a: obj<number> = {  //number로 사용
      add: (a, b) => a + b,
    }
    const b: obj<string> = {  //string으로 사용
      add: (a, b) => a + b,
    }

# 제네릭 extends (addEventListener)

제네릭에 대한 제약사항
extends는 K값의 제한을 두기위해 사용

    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;

# 제네릭 기본값

    <K extends keyof DocumentEventMap = 'click'>

# Array.prototype.find (lib.d.ts)

경우를 나눠서 두가지로 선언

    // this가 있는경우
    find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
    // this가 없는경우
    find(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): T | undefined;

# forEach 구현: 제네릭 주목

    function forEach<T>(arr: T[], callback: (item: T) => void): void {
      for (let i: number = 0; i < arr.length; i++) {
        callback(arr[i]);
      }
    }

    forEach<number>([1, 2, 3], item => {});

# 배열 선언방법

1. T[]  
   (T extends S)[]
2. Array<T>  
   Array<(T extends S)>

# type guard

`is`

    function isHero(data: Card): data is Sub {
      if (data.hero) {
        return true;
      }
      return false;
    }
    function isSub(data: Card): data is Sub {
      if (data.cost) {
        return true;
      }
      return false;
    }

# 모듈 시스템

`commonjs`- node.js module system  
module.exports와 exports.a 같이 사용 불가

- module.js

      module.exports = {
        a: 'b',
        b: false,
      };

- run.js

      const hello = require("./module");

      console.log(hello);

  ***

- module.js

      exports.a = "b";
      exports.c = false;

* run.js

      const { a, b } = require("./module");

      console.log(a, b);

`es2015 module`  
export default function과 export 같이 사용 가능

- moudle.js

      export default function() {}

- run.js

      import { a, b } from "./module";

      console.log(a, b);

  ***

- moudle.js

      const a = "b";

      export { a };
      export const b = false;

- run.js

      import { a, b } from "./module";

      console.log(a, b);

  ***

같이 사용

- moudle.js

      const a = "b";

      export { a };
      export const b = false;

      export default function() {}

- run.js

      import hi, { a, b } from "./module";

      console.log(a, b);
      console.log(hi);

  ***

commonjs의 module.exports를 ts모듈에서 가져오기위해서는

      import * as hi from './module';

      (esModuleInterop 키면 * as 사용 가능, 허나 비추천)

# d.ts export / import

- export

      declare function a() {
      };
      export = a;

- import

      import * as A from "./common";
      or
      import A = require("./common");

# DefinitelyTyped

DefinitelyTyped에서 type을 지원하지 않는 패키지의 d.ts파일 찾아서 적용

\$ npm i jquery @types/jquery

# React d.ts

    export = React;
    export as namespace React;

    import * as React from 'react;
    React.Component   // namespace이기 때문에 .을 붙여 바로 접근 가능

# intersection

interface나 type alias 두개를 모두 만족하게 설정  
중복을 막고 재사용을 위해

    interface A {
      hello: true
    }
    interface B{
      bye: true
    }
    const c: A & B {  // A, B 둘 다 만족
      hello: true,
      bye: true
    }

    const c: A | B {  // A, B 둘 중 하나만 만족
      hello: true,
      or
      bye: true
    }

# git push 여러 아이디

$ git config --local user.name "emsbn"
$ git config --local user.email "emsbn1@gmail.com"

# TS 유틸리티

`인터페이스` 관련 추가 기능  
중복되는 코드와 행동을 막을 수 있음

- Partial
- Readonly
- Pick
- Omit
- Exclude
- Extract
- ReturnType
- Required
- OmitThisParameter
- ThisType

# 데코레이터

`클래스`나 `클래스의 property, method, parameter` 관련  
코드위 중복을 줄임  
stage 2
객체지향 프로그래밍에서 클래스의 중복을 제거하기 어려운데 데코레이터로 쉽게 제거 가능

기존 기능에 새로운 기능을 추가 또는 기존 기능 수정
