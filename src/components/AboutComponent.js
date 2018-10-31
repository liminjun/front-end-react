import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


class About extends Component {
    render() {
        return (
           <>
           <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link to="/about">About</Link>
                    </BreadcrumbItem>

                </Breadcrumb>

            </div>
           <p>About page.</p>
           </>
        )
    }
}
export default About;