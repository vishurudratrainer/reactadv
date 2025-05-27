import React from "react";

export default function withFeatureToggle(WrappedComponent, featureEnabled) {
  return function (props) {
    return featureEnabled ? <WrappedComponent {...props} /> : <></>;
  };
}
