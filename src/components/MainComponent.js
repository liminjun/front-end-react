import React, { Component } from 'react';

import Header from './HeaderComponent';

import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import logo from '../logo.svg';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish:null
    }
  }

  onDishSelect(dishId) {
    debugger;
    //修改state的属性，必须使用setState
    this.setState({
      selectedDish: dishId
    });
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}></Menu>

        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}></DishDetail>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
