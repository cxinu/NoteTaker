import React from "react";
import { CubeTransparentIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="top-0 border-b-[1px] border-zinc-800 text-center text-5xl p-3 flex items-stretch">
      <CubeTransparentIcon className="w-9 m-1 mr-3" />
      <h2>Note List</h2>
    </div>
  );
};

export default Header;
