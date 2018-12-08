import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


function RenderDish({ dish }) {
  if (dish) {
    return (
      <FadeTransform in transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
        <Card>
          <CardImg src={baseUrl + dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>


    );
  } else {
    return (
      <div></div>
    )
  }
}

function RenderComments({ comments, postComment, dishId }) {

  if (comments) {

    return (
      <div>
        <h1>Comments</h1>
        <ul>
          <Stagger in>
            {
              comments.map((comment) => {
                return (
                  <Fade in>
                    <li key='' className="col-12 col-md-12 m-1">
                      <div>{comment.content} </div>
                      <div>--{comment.author},{new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</div>
                    </li>
                  </Fade>
                );
              })
            }
          </Stagger>
        </ul>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}
const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading></Loading>
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  }
  else if (props.dish != null) {
    return (
      <div className="container">

        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
              <RenderComments comments={props.comments} postComment={props.postComment}
                dishId={props.dish.id} />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }

}

export default DishDetail;