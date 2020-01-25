# CLI

- npm i -g typescript
- tsc : typescript compile
- tsc 'target file'
- tsc 'target file' -w : watch

# tsconfig

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

# 3

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
    interface RSP {
      ROCK: "0";
      SCISSORS: "-142px";
      PAPER: "-284px";
    } //객체의 인터페이스화
