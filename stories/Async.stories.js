import React from "react";

const EXPECTED_VALUE = "THIS IS SO DONE";
const TIMEOUT = 5;

class AsyncTestComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: EXPECTED_VALUE,
      });
    }, TIMEOUT);
  }

  render() {
    const { value } = this.state;
    return <h1>{value}</h1>;
  }
}

export default {
  title: "Async",
};

export const With5MsTimeoutSimulatingAsyncOperation = () => (
  <AsyncTestComponent />
);
