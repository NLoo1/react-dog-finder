import { useParams } from "react-router-dom"
import data from './db.json'


export function Dog(){
    const params = useParams()
    const dog = data.dogs.find(params.name)
    return (<div>
        {dog}
    </div>)    
}