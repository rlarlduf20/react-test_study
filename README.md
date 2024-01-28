# React test study

> Udemy 강의와 함께하는 React test 학습 저장소 입니다.

## List

- [테스트 작성 Process](#테스트-작성-process)
- [getByRole](#getbyrole)
- [expect](#expect)

### 테스트 작성 Process

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

### getByRole

- input -> textbox
- button -> button

### expect

- expect(a).toHaveLength(3) -> a의 크기가 3인가
- expect(a).toBeInTheDocument -> a가 DOM 상에 있는가
