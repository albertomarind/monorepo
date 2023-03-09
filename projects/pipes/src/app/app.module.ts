import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FilterByCategoryPipe } from './filter-by-category.pipe';
import { ExtraerPropiedadPipe } from './extraer-propiedad.pipe';
import { ProductComponent } from './product/product.component';
import { UpperFirstLetterPipe } from './upper-first-letter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        FilterByCategoryPipe,
        ExtraerPropiedadPipe,
        ProductComponent,
        UpperFirstLetterPipe
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    exports: [
        ProductComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
