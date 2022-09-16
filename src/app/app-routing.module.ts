import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './main/jobs/jobs.component';
import { MainpageComponent } from './main/mainpage/mainpage.component';
import { SecondpageComponent } from './main/secondpage/secondpage.component';
import { ThirdpageComponent } from './main/thirdpage/thirdpage.component';

const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  {
    path: 'jobs', component: MainpageComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: JobsComponent },
      { path: 'new', component: SecondpageComponent },
      { path: 'edit/:id', component: ThirdpageComponent },

    ]
  },

  { path: '**', redirectTo: 'jobs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
