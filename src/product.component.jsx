import { Component } from "react";
import ProductImg from "./product_img.component";
import Title from "./title.component";
class ProductClass extends Component {
    constructor(props){
super()
    }
  render() {
    return (
      <div>
        <Title text="law"/>
        <ProductImg img="law.png"/>
      </div>
    );
  }
}
export default ProductClass;
