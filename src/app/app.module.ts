/**
 * Created by charles on 16/12/2.
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgdCoreModule } from "ngdui-core";
import { NgdComplexModule } from "ngdui-complex";
import { AppComponent } from "./app.component";
@NgModule({
    imports: [BrowserModule, NgdCoreModule.forRoot(), NgdComplexModule.forRoot()],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}