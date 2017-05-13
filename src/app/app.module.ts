import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

// service
import { BookService } from './books/book.service';
import { BookCreateComponent } from './books/book-create/book-create.component';
import { BookComponent } from './books/book/book.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserComponent } from './user/user.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarRightComponent } from './sidebar-right/sidebar-right.component';
import { SocialMediaComponent } from './social-media/social-media.component';

// Routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'book/:id',   component: BookComponent },
  { path: 'create',   component: BookCreateComponent },
  { path: 'about',   component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallery', component: GalleryComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookCreateComponent,
    BookComponent,
    NavComponentComponent,
    MainFooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OrderComponent,
    GalleryComponent,
    UserComponent,
    EmployeeLoginComponent,
    RegisterComponent,
    SidebarRightComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
