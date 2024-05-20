import Aurelia /*, { StyleConfiguration }*/ from "aurelia";
import { MyApp } from "./my-app";
import { RouterConfiguration } from "@aurelia/router";
import { SussyButton } from "./components/sussy-button";
// Css files imported in this main file are NOT processed by style-loader
// They are for sharedStyles in shadowDOM.
// However, css files imported in other js/ts files are processed by style-loader.
// import shared from './shared.scss';

Aurelia.register(
  RouterConfiguration.customize({
    useUrlFragmentHash: false,
  }),
  SussyButton
)
  .app(MyApp)
  .start();
