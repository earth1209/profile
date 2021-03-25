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

  imgSkills = [
    {url : '/assets/imageSkill/js.png'},
    {url : '/assets/imageSkill/Jquery.png'},
    {url : '/assets/imageSkill/spring.png'},
    {url : '/assets/imageSkill/spring_boot.png'},
    {url : '/assets/imageSkill/oracle.png'},
    {url : '/assets/imageSkill/struts.png'},
    {url : '/assets/imageSkill/sql.png'},
    {url : '/assets/imageSkill/hibernate.png'},
    {url : '/assets/imageSkill/mysql.png'},
    {url : '/assets/imageSkill/dotnet.png'},
    {url : '/assets/imageSkill/bootstrap.png'},
  ]
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
