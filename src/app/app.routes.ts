import { RouterModule, Routes } from '@angular/router';
// import { PortafolioComponent } from './components/portafolio/portafolio.component';
// import { AboutComponent } from './components/about/about.component';
// import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { PortafolioComponent, AboutComponent, PortfolioItemComponent, SearchComponent } from './components/index.paginas';


const APP_ROUTES: Routes = [
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent},
  { path: 'producto/:id' , component: PortfolioItemComponent},
  { path: 'buscar/:termino' , component: SearchComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES, {useHash: true});
