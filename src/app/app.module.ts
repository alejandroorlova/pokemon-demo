import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoResultsComponent } from './pokemon-info/no-results/no-results.component';
import { MainComponent } from './pokemon-info/main/main.component';
import { JsonViewerComponent } from './pokemon-info/json-viewer/json-viewer.component';
import { PokemonListComponent } from './pokemon-info/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-info/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoResultsComponent,
    MainComponent,
    JsonViewerComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
