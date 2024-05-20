import { HomePage } from "./models/home-page";
import { PageOne } from "./models/page-one";
import { PageTwo } from "./models/page-two";
import { PokemonArray } from "./types/pokemon-array";

export class MyApp {
  public message = "Hello World!";
  public pokemonArray: PokemonArray;

  public secondText = "sus";
  public buttonText = "Reset";

  constructor() {
    this.pokemonArray = new PokemonArray();

    // Bind the context of onButtonClick to the current instance
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  public onButtonClick(): void {
    if (this.pokemonArray) {
      this.pokemonArray.resetFilter();
    } else {
      console.error("pokemonArray is undefined");
    }
  }

  static routes = [
    {
      path: ["", "homepage"],
      component: HomePage,
      title: "Home",
    },
    {
      path: "/page-one",
      component: PageOne,
      title: "Page One",
    },
    {
      path: "/page-two",
      component: PageTwo,
      title: "Page Two",
    },
  ];
}
