import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() intTitle : string;
  @Output() outTitle = new EventEmitter<string>();
  newTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.newTitle = "Valor de regreso despues de pasar por el hijo";
    this.outTitle.emit(this.newTitle);
  }

}
