import React from "react";
import Model from "./components/Model";
import ModelHeader from "./components/ModelHeader";
const ModelFragment = React.memo(() => {
  return (
    <>
      <ModelHeader />
      <Model />
    </>
  );
});

export default ModelFragment;
