import React, { Component } from "react";
import PropTypes from "prop-types";


class Tab extends Component {
    render() {
        const {heading, icon, onClick} = this.props;
        return (
        <div className="rounded-l flex flex-col">
            <div className="bg-green-500">
                {heading}
            </div>
            <div></div>
        </div>
        );
    }
};
Tab.PropTypes = {
    heading: PropTypes.string.isRequired,
    icon: PropTypes.icon,
    onClick: PropTypes.func.isRequired
}