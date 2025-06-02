import { Component } from '@angular/core';
import { TableComponent } from '../../ui/table/table.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  standalone: true,
  imports: [TableComponent, RouterLink],
  templateUrl: './clients-list.component.html',
  styles: ``
})
export default class ClientsListComponent {

}
