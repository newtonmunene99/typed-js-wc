import { Component, h } from "@stencil/core";

@Component({
  tag: "test-wc",
  styleUrl: "test-wc.scss",
  shadow: true
})
export class TestWc {
  render() {
    return (
      <div>
        <p>Hello TestWc!</p>
        <typed-js-wc strings="bla,bla2" />
      </div>
    );
  }
}
