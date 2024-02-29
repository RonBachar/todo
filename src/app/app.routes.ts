import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DefaultComponent } from './shared/layouts/default/default.component';
import { MasterComponent } from './shared/layouts/master/master.component';
import { TodoComponent } from './pages/todo/todo.component';

export const routes: Routes = [
  {
    // Define the first route path as an empty string, which matches the base URL.
    path: '',
    // Assign the DefaultComponent as the component for this route, meaning it will render when the base URL is visited.
    component: DefaultComponent,
    // Specify child routes for the DefaultComponent. In this case, it's another empty path that renders the LoginComponent,
    // effectively making the LoginComponent the default page under the DefaultComponent layout.
    children: [{ path: '', component: LoginComponent }],
  },
  {
    // Define another route path as an empty string. This may seem like a duplicate, but it works in conjunction with child routes.
    path: '',
    // Assign the MasterComponent as the component for this route.
    component: MasterComponent,
    // Specify child routes for the MasterComponent. Here, we have a 'todo' path that renders the TodoComponent,
    // meaning when the '/todo' URL is visited, the TodoComponent is rendered inside the MasterComponent layout.
    children: [{ path: 'todo', component: TodoComponent }],
  },
];
