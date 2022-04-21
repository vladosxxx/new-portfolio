// @ts-ignore
import React, { useEffect } from "react";
import { IMenu } from "../../interfaces/interfaces";

interface IProp {
  menu?: IMenu;
}

const MainMenu = ({ menu }: IProp) => {
  const { projects, contacts, resume, startups } = menu || {};
  console.log("manu", menu);
  return (
    <div className="well" id="well">
      <div id="particles-js"></div>
      <div id="button-top"></div>
      <div className="panel">
        <div className="menu">
          <ul>
            <li>
              <a href="next/link" id="projects">
                <div className="sign">
                  <p>{projects}</p>
                </div>
              </a>
              <a href="next/link" id="hire">
                <div className="sign">
                  <p>{contacts}</p>
                </div>
              </a>
              <a href="next/link" id="resume">
                <div className="sign">
                  <p>{resume}</p>
                </div>
              </a>
              <a href="next/link" id="startups">
                <div className="sign">
                  <p>{startups}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
