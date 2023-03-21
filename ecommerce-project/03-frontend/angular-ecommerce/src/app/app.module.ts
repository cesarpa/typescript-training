import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http'
import { ProductService } from './services/product.service';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> 27502088fd5fc6d86b4fd5f88cd46524714b1eab

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
