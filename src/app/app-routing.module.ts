import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccesslibraryComponent } from './admin-navbar/admin-accesslibrary/admin-accesslibrary.component';
import { AdminAccessmaterialsComponent } from './admin-navbar/admin-accessmaterials/admin-accessmaterials.component';
import { AdminAccessmentorsComponent } from './admin-navbar/admin-accessmentors/admin-accessmentors.component';
import { AdminAccesstechnicalheadsComponent } from './admin-navbar/admin-accesstechnicalheads/admin-accesstechnicalheads.component';
import { AdminAccesstudentsComponent } from './admin-navbar/admin-accesstudents/admin-accesstudents.component';
import { AdminAssignmentorsComponent } from './admin-navbar/admin-assignmentors/admin-assignmentors.component';
import { AdminAssigntechnicalheadsComponent } from './admin-navbar/admin-assigntechnicalheads/admin-assigntechnicalheads.component';
import { AdminLibrayComponent } from './admin-navbar/admin-libray/admin-libray.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminUploadmaterialsComponent } from './admin-navbar/admin-uploadmaterials/admin-uploadmaterials.component';
import { AdminUploadstudentsComponent } from './admin-navbar/admin-uploadstudents/admin-uploadstudents.component';
import { LoginComponent } from './login/login.component';
import { StationaryComponent } from './stationary/stationary.component';
import { StudentBooksComponent } from './student-navbar/student-books/student-books.component';
import { StudentHomeComponent } from './student-navbar/student-home/student-home.component';
import { StudentNavbarComponent } from './student-navbar/student-navbar.component';
import { StudentSpecificationComponent } from './student-navbar/student-specification/student-specification.component';
import { SuperadminCreateComponent } from './superadmin-navbar/superadmin-create/superadmin-create.component';
import { SuperadminHomeComponent } from './superadmin-navbar/superadmin-home/superadmin-home.component';
import { SuperadminNavbarComponent } from './superadmin-navbar/superadmin-navbar.component';
import { SuperadminUploadexcelComponent } from './superadmin-navbar/superadmin-uploadexcel/superadmin-uploadexcel.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'superadmin',component:SuperadminNavbarComponent,
  children:[
    {path:'',component:SuperadminHomeComponent,pathMatch:'full'},
    {path:'registeradmin',component:SuperadminCreateComponent},
    {path:'uploadusers',component:SuperadminUploadexcelComponent}
  ]},
  {path:'admin',component:AdminNavbarComponent,
  children:[
    {path:'',component:AdminUploadstudentsComponent,pathMatch:'full'},
    {path:'assignmentor',component:AdminAssignmentorsComponent},
    {path:'assigntechnicalhead',component:AdminAssigntechnicalheadsComponent},
    {path:'uploadmaterials',component:AdminUploadmaterialsComponent},
    {path:'library',component:AdminLibrayComponent},

    {path:'students',component:AdminAccesstudentsComponent},
    {path:'accessmentor',component:AdminAccessmentorsComponent},
    {path:'accesstechnicalhead',component:AdminAccesstechnicalheadsComponent},
    {path:'accessmaterials',component:AdminAccessmaterialsComponent},
    {path:'accesslibrary',component:AdminAccesslibraryComponent}
  ]},
  {path:'stationary',component:StationaryComponent},
  {path:'student',component:StudentNavbarComponent,children:[
    {path:'',component:StudentHomeComponent},
    {path:'specification',component:StudentSpecificationComponent},
    {path:'books',component:StudentBooksComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
