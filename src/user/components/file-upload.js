import React, { Component } from "react";
import { FiUpload } from "react-icons/fi";
import AbcButton from "../../common/abc-button.js";

import { css } from "@emotion/core";

class FileUpload extends Component {
  state = {
    fileValue: "No File Choosen"
  };

  OnButtonClickCB = () => {
    const inputFileUpload = document.querySelector("#fileid");
    inputFileUpload.click();
  };

  handleInputChange = e => {
    let inputName = e.target.value.replace(/.*[\/\\]/, "");
    this.props.addFileToUserSelections(inputName);
    this.setState({ fileValue: inputName });
  };

  render() {
    return (
      <>
        <input
          id="fileid"
          type="file"
          hidden
          onChange={this.handleInputChange}
        />
        <p
          css={css`
            padding: 10px;
            font-size: 15px;
            color: white;
          `}
        >
          {this.state.fileValue}
        </p>
        <button
          onClick={() => this.OnButtonClickCB()}
          css={css`
            background-color: #00746d;
            border: 2px solid #002b5c;
            color: #fff;
            border-radius: 4px;
            line-height: 24.75px;
            padding-bottom: 7.5px;
            padding-left: 30px;
            padding-right: 30px;
            padding-top: 7.5px;
            text-align: center;
            cursor: pointer;
            font-size: 15px;

            :hover {
              background-color: #00539b;
            }
          `}
        >
          <span
            css={css`
              padding-right: 5px;
            `}
          >
            {this.props.buttonLabel}
          </span>
          <FiUpload />
        </button>

        {this.state.fileValue !== "No File Choosen" && (
          <div
            css={css`
              margin-top: 10px;
              padding: 20px;
            `}
          >
            <AbcButton
              buttonLabel="Next"
              OnButtonClickCB={this.props.goToNextOptionSubStep}
            ></AbcButton>
          </div>
        )}
      </>
    );
  }
}

export default FileUpload;
