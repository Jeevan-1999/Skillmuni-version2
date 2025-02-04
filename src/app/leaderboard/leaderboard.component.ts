import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {

  userProfileImg = JSON.parse(sessionStorage.getItem('loggedInUser')!).picture;
  name = JSON.parse(sessionStorage.getItem('loggedInUser')!).name;
  nameInitial = this.name.charAt(0); // Extracts the first letter
  users = [
    { rank: 1, name: 'User Name', score1: 1, score2: 1, score3: 1 },
    { rank: 1, name: 'User Name', score1: 1, score2: 1, score3: 1 },
    { rank: 1, name: 'User Name', score1: 1, score2: 1, score3: 1 }, // Highlighted Row
    { rank: 1, name: 'User Name', score1: 1, score2: 1, score3: 1 },
    { rank: 1, name: 'User Name', score1: 1, score2: 1, score3: 1 },
    { rank: 1, name: 'User Name', score1: 1, score2: 1, score3: 1 }
  ];
  tabs = ['My League', 'My College', 'My Country'];
  selectedTab = 0;

  selectTab(index: number) {
    this.selectedTab = index;
  }
}
