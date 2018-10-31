import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';

import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import logo from '../logo.svg';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent';

import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';




class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
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
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    };
    const AboutPage = () => {
      return (
        <About></About>
      )
    }
    const ContactPage=()=>{
      return (
        <Contact></Contact>
      )
    }
    const DishWithId=({match})=>{
      return (
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]} comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10))}></DishDetail>
      );
    }
    return (
      <div className="App">

        <Header></Header>
        <Switch>
          <Route path="/home" component={HomePage}></Route>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}></Menu>}></Route>
          <Route path="/menu/:dishId" component={DishWithId}></Route>
          <Route path="/about" component={AboutPage}></Route>
          <Route path="/contactus" component={ContactPage}></Route>
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
