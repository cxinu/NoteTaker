import React from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

const AddButton = () => {
  return (
    <Link to={"/note/new"} className="floating-button">
      <PlusIcon className="bg-white rounded-full w-12" />
    </Link>
  );
};

export default AddButton;
