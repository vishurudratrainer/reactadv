import withFeatureToggle from "./withFeatureToggle";

const NewFeatureComponent = () => {
  return (
    <div>
      <button>New Feature</button>
    </div>
  );
};

// Global Feature Toggle.
const enableNewFeatures = true;

export default withFeatureToggle(NewFeatureComponent,enableNewFeatures)

