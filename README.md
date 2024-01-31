# React test study

> Udemy 강의와 함께하는 React test 학습 저장소 입니다.

### 개념에 대한 정리와 내가 이해한 부분('\*' 로 표시)을 구분지어 작성

## List

- [테스트 작성 Process](#테스트-작성-process)
- [React Testing Library](#react-testing-library)
- [Matchers](#matchers)
- [Mocking](#mocking)

### 테스트 작성 Process

    어떤 기능을 테스트하기 전에 주석으로 순서대로 하나씩 테스트 해야 할 것을 작성해놓고 시작해보자

> 전체적인 과정

1. 테스트할 컴포넌트 하나 선택
2. 해당 컴포넌트의 테스트 파일 생성(컴포넌트와 같은 이름에 .test ex) App.test.js)
3. 컴포넌트에서 중요한 부분 판단( ex) 무엇이 렌더링 되어있는가, 어떤 기능이 있는가)
4. 각각의 기능 테스트를 위한 코드 작성
5. 테스트 실행

> 특정 테스트에서의 과정

1. test할 컴포넌트 렌더링하기 (render)
2. 컴포넌트를 조작하거나 element 찾기(getByRole)
3. 컴포넌트가 우리가 기대한대로 작동하는지 확인(expect)

### React Testing Library

    dom을 테스트하기 위해 다루는데 도움을 준다.

> render

가짜 브라우저 환경에서 dom을 띄움

> Query System: screen.getByRole - element찾기

    *ARIA Role : screen readers

- heading -> h1, h2, h3, h4, h5, h6
- list -> ul, li
- button -> button
- link -> a
- textbox -> input,type="text

---

단순히 element를 가지고 오는것은 순서상의 문제나 등등이 있을 수 있어서 특정하게 가져오는 것이 좋다

- input과 label을 연결하고(htmlFor, id) label의 text 값으로 input을 가져온다.
- getByLabelText(/enter email/i) === (선호)getByRole('textbox', {name: /enter email/i});

screen.logTestingPlaygroundURL()

- element를 찾는 query를 쉽게 찾게 해준다.(알려준다.)

role이 겹칠 때 맞는 query를 찾는 것에 집착하지 마라 -> 고유한 값 만들자

1. data-testid : dom에 data-testid 값 부여, test에서 within으로 불러오기(ex)within(screen.getByTestId('users')).getAllByRole('row')
   (test를 위해 코드를 조작해야하기 때문에 비추천)
2. container.querySelector()

> User Event : 이벤트 발생 시킴

- user.click(element) : 요소를 클릭해라.
- user.keyboard('asdf') : 'asdf' 라고 타이핑해라.
- user.keyboard('{Enter}') : '엔터' 키 타이핑해라.

### Matchers

> From Jest

- expect(['a','b']).toHaveLength(2) : 배열의 길이가 맞는지
- expect(5).toEqual(5) : 같은 값인지
- expect(['a','b','c']).toContain('b') : 포함하고 있는지
- expect(fn).toThrow() : 함수가 에러를 발생시키는지
- expect(mock).toHaveBeenCalled() : 모킹된 함수가 호출되었는지

  [Jest Matcher함수 확인하기](https://jestjs.io/docs/expect)

> From React Testing Library

- expect(element).toBeInTheDocument() : 페이지에 해당 요소가 존재하는지
- expect(element).toBeEnabled() : 요소가 disabled가 되어있지 않는지
- expect(element).toHaveClass() : 요소가 클래스이름을 가지고 있는지
- expect(element).toHaveTextContent() : 요소가 특정한 텍스트를 가지고 있는지
- expect(element).toHaveValue() : input이나 select, textarea가 값을 가지고 있는지

  [RTL Matcher함수 확인하기](https://github.com/testing-library/jest-dom#custom-matchers)

### Mocking(Not Real)

    실제로 호출되었을 때는 아무것도 하지 않는 가짜 함수 생성
    오로지 테스트를 위한 흉내내는 함수

- jest.fn()으로 생성
- mock 함수에 대한 matcher가 있음
- \*_실제로 우리는 테스트할 함수를 test내에서 똑같이 작동하게 만들고 그 함수로 테스트해도 된다. 하지만 번거로우니 jest.fn()으로 만들어주는 mock함수 사용하자._

> 존재하는 모든 컴포넌트들을 테스트해야 하나? 중요한 컴포넌트만 테스트해야 할까?정답은 없다.
