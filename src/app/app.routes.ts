import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitationListComponent } from './citation-list/citation-list.component';
import { CreateCitationComponent } from './create-citation/create-citation.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"citation", component: CitationListComponent},
    {path:"add", component:CreateCitationComponent}
];
