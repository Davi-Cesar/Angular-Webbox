import { ProductService } from './../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  
  product: Product;

  constructor(
    private router: Router, 
    private productService: ProductService, 
    private route: ActivatedRoute)
    { }

  ngOnInit(): void {
    //Pegando parametro map apartir do id
    const id = this.route.snapshot.paramMap.get('id');
    //
    this.productService.readById(id).subscribe(product=>{
      this.product = product;
    });

  }

  deleteProduct(): void { 
    this.productService.delete(this.product).subscribe(() => {
      this.productService.showMessage('Produto deletado com sucesso!');
      this.router.navigate(['/products']);
    })

  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
