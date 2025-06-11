/* Idioma dos filmes */

use sample_mflix

db.movies.aggregate([
  { $unwind: "$languages" },
  { $group: { _id: null, uniqueLanguages: { $addToSet: "$languages" } } }
])