import React from "react";
import HornedBeast from "./HornedBeast.jsx";
import data from "../data.json";
import SelectedBeast from "./SelectedBeast.jsx";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplayed: false,
      filteredBeast: {}
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
            type='unfilteredBeasts'
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            imageUrl={item.image_url}
            modalDisplayed={false}
            handlerModalToggle={()=>this.handlerModalToggle(item)}
          />
        ))}
        <SelectedBeast
          filteredBeast={this.state.filteredBeast}
          modalDisplayed={this.state.modalDisplayed}
          handlerModalToggle={()=>this.handlerModalToggle(null)}
        ></SelectedBeast>
      </div>
    );
  }
}
