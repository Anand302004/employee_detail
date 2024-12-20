import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ForthComponent } from './forth/forth.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { EightComponent } from './eight/eight.component';
import { NineComponent } from './nine/nine.component';
import { TenComponent } from './ten/ten.component';
import { ElevenComponent } from './eleven/eleven.component';

const routes: Routes = [
  {path:'first',component:FirstComponent},
  {path:'second', component:SecondComponent},
  {path:'three',component:ThirdComponent},
  {path:'four', component:ForthComponent},
  {path:'five', component:FiveComponent},
  {path:'six',component:SixComponent},
  {path:'seven',component:SevenComponent},
  {path:'eight', component:EightComponent},
  {path:'nine',component:NineComponent},
  {path:'ten',component:TenComponent},
  {path:'eleven',component:ElevenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
