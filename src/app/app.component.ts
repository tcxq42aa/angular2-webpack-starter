/**
 * Created by charles on 16/12/2.
 */
import { Component } from "@angular/core";
import { NgdFeedbackService } from "ngdui-core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor(private feedbackService: NgdFeedbackService) {

    }

    show() {
        this.feedbackService.success("Oh my god!");
    }
}