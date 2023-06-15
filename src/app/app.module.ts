import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardHeader, MatCardModule, MatCardTitle} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { EditComponent } from './home/profile/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    ProfileComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
