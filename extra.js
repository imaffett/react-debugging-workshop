/*
Combining components together
The most fundamental and useful part of React is that
you can create any number of components and nest them
just like you would any HTML tag. You pass down data
to your components from parent components in a one-way
data flow.
Note: If you use something like Flux/Reflux you have a bit
power when it comes to data storage and event handling.
Using a Flux-like framework with React is very helpful.

https://gist.github.com/danawoodman/9cfddb1a0c934a35f31a
*/

var ProductItem = React.createClass({
  render: function () {
    console.log("rendering each item",this.props);
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
});


var ProductsList = React.createClass({
  render: function () {
    var products = this.props.products.map(function (product, index) {
      return (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
          index={index} />
      );
    });

    return (
        <table>
          <tbody>
          {products}
          </tbody>
        </table>
    );
  },
  addItem:function(evt){
    products.push({
      name:'Test',
      price:123
    });
    console.log(products);
  }
});

var ProductContainer = React.createClass({
  getInitialState:function(){
    return {
      products:this.props.products
    };
  },
  render:function() {
    console.log("render called");
    return (
      <div>
        <ProductsList products={this.state.products}/>
        <a href="#" onClick={this.addItem}>Add Item</a>
      </div>
    );
  },
  addItem:function(){
    console.log('called');
    products.push({
      name:'Extra Product',
      price:100
    });
    this.setState({products:products})
  }
})

// Could come from an API, LocalStorage, another component, etc...
var products = [
  { name: 'Toast', price: 1499 },
  { name: 'Bacon', price: 3245 },
  { name: 'Coffee', price: 300 }
];

ReactDOM.render(<ProductContainer products={products} />, document.getElementById("ProductList"));