import React, {Component} from 'react';
import { connect } from 'dva';
import List from '../components/List';

class ProductList extends Component {
  render() {
    const {productList} = this.props;
    return (
      <div>
        <List title={productList}/>
      </div>
    );
  }
}

ProductList.propTypes = {
};

function mapStateToProps(state) {
  return {
    productList: state.productList
  };
}

export default connect(mapStateToProps)(ProductList);
