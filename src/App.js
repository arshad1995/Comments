import React, { Component } from "react";
import "./App.css";
import faker from "faker";

import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            name={"arshad"}
            timeAgo={"Today at 4:45PM"}
            content={"nice blog post"}
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            name={"salman"}
            timeAgo={"Today at 8:15AM"}
            content={"i like the subject"}
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail
            name={"tajammul"}
            timeAgo={"Today at 3:35PM"}
            content={"nice one"}
            avatar={faker.image.avatar()}
          />
        </ApprovalCard>
      </div>
    );
  }
}

export default App;
