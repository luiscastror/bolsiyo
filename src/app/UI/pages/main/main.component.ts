import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainService } from 'src/app/services/main.service';
import { DetailImageComponent } from '../../components/modals/detail-image/detail-image.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  images: any[] = [];

  constructor(
    private MainService: MainService,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadImages()
  }


  loadImages() {
    this.MainService.get().subscribe((response: any) => {
      console.log(response)
      this.images = response.hits;
    }, error => {
      alert("Error http");
    }, () => {
      console.log("Complete successfly")
    })
  }


  showDetails(image: any) {
    const modal = this.matDialog.open(DetailImageComponent, {
      minWidth: "50%"
    });
  }

}
