import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Redbull } from '@redbull/api-interfaces';

@Component({
  selector: 'redbull-redbull-details',
  templateUrl: './redbull-details.component.html',
  styleUrls: ['./redbull-details.component.scss']
})
export class RedbullDetailsComponent {
  currentRedbull: Redbull;
  originalTitle: string;

  @Output() saved = new EventEmitter()
  @Output() cancelled = new EventEmitter()
  @Input() set redbull(value) {
    if(value) this.originalTitle = value.title;
    this.currentRedbull = Object.assign({}, value)
  }

  save(redbull){
    this.saved.emit(redbull);
  }

  cancel(){
    this.cancelled.emit();
  }
}
