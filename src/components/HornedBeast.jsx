import React from 'react';

export default class HornedBeast extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='beast-container'>
        <h2>{this.props.title}</h2>
        <img 
          src={this.props.imageUrl} 
          alt={this.props.description}
          title={this.props.title}
          width='200px'/>
        <p>{this.props.description}</p>
      </div>
    )
  }


}