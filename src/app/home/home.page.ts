import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  hello: string = "Salut Monde !";
  nb: number = 0;
  isHidden: boolean = true;
  name: string = "gros-minet";
  fruits: string[] = ["Banane", "Mûre", "Prunelle", "Pomme", "Amande"]
  colorText: string = "red"
  constructor() {}

  clickMe() {
    this.hello = "Ce tombeau sera votre tombeau";
    this.nb++;
    this.isHidden = !this.isHidden;
  }

}
