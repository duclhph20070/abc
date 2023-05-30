import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/services.services';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  getAllPr: any[] = [];
  constructor(
    private AllPr: ServiceService
  ) {
    this.AllPr.getAllPr().subscribe((data: any) => {
      this.getAllPr = data;
      console.log(data);
    });
  };
  RemovePr(id: any) {
    const sem = window.confirm("Bạn chắc chắn muốn xóa ???");
    if (sem) {
      this.AllPr.removePr(id).subscribe();
      this.getAllPr = this.getAllPr.filter(item => item.id != id);
      location.reload();
    };
  };
  UpdatePr(id: any) {

  };

};
