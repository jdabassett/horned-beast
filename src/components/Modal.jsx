import React from "react";
import HornedBeast from "./HornedBeast.jsx";

export default class Modal extends React.Component {
  render() {
    if (this.props.modalDisplayed === false) {
      return null;
    }
    // console.log(this.props.hornedBeast)
    return (
  
      <div className="modal-container">
        <HornedBeast
          key={this.props.filteredBeast._id}
          id={this.props.filteredBeast._id}
          title={this.props.filteredBeast.title}
          description={this.props.filteredBeast.description}
          imageUrl={this.props.filteredBeast.image_url}
          handlerModalToggle={this.props.handlerModalToggle}
        />
      </div>
    );
  }
}
