import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";

export default class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  handlerChangeFavorites = () => {
    this.setState((prevState) => ({
      ...prevState,
      favorites: prevState.favorites + 1,
    }));
  };

  render() {
    return (
      <div className="beast-container">
        <h2 className="beast-title">{this.props.title}</h2>
        <FontAwesomeIcon
          icon={this.state.favorites > 0 ? fasHeart : farHeart}
          className="beast-heart"
        />
        <p>Favorites: {this.state.favorites}</p>

        <img
          className="beast-image"
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          width="200px"
          onClick={this.handlerChangeFavorites}
        />
        <p className="beast-description">{this.props.description}</p>
      </div>
    );
  }
}
