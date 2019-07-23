import { Component, Prop, h } from "@stencil/core";
import Typed from "typed.js";

@Component({
  tag: "typed-js-wc",
  styleUrl: "typed-js-wc.scss",
  shadow: true
})
export class TypedJsWc {
  @Prop() strings: string;
  @Prop() options: any;
  typeddiv: any;
  strs: Array<string>;

  componentWillLoad() {
    this.strs = this.strings
      .split(",")
      .map(str => (str.includes("&") ? str.replace("&", `&amp;`) : str));
  }

  componentDidLoad() {
    var options = {
      strings: this.strs,
      ...this.options
    };

    new Typed(this.typeddiv, options);
  }

  render() {
    return (
      <div id="typeddiv">
        <slot name="fixed" />
        <span ref={el => (this.typeddiv = el)} />
      </div>
    );
  }
}
