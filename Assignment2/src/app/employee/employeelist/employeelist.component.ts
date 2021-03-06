import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from 'src/app/employeeservice.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  details: Array<Employee>;
  delConfirm;
  
  constructor(private _empget: EmployeeserviceService) {
    this.details = new Array<Employee>();
  }

  ngOnInit() {
    this.details = this._empget.getDetails();
    console.log(this.details);
  }

  delete(event: Employee) {
    this.delConfirm = confirm('Are you sure you want to delete this record?');
    if (this.delConfirm) {
      let ids = event;
      this.details.splice(this.details.indexOf(ids),1);
    }
  }
}
