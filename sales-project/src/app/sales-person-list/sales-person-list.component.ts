import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component-bootstrap.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[] =
  [new SalesPerson("Cesar", "Palacios", "cesar@gmail.com", 5000),
  new SalesPerson("Anyela", "Caicedo", "anyela@gmail.com", 7000),
  new SalesPerson("Anyela", "Caicedo", "anyela@gmail.com", 10000)
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
