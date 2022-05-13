import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directives';
  // users=null;
  users=[{name:'maha',gender:'female',age:21},
  {name:'lakshmi',gender:'female',age:21},
  {name:'pandiyan',gender:'male',age:21},
  {name:'revathi',gender:'female',age:21},
  {name:'neela',gender:'male',age:21},
]
}

