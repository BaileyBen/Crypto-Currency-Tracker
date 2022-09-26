import {useEffect, useState} from 'react'
import {FiArrowUpRight, FiArrowDown} from 'react-icons/fi'
import axios from 'axios'


export const TopFiveList = () => {
  
const [data, setData] = useState(null)


const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false'



useEffect(() => {
    axios.get(url).then((response) => {
        setData(response.data)
    }).catch((error) => {
        console.log(error)
    })
}, [])


if(!data) return null
  
  

    return (
            <div>
             
                
                <div id='top 10' className="mt-5 ml-5 mb-5">
                <div className='grid grid-cols-1 gap-4 place-content-center'>
                <div className="container">
        <div className="bg-gray-200 rounded-lg shadow-lg hover:bg-white container transform trainsition duration-500 hover:scale-110 max-w-xs">
    
    <div className='flex'>
        <img className="w-20 h-20 m-3" src={data[0].image} alt="" />
    <div className='flex-col font-semibold ml-2'>
        <h1 className="mt-3">{data[0].name} <span className="uppercase">[ {data[0].symbol} ]</span> - <span className='text-blue-700'>{data[0].market_cap_rank}</span></h1>
         <h1>${data[0].current_price.toLocaleString()}</h1>
         <h1 className="mb-1">{data[0].price_change_percentage_24h < 0 ? (
            <span className="text-red-700">
                <FiArrowDown/>
                {data[0].price_change_percentage_24h.toFixed(2)}%
                </span>
         ) : (
            <span className="text-green-600">
                <FiArrowUpRight />
                {data[0].price_change_percentage_24h.toFixed(2)}%
            </span>
         )}
         <h1>24 Hour High: {data[0].high_24h}</h1>
         <h1>24 Hour Low: {data[0].low_24h}</h1>
        </h1>
    </div>
    </div>
    </div>         
                </div>



                <div className="container">
        <div className="bg-gray-200 rounded-lg shadow-lg hover:bg-white container transform trainsition duration-500 hover:scale-110 max-w-xs">
    
    <div className='flex'>
        <img className="w-20 h-20 m-3" src={data[1].image} alt="" />
    <div className='flex-col font-semibold ml-2'>
        <h1 className="mt-3">{data[1].name} <span className="uppercase">[ {data[1].symbol} ]</span> - <span className='text-blue-700'>{data[1].market_cap_rank}</span></h1>
         <h1>${data[1].current_price.toLocaleString()}</h1>
         <h1 className="mb-1">{data[1].price_change_percentage_24h < 0 ? (
            <span className="text-red-700">
                <FiArrowDown/>
                {data[1].price_change_percentage_24h.toFixed(2)}%
                </span>
         ) : (
            <span className="text-green-600">
                <FiArrowUpRight />
                {data[1].price_change_percentage_24h.toFixed(2)}%
            </span>
         )}
         <h1>24 Hour High: {data[1].high_24h}</h1>
         <h1>24 Hour Low: {data[1].low_24h}</h1>
        </h1>
    </div>
    </div>
    </div>         
                </div>

                <div className="container">
        <div className="bg-gray-200 rounded-lg shadow-lg hover:bg-white container transform trainsition duration-500 hover:scale-110 max-w-xs">
    
    <div className='flex'>
        <img className="w-20 h-20 m-3" src={data[2].image} alt="" />
    <div className='flex-col font-semibold ml-2'>
        <h1 className="mt-3">{data[2].name} <span className="uppercase">[ {data[2].symbol} ]</span> - <span className='text-blue-700'>{data[2].market_cap_rank}</span></h1>
         <h1>${data[2].current_price.toLocaleString()}</h1>
         <h1 className="mb-1">{data[2].price_change_percentage_24h < 0 ? (
            <span className="text-red-700">
                <FiArrowDown/>
                {data[2].price_change_percentage_24h.toFixed(2)}%
                </span>
         ) : (
            <span className="text-green-600">
                <FiArrowUpRight />
                {data[2].price_change_percentage_24h.toFixed(2)}%
            </span>
         )}
         <h1>24 Hour High: {data[2].high_24h}</h1>
         <h1>24 Hour Low: {data[2].low_24h}</h1>
        </h1>
    </div>
    </div>
    </div>         
                </div>

                <div className="container">
        <div className="bg-gray-200 rounded-lg shadow-lg hover:bg-white container transform trainsition duration-500 hover:scale-110 max-w-xs">
    
    <div className='flex'>
        <img className="w-20 h-20 m-3" src={data[3].image} alt="" />
    <div className='flex-col font-semibold ml-2'>
        <h1 className="mt-3">{data[3].name} <span className="uppercase">[ {data[3].symbol} ]</span> - <span className='text-blue-700'>{data[3].market_cap_rank}</span></h1>
         <h1>${data[3].current_price.toLocaleString()}</h1>
         <h1 className="mb-1">{data[3].price_change_percentage_24h < 0 ? (
            <span className="text-red-700">
                <FiArrowDown/>
                {data[3].price_change_percentage_24h.toFixed(2)}%
                </span>
         ) : (
            <span className="text-green-600">
                <FiArrowUpRight />
                {data[3].price_change_percentage_24h.toFixed(2)}%
            </span>
         )}
         <h1>24 Hour High: {data[3].high_24h}</h1>
         <h1>24 Hour Low: {data[3].low_24h}</h1>
        </h1>
    </div>
    </div>
    </div>         
                </div>

                <div className="container">
        <div className="bg-gray-200 rounded-lg shadow-lg hover:bg-white container transform trainsition duration-500 hover:scale-110 max-w-xs">
    
    <div className='flex'>
        <img className="w-20 h-20 m-3" src={data[4].image} alt="" />
    <div className='flex-col font-semibold ml-2'>
        <h1 className="mt-3">{data[4].name} <span className="uppercase">[ {data[4].symbol} ]</span> - <span className='text-blue-700'>{data[4].market_cap_rank}</span></h1>
         <h1>${data[4].current_price.toLocaleString()}</h1>
         <h1 className="mb-1">{data[4].price_change_percentage_24h < 0 ? (
            <span className="text-red-700">
                <FiArrowDown/>
                {data[4].price_change_percentage_24h.toFixed(2)}%
                </span>
         ) : (
            <span className="text-green-600">
                <FiArrowUpRight />
                {data[4].price_change_percentage_24h.toFixed(2)}%
            </span>
         )}
         <h1>24 Hour High: {data[4].high_24h}</h1>
         <h1>24 Hour Low: {data[4].low_24h}</h1>
        </h1>
    </div>
    </div>
    </div>      


      
                </div>
                </div>

                </div>
            </div>

            




            
    )
}
 
