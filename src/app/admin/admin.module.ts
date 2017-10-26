import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../core/app-routing.module';


import { ItemsComponent } from './items/items.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';

import {MatIconModule, MatButtonModule, MatCardModule, MatExpansionModule, MatInputModule, MatSelectModule} from '@angular/material';

import { DatabaseService } from '../database.service';
import { AuthService } from '../core/auth.service';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [
    ItemsComponent,
    UsersComponent,
    AdminComponent
  ],
  providers: [DatabaseService, AuthService]
})
export class AdminModule { }