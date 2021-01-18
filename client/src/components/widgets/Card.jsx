import React, { Component } from "react";
import PropTypes from "prop-types";

class Card extends Component {
  render() {
    const {
      heading,
      details,
      details2,
      details3
    } = this.props;
    return (
      <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <img
          class="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        ></img>
        <div class="px-6 py-4 bg-gray-300">
          <div class="font-bold text-xl mb-2">{heading}</div>
          <div class="flex justify-around px-2 py-2">
            <div class="bg-gray-200 p-2">Available Space</div>
            <p class="text-grey-darker text-base p-2">{details}</p>
          </div>
          <div class="flex justify-around px-2 py-2">
            <div class="bg-gray-200 p-2">Filled Space</div>
            <p class="text-grey-darker text-base p-2">{details2}</p>
          </div>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            {details3.slice(0, 10)}
          </span>
          {/* <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
            #travel
          </span>
          <span class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">
            #winter
          </span> */}
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  heading: PropTypes.string.isRequired,
  details: PropTypes.string,
  details2: PropTypes.string,
  details3: PropTypes.string
};

export default Card;
