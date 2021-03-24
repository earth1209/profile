import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import { Element } from '@angular/compiler';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {
  count:Number=10
  name:string=''
  activeSection = 1;
  constructor(
    private pageScrollService: PageScrollService, 
    @Inject(DOCUMENT) private document: any
  ) { }

  fullPageScroll(e: HTMLElement, i: number) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      
      document: this.document
    });

    this.activeSection = i;
 
  }
  
}
