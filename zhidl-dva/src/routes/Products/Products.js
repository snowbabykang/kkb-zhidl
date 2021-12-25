/*
 * @author: zhidl
 * @Date: 2021-11-12 17:02:38
 * @description:
 * @LastEditTime: 2021-11-14 20:35:20
 */

import React, { useState } from "react";
import { connect } from "dva";
import ProductList from "../../components/ProductList";

const Products = (props) => {
  console.log(props, "props");

  function add() {
    props.dispatch({
      type: "products/set",
      payload: "add",
    });
  }

  function del() {
    props.dispatch({
      type: "products/set",
      payload: "del",
    });
  }

  function init() {
    props.dispatch({
      type: "products/initState"
    });
  }
  return (
    <div>
      <div>{props.products}</div>
      <div onClick={add}>增加</div>
      <div onClick={del}>减少</div>
      <div onClick={init}>初始化state</div>
    </div>
  );
};

export default connect((state) => {
  return { products: state.products };
})(Products);

// mapStateToProps
// mapDispatchToProps
// mergeProps
// mergeProps
