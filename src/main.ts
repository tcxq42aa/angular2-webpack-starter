/**
 * Created by charles on 16/12/2.
 */
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import "./main.css";
// 开启HMR
if (module["hot"]) {
    module["hot"].accept();
}
platformBrowserDynamic().bootstrapModule(AppModule)