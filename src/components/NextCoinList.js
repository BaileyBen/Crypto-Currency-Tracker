import {useEffect, useState} from 'react'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'
import axios from 'axios'
import { TopFiveList } from './TopFiveList'

export const NextCoinList = () => {

    
const [data, setData] = useState(null)



const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false'



useEffect(() => {
    axios.get(url).then((response) => {
        setData(response.data)
    }).catch((error) => {
        console.log(error)
    })
}, [])

console.log(data)

if(!data) return null
  
  
  return (
    <div>
    
        <div className="flex absolute right-2 mx-auto">
        <div ClassName=''>
        {data.map(({ id, symbol, image, market_cap, current_price, total_volume, name, price_change_percentage_24h }) => (
            
            <div className='hover:bg-white container transform trainsition duration-500 hover:scale-110'>
            <div className="grid grid-cols-4 justify-items-start gap-2 border border-black rounded-lg shadow-lg bg-gray-500/10 mr-20 px-10 pt-2 mt-5">
                <img className='w-7 h-7 'key={id} src={image} alt=''></img>
        <h1 className='font-semibold text-lg' key={id}>[{symbol}] - </h1>
        <h1 className=' ' key={id}><span className='font-semibold'>Market Cap: </span>{market_cap}</h1>
        <h1 className=' ' key={id}><span className='font-semibold'>Current Price: </span>{current_price.toLocaleString()}</h1>
        <h1 className=' ' key={id}><span className='font-semibold'>Total Volume: </span>{total_volume}</h1>
        <h1 className=' font-semibold' key={id}><span className='font-bold'></span>{name}</h1>
        <h1 className="mb-1">{price_change_percentage_24h < 0 ? (
            <span className="text-red-700">
                <FiArrowDown/>
                {price_change_percentage_24h.toFixed(2)}%
                </span>
         ) : (
            <span className="text-green-600">
                <FiArrowUpRight />
                {price_change_percentage_24h.toFixed(2)}%
            </span>
         )}
        </h1>
        
       
        </div>
        </div>
     
        ))}
</div>

       </div>
        </div>
      
  
    
  )
}

