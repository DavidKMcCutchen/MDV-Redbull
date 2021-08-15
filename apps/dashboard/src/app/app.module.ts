import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app-routing.module';
import { RedbullComponent } from './redbull/redbull.component';
import { RedbullListComponent } from './redbull/redbull-list/redbull-list.component';
import { RedbullDetailsComponent } from './redbull/redbull-details/redbull-details.component';
import { MaterialModule } from '@redbull/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CoreDataModule } from '@redbull/core-data';




@NgModule({
  declarations: [AppComponent, RedbullComponent, RedbullListComponent, RedbullDetailsComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    RoutingModule,
    BrowserAnimationsModule, 
    CoreDataModule,
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
