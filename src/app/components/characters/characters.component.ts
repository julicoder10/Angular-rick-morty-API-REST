import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

interface personaje{
    id:number,
    name:string,
    status:string,
    species:string,
    image:string
  }

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
    personajes:personaje[] = []
  constructor(private charactersService : CharactersService) { }

  ngOnInit(): void {
      this.charactersService.getCharacters().subscribe(data =>{
        this.personajes = data.results
      },error => {
        console.log(error)
      }
      )
  }
  
}
