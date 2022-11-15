import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-image',
  templateUrl: './detail-image.component.html',
  styleUrls: ['./detail-image.component.scss']
})
export class DetailImageComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  categories: any;

  ngOnInit(): void {
    this.data.tags.split(',');
    this.categories = this.data.tags.split(',');

  }

}
