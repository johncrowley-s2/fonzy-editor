import { sayHello } from "../index";

test("My Greeter", () => {
  expect(sayHello()).toBe("hello world");
});
