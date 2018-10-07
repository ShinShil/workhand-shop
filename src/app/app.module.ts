import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatSelectModule, MatToolbarModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { GoodCardComponent } from './components/good-card/good-card.component';
import { InMemoryServerService } from './dev/in-memory-server.service';
import { ServerService } from './services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { MenuService } from './services/menu.service';
import { GoodsComponent } from './pages/goods/goods.component';
import { GoodListComponent } from './components/good-list/good-list.component';
import { GoodFilterComponent } from './components/good-filter/good-filter.component';
import { GoodFilterService } from './services/good-filter.service';
import { FormsModule } from '@angular/forms';
import { StringFilterComponent } from './components/filters/string-filter/string-filter.component';
import { AmountFilterComponent } from './components/filters/amount-filter/amount-filter.component';
import { EditGoodComponent } from './pages/goods/edit-good/edit-good.component';
import { UserComponent } from './pages/user/user.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationComponent } from './pages/authentication/authentication.component';

const COMPONENTS = [
  AppComponent,
  MainComponent,
  FooterComponent,
  TopMenuComponent,
  GoodCardComponent,
  GoodsComponent,
  GoodListComponent,
  GoodFilterComponent,
  StringFilterComponent,
  AmountFilterComponent,
  EditGoodComponent,
  UserComponent,
  AuthenticationComponent
];

const SERVICES = [
  InMemoryServerService,
  ServerService,
  MenuService,
  GoodFilterService,
  AuthenticationService
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryServerService),
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule
  ],
  providers: [...SERVICES],
  bootstrap: [AppComponent]
})
export class AppModule { }
