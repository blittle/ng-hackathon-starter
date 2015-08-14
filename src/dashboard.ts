import {Component, View} from "angular2/angular2";
import {RouteConfig, RouterOutlet, Redirect} from 'angular2/router';

import DashboardContent from './dashboard-content';

@RouteConfig([
		new Redirect({path: '', redirectTo: '/content'}),
		{path: '/content', as: "dashboard-content", component:DashboardContent},
])
@Component({
	selector: 'dashboard'
})
@View({
	directives: [RouterOutlet],
	template: `
		<div>Dashboard</div>
		<router-outlet></router-outlet>
	`
})
export default class Dashboard {
	name:string = 'ng-dashboard';
}
