import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  displayedColumns = ['position', 'name', 'department'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement /*Problem2*/ {
  name: string;
  position: number;
  department: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position:200010081 , name:'Deepanshu Verma' ,  department: 'Aerospace'},
  {position:200020038 , name:'Adish Shah' ,  department: 'Chemical'},
  {position:200020132 , name:'Bhavit Gupta' ,  department: 'Chemical'},
  {position:200040035 , name:'Ayush Parmar' ,  department: 'Civil'},
  {position:200040072 , name:'Shah Khan' ,  department: 'Mechanical'},
  {position:200010005 , name:'Dhwanil Patel' ,  department: 'Aerospace'},
  {position:200020154 , name:'Utkarsh Agiwal' ,  department: 'Chemical'},
  {position:200050032 , name:'Jason Roy' ,  department:'Computer Sc.'},
  {position:200040021 , name:'Himanshu Singh' ,  department: 'Mechanical'},
  {position:200020145 , name:'Sumit Kumar'  ,  department: 'Chemical'},
  {position:200010034 , name:'Vishy Anand' ,  department: 'Aerospace'},
];

