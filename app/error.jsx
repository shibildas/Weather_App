'use client'

const Error = ({error,reset}) => {
  return (
    <div><p >{error}</p> <button className="bg-green-300 p-2 rounded-md text-xl"  onClick={reset}>try again</button></div>
  )
}

export default Error