import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/services.services';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent{
  constructor(private controlPr:ServiceService){}

  objectAddPr={
    name: "",
    image: "C:\\fakepath\\hinh-anh-cuon-sach-mo-ra_103644366.jpg",
    description: ""
  }
  OnaddPr(){
    console.log(this.objectAddPr);
    this.controlPr.addPr(this.objectAddPr).subscribe();
    location.reload();
  }
}