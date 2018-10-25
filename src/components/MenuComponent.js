import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

import DishDetail from './DishDetailComponent';
import DishComment from './DishCommentComponent';
// import DishComment from './DishCommentComponent';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    };
    console.log("Menu Component constructor is invoked!");
  }
  componentDidMount(){
    console.log("Menu Component componentDidMount is invoked!");
  }
  onDishSelect(dish) {
    //修改state的属性，必须使用setState
    this.setState({
      selectedDish: dish
    });
  }
  renderDish(dish) {
    if (dish) {
      return (
        <DishDetail selectedDish={this.state.selectedDish}></DishDetail>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
  renderComment(dish){
    if (dish) {
      return (
        <DishComment selectedDishComments={this.state.selectedDish.comments}></DishComment>
      );
    } else {
      return (
        <div>No Comments.</div>
      );
    }
  }
  render() {
    console.log("Menu Component render is invoked!");
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => this.onDishSelect(dish)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}>

            </CardImg>
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>

          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <h3>Selected Dish:</h3>
        <div className="row">
          {this.renderDish(this.state.selectedDish)}
          {this.renderComment(this.state.selectedDish)}
        </div>
      </div>
    );
  }
}

export default Menu;