import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="hover:bg-zinc-800 border-neutral-800 border-b-[1px] p-4 text-2xl">{note.body}</div>
    </Link>
  );
};

export default ListItem;
