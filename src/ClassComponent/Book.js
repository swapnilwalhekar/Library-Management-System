import axios from "axios";
import React, { Component } from "react";
import BookItems from "./BookItems.js";

export class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      booklist: [],
    };
    console.log(this.state);
  }

  componentDidMount() {
    axios
      .get("https://mocki.io/v1/84a160bc-e6f8-428e-9166-c35d5d397653")
      .then((responce) => {
        this.setState({ booklist: responce.data });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error occured");
      });
  }

  render() {
    return (
      <section className="section2">
        {this.state.booklist.map((ele) => {
          return (
            <BookItems
              key={ele.id}
              id={ele.id}
              img={ele.img}
              title={ele.title}
              author={ele.author}
              amount={ele.amount}
              addToCart={this.props.addToCart}
            />
          );
        })}
      </section>
    );
  }
}

export default Book;
