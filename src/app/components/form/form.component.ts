import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  inputVal: number;
  jokes: any = [];
  currentJoke: any;
  edit: boolean;
  constructor(private dataService: DataService) { }

  ngOnInit() {

    //delete using Behavior subject
    this.dataService.jokeContent.subscribe( data => { 

      this.jokes.forEach( (cur, index) => { 
        if (cur.id === data.id) { 
          this.jokes.splice(index, 1);
        }
      });
    });

    //update jokes with /behavior subject 
    this.dataService.updatedJoke.subscribe( data => { 

        this.jokes.forEach( (cur, index) => { 
          if(cur.id === data.id) { 
            this.jokes.splice(index, 1, data);
          }
        });
  
    })
  };

  showJokes(num: number) {
    this.dataService.getJokes(num).subscribe(data => {

      if (data.type === 'success') {
        data.value.forEach(joke => {
          this.jokes.push(joke)
        });
      }
    })
    this.inputVal = null;
  }
  
};
