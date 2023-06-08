import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'panel-bar',
  templateUrl: './panel.component.html',
  /*styleUrls: ['./panel.component.css']*/

})
export class PanelComponent {
  title: String = 'Cheap Thrills'
  showImage :Boolean = false
  movies :any[] = [
                  {
                    'apikey': '5a804b37',
                    'Title': 'Guardians of the Galaxy Vol. 2',
                    'Year': '2017',
                    'Rated': 'PG-13',
                    'Released': '05 May 2017',
                    'Runtime': '136 min',
                    'Genre': 'Action, Adventure, Comedy',
                    'Director': 'James Gunn',
                    'Writer': 'James Gunn, Dan Abnett, Andy Lanning',
                    'Actors': 'Chris Pratt, Zoe Saldana, Dave Bautista',
                    'Plot': 'The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lords encounter with his father, the ambitious celestial being Ego.',
                    'Language': 'English',
                    'Country': 'United States',
                    'Awards': 'Nominated for 1 Oscar. 15 wins & 60 nominations total',
                    'Poster': 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg',
                    'Ratings': [
                      {
                        'Source': 'Internet Movie Database',
                        'Value': '7.6/10'
                      },
                      {
                        'Source': 'Rotten Tomatoes',
                        'Value': '85%'
                      },
                      {
                        'Source': 'Metacritic',
                        'Value': '67/100'
                      }
                    ],
                    'Metascore': '67',
                    'imdbRating': '7.6',
                    'imdbVotes': '712,189',
                    'imdbID': 'tt3896198',
                    'Type': 'movie',
                    'DVD': '22 Aug 2017',
                    'BoxOffice': '$389,813,101',
                    'Production': 'N/A',
                    'Website': 'N/A',
                    'Response': 'True'

                  }]
    
  toggleImage(): void {
   this.showImage = !this.showImage
  }
  }

