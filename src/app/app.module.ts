import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectFlightComponent } from './select-flight/select-flight.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MessagesComponent } from './messages/messages.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SelectFlightResolverService } from './select-flight/resolvers/select-flight-resolver';
import { MatInputModule, MatNativeDateModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { SpaceFlightPipe } from './pipes/space-flight.pipe';
import { TicketInformationComponent } from './ticket-information/ticket-information.component';
import {MatDatepickerModule} from '@angular/material/datepicker';


const config: SocketIoConfig = { url: environment.url, options: {} };

const MaterialModules = [
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatGridListModule,
  MatListModule,
  MatDatepickerModule,
  MatNativeDateModule
]

const routes: Routes = [
  {path: '', component: SelectFlightComponent, resolve: { data: SelectFlightResolverService }},
  {path: 'seat-selection/:flightNumber', component: SeatSelectionComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SelectFlightComponent,
    MessagesComponent,
    FlightDetailsComponent,
    SeatSelectionComponent,
    SpaceFlightPipe,
    TicketInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MaterialModules,
    BrowserAnimationsModule,
    //connect as soon as program loads
    SocketIoModule.forRoot(config)

  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
