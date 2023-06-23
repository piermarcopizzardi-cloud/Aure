import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { MaterialModule } from '../Material.module';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from "../header/header.component";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [

        ProfileComponent,
        EditComponent,
        MaterialModule,
        HeaderComponent
    ]
})
export class HomeComponent {


};
