import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/services.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss']
})
export class UpdateListComponent {
  objectUpdatePr={
    name:"",
    image:"C:\\fakepath\\hinh-anh-cuon-sach-mo-ra_103644366.jpg",
    description:""
  }
  keyUpdate=0;
  constructor(
    private controlPr:ServiceService,
    private router:ActivatedRoute,
    ){
      this.router.paramMap.subscribe((data:any)=>{
        const id=Number(data.get("id"));
        console.log(id);
        this.controlPr.getOnePr(id).subscribe((dataOne:any)=>{
          this.objectUpdatePr=dataOne;
          console.log(dataOne);
          
        });
      });
    };
    OnupdatePr(){
      this.controlPr.updatePr(this.objectUpdatePr).subscribe();
      location.reload();
    }
  }
