import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';

import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';

import { AppComponent } from './app.component';
import { TypingComponent } from './typing/typing.component';
import { PagesComponent } from './pages/pages.component';
import { PwGeneratorComponent } from './pw-generator/pw-generator.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'pw-generator', component: PwGeneratorComponent },
  { path: 'typing', component: TypingComponent },
  { path: 'pages', component: PagesComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
  {
    path: '',
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule)
  },
  {
    path: '',
    loadChildren: () => import('./collections/collections.module').then(m => m.CollectionsModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TypingComponent,
    PagesComponent,
    PwGeneratorComponent,
    ClassDirective,
    TimesDirective,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ElementsModule,
    CollectionsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
