import React from "react";
import PropTypes from "prop-types";

const Spinner = ({ error }) =>
  !error ? (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="spinner"
      style={{ height: "15em" }}
    >
      <g transform="translate(50,50)">
        <g ng-attr-transform="scale({{config.scale}})" transform="scale(0.8)">
          <g transform="translate(-50,-50)">
            <g transform="rotate(240 50 50)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur="0.75s"
                begin="0s"
                repeatCount="indefinite"
              />
              <path
                ng-attr-fill-opacity="{{config.opacity}}"
                ng-attr-fill="{{config.c1}}"
                d="M50 50L50 0A50 50 0 0 1 100 50Z"
                fill="#aa2a24"
              />
            </g>
            <g transform="rotate(270 50 50)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              />
              <path
                ng-attr-fill-opacity="{{config.opacity}}"
                ng-attr-fill="{{config.c2}}"
                d="M50 50L50 0A50 50 0 0 1 100 50Z"
                transform="rotate(90 50 50)"
                fill="#ed8236"
              />
            </g>
            <g transform="rotate(300 50 50)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur="1.5s"
                begin="0s"
                repeatCount="indefinite"
              />
              <path
                ng-attr-fill-opacity="{{config.opacity}}"
                ng-attr-fill="{{config.c3}}"
                d="M50 50L50 0A50 50 0 0 1 100 50Z"
                transform="rotate(180 50 50)"
                fill="#FEF050"
              />
            </g>
            <g transform="rotate(330 50 50)">
              <animateTransform
                attributeName="transform"
                type="rotate"
                calcMode="linear"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
                dur="3s"
                begin="0s"
                repeatCount="indefinite"
              />
              <path
                ng-attr-fill-opacity="{{config.opacity}}"
                ng-attr-fill="{{config.c4}}"
                d="M50 50L50 0A50 50 0 0 1 100 50Z"
                transform="rotate(270 50 50)"
                fill="#04235D"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  ) : (
    <div className="no-response">{error}</div>
  );
Spinner.defaultProps = {
  error: ""
};

Spinner.propTypes = {
  error: PropTypes.string
};

export default Spinner;
