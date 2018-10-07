import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { GoodsComponent } from "./pages/goods/goods.component";
import { AuthenticationComponent } from "./pages/authentication/authentication.component";
import { UserComponent } from "./pages/user/user.component";
import { EditGoodComponent } from "./pages/goods/edit-good/edit-good.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: MainComponent },
    { path: 'goods', component: GoodsComponent },
    { path: 'authenticate', component: AuthenticationComponent },
    { path: 'user', component: UserComponent },
    { path: 'goods/new', component: EditGoodComponent },
    { path: 'goods/:id', component: EditGoodComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}