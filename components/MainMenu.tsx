// @ts-ignore
import { useEffect } from "react";
import { IMenu } from "../interfaces/interfaces";

const MainMenu = ({ menu }: IMenu) => {
  // const { projects, contacts, resume, startups } = menu;
  console.log("manu", menu);
  return (
    <div>
      <p>{menu?.projects}</p>
      <p>{menu?.contacts}</p>
      <p>{menu?.resume}</p>
      <p>{menu?.startups}</p>
    </div>
  );
};

export default MainMenu;
