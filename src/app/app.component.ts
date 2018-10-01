import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
    <admin-navbar></admin-navbar>
        <sd-navbar></sd-navbar>
        <router-outlet></router-outlet>
      `,
      styles: []
})
export class AppComponent {

}
