import * as React from "react";
import { Story } from "@storybook/react";

const EXPECTED_VALUE = "THIS IS SO DONE";
const TIMEOUT = 5;

class AsyncTestComponent extends React.Component<{}, { value: string }> {
  state = { value: "" };

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

export const With5MsTimeoutSimulatingAsyncOperation: Story = () => (
  <AsyncTestComponent />
);
