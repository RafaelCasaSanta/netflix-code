import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FullBannerComponent } from './components/full-banner/full-banner.component';
import { ListTitlesComponent } from './components/list-titles/list-titles.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        FullBannerComponent,
        ListTitlesComponent,
        FooterComponent,
        TitleComponent,
        CarouselComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, IvyCarouselModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
