import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows two inputs and a button", () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  // 컴포넌트 렌더링하자

  // 방식 1(NOT THE BEST IMPLEMENT)
  // const argList = [];
  // const callback = (...args) => {
  //   argList.push(args);
  // };
  // 방식 2(mocking)
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  // 두개의 input을 찾자(가지고 오자)
  // const [nameInput, emailInput] = screen.getAllByRole("textbox");
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // name을 입력하는 이벤트
  await user.click(nameInput);
  await user.keyboard("jane");

  // email을 입력하는 이벤트
  await user.click(emailInput);
  await user.keyboard("jane@naver.com");

  // 버튼 찾자
  const button = screen.getByRole("button");

  // 버튼 클릭하는 이벤트
  await user.click(button);

  // onUserAdd 함수가 name과 email과 함께 호출되는지 확인하자
  // expect(argList).toHaveLength(1);
  // expect(argList[0][0]).toEqual({ name: "jane", email: "jane@naver.com" });
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@naver.com" });
});
