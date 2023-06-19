export interface IMovies 
{

                     Title: string,
                    Year: number,
                    Rated: number,
                    Released: number
                    Runtime: number
                    Genre: string
                    Director: string
                    Writer: string
                    Actors : string
                    Plot:  string
                    Language: string
                    Country: string
                    Awards: string
                    Poster: string
                    Ratings: [
                      {
                        Source: string,
                        Value: number
                      },
                      {
                        Source: string
                        Value: number
                      },
                      {
                        Source: string
                        Value: number
                      }
                    ],
                    Metascore: number
                    imdbRating:number
                    imdbVotes: number
                    imdbID: any
                    Type: string
                    DVD: number
                    BoxOffice: number
                    Production: string
                    Website: string
                    Response: boolean

                }

