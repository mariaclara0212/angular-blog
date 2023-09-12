import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  // PROPRIEDADES
  @Input()
  photCover:string = ""

  @Input()
  cardTitle:string = "Nova Série Anunciada"

  constructor() { }

  ngOnInit(): void {
  }

}
