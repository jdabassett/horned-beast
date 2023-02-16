import React from "react";
import ReactDOM from 'react-dom';
import HornedBeast from "./HornedBeast.jsx";

export default class SelectedBeast extends React.Component {
  render() {
    if (this.props.modalDisplayed === false) {
      return null;
    }
    return ReactDOM.createPortal(
      <>
        <div className="modal-overlay"></div>
        <div className="modal-container">
          <HornedBeast
            type="filteredBeast"
            key={this.props.filteredBeast._id}
            id={this.props.filteredBeast._id}
            title={this.props.filteredBeast.title}
            description={this.props.filteredBeast.description}
            imageUrl={this.props.filteredBeast.image_url}
            modalDisplayed={this.props.modalDisplayed}
            handlerModalToggle={this.props.handlerModalToggle}
          />
        </div>
      </>,
      document.getElementById('portal')
    )
  }
}
