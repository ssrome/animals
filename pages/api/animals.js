import {animals} from "../../data/animals"
export default function handleAnimals(req, res){

    let randomIndex = Math.floor(Math.random() * animals.length)
    
    let randomAnimal = animals[randomIndex]

    res.statusCode = 200;
    res.setHeader("Content-Type", "aaplication/json");
    res.end(JSON.stringify(randomAnimal))
}