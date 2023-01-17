import { useState, useInsertionEffect } from "react";

const UseInsertionEffect = () => {
  const [theme, setTheme] = useState("dark");

  useInsertionEffect(() => {    
    const { color, bgColor } = getsColorsFor(theme);
    let styleRule = null;
    if (color !== buttonColor || bgColor !== buttonBgColor) {
      buttonColor = color;
      buttonBgColor = bgColor;
      styleRule = getStyleRule();
      document.head.appendChild(styleRule);
    }
    //useInsertion... is used to apply css rules to button based on theme
    //when theme changes, the effect updates color and bgcolor of the button
    //this is done by appending or removing a style element  in document.head with app css styles

    return () => {      //cleanup code for the effect, runs when component is unmounting or when
                        //dependencies passed to hook changes
                        //checks whether stylerule is defined and if it is, it removes the style element from
                        //document.head. this done to ensure that prev styles are removed and no styles are left behind
      if (!styleRule) {
        return;
      }
      document.head.removeChild(styleRule);
    };
  }, [theme]);

  const onThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button onClick={onThemeChange} className="theme-button">
      Change my theme
    </button>
  );
};

let buttonColor = "";
let buttonBgColor = "";

const getStyleRule = () => {
  const styleElement = document.createElement("style");
  const rule = `
    .theme-button {
      color: ${buttonColor};
      background-color: ${buttonBgColor};
      padding: 1rem;
      border: 1px solid black;
      border-radius: 0.25rem;
      cursor: pointer;
      margin: auto;
  `;
  styleElement.innerHTML = rule;
  return styleElement;
};

const getsColorsFor = (theme) => {
  if (theme === "light") {
    return { color: "black", bgColor: "white" };
  }
  return { color: "white", bgColor: "black" };
};
//above function used to determine color and bgcolor of button based on theme

export default UseInsertionEffect
