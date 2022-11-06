import { useEffect, useState } from 'react'
import axios from 'axios'


let kcalRegex = /(\d{1,4}) kcal/
let proteinRegex = /[0-9][.,][0-9]* g Protein| [0-9][0-9][.,][0-9] g Protein/
let carbRegex = /[0-9][.,][0-9]* g CHO| [0-9][0-9][.,][0-9] g CHO/
let fatRegex = /[0-9][.,][0-9]* g Fat| [0-9][0-9][.,][0-9] g Fat/

let time = new Date(Date.now())

let today = time.getFullYear() + "-" + (time.getMonth()+1) + "-" + time.getDate()

let allRecepieUrl = "https://www.amica.fi/api/restaurant/menu/week?language=en&restaurantPageId=66264&weekDate="+today

export default function PrepareMenu() {
    const [recepie, setRecepie] = useState([]);
    
    async function getData(){
        const response = await fetch(allRecepieUrl);
        const data = await response.json();
        setRecepie(data.LunchMenus)
    }

    useEffect(() => {
        getData()
    }, [])
    
    return JSON.stringify(recepie)
}