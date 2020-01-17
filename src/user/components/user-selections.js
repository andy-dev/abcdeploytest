import React, { useContext } from "react";
import TopHat from "../../common/top-hat.js";
import SideNav from "../../common/side-nav.js";
import { UIContext } from "../../providers/UIProvider.js";
import { UserContext } from "../../providers/UserProvider";
import PipelineHeader from "../../common/pipeline-header.js";
import PipelineCard from "../../common/pipeline-card.js";
import {
  FiDatabase,
  FiCheck,
  FiFlag,
  FiLayers,
  FiFile,
  FiArrowRight
} from "react-icons/fi";
import { navigate } from "@reach/router";

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

  return (
    <>
      <h4>User Selections</h4>
      <p>Source: {source}</p>
      <p>SourceFile: {sourceFile}</p>
      <p>Target: {target}</p>
      <p>TargetFile: {targetFile}</p>
      <p>Company: {company}</p>
      <p>Division: {division}</p>
      <p>DataFullLoad | Incremental: {dataFullLoadOrIncremental}</p>
      <p>FileFormat: {fileFormat}</p>
    </>
  );
};

export default UserSelections;
