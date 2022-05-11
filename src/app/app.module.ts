import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SuperadminNavbarComponent } from './superadmin-navbar/superadmin-navbar.component';
import { SuperadminHomeComponent } from './superadmin-navbar/superadmin-home/superadmin-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SuperadminCreateComponent } from './superadmin-navbar/superadmin-create/superadmin-create.component';
import { SuperadminUploadexcelComponent } from './superadmin-navbar/superadmin-uploadexcel/superadmin-uploadexcel.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminUploadstudentsComponent } from './admin-navbar/admin-uploadstudents/admin-uploadstudents.component';
import { AdminAssignmentorsComponent } from './admin-navbar/admin-assignmentors/admin-assignmentors.component';
import { AdminAssigntechnicalheadsComponent } from './admin-navbar/admin-assigntechnicalheads/admin-assigntechnicalheads.component';
import { AdminUploadmaterialsComponent } from './admin-navbar/admin-uploadmaterials/admin-uploadmaterials.component';
import { AdminLibrayComponent } from './admin-navbar/admin-libray/admin-libray.component';
import { StationaryComponent } from './stationary/stationary.component';
import { AdminAccesstudentsComponent } from './admin-navbar/admin-accesstudents/admin-accesstudents.component';
import { AdminAccessmentorsComponent } from './admin-navbar/admin-accessmentors/admin-accessmentors.component';
import { AdminAccessmaterialsComponent } from './admin-navbar/admin-accessmaterials/admin-accessmaterials.component';
import { AdminAccesstechnicalheadsComponent } from './admin-navbar/admin-accesstechnicalheads/admin-accesstechnicalheads.component';
import { AdminAccesslibraryComponent } from './admin-navbar/admin-accesslibrary/admin-accesslibrary.component';
import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { StudentHomeComponent } from './student-navbar/student-home/student-home.component';
import { StudentSpecificationComponent } from './student-navbar/student-specification/student-specification.component';
import { StudentBooksComponent } from './student-navbar/student-books/student-books.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuperadminNavbarComponent,
    SuperadminHomeComponent,
    SuperadminCreateComponent,
    SuperadminUploadexcelComponent,
    AdminNavbarComponent,
    AdminUploadstudentsComponent,
    AdminAssignmentorsComponent,
    AdminAssigntechnicalheadsComponent,
    AdminUploadmaterialsComponent,
    AdminLibrayComponent,
    StationaryComponent,
    AdminAccesstudentsComponent,
    AdminAccessmentorsComponent,
    AdminAccessmaterialsComponent,
    AdminAccesstechnicalheadsComponent,
    AdminAccesslibraryComponent,
    StudentNavbarComponent,
    StudentHomeComponent,
    StudentSpecificationComponent,
    StudentBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
