import React, { Component } from "react";
import { connect } from "react-redux";

import { getList } from "./api";
// import { toast } from "@/utils/message";

import "./style.scss";

import { setCount } from "@/store/actions";

export default
@connect((state) => ({
  count: state.count.count,
}))
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // toast("你大爷");
    this.getData();
  }

  async getData() {
    try {
      const data = await getList();
      console.log(data);
    } catch (error) {
      console.log(error, "error");
    }
  }

  render() {
    return (
      <div className="home-wrapper">
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
          className="home-jump-to"
          onClick={() => this.props.history.push("/test")}
        >
          跳转/test
        </button>
      </div>
    );
  }
}
