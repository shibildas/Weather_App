'use client';
import Weather from '@components/Weather';
import axios from 'axios';
import Image from 'next/legacy/image'
import { useEffect, useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import Spinner from '@components/Spinner';
import { Toaster, toast } from 'react-hot-toast';


export default function Home() {
  const imgArr=[
   `https://images.unsplash.com/photo-1518803194621-27188ba362c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80`,
   `https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80`,
   `https://images.unsplash.com/photo-1533324268742-60b233802eef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
   `https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80`,
   `https://images.unsplash.com/photo-1556485689-33e55ab56127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
   `https://images.unsplash.com/photo-1577457943926-11193adc0563?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1502&q=80`,
   "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80"
]
  const [bg,setBg]=useState(imgArr[6])
  const [city,setCity]=useState('')
  const [weather,setWeather]=useState({})
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
    if(weather.main){
      if(weather?.weather[0]?.description?.toLowerCase()?.includes("rain")){
        setBg(imgArr[0])
      }else if(weather?.weather[0]?.description?.toLowerCase()?.includes("mist")){
        setBg(imgArr[1])
      }
      else if(weather?.weather[0]?.description?.toLowerCase()?.includes("clear")){
        setBg(imgArr[2])
      }
      else if(weather?.weather[0]?.description?.toLowerCase()?.includes("thunder")){
        setBg(imgArr[3])
      }
      else if(weather?.weather[0]?.description?.toLowerCase()?.includes("snow")){
        setBg(imgArr[5])
      }
      else if(weather?.weather[0]?.description?.toLowerCase()?.includes("fog")){
        setBg(imgArr[5])
      }else{
        setBg(imgArr[6])
      }
      if(weather?.weather[0]?.description?.toLowerCase()?.includes("drizzle")){
        setBg(imgArr[4])
      }
      }else{
        setBg(imgArr[6])
      }
  },[weather])
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_KEY}`
  const fetchWeather=(e)=>{
    e.preventDefault()
    setLoading(true)
    if(city.trim()===''){
      toast.error("input cant be empty or spaces")
    }else{

      axios.get(url).then((res)=>{
        setWeather(res?.data)
        // console.log(res.data)
        toast.success("gotcha!!!")
      }).catch((error)=>{toast.error("something went wrong"+error.message)})
    }
    setCity('')
    setLoading(false)

  }
  if(loading) return <Spinner/>
  
  return (
    <main className=" min-h-screen">
      <div className="flex flex-col">
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]'/>
        <Image src={bg}
        data-te-animation-init
        data-te-animation-start="onChange"
        data-te-animation="[fade-in_2s_ease-in-out]"
        data-te-animation-delay="500"
        layout='fill' className='object-cover transition-all duration-300 ease-in-out delay-300'/>
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
        <Toaster
  position="top-right"
  reverseOrder={false}
/>
        {/* weather */}
        {weather?.main && <Weather data={weather} />}
      </div>
    </main>
  )
}
