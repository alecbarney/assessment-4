const express = require("express");
const cors = require("cors");
const ctrl = require('./controller')


const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", ctrl.getCompliment)
app.get("/api/fortune", ctrl.getFortune)

const {
  getActors,
  deleteActor, 
  createActor, 
  updateActor
} = require('./controller')

app.get(`/api/movies`, getActors)
app.delete(`/api/movies/:id`, deleteActor)
app.post(`/api/movies`, createActor)
app.put(`/api/movies/:id`, updateActor)



app.listen(4000, () => console.log("Server running on 4000"));
