import { Component, OnInit } from '@angular/core';
// @ts-ignore
import ScrollBooster from 'scrollbooster';

@Component({
  selector: 'app-layout-test-page',
  templateUrl: './layout-test-page.component.html',
  styleUrls: ['./layout-test-page.component.scss']
})
export class LayoutTestPageComponent implements OnInit {

  display: boolean = true;

  constructor() { }

  ngOnInit(): void {

  }

}
