import React from "react";
import HornedBeast from "./HornedBeast.jsx";
import data from '../data.json';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        {data.map((item) => (
          <HornedBeast
            key={item._id}
            title={item.title}
            description={item.description}
            imageUrl={item.image_url}
          />
        ))}
      </div>
    );
  }
}
