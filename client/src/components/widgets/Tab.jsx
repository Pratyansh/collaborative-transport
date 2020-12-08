import React, { Component } from "react";
import PropTypes from "prop-types";


class Tab extends Component {
    render() {
        const {heading, icon, onClick, className} = this.props;
        return (
        <button 
            type="submit"
            onClick={onClick}
            className={`min-w-40 ${className}`}>
            <div className="w-full h-full">
            <div className={`relative rounded-sm shadow-md bg-green-500 p-2`} />
            <div className="bg-green-400 p-8 border-8">
            <i className="py-2 material-icons align-middle flex flex-col">{icon}</i>
                <div className="pb-4">{heading}</div>
            </div>
            <div className={`rounded-sm shadow-md bg-green-500 p-2`} />
            </div>
        </button>
        );
    }
};
Tab.propTypes = {
    heading: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default Tab;