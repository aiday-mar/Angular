import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostdetailsComponent } from './postdetails/postdetails.component'

const routes: Routes = [
    // default component is the AppComponent
    { path: '', component: AppComponent },
    { path: 'post/:postID', component: PostdetailsComponent },

];

export const appRoutingModule = RouterModule.forRoot(routes);
