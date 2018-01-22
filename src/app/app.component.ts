import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component communications';

  public employeeRecord:any = [
    { eName:"Arjun", eCity:"Raebareli", eSalary:30000 },
    { eName:"Deepankshi", eCity:"Nainital", eSalary:32000 },
    { eName:"Arpita", eCity:"Lucknow", eSalary:31000 },
    { eName:"Vinisha", eCity:"Dehradun", eSalary:35000 }
  ]
  
  public selectedEmployeeData:any;

  public getRecord(data:any){
  this.selectedEmployeeData = data;
}

// parent to child component: using @input parameter
// child to parent data passing: using @output parameter

}
