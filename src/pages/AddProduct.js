import React, { Component } from "react";
import ProductAdd from "../components/products/ProductAdd";
import { Row, Col } from "antd";
import AddBrand from "../components/bandlist/AddBrand";

export class AddProduct extends Component {
  render() {
    return (
      <Row type="flex" justify="space-around">
        <Col span={6}>
        <h3>ADD BRAND</h3>
          <AddBrand />
        </Col>
        <Col span={8}>
        <h3>ADD PRODUCT</h3>
          <ProductAdd />
        </Col>
      </Row>
    );
  }
}

export default AddProduct;
