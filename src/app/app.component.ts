import { Component } from '@angular/core';

import { Post } from './Post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DAK App';

  storedPosts: Post[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }

}
