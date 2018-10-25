import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    

    return (
        <Card>
          <CardImg src={this.props.selectedDish.image} alt={this.props.selectedDish.name}></CardImg>
          <CardBody>
            <CardTitle>{this.props.selectedDish.name}</CardTitle>
            <CardText>{this.props.selectedDish.description}</CardText>
          </CardBody>
        </Card>
      );
  }
}

export default DishDetail;