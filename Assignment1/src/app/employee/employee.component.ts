import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  model = new Employee('','','',null,'','','','','','',[]);
  pageTitle = 'Registration Form';
  userQualification: string[];
  userExperience: string[];
  coding: any[];

  constructor() { }

  ngOnInit() {
    this.userQualification = ['B.Tech', 'M.Tech', 'Other'];
    this.userExperience = ['1 Year', '2 Year', 'More than 2 Years'];
    this.coding = [ 
      {langName: 'C/C++', isEnabled: false},
      {langName: 'Java', isEnabled: true}, 
      {langName: 'C#', isEnabled: true},
      {langName: 'PHP', isEnabled: false},
      {langName: 'Python', isEnabled: false} 
    ];
  }

  
  getQual(Qualification: string){
    alert(Qualification);
  }

  languageCheck(languages: string, event):void {
    if(event.target.checked)
    {
      this.model.userCoding.push(languages);
      //alert(languages);
    }
    else if(!event.target.checked)
    {
      var num = this.model.userCoding.indexOf(languages);
      this.model.userCoding.splice(num,1);
    }
  }

  getDetails(){
    console.log(this.model);
  }
}
