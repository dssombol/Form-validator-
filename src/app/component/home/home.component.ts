import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../help/must-match.validator'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
formgroups : FormGroup;
submitted = false;
  constructor(private FormBuilder:FormBuilder) { }
  ngOnInit() {
    this.formgroups = this.FormBuilder.group({
    fname:['',Validators.required],
    lname:['',Validators.required],
    pword:['',[Validators.required, Validators.minLength(6)]],
    cword:['',Validators.required]
    },{
      Validators: MustMatch('pword', 'cword')
    });
  }
  get f(){return this.formgroups.controls;}
  onSubmit(){
           // stop here if form is invalid
    this.submitted = true;
    if(this.formgroups.invalid){
      return;
    }
    alert('SUCCESS!! :-)\n\n'+JSON.stringify(this.formgroups.value));
  }

}
