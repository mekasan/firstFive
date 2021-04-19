import { Component, Input, OnInit } from '@angular/core';
import { Users } from "../services/table.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() items!: Users[];
  @Input() titles!: string[];
  constructor() { }

  ngOnInit(): void {}
}
