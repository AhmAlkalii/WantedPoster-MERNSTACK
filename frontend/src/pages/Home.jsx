import React,{useState, useEffect} from 'react'
import { Characterlist } from '../components/Characterlist'
import { Characterform } from '../components/Characterform'

export const Home = () => {
  const [characters, setCharacter] = useState(null)

  useEffect(() => {
    const fetchcharacters = async() => {
        const response = await fetch('http://localhost:4000/api/onepiece')
        const data = await response.json()
        
        if(response.ok){
            setCharacter(data)
        }
    }

    
    fetchcharacters()

    const refreshDataInterval = setInterval(() => {
        fetchcharacters()
      }, 1000);
    return () => clearInterval(refreshDataInterval);
  },[])

  return (
    <div className='home'>
        {
            characters && characters.map( character => (
                <Characterlist character={character} key={character._id}/>
            ))
        }
        
        <Characterform/>
    </div>
  )
}
