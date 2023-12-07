import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ApplicationModule } from './application/application.module';
import { DomainModule } from './domain/domain.module';
import { PresentationComponent } from './presentation/presentation.component';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';

const COMPONENTS = [
  PresentationComponent
]

const ARCHITECT_MODULES = [
  ApplicationModule,
  DomainModule,
  SharedModule
]

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ARCHITECT_MODULES,
    ToastrModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
