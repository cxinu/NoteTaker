import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/outline";

const NotePage = () => {
  let params = useParams();
  let navigate = useNavigate();
  let { id } = params;
  let [note, setNote] = useState([]);

  useEffect(() => {
    getNote();
  }, []);

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}/`);
    let data = await response.json();
    setNote(data);
  };

  let createNote = async () => {
    fetch(`/api/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let updateNote = async () => {
    await fetch(`/api/notes/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let deleteNote = async () => {
    await fetch(`/api/notes/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  let handleSubmit = () => {
    if (id !== "new" && note.body == "") {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note.body !== null) {
      createNote();
    }
    navigate("/");
  };

  return (
    <div className="note text-xl">
      <div className="note-header">
        <Link to={"/"} className="flex items-stretch" onClick={handleSubmit}>
          <ChevronLeftIcon className="w-7" />
          <p>Back</p>
        </Link>
        <button onClick={deleteNote} className="flex items-stretch">
          <p>Delete</p>
          <TrashIcon className="w-7" />
        </button>
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        defaultValue={note.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
