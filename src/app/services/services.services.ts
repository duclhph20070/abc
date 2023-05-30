import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getAllPr(){
    return this.http.get(`http://localhost:3000/products`);
  }
  getOnePr(id:any){
    return this.http.get(`http://localhost:3000/products/${id}`);
  }
  updatePr(data:any){
    return this.http.put(`http://localhost:3000/products/${data.id}`,data);
  }
  addPr(data:any){
    return this.http.post(`http://localhost:3000/products`,data);
  }
  removePr(id:any){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
