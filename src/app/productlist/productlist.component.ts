import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
  @ViewChild ('loading') loading!:ElementRef;
  

  
productData:Iproduct[] = [];


constructor(private _ProductService:ProductService){}


ngOnInit(): void {
  this._ProductService.getProduct().subscribe({
next:(res)=>{
console.log(res)
this.productData = res ;
},
error:(res)=>{
  console.log(res);
  
}
  })
 setTimeout(() => {
  this.loading.nativeElement.classList.add('d-none')
 }, 1000);
}




}
