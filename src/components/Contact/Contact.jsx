import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Contact = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      // className="bg-slate-300"
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHx8fDE3MDU1NjUxOTN8MA&ixlib=rb-4.0.3)",
      }}
    >
      <h1 className="text-white text-7xl">contact now</h1>
    </div>
  );
};

export default Contact;
