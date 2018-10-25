import React, { Component } from 'react';

// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishComment extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const commentList = this.props.selectedDishComments.map((comment) => {
            return (
                <li key=''  className="col-12 col-md-12 m-1">
                   <div>{comment.content} </div>
                   <div>--{comment.author},{comment.publishDate}</div>
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
    }
}
export default DishComment;