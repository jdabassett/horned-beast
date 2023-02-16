import React from "react";
import HornedBeast from "./HornedBeast.jsx";
import data from "../data.json";
import SelectedBeast from "./SelectedBeast.jsx";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplayed: false,
      filteredBeast: {},
      searchText: "",
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

  handlerUpdateSearchText = (event) => {
    let additionalText = event.nativeEvent.data;
    if (!additionalText){
      this.handlerResetSearchText();
      return;
    }
    this.setState((prevState) => ({
      ...prevState,
      searchText: `${prevState.searchText}${additionalText}`,
    }));
  };

  handlerResetSearchText = () => {
    this.setState({searchText:""})
  }

  render() {
    let searchedData;
    if (this.state.searchText) {
      searchedData = data.filter((item) =>
        item.keyword.includes(this.state.searchText)
      );
      console.log(searchedData);
    } else {
      searchedData = data;
    }

    return (
      <div className="main-container justify-content-md-center row g-3">
        <form className="main-form">
          <input
            type="text"
            placeholder="Search Horned Beasts"
            onChange={this.handlerUpdateSearchText}
            value={this.state.searchText}
          ></input>
          <button 
            onClick={this.handlerResetSearchText}>Clear Search Bar</button>
        </form>

        {searchedData.map((item) => (
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
        <SelectedBeast
          filteredBeast={this.state.filteredBeast}
          modalDisplayed={this.state.modalDisplayed}
          handlerModalToggle={() => this.handlerModalToggle(null)}
        ></SelectedBeast>


      </div>
    );
  }
}
