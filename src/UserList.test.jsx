import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    { name: "jane", email: "jane@naver.com" },
    { name: "sam", email: "sam@naver.com" },
  ];
  render(<UserList users={users} />);

  return { users };
}

test("render one row per user", () => {
  // Render the component
  renderComponent();
  // const { container } = render(<UserList users={users} />);

  // Find all rows in the table
  // screen.logTestingPlaygroundURL();
  //   const rows = screen.getAllByRole("row");
  const rows = within(screen.getByTestId("users")).getAllByRole("row");
  // eslint-disable-next-line
  // const rows = container.querySelectorAll("tbody tr");

  //Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2); // title에 해당하는 부분까지 row기 때문에 3개가 된다.
});

test("render the email and name of each user", () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
