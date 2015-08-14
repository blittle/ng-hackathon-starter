import 'reflect-metadata';
import 'es6-shim';
import "zone.js";

import {Component, View, bootstrap, NgFor} from "angular2/angular2";
import {httpInjectables} from "angular2/http";
import {HashLocationStrategy, LocationStrategy, Router, AsyncRoute, RouterLink, RouteConfig, RouterOutlet, routerInjectables} from "angular2/router";
import {bind, Injectable} from "angular2/di";
import {EventEmitter, ObservableWrapper} from 'angular2/src/facade/async';


import Home from "./home";
import RepoList from "./repo-list";

@RouteConfig([
    {path: '/', as: "home", component:Home},
    {path: '/repo-list', as: "repo-list", component:RepoList},
		new AsyncRoute({path: '/dashboard/...', as: 'dashboard', loader: () => {
			return new Promise(function(resolve, reject) {
				System.import('src/dashboard.ts').then(function(a) {
					resolve(a.default);
				});
			});
		}})
])
@Component({
    selector: "app"
})
@View({
    directives: [RouterOutlet, RouterLink],
    template: `
        <nav>
            <a [router-link]="['/home']">Home</a>
            <a [router-link]="['/repo-list']">Repo List</a>
						<a [router-link]="['/dashboard']">Dashboard</a>
        </nav>
        <main>
            <router-outlet></router-outlet>
        </main>
    `
})
class App {}

bootstrap(App, [
    httpInjectables,
    routerInjectables,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
        success => console.log(`Bootstrap success`),
        error => console.log(error)
);
