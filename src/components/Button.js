import react, { Component } from "react";
import PropTypes from 'prop-types';


class Button extends Component {

    constructor() {
        super();

    }


    render() {
        return (
            <button onClick={this.props.onClick} style={{ backgroundColor: this.props.color }} className="btn nav-item text-white">{this.props.text}</button>


        );
    }

}
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func

};
Button.defaultProps = {
    color: "green",


};
export default Button;