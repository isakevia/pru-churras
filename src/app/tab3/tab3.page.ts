import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  dado = 'assets/dado.jpg';
  dadogif = 'assets/dadogif.gif';

  constructor() {}

  tamanho = 0;
  valor = 0;

}
