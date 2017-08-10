import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { LoginComponent } from './home/login/login.component';
import { GalleryComponent } from './home/gallery/gallery.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    LoginComponent,
    GalleryComponent,
    NosotrosComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
