import React, { Component } from "react";
import { FiDatabase, FiUsers } from "react-icons/fi";
import { FaBuilding, FaWpforms } from "react-icons/fa";
import { AiOutlineTable } from "react-icons/ai";
import { gsap, TimelineLite } from "gsap";
import { Draggable } from "gsap/all";
import { css } from "@emotion/core";

class OptionCard extends Component {
  state = {};
  myElement = null;

  componentDidMount() {}

  render() {
    return (
      <>
        <div
          className="option-card"
          css={css`
            margin-right: 10px;
            margin-bottom: 10px;
            border-bottom: 4px solid #00539b;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
              0 3px 6px rgba(0, 0, 0, 0.23);

            width: ${this.props.opt.optionSize === "small" ? "120px" : "180px"};
            height: ${this.props.opt.optionSize === "small"
              ? "120px"
              : "180px"};

            :hover {
              transform: translateY(-4px);
              cursor: pointer;
            }
          `}
        >
          <div
            className="pipeline-card-header"
            css={css`
              padding: 10px;
              overflow: hidden;
              font-weight: 200;
              text-align: center;
              font-size: ${this.props.opt.optionSize === "small"
                ? "10px"
                : "15px"};
            `}
          >
            <h5 className="fw-300">{this.props.opt.optionName}</h5>
          </div>
          <div
            className="option-card-icon"
            css={css`
              width: 50%;
              color: white;
              text-align: center;
              border-radius: 50%;

              background-color: ${this.props.bgColor};
              transform: ${this.props.opt.optionSize === "small"
                ? "translate(30px)"
                : "translate(38px)"};
              font-size: ${this.props.opt.optionSize === "small"
                ? "15px"
                : "50px"};
              padding-top: ${this.props.opt.optionSize === "small"
                ? "9px"
                : "13px"};
              padding-bottom: ${this.props.opt.optionSize === "small"
                ? "4px"
                : "2px"};
              svg {
                stroke-width: 1;
              }
            `}
          >
            {this.props.opt.optionIcon === "company" && (
              <FaBuilding></FaBuilding>
            )}
            {this.props.opt.optionIcon === "people" && <FiUsers></FiUsers>}
            {this.props.opt.optionIcon === "database" && (
              <FiDatabase></FiDatabase>
            )}
            {this.props.opt.optionIcon === "table" && (
              <AiOutlineTable></AiOutlineTable>
            )}
            {this.props.opt.optionIcon === "form" && <FaWpforms></FaWpforms>}
          </div>
          <div
            css={css`
              margin-top: 20px;
              text-align: center;
            `}
          >
            <p
              css={css`
                margin-left: -5px;
                :hover {
                  cursor: pointer;
                  color: #00539b;
                  font-weight: bold;
                }
              `}
            >
              Learn More &gt;
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default OptionCard;
