import { Component, signal } from '@angular/core';
import { TabbedPaneComponent } from "./tabs/tabbed-pane.component";
import { TabComponent } from "./tabs/tab.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [TabbedPaneComponent, TabComponent]
})
export class AppComponent {
  current = signal(0);
}
