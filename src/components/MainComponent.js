import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';

import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import logo from '../logo.svg';
import {Switch,Route,Redirect} from 'react-router-dom';



class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    }
  }

  // onDishSelect(dishId) {
  //   debugger;
  //   //修改state的属性，必须使用setState
  //   this.setState({
  //     selectedDish: dishId
  //   });
  // }

  render() {
    const HomePage=()=>{
      return (
        <Home></Home>
      )
    }
    return (
      <div className="App">

        <Header></Header>
        <Switch>
          <Route path="/home"  component={HomePage}>Home</Route>
          <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}>Menu</Menu>}></Route>
          <Redirect to="/home"></Redirect>
        </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)}></Menu>

        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]}></DishDetail> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
