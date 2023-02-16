import React from "react";
import HornedBeast from "./HornedBeast.jsx";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default class SelectedBeast extends React.Component {


  render() {
    if (this.props.modalDisplayed === false) {
      return null;
    }
    return (
      <>

        <Modal
          show={this.props.modalDisplayed}
          // onHide={}
          backdrop="static"
          keyboard={false}
        >
        <Modal.Body className="modal-body">
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
          <Button className="modal-button" variant="primary" onClick={this.props.handlerModalToggle}>Click to Exit
          </Button>
          </Modal.Body>

        </Modal>
      </>
    )
  }
}
