import {Component, View} from "angular2/angular2";

@Component({
	selector: 'dashboard-content'
})
@View({
	template: `
		<div>Dashboard Content</div>
	`
})
export default class DashboardContent {
	name:string = 'ng-dashboard';
}
