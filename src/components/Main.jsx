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
// console.log(uniqueNumberHornsArray);




export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplayed: false,
      filteredBeast: {},
      filteredHorns: uniqueNumberHornsArray,
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


  setFilteredHorns = (e) => {
    let value = e.target.value.split(",").map((item)=>{return Number(item)});
    this.setState({ filteredHorns: [...value] });
  };


  render() {
    console.log(this.state.filteredHorns);
    return (
      <div className="main-container justify-content-md-center row g-3">
        <FormElement
          setFilteredHorns={this.setFilteredHorns}
          uniqueHorns={uniqueNumberHornsArray}
        />

        {data.map((item) => {
          if (this.state.filteredHorns.includes(item.horns)) {
            return (
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
            );
          }
        })}
        <SelectedBeast
          filteredBeast={this.state.filteredBeast}
          modalDisplayed={this.state.modalDisplayed}
          handlerModalToggle={() => this.handlerModalToggle(null)}
        ></SelectedBeast>
      </div>
    );
  }
}
