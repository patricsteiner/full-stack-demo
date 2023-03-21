import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Dog} from "../dog.model";

@Component({
  selector: 'full-stack-demo-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DogsListComponent {
  @Input()
  dogs!: Dog[]
}
