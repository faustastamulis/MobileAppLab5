import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }

  Total: number=0;
years: number;
calculateinterest(): void {
this.Total = this.service.calculateinterest(this.years);
}
}


