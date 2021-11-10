import React from "react";
import Search from "./Search";

function Header({setSearh, search}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearh={setSearh} search={search}/>
    </header>
  );
}

export default Header;
