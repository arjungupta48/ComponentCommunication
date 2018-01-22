import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input('name') employeeName:string;
  @Input('city') employeeCity:string;
  @Input('salary') employeeSalary:number;
  @Output() sendRecord:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public emitSendRecordEvent(){
    let selectedEmployeeObj:any = {
      selectedName: this.employeeName,
      selectedCity: this.employeeCity,
      selectedSalary: this.employeeSalary
    };
    this.sendRecord.emit(selectedEmployeeObj);
  }

}
