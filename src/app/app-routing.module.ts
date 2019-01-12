import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsComponent } from './us/us.component';
import { StrategyComponent } from './strategy/strategy.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: UsComponent },
  { path: 'strategy', component: StrategyComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
