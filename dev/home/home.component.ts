//Angular
import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Http, Headers} from 'angular2/http';
import { Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


//component
import {ProjetsListComponent} from '../projets/projets-list.component';
import {TeamListComponent} from '../teams/team-list.component';
import {NewProjetComponent} from "../projets/new-project.component";
import {NewMemberComponent} from "../teams/new-member.component";
import {ImportProjetComponent} from "../projets/import-project.component";
import {ExportProjetComponent} from "../projets/export-project.component";
import {SaveProjetComponent} from "../projets/save-project.component";
import {ArchiveProjetsComponent} from "../projets/archive-project.component";
import {profileComponent} from "../home/profile.component";

@Component({
    selector: 'home',
    templateUrl: './dev/home/home.html',
    directives: [ROUTER_DIRECTIVES]

})
@RouteConfig([   
    { path: '/', component: ProjetsListComponent,name: 'Projets', useAsDefault: true},
    {path: '/PROJECT', name: 'NewProjet', component: NewProjetComponent},
    {path: '/projects/importprojet', name: 'ImportProjet', component: ImportProjetComponent},
    {path: '/projects/exportprojet', name: 'ExportProjet', component: ExportProjetComponent},
    {path: '/projects/saveprojet', name: 'SaveProjet', component: SaveProjetComponent},
    {path: '/projects/archives', name: 'Archives', component: ArchiveProjetsComponent},
    {path: '/teams', name: 'Teams', component: TeamListComponent},
    {path: '/teams/newmember', name: 'NewMember', component: NewMemberComponent}
    {path: '/profile', name: 'Profile', component: profileComponent}
       
])

export class HomeComponent{
    
           
    public username: String;
    public password: String;
    
constructor(private router: Router, private http: Http) {
	  this.username = localStorage.getItem('username');
	  this.password = localStorage.getItem('password');
	  
	}
    
    
    logout() {
        event.preventDefault();
            
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        
	    this.router.parent.navigateByUrl('/AUTH');
	}
}
