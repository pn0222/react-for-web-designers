(function() {
  "use strict";
  
  

  // Start here
  // var ProductCustomizer = React.createElement('div', {className: "customizer"}, "Hello World!");
  
  function ProductImage(props){
    // return React.createElement("img", {src:"../../../assets/red.jpg",alt:"Product image"});
    return <img src="../../../assets/red.jpg" alt="Product image" />;
  }
  
  function ProductCustomizer(props){
    // return React.createElement("div", {className: "customizer"}, React.createElement("div", {className:"product-image"}, React.createElement(ProductImage)));
    return(
      <div className="customizer">
        <div className="product-image">
          <ProductImage/>
        </div>
      </div>
    )
  }
  
  ReactDOM.render(<ProductCustomizer/>, document.getElementById("react-root"));
})();
