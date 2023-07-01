import Image from "next/legacy/image";

const Weather = ({ data }) => {
  console.log(data);
  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10 font-sans">
      <div className="relative flex justify-between pt-12">
        <div>
          <Image
            alt="null"
            src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
            width="100"
            height="100"
          />
          <p className="text-2xl">{data?.weather[0].main}</p>
        </div>
        <p className="text-9xl">{data?.main?.temp?.toFixed(0)}&#176;C</p>
      </div>
      <div className="bg-black/50 relative p-8 rounded-md font-bold">
        <p className="text-2xl text-center pb-6">Weather In: {data?.name} </p>
        <div className="flex justify-between text-center">
          <div className="text-2xl">
            <p>{data?.main?.feels_like?.toFixed(0)}&#176;C</p>
            <p className="text-xl">Feels Like</p>
          </div>
          <div className="text-2xl">
            <p>{data?.main?.humidity} %</p>
            <p className="text-xl">Humidity</p>
          </div>
          <div className="text-2xl">
            <p>{data?.wind?.speed?.toFixed(0)} Km/hr</p>
            <p className="text-xl">Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
