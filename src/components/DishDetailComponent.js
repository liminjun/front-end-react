import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


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
  debugger;
  if (props.dish != null) {
    return (
      <div>
        <h3>Selected Dish:</h3>
        <div className="row">
          <RenderDish dish={props.dish}></RenderDish>
          <RenderComments comments={props.dish.comments}></RenderComments>
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