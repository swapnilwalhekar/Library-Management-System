import React, { Component } from 'react'

 class BookItems extends Component {

  render() { 
    const { img, title, author } = this.props;

    return (
        <div className="cards">
            <div className="image_box">
              <img src={img} alt=""/>
            </div>      
            <div className="details">
              <p>{title}</p>
              <p>{author}</p>
              <button onClick = {()=>this.props.addToCart(this.props)}> Add to cart </button>
          </div>
        </div>
    );
  }
}
export default BookItems;
