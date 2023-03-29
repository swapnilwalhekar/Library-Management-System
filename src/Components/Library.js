import React from "react";
import booklist from "../data/booklist.json";
import Cards from "./Cards";
import "../styles/Library.css";

const Library = () => {
  return (
    <section className="section1">
      { booklist.map((item) => (
        <Cards key={item.id} item={item} />
      ))}
    </section>
  );
};

export default Library;
