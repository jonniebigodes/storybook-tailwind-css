import PropTypes from "prop-types";
/**
 * simple component implemented in tailwind css
 */
const MyComponent = ({ propertyA, propertyB }) => {
  return (
    <div className="bg-white rounded shadow border p-6 w-64">
      <h2 className="text-3xl font-bold mb-4 mt-0">
        This is a simple Tailwind component inside Storybook
      </h2>
      <h3>This is a prop passed in</h3>
      <h4>{ propertyA }</h4>
      <h3 className="text-gray-700 text-sm">This is another prop passed in</h3>
      <h4>{ propertyB }</h4>
    </div>
  );
};

MyComponent.defaultProps = {
  propertyA: "Boop",
  propertyB: "Zoinks",
};
MyComponent.propTypes = {
  // Example propertyA
  propertyA: PropTypes.string,
  // Example propertyB
  propertyB: PropTypes.string,
};

export default MyComponent;
