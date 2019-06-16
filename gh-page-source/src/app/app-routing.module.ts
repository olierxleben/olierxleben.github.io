import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutmePageComponent } from './components/aboutme-page/aboutme-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'about', component: AboutmePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
