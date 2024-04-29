import * as React from "react";

export const Kontainer = ({ children }) => {
  return (
    <div className="kontainer-div">
      <div className="kontainer-insideDiv"></div>
      <div className="kontainer-body">{children}</div>
      <div className="kontainer-insideDiv"></div>
    </div>
  );
};
1;
