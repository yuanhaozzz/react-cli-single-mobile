import React, { Component } from "react";

import { connect } from "react-redux";
import { setCount } from "@/store/actions";

import "./style.scss";

@connect((state) => ({
  count: state.count.count,
}))
class Test extends Component {
  render() {
    return (
      <div className="test-wrapper">
        <h2>欢迎来到浩哥单页面移动端模版</h2>
        <div className="home-content flex-center">
          <p>{this.props.count}</p>
          <button
            onClick={() =>
              this.props.dispatch(setCount({ count: this.props.count + 1 }))
            }
          >
            增加
          </button>
        </div>
        <button
          onClick={() => this.props.history.push("/")}
          className="test-jump-to"
        >
          跳转/
        </button>
      </div>
    );
  }
}

export default Test;
