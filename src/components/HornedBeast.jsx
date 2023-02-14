import React from "react";

export default class HornedBeast extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="beast-container">
        <h2 className='beast-title'>{this.props.title}</h2>
        <img
          className='beast-image'
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          width="200px"
        />
        <p className='beast-description'>{this.props.description}</p>
      </div>
    );
  }
}
