import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import DOMPurify from 'dompurify'


const Coin = () => {
    const [coin,setCoin]=useState({})
    const params=useParams()
    const url=`https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(()=>{
        axios.get(url).then(res=>setCoin(res.data)).catch(console.error('err'))
    },[])
    console.log(coin);
  return (
    <div className='container mx-auto md:max-w-[1000px] mb-6'>
      <div className="w-full h-[100px] bg-gray-900 shadow-2xl  rounded-md flex justify-center items-center text-2xl mb-4 text-slate-200 font-bold">{coin.name}</div>
      <div className='w-full h-[130px] bg-gray-900 shadow-2xl  rounded-md flex flex-col mb-4'>
        <h2 className='m-2 w-fit bg-green-800 rounded-md text-xl text-slate-200 mb-4'>Rank {coin.market_cap_rank}</h2>
        <div className="flex justify-between w-full ">
          <div className="w-1/2 md:w-1/3 flex justify-around " >
            <img src={coin?.image?.thumb}  alt={coin?.id} />
            <h2 className='text-slate-200 text-[20px]'>{coin?.name}</h2>
            <h2 className='text-slate-200 text-[20px]'>{`(${coin?.symbol}/USD)`}</h2>
          </div>
          <h2 className='text-3xl text text-slate-200 mr-5'>${coin.market_data?.current_price?.usd}</h2>

        </div>

      </div>
      <div className="w-full h-[115px]  bg-gray-900  rounded-md shadow-2xl">
        <table className='w-full '>
          <thead>
            <tr className='w-full flex justify-around text-slate-200 mt-4'>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>14d</th>
              <th>30d</th>
              <th>1yr</th>
            </tr>
          </thead>
          <tbody>
            <tr  className='w-full flex justify-around text-slate-200 mt-4'>
              <th className={coin.market_data?.price_change_percentage_1h_in_currency.usd<0?'text-red-500':'text-green-500'}>{coin.market_data?.price_change_percentage_1h_in_currency.usd.toFixed(3)}%</th>
              <th className={coin.market_data?.price_change_percentage_1h_in_currency.usd<0?'text-red-500':'text-green-500'}>{coin?.market_data?.price_change_percentage_24h_in_currency.usd.toFixed(3)}%</th>
              <th className={coin.market_data?.price_change_percentage_1h_in_currency.usd<0?'text-red-500':'text-green-500'}>{coin.market_data?.price_change_percentage_7d_in_currency.usd.toFixed(3)}%</th>
              <th className={coin.market_data?.price_change_percentage_1h_in_currency.usd<0?'text-red-500':'text-green-500'}>{coin.market_data?.price_change_percentage_14d_in_currency.usd.toFixed(3)}%</th>
              <th className={coin.market_data?.price_change_percentage_1h_in_currency.usd<0?'text-red-500':'text-green-500'}>{coin.market_data?.price_change_percentage_30d_in_currency.usd.toFixed(3)}%</th>
              <th className={coin.market_data?.price_change_percentage_1h_in_currency.usd<0?'text-red-500':'text-green-500'}>{coin.market_data?.price_change_percentage_1y_in_currency.usd.toFixed(3)}%</th>
              
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full h-[115px] bg-gray-900 rounded-md  shadow-2xl my-4 flex">
        <div className="w-1/2 h-full flex flex-col justify-around items-center border-r-2 border-dashed border-slate-600">
          <div className="w-full h-1/2 flex justify-around items-center pb-2 border-b-2 border-dashed border-slate-600">
            <h2 className="text-slate-200 text-[18px] ">highest price in 24 hours</h2>
            <h2 className="text-slate-200 text-[18px] ">{coin.market_data?.high_24h.usd}$</h2>
          </div>
          
          <div className="w-full h-1/2 flex  justify-around items-center">
          <h2 className="text-slate-200 text-[18px]">lowest price in 24 hours</h2>
          <h2 className="text-slate-200 text-[18px]">{coin.market_data?.low_24h.usd}$</h2>
          </div>
          
        </div>
        <div className="w-1/2 h-full flex flex-col justify-around items-center">
        <div className="w-full h-1/2 flex justify-around items-center pb-2 border-b-2 border-dashed border-slate-600">
            <h2 className="text-slate-200 text-[18px] ">market cap</h2>
            <h2 className="text-slate-200 text-[18px] "> {coin.market_data?.market_cap.usd}</h2>
          </div>
          
          <div className="w-full h-1/2 flex  justify-around items-center">
          <h2 className="text-slate-200 text-[18px]">circulating supply</h2>
          <h2 className="text-slate-200 text-[18px]">{coin.market_data?.circulating_supply}</h2>
          </div>  

        </div>

      </div>
      <div className="w-full h-fit bg-gray-900 shadow-2xl  rounded-md  flex flex-col items-center">
        <h2 className='text-slate-200 text-[20px] font-bold mb-3'>About {coin.name}</h2>
        <p className='text-slate-200 px-4' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(coin.description?.en),}}></p>
      </div>
    </div>
  )
}

export default Coin





