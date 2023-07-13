import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'skill-swap';
  private kaka = 1;

  public ngOnInit() {
    const a = 1;
    const b = 2;
    let ac = 1;
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);
    console.log(a);

    [1,2,3].forEach((el) => {
      console.log(el, 'el');
    })
  }
}
