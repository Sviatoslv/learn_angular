import { Result, APIResponse } from '../../models';
import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { RESULT_SORT } from 'src/app/const/results_sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public results: Array<Result>;
  public sortedResults: Array<Result>;
  public DOWNLOAD_SPEED_ASC: string;
  public DOWNLOAD_SPEED_DESC: string;
  public UPLOAD_SPEED_ASC: string;
  public UPLOAD_SPEED_DESC: string;
  public PRICE_ASC: string;
  public PRICE_DESC: string;
  public DEFAULT: string;

  public sort: string;

  sortResults(sort: string) {
    switch (sort) {
      case this.DOWNLOAD_SPEED_ASC:
        this.sortedResults.sort((a, b) => a.downloadSpeed - b.downloadSpeed);
        break;

      case this.DOWNLOAD_SPEED_DESC:
        this.sortedResults.sort((a, b) => b.downloadSpeed - a.downloadSpeed);
        break;

      case this.UPLOAD_SPEED_ASC:
        this.sortedResults.sort((a, b) => a.uploadSpeed - b.uploadSpeed);
        break;

      case this.UPLOAD_SPEED_DESC:
        this.sortedResults.sort((a, b) => b.uploadSpeed - a.uploadSpeed);
        break;

      case this.PRICE_ASC:
        this.sortedResults.sort((a, b) => a.price - b.price);
        break;

      case this.PRICE_DESC:
        this.sortedResults.sort((a, b) => b.price - a.price);
        break;

      case this.DEFAULT:
        this.sortedResults = [...this.results];
        break;

      default:
        break;
    }
  }

  constructor(
    private httopService: HttpService // private activateRoute: ActivatedRoute
  ) {
    this.DOWNLOAD_SPEED_ASC = RESULT_SORT.DOWNLOAD_SPEED_ASC;
    this.DOWNLOAD_SPEED_DESC = RESULT_SORT.DOWNLOAD_SPEED_DESC;
    this.UPLOAD_SPEED_ASC = RESULT_SORT.UPLOAD_SPEED_ASC;
    this.UPLOAD_SPEED_DESC = RESULT_SORT.UPLOAD_SPEED_DESC;
    this.PRICE_ASC = RESULT_SORT.PRICE_ASC;
    this.PRICE_DESC = RESULT_SORT.PRICE_DESC;
    this.DEFAULT = RESULT_SORT.DEFAULT;
  }

  ngOnInit(): void {
    this.getResults();
    RESULT_SORT;
  }

  getResults(): void {
    this.httopService
      .getResultList()
      .subscribe((resultsList: APIResponse<Result>) => {
        this.results = resultsList;
        this.sortedResults = [...resultsList];
        console.log(resultsList);
      });
  }
}
