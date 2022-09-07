let movies = require('./db.json')
let globalID = 11

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        console.log(req.params.id)
        let index = movies.findIndex(element => element.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        console.log(req.body)
        const {title, rating, imageURL} = req.body
        let newMovie = {
            title,
            rating: +rating,
            imageURL,
            id: globalID
        }
       console.log(newMovie) 
       movies.push(newMovie) 
       globalID++
       res.status(200).send(movies)
    },
    updateMovie: (req, res) => {
        // console.log(req.params.id)
        // console.log(req.body)
        const {type} = req.body
        let index = movies.findIndex(element => element.id === +req.params.id)
        if(type = 'minus' && movies[index].rating > 1){
            movies[index].rating -= 1
            res.status(200).send(movies)
        } else if(type = 'plus' && movies[index] < 5){
            movies[index].rating += 1
            res.status(200).send(movies)
        } else {
            res.status(400).send('Invalid star rating!')
        }
    }
}