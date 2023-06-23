import { NgModule } from '@angular/core';

import {  } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports:[
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
    ]
})
export class MaterialModule {}
