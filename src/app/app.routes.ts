import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductCardComponent } from './product-card/product-card.component';

export const routes: Routes = [{path: 'home', component: HomeComponent },{path: 'about', component: AboutComponent },{path: 'card', component: ProductCardComponent }];
