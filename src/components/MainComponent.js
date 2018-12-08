import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Contact from './ContactComponent';

import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';

import logo from '../logo.svg';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import About from './AboutComponent';
import { connect } from 'react-redux';


import { actions } from 'react-redux-form';
import { addComment, postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },

  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
})


class Main extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount() {
    this.props.fetchDishes();

    this.props.fetchComments();
    this.props.fetchPromos();

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
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    };


    const DishWithId = ({ match }) => {
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          commentsErrMess={this.props.comments.errMess}
          postComment={this.props.postComment}
        />
      );
    }
    return (
      <div className="App">

        <Header></Header>
        <TransitionGroup>
          <CSSTransition  key={this.props.location.key} classNames="page" timeout={300}>
            <Switch location={this.props.location}>
              <Route path="/home" component={HomePage}></Route>
              <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}></Menu>}></Route>
              <Route path="/menu/:dishId" component={DishWithId}></Route>
              <Route path="/about" component={() => <About leaders={this.props.leaders}></About>}></Route>
              <Route path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}></Contact>}></Route>
              <Redirect to="/home"></Redirect>
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
