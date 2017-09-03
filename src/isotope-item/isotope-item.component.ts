import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { IsotopeGridComponent } from '../isotope-grid/isotope-grid.component';

@Component({
  selector: 'isotope-item',
  templateUrl: './isotope-item.component.html',
  styleUrls: ['./isotope-item.component.scss']
})
export class IsotopeItemComponent implements OnInit, AfterViewInit {

  constructor(private grid: IsotopeGridComponent, public el: ElementRef) { }

  ngOnInit() {

  }

    ngAfterViewInit() {
        this.grid.add(this.el.nativeElement);
    }

}
