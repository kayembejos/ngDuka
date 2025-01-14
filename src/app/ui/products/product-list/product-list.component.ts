import { Component, inject, input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ApiService } from '../../../core/services/api.service';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit, OnDestroy {
  products?: Product[];
  api = inject(ApiService);
  sectionTitle = input.required<string>();
  query = input.required<string>();
  queryLimitCount = input<number>();
  productsSub?: Subscription;

  ngOnInit(): void {
    this.productsSub = this.api
      .getProductsByCategory(this.query(), this.queryLimitCount())
      .subscribe((products) => {
        this.products = products;
      });
  }

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }
}
