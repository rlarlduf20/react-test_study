import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  // Render the component
  const users = [
    { name: "jane", email: "jane@naver.com" },
    { name: "sam", email: "sam@naver.com" },
  ];
  render(<UserList users={users} />);

  // Find all rows in the table
  // screen.logTestingPlaygroundURL();
  //   const rows = screen.getAllByRole("row");
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  //Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2); // title에 해당하는 부분까지 row기 때문에 3개가 된다.
});

test("render the email and name of each user", () => {});
