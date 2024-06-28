import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitationListComponent } from './citation-list/citation-list.component';
import { CreateCitationComponent } from './create-citation/create-citation.component';
import { CreateReactiveCitationComponent } from './create-reactive-citation/create-reactive-citation.component';
import { AuteurComponent } from './auteur/auteur.component';
import { ElixirsComponent } from './elixirs/elixirs.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"citation", component: CitationListComponent},
    {path:"add", component:CreateCitationComponent},
    {path:"addReact", component:CreateReactiveCitationComponent},
    {path:"auteurs", component:AuteurComponent},
    {path:"elixir", component:ElixirsComponent}

];
