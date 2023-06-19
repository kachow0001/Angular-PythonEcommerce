
import { Pipe,PipeTransform } from "@angular/core";
import { filter } from "rxjs";
import { IMovies } from "./movie.model";

@Pipe({
    name: 'mysearch'
  })
  
  export class MovieFilter implements PipeTransform {
    transform(value:IMovies[] filterBy: string):  {
      /* ternary operator if filterby is tru convert user inout to lowercase */
      filterBy = this.filterBy ? this.filterBy.toLowerCase() : null;
       return filterBy ? values.filter((product :IProduct) => 
       
       )


   
  }

