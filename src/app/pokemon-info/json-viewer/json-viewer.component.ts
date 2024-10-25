import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-json-viewer',
  templateUrl: './json-viewer.component.html',
  styleUrls: ['./json-viewer.component.scss']
})
export class JsonViewerComponent implements OnInit, OnChanges  {

  @Input() jsonData: any;
  @Input() depth: number = 0;
  expanded: { [key: string]: boolean } = {};

  constructor() { }

  ngOnInit(): void {
  }

  isObject(value: any): boolean {
    return value && typeof value === 'object' && !Array.isArray(value);
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  objectKeys(obj: any): string[] {    
    return Object.keys(obj);
  }

  toggleExpand(key: string | number): void {
    this.expanded[key] = !this.expanded[key];
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['jsonData']) {
      this.expanded = {}; 
    }
  }

}
