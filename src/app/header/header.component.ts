import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('rC') routeChanged =  new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onChangeRoute(serverName){
   // console.log(serverName)
    this.routeChanged.emit(serverName)
  }
}
