import React from "react";

export const PageNumbers = ({ changePage }) => {
  const pageClicks = (e) => {
    const value = Number(e.target.textContent);
    changePage(value);
  };

  const pages = () => {
    let num = [];
    for (let i = 0; i < 50; i++) {
      num.push("page");
    }
    const thePages = num.map((el, i) => {
      return (
        <span
          key={i}
          value={i + 1}
          className="page-numbers"
          onClick={pageClicks}
        >
          {" "}
          {i + 1}{" "}
        </span>
      );
    });
    return thePages;
  };

  return <div>{pages()} </div>;
};
