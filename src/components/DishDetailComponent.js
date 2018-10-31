import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
  if (dish) {
    return (
      <Card>
        <CardImg src={dish.image} alt={dish.name}></CardImg>
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>


    );
  } else {
    return (
      <div></div>
    )
  }
}

function RenderComments({ comments }) {

  if (comments) {
    const commentList = comments.map((comment) => {
      return (
        <li key='' className="col-12 col-md-12 m-1">
          <div>{comment.content} </div>
          <div>--{comment.author},{new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</div>
        </li>
      );
    });
    return (
      <div>
        <h1>Comments</h1>
        <ul>
          {commentList}
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

  if (props.dish != null) {
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
              <RenderComments comments={props.comments} />
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