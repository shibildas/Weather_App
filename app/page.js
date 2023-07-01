'use client';
import Weather from '@components/Weather';
import axios from 'axios';
import Image from 'next/legacy/image'
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import Spinner from '@components/Spinner';
import Error from 'next/error';

export default function Home() {
  const [city,setCity]=useState('')
  const [weather,setWeather]=useState({})
  const [loading,setLoading]=useState(false)
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_KEY}`
  const fetchWeather=(e)=>{
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((res)=>{
      setWeather(res?.data)
      // console.log(res.data)
    }).catch((error)=>{throw new Error(error.message)})
    setCity('')
    setLoading(false)

  }
  if(loading) return <Spinner/>
  
  return (
    <main className=" min-h-screen">
      <div className="flex flex-col">
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]'/>

        <Image src="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80" 
        layout='fill' className='object-cover'/>
        <div className='relativeflex justify-between items-center max-w-[500px] m-auto pt-4 text-white z-10'>
          <form className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
            <div>
              <input className='bg-transparent border-none focus:outline-none text-2xl font-sans'
              value={city}
              onChange={(e)=>setCity(e.target.value)}  
              type="text" placeholder='Search City' />
            </div>
            <button onClick={fetchWeather}> <BsSearch size={20}/> </button>
          </form>
        </div>
        {/* weather */}
        {weather?.main && <Weather data={weather} />}
      </div>
    </main>
  )
}
