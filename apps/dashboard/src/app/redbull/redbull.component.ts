import { Component, OnInit } from '@angular/core';
import { emptyRedbull, Redbull } from '@redbull/api-interfaces';
import { RedbullService } from '@redbull/core-data';
import { Observable } from 'rxjs';


@Component({
  selector: 'redbull-redbull',
  templateUrl: './redbull.component.html',
  styleUrls: ['./redbull.component.scss']
})
export class RedbullComponent implements OnInit {
  redbulls$: Observable<any>;
  selectedRedbull: Redbull;

  constructor(private redbullService: RedbullService) { }

  ngOnInit() {
    this.getRedbull()
    this.resetRedbull()
  }

  getRedbull() {
    this.redbulls$ = this.redbullService.all()
  }

  saveRedbull(redbull) {
    if(! redbull.id) {
      this.createRedbull(redbull);
    } else {
      this.updateRedbull(redbull);
    }
  }

  selectRedbull(redbull: Redbull) {
    this.selectedRedbull = redbull;
  }

  createRedbull(redbull: Redbull) {
    this.redbullService.create(redbull).subscribe(() => {
      this.getRedbull();
      this.resetRedbull();
    });
  }

  updateRedbull(redbull: Redbull) {
    this.redbullService.update(redbull).subscribe(() => {
      this.getRedbull();
      this.resetRedbull();
    });
  }

  deleteRedbull(redbull: Redbull){
    this.redbullService.delete(redbull.id).subscribe(() => {
      this.getRedbull();
      this.resetRedbull();
    });
  }

  resetRedbull() {
    this.selectRedbull(emptyRedbull);
  }

  cancel(){
    this.resetRedbull();
  }



}


