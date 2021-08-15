import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Redbull } from '@redbull/api-interfaces'

@Component({
  selector: 'redbull-redbull-list',
  templateUrl: './redbull-list.component.html',
  styleUrls: ['./redbull-list.component.scss']
})
export class RedbullListComponent {
  @Input() redbulls:Redbull[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
