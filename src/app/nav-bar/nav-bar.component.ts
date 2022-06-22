import { Component, OnInit } from '@angular/core';
import { MycartService } from '../mycart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private mycartService: MycartService) { }
  counter(){ return this.mycartService.count()
  }
  ngOnInit(): void {
  }
 
}
