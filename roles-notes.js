[{"content":"import {render, screen} from \"@testing-library/react\";\n\nfunction RoleExample() {\n  return (\n    <div>\n      <a href=\"/\">Link</a>\n      <button>Button</button>\n      <footer>ContentInfo</footer>\n      <h1>Heading</h1>\n      <header>Banner</header>\n      <img alt=\"description\" /> img\n      <input type=\"checkbox\" /> checkbox\n      <input type=\"number\" /> Spinbutton\n      <input type=\"radio\" /> Radio\n      <input type=\"text\" /> Textbox\n      <li>Listitem</li>\n      <ul>ListGroup</ul>\n    </div>\n  )\n}\n\nrender(<RoleExample />)","type":"code","id":"iydr2"},{"content":"test('can find elements by role', () => {\n  render(<RoleExample />);\n\n  const roles = [\n    'link','button','contentinfo','heading','banner',\n    'img','checkbox','spinbutton','radio','textbox','list','list'\n  ]\n  for(let role of roles) {\n    const el = screen.getByRole(role);\n\n    expect(el).toBeInTheDocument();\n  }\n})","type":"code","id":"ddizo"},{"content":"function AccessibleName() {\n  return (\n    <div>\n      <button>Submit</button>\n      <button>Cancel</button>\n    </div>\n  )\n}","type":"code","id":"cjuod"}]