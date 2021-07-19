import react, { Component } from "react";
import Button from "./Button";


class Header extends Component {

    onClick() {
        console.log("hi")
    }

    render() {
        return (
            <div className="d-flex justify-content-between nav bg-dark text-white ">
                <h1>Task Tracker </h1>
                <Button onClick={this.onClick} color="green" text="Add" />
            </div>

        );
    }
}


export default Header;