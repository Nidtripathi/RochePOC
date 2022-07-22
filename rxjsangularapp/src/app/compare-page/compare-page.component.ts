import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Search } from 'src/search.interface';

@Component({
  selector: 'app-compare-page',
  templateUrl: './compare-page.component.html',
  styleUrls: ['./compare-page.component.scss']
})
export class ComparePageComponent implements OnInit {
  selectedStudies = new FormControl('Study Summary');
  studies: string[] = ['Study Summary', 'Primary Objectives / Endpoints','Secondary Objective / Endpoints','Exploratory Objectives / Endpoints','Inclusion Criteria','Exclusion Criteria','Study Schema','Procedure Clarrification'];
  isDisabled=true;
  search = new FormGroup({
    text : new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
    
  }
  // onSubmit({ value, valid }:{value:Search, valid: boolean }){
  //   console.log(value,valid)
  // }
  get text(){
    return this.search.get('text')
  }
  
  onSubmit(f:any) {
    console.log('clicked')
  }
  trashCard(){
    console.log("clicked")
  }
  expandCard(){
    console.log('expanded')
  }
}
