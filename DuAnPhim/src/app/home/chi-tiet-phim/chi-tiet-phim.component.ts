import { Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PhimService } from '../../services/phim.service';
import { Phim } from '../../models/phim';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.css']
})
export class ChiTietPhimComponent implements OnInit, OnDestroy {
  private MaPhim: number;
  // private subParams: Subscription;
  private subParamPhim: Subscription;
  // private phim:any = {};



  private id: number;
  private subParams: Subscription;
  private groupID: string;
  // private phim: Phim;
  private phim: any = {} ;
  private load: Boolean = false;
  private iframe;
  private urlHost: String = `http://sv.myclass.vn/Images/`;
  private subSerivce: Subscription;

  constructor(private activeRoute: ActivatedRoute, private servicePhim: PhimService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.subParams =
     this.activeRoute.queryParams.subscribe(
       thamso => {
        this.id = thamso.id;
        this.subSerivce = this.servicePhim.LayChiTietPhim(this.id)
       .subscribe((result: Phim) => {
         console.log(result);
         this.phim = result;
         this.phim.Trailer = this.phim.Trailer.replace('watch?v=', 'embed/');
         this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(this.phim.Trailer);
         this.load = true;
       })
     });

     this.subParamPhim = this.servicePhim.LayChiTietPhim(this.id).subscribe(phim => {this.phim = phim
      console.log(this.phim);
    
    });

  }

  ngOnDestroy(): void {
    this.subParams.unsubscribe();
    this.subSerivce.unsubscribe();
  }

}
