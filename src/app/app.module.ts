import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './interface-example/product.component';
import { LcParentComponent } from './life-cycle/lc-parent.component';
import { LcChildComponent } from './life-cycle/lc-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LcParentComponent,
    LcChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
