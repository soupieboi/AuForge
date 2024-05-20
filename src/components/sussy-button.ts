import { bindable, customElement } from "aurelia";

@customElement("sussy-button")
export class SussyButton {
  @bindable public secondText: string = "";
  @bindable public buttonText: string = "";
  @bindable public onClick: Function;

  handleClick(event: Event): void {
    if (typeof this.onClick === "function") {
      this.onClick();
    }
  }
}
