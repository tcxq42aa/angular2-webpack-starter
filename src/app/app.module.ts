/**
 * Created by charles on 16/12/2.
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgdCoreModule } from "ngdui-core";
import { NgdComplexModule } from "ngdui-complex";
import { AppComponent } from "./app.component";
@NgModule({
    imports: [BrowserModule, NgdCoreModule, NgdComplexModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}