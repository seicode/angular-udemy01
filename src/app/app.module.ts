import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TypingComponent } from './typing/typing.component';
import { PagesComponent } from './pages/pages.component';
import { PwGeneratorComponent } from './pw-generator/pw-generator.component';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';

const appRoutes: Routes = [
  { path: 'pw-generator', component: PwGeneratorComponent },
  { path: 'typing', component: TypingComponent },
  { path: 'pages', component: PagesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TypingComponent,
    PagesComponent,
    PwGeneratorComponent,
    ClassDirective,
    TimesDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
