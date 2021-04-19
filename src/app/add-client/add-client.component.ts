import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Users } from "../services/table.service";
import { TableService } from "../services/table.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  @Output() items = new EventEmitter();

  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private tableService: TableService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      user : this.fb.control('', Validators.required),
    })
  }

  addClient() {
    this.tableService.saveData({fullName: this.form.value.user}).subscribe({
      next:(resp: Users) => {
        this.items.emit(resp);
        this.form.reset();
      }
    });
  }
}
