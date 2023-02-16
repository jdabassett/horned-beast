import React from "react";
import HornedBeast from "./HornedBeast.jsx";
import data from "../data.json";
import Modal from "./Modal.jsx";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplayed: false,
      modalId: null,
      filteredBeast: {
        _id: 1,
        image_url:
          "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
        title: "UniWhal",
        description: "A unicorn and a narwhal nuzzling their horns",
        keyword: "narwhal",
        horns: 1,
      },
    };
  }
  handlerModalToggle = (beast) => {
    // console.log(id);
    this.setState((prevState) => ({
      ...prevState,
      modalDisplayed: !prevState.modalDisplayed,
      filteredBeast: beast,
    }));
  };


  render() {
    console.log(this.state.filteredBeast);
    return (
      <div className="main-container justify-content-md-center row g-3">
        {data.map((item) => (
          <HornedBeast
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            imageUrl={item.image_url}
            modalId={this.state.modalId}
            modalDisplayed={this.state.modalDisplayed}
            handlerModalToggle={()=>this.handlerModalToggle(item)}
          />
        ))}
        <Modal
          filteredBeast={this.state.filteredBeast}
          modalDisplayed={this.state.modalDisplayed}
          handlerModalToggle={()=>this.handlerModalToggle(null)}
        ></Modal>
      </div>
    );
  }
}
