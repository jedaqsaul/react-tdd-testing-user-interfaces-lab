import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

// Your tests here
test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/my profile picture/i); // customize alt text in App.js
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with text 'About Me'", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(heading).toBeInTheDocument();
});

test("displays a paragraph with a bio", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am a/i); // customize text in App.js
  expect(paragraph).toBeInTheDocument();
});

test("displays a link to GitHub", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute(
    "href",
    expect.stringContaining("github.com")
  );
});

test("displays a link to LinkedIn", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute(
    "href",
    expect.stringContaining("linkedin.com")
  );
});
