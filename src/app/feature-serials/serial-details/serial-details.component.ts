import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serial-details',
  templateUrl: './serial-details.component.html',
  styleUrls: ['./serial-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SerialDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  //load details from store
  //export card to common feature module
  ngOnInit(): void {
    this.route.url.subscribe(url => {
      console.log(url[1]);
    });
  }

}
