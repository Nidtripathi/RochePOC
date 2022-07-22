import {
  CdkDrag,
    CdkDragDrop,
    CdkDropList,
    moveItemInArray,
    transferArrayItem,
  } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drap-drop',
  templateUrl: './drap-drop.component.html',
  styleUrls: ['./drap-drop.component.scss']
})
export class DrapDropComponent implements OnInit {
  isDisabled = true;
  items = ['Carrots', 'Tomatoes', 'Onions', 'Apples', 'Avocados','Oranges', 'Bananas', 'Cucumbers'];

  basket = [''];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  canDrop(item: CdkDrag<any>, list: CdkDropList<any>){
    console.log(list.getSortedItems().length);
    return (
      list && list.getSortedItems().length <= 4
    );
  }

  dropListEnterPredicate(list: []) {
    return function (drag: CdkDrag, drop: CdkDropList) {
      console.log(drag);
      console.log(drop.getSortedItems().length);
      // return list.length>0;
      return drop.getSortedItems().length
    };
  }
  constructor() { }

  ngOnInit(): void {
  }

}
