import { Component } from '@angular/core';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    postList: Post[] = [
        new Post('Test', 'C\'est à dire quand on parle de ces rollers, la congolexicomatisation à l\'égard de la complexité sert à porter d\'avis sur ce qu\'on appelle ce système phénoménal vers Lovanium, c\'est clair. Mesdames et messieurs fidèles, la politique indispensable(s) en science et culture suffit à propulser une certaine compétitivité avec la formule 1+(2x5), Bonne Année. Mesdames et messieurs fidèles, l\'imbroglio autour de la Géo Physique Spatiale tend à imposer ce système phénoménal propre(s) aux congolais, bonnes fêtes.'),
        new Post('Test2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
        new Post('Test3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),
    ];
}
