import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SeriesComponent } from './components/series/series.component'
import { HomeComponent } from'./pages/home/home.component';

const routes: Routes = [
    {path:'series', component:SeriesComponent},
    {path:'home', component:HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
