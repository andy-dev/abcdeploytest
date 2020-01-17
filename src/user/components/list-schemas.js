import React, { Component } from "react";
import SingleSelect from "../../common/single-select.js";
import AbcButton from "../../common/abc-button.js";

import { css } from "@emotion/core";

class ListSchemas extends Component {
  state = {
    schemaSelected: "",
    items: [
      { name: "Schema 1" },
      { name: "Schema 2" },
      { name: "Schema 3" },
      { name: "Schema 4" },
      { name: "Schema 5" },
      { name: "Schema 6" },
      { name: "Schema 7" },
      { name: "Schema 8" },
      { name: "Schema 9" },
      { name: "Schema 10" },
      { name: "Schema 11" },
      { name: "Schema 12" },
      { name: "Schema 13" },
      { name: "Schema 14" },
      { name: "Schema 15" },
      { name: "Schema 16" },
      { name: "Schema 17" },
      { name: "Schema 18" },
      { name: "Schema 19" },
      { name: "Schema 20" },
      { name: "Schema 21" },
      { name: "Schema 22" },
      { name: "Schema 23" },
      { name: "Schema 24" },
      { name: "Schema 25" },
      { name: "Schema 26" },
      { name: "Schema 27" },
      { name: "Schema 28" },
      { name: "Schema 29" },
      { name: "Schema 30" },
      { name: "Schema 31" },
      { name: "Schema 32" },
      { name: "Schema 33" },
      { name: "Schema 34" },
      { name: "Schema 35" },
      { name: "Schema 36" },
      { name: "Schema 37" },
      { name: "Schema 38" },
      { name: "Schema 39" },
      { name: "Schema 40" },
      { name: "Schema 41" },
      { name: "Schema 42" },
      { name: "Schema 43" },
      { name: "Schema 44" },
      { name: "Schema 45" },
      { name: "Schema 46" },
      { name: "Schema 47" },
      { name: "Schema 48" },
      { name: "Schema 49" },
      { name: "Schema 50" }
    ]
  };

  chooseSchema = selection => {
    this.setState({ schemaSelected: selection });
    this.props.addTargetFileToUserSelections(selection);
  };

  render() {
    return (
      <>
        <SingleSelect
          items={this.state.items}
          label="Select Schema From Options"
          placeholder="Search for Schema"
          customHandler={this.chooseSchema}
        ></SingleSelect>
        {this.state.schemaSelected !== "" && (
          <div
            css={css`
              margin: 10px auto;
              padding: 20px;
              text-align: center;
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

export default ListSchemas;
