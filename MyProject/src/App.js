import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App1() {
  const [count, setCount] = useState(0);
  const year = new Date().getFullYear();

  return createElement("div", null, [
    createElement(
      "div",
      { key: "logos" },

      [
        createElement(
          "a",
          { href: "https://vite.dev", target: "_blank", key: "vite" },
          createElement(
            "img",
            { src: viteLogo, className: "logo react", alt: "React logo" },
            null
          )
        ),

        createElement(
          "a",
          { href: "https://react.dev", target: "_blank", key: "react" },
          createElement(
            "img",
            {
              src: reactLogo,
              className: "logo react",
              alt: "React logo",
            },
            null
          )
        ),
      ]
    ),
    createElement("h1", { key: "myH1" }, "Vite+React"),
    createElement("div", { className: "card", key: "card" }, [
      createElement(
        "button",
        {
          onClick: () => {
            setCount((count) => count + 1);
          },
          key: "button",
        },
        `count is ${count}`
      ),
      createElement("p", { key: "edit-text" }, [
        "Edit",
        createElement("code", { key: "code" }, "src/App.jsx"),
        "and save to test HMR",
      ]),
    ]),
    createElement(
      "p",
      { className: "read-the-docs", key: "docs" },
      "Click on the Vite and React logos to learn more"
    ),
    createElement("p", { key: "year" }, year),
  ]);
}

export default App1;
