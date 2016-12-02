/**
 * Created by charles on 16/12/2.
 */
import { platformBrowser } from "@angular/platform-browser";
import { AppModuleNgFactory } from "../aot/src/app/app.module.ngfactory";
import "./main.css";
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);