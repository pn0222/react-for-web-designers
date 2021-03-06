(function() {
  "use strict";
  
  // Start here
  // var ProductCustomizer = React.createElement('div', {className: "customizer"}, "Hello World!");
  
  function SizeSelector(props){
    function sizeOptions(){
      return props.sizes.map(function(num){
        return(
          <option value={num} key={num} >{num}</option>
        )
      });
    }
    function onSizeChange(event){
      // console.log('Change event fired', event.target.value);
      props.sizeHandler(event.target.value);
    }
  	return(
    	<div className="field-group">
  			<label htmlFor="size-options">Size:</label>
  			<select defaultValue={props.size} name="sizeOptions" id="size-options" onChange={onSizeChange}>
  				{sizeOptions()}
  			</select>
  		</div>  
  	)
  }

  function ColorSelector(props){
    function colorOptions(){
      return props.colors.map(function(color){
        return(
          <option value={color} key={color}>{color}</option>
        )
      });
    }
    function onColorChange(event){
      // console.log('Change event fired', event.target.value);
      props.colorHandler(event.target.value);
    }
  	return(
    	<div className="field-group">
				<label htmlFor="color-options">Color:</label>
				<select defaultValue={props.color} name="colorOptions" id="color-options" onChange={onColorChange}>
					{colorOptions()}
				</select>
			</div>  
  	)
  }
  
  
  function ProductImage(props){
    // return React.createElement("img", {src:"../../../assets/red.jpg",alt:"Product image"});
    return <img src={`../../../assets/${props.color}.jpg`} alt="Product image" />;
  }
  
  // class ProductCustomizer extends React.Component
  var ProductCustomizer = createReactClass({
    getInitialState: function(){
      var sizes = window.Inventory.allSizes;
      var colors = window.Inventory.allColors;
      return {
        color: "red",
        colors: colors,
        size: 8,
        sizes: sizes
      };
    },
    
    sizeHandler: function(selectedSize){
      console.log('parent sizeHandler', selectedSize);
      
      var availColors = window.Inventory.bySize[selectedSize];
      // console.log(availColors.includes(this.state.color));
      this.setState({
        colors: availColors
      });
      if(!availColors.includes(this.state.color)){
        console.log(availColors[0],availColors[1], availColors[2], availColors[3])
        this.setState({
          color: availColors[0]
        });
      }
      
    },
    
    colorHandler: function(selectedColor){
      console.log('parent colorHandler', selectedColor);
      
      
      var availSize = window.Inventory.byColor[selectedColor];
      this.setState({
        sizes: availSize,
        color: selectedColor
      });
    },

    render: function(){
      return(
      <div className="customizer">
        <div className="product-image">
          <ProductImage color={this.state.color}/>
        </div>
        <div className="selectors">
          <SizeSelector size={this.state.size} sizes={this.state.sizes} sizeHandler={this.sizeHandler}/>
          <ColorSelector color={this.state.color} colors={this.state.colors} colorHandler={this.colorHandler}/>
        </div>
      </div>
    )}
  });
  
  // function ProductCustomizer(props){
  //   // return React.createElement("div", {className: "customizer"}, React.createElement("div", {className:"product-image"}, React.createElement(ProductImage)));
  //   return(
  //     <div className="customizer">
  //       <div className="product-image">
  //         <ProductImage color="green"/>
  //       </div>
  //       <div className="selectors">
  //         <SizeSelector size={8}/>
  //       </div>
  //     </div>
  //   )
  // }
  
  ReactDOM.render(<ProductCustomizer/>, document.getElementById("react-root"));
})();
