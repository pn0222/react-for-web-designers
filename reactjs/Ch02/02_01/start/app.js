(function() {
  "use strict";
  
  // Start here
  // var ProductCustomizer = React.createElement('div', {className: "customizer"}, "Hello World!");
  
  function SizeSelector(props){
    function sizeOptions(){
      var sizes = window.Inventory.allSizes;
      return sizes.map(function(num){
        return(
          <option value={num} key={num}>{num}</option>
        )
      });
    }
    
  	return(
    	<div className="field-group">
				<label htmlFor="size-options">Size:</label>
				<select name="sizeOptions" id="size-options">
					{sizeOptions()}
				</select>
			</div>  
  	)
  }
  
  
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
        <div className="selectors">
          <SizeSelector/>
        </div>
      </div>
    )
  }
  
  ReactDOM.render(<ProductCustomizer/>, document.getElementById("react-root"));
})();
