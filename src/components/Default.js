import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-uppercase p-5 default">
                        <h1>404</h1>
                        <h1>error</h1>
                        <h2>page not found</h2>
                        <h3>
                            the requested url 
                            <span className="text-danger">
                                {this.props.location.pathname}
                            </span> 
                            &nbsp; was not found
                        </h3>
                    </div>
                </div>
            </div>
        )
    }
}
