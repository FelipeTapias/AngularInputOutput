import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  title = "Yo venga desde el padre"

  constructor() { }

  ngOnInit(): void {
  }

  getSon(data) {
    console.log(data);
  }

}
