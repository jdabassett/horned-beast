import React from "react";
import HornedBeast from "./HornedBeast.jsx";
import data from "../data.json";
import SelectedBeast from "./SelectedBeast.jsx";
import FormElement from "./FormElement.jsx";

//make an array of unique horns
let dataHorns = data.map((item) => {
  return item.horns;
});
let uniqueNumberHornsArray = dataHorns.filter((item, index, array) => {
  return array.indexOf(item) === index;
});

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    //whether modal displayed, what beast to modal, and number of horns per beast to filter for
    this.state = {
      modalDisplayed: false,
      filteredBeast: {},
      filteredHorns: uniqueNumberHornsArray,
    };
  }

  // setting state for whether modal displayed and what beast
  handlerModalToggle = (beast) => {
    // console.log(id);
    this.setState((prevState) => ({
      ...prevState,
      modalDisplayed: !prevState.modalDisplayed,
      filteredBeast: beast,
    }));
  };

  // event handle for number of horns dropdown
  setFilteredHorns = (e) => {
    let value = e.target.value.split(",").map((item) => {
      return Number(item);
    });
    this.setState({ filteredHorns: [...value] });
  };

  render() {
    // based on state, filter data down to array of beasts with set number of horns
    let filteredBeastsArray = data.filter((item) =>
      this.state.filteredHorns.includes(item.horns)
    );

    return (
      <div className="main-container justify-content-md-center row g-3">
        {/* render form */}
        <FormElement
          setFilteredHorns={this.setFilteredHorns}
          uniqueHorns={uniqueNumberHornsArray}
        />

        {/* render filtered array with set number of horns*/}
        {filteredBeastsArray.map((item) => (
          <HornedBeast
            type="unfilteredBeasts"
            key={item._id}
            id={item._id}
            title={item.title}
            description={item.description}
            imageUrl={item.image_url}
            modalDisplayed={false}
            handlerModalToggle={() => this.handlerModalToggle(item)}
          />
        ))}

        {/* modal of selected beast*/}
        <SelectedBeast
          filteredBeast={this.state.filteredBeast}
          modalDisplayed={this.state.modalDisplayed}
          handlerModalToggle={() => this.handlerModalToggle(null)}
        ></SelectedBeast>
      </div>
    );
  }
}
