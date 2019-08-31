import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  @Input() joke: any;
  @Input() inset: boolean = true;
  @Output() state: EventEmitter<boolean> = new EventEmitter();
 
    id: any = '';
    text: string = '';

  edit: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  };

  onDelete(joke) { 
    this.dataService.setJoke(joke);
  }

  onUpdate(joke) { 
    this.id = joke.id;
    this.text = joke.joke;
    this.edit = true;
  }

  onEdit() { 
    this.edit = false;
    const newJoke = { 
      id: this.id,
      joke: this.text
    }
    this.dataService.updateJoke(newJoke);

  }
}

