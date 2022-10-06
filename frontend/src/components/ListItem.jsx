import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="border-neutral-800 border-b-[1px] m-2 p-4 text-2xl">{note.body}</div>
    </Link>
  );
};

export default ListItem;
