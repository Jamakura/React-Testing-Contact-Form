// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import "mutationobserver-shim";
import ContactForm from "./components/ContactForm";
import {
  screen,
  render,
  getByLabelText,
  fireEvent,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";

test("Inputs first name", () => {
  render(<ContactForm />);
  const firstNameInput = screen.getByTestId(/firstName/i);
  const firstNameValue = "Shenandoah";
  fireEvent.change(firstNameInput, { target: { value: firstNameValue } });
  expect(firstNameInput).toHaveValue(firstNameValue);
});

test("Inputs last name", () => {
  render(<ContactForm />);
  const lastNameInput = screen.getByTestId(/lastName/i);
  const lastNameValue = "Veele";
  fireEvent.change(lastNameInput, { target: { value: lastNameValue } });
  expect(lastNameInput).toHaveValue(lastNameValue);
});

test("Inputs email", () => {
  render(<ContactForm />);
  const emailInput = screen.getByTestId(/email/i);
  const emailValue = "testing@test.com";
  fireEvent.change(emailInput, { target: { value: emailValue } });
  expect(emailInput).toHaveValue(emailValue);
});

test("Inputs message", () => {
  render(<ContactForm />);
  const messageInput = screen.getByTestId(/message/i);
  const messageValue = "I am a leaf in the wind, see how I soar--Hoban Washburn";
  fireEvent.change(messageInput, { target: { value: messageValue } });
  expect(messageInput).toHaveValue(messageValue);
});
