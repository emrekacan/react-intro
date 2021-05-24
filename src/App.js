import React from 'react';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';

export default function App() {
  let productInfo = {title:"Product Listttt"}
  let categoryInfo = {title:"Category Listttt"}
  return (
    <div>
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
