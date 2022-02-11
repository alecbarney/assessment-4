const movies = require('./db.json')
let globalId = 4


module.exports ={
    getCompliment:  (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
      },
      getFortune:  (req, res) => {
        const compliments = ["You will have an amazing day!",
                           "Do not leave the house for a week!",
                           "Keep on the lookout for rabid raccoons.",
                           "your lucky number is 444",
                           "look for oportunities to help someone today"
        ];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
        
      },
      getActors: (req, res) => res.status(200).send(movies),
    deleteActor: (req, res) => {
        let index = movies.findIndex(elem => elem.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createActor: (req, res) => {
        let { title, rating, imageURL } = req.body
        let newMovie = {
            id: globalId,
            title, 
            rating,
            imageURL
        }
        movies.push(newMovie)
        res.status(200).send(movies)
        globalId++
    },
    updateActor: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = movies.findIndex(elem => +elem.id === +id)

        if (movies[index].rating === 5 && type === 'plus') {
            res.status(400).send('cannot go above 5')
        } else if (movies[index].rating === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            movies[index].rating++
            res.status(200).send(movies)
        } else if (type === 'minus') {
            movies[index].rating--
            res.status(200).send(movies)
        } else {
            res.sendStatus(400)
        }
    }
}