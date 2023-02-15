import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




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
      <Card 
        style={{ width: '18rem' }} 
        className="beast-container">

        <Card.Img variant="top"
          className={this.state.favorites > 0 ? "beast-image favorite":"beast-image"}
          src={this.props.imageUrl}
          alt={this.props.description}
          title={this.props.title}
          width="200px"
        />

        <Card.Body className="beast-body">
          <Card.Title className="beast-title">{this.props.title}</Card.Title>
          <div>
            <FontAwesomeIcon
              icon={this.state.favorites > 0 ? fasHeart : farHeart}
              className="beast-heart"
            />
            <Card.Text className='beast-favorites'>{this.state.favorites}</Card.Text>
            <Button 
              className="beast-button"
              onClick={this.handlerChangeFavorites}
            >You Like?</Button>
          </div>
          <Card.Text className="beast-description">{this.props.description}</Card.Text>

        </Card.Body>
      </Card>
    );
  }
}
