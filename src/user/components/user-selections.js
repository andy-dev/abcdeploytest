import React, { useContext, useEffect, useState } from "react";
import TopHat from "../../common/top-hat.js";
import SideNav from "../../common/side-nav.js";
import { UIContext } from "../../providers/UIProvider.js";
import { UserContext } from "../../providers/UserProvider";
import PipelineHeader from "../../common/pipeline-header.js";
import PipelineCard from "../../common/pipeline-card.js";
import Modal from "../../common/modal.js";
import { css } from "@emotion/core";

import {
  FiDatabase,
  FiCheck,
  FiFlag,
  FiLayers,
  FiFile,
  FiArrowRight
} from "react-icons/fi";
import { navigate } from "@reach/router";
import AbcButton from "../../common/abc-button.js";

const UserSelections = () => {
  const { sideNavOpenClose, toggleUIComponent } = useContext(UIContext);
  const {
    source,
    sourceFile,
    target,
    targetFile,
    company,
    division,
    dataFullLoadOrIncremental,
    fileFormat,
    filled
  } = useContext(UserContext);

  const [
    showGeneratingMetadaModal,
    updatedShowGeneratingMetadaModal
  ] = useState(false);

  const [showResults, updatedShowResults] = useState(false);

  const closeModal = () => {
    updatedShowGeneratingMetadaModal(false);
    updatedShowResults(true);
  };

  const openModal = () => {
    updatedShowGeneratingMetadaModal(true);
    startTimer();
  };

  const startTimer = () => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <>
      {showGeneratingMetadaModal ? (
        <Modal>
          <div>
            <h1>Generating MedataFile</h1>
            <h5
              css={css`
                padding: 20px;
              `}
            >
              Please Wait...
            </h5>
          </div>
        </Modal>
      ) : null}

      {showResults && (
        <>
          <h4
            css={css`
              text-align: center;
            `}
          >
            Results to Update
          </h4>
          <div
            className=""
            css={css`
              display: flex;
              justify-content: space-evenly;
              color: gray;
            `}
          >
            <div
              css={css`
                padding: 2px;
              `}
              className="box-1"
            >
              <div>
                <h5>Attribute</h5>
              </div>
              <div>Account_Goal_Key</div>
              <div>CreatedById</div>
              <div>Current_Month</div>
              <div>CreatedDate</div>
              <div>LastViewedDAte</div>
              <div>Id</div>
              <div>IsDeleted</div>
              <div>Monthly_Revenue</div>
              <div>Name</div>
              <div>Goal</div>
              <div>Sales</div>
              <div>TRV_Actual</div>
              <div>TRV_Goal</div>
            </div>
            <div
              css={css`
                padding: 2px;
              `}
              className="box-2"
            >
              <div>
                <h5>Suggested Data Type</h5>
              </div>
              <div>varchar(50)</div>
              <div>varchar(18)</div>
              <div>int</div>
              <div>datetime</div>
              <div>datetime</div>
              <div>varchar(18)</div>
              <div>int</div>
              <div>varchar(18)</div>
              <div>varchar(80)</div>
              <div>decimal(80)</div>
              <div>decimal(202)</div>
              <div>varchar(80)</div>
              <div>decimal(202)</div>
            </div>
            <div
              css={css`
                padding: 2px;
              `}
              className="box-3"
            >
              <div>
                <h5>Updated Data Type</h5>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
              <div>
                <select>
                  <option value="varchar">varchar</option>
                  <option value="int">int</option>
                  <option value="datetime">datetime</option>
                  <option value="decimal">decimal</option>
                </select>
              </div>
            </div>
            <div
              css={css`
                padding: 2px;
              `}
              className="box-4"
            >
              <div>
                <h5>Size</h5>
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
              <div>
                <input type="text" />
              </div>
            </div>
          </div>
          <div
            css={css`
              text-align: center;
            `}
          >
            <AbcButton buttonLabel="Run Pipeline"></AbcButton>
          </div>
        </>
      )}

      {filled && !showResults && (
        <div
          css={css`
            font-size: 20px;
            padding: 5px;
          `}
        >
          <h4
            css={css`
              text-align: center;
            `}
          >
            Review your selections
          </h4>
          <p
            css={css`
              padding: 5px;
            `}
          >
            Source: {source}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            SourceFile: {sourceFile}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            Target: {target}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            TargetFile: {targetFile}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            Company: {company}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            Division: {division}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            DataFullLoad | Incremental: {dataFullLoadOrIncremental}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            FileFormat: {fileFormat}
          </p>
          <div
            css={css`
              text-align: center;
            `}
          >
            <AbcButton
              buttonLabel="Next"
              OnButtonClickCB={openModal}
            ></AbcButton>
          </div>
        </div>
      )}

      {!filled && !showResults && (
        <div
          css={css`
            font-size: 20px;
            padding: 5px;
          `}
        >
          <h4
            css={css`
              text-align: center;
            `}
          >
            User Selections
          </h4>
          <p
            css={css`
              padding: 5px;
            `}
          >
            Source: {source}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            SourceFile: {sourceFile}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            Target: {target}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            TargetFile: {targetFile}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            Company: {company}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            Division: {division}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            DataFullLoad | Incremental: {dataFullLoadOrIncremental}
          </p>
          <p
            css={css`
              padding: 5px;
            `}
          >
            FileFormat: {fileFormat}
          </p>
        </div>
      )}
    </>
  );
};

export default UserSelections;
