```js
use sample_mflix

db.movies.insertOne({
  title: "Exemplo de Filme",
  year: 2024,
  runtime: 90,
  genres: ["Drama"],
  plot: "Um filme com data específica no fuso UTC-3.",
  releaseDate: ISODate("2024-10-15T20:00:00-03:00"), // Data com timezone -3
  type: "movie"
})

```



```js

db.movies.aggregate([
  {
    $project: {
      title: 1,
      utcDate: "$releaseDate",  // Mostra a data em UTC
      localDate: {
        $dateToString: {
          date: "$releaseDate",
          timezone: "-03:00",
          format: "%Y-%m-%d %H:%M:%S"
        }
      }
    }
  }
])

```