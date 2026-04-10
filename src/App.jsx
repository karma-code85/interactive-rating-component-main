

import { useState } from "react"
import Button from "./selecting"

export default function App(){
  const [submit, setSubmit]=useState(false)
  const [rating, setRating]=useState(null)

  function handleSubmit(){
    if(rating!==null){
      return setSubmit(true)
    }
    else{
     alert(`please select your raing first `)
    }
  }
  return(
    <div className="h-screen bg-gray-900 flex justify-center items-center p-4">
      {submit?(
        <div className="p-4 bg-gray-800 rounded-lg space-y-6 text-center md:w-[23rem]">
          <div className="flex justify-center items-center"><img src="./images/illustration-thank-you.svg" alt="" /></div>
          <div className="bg-gray-600 text-orange-500 text-center p-3 rounded-full text-lg ">you have select {rating} out of 5</div>
          <h1 className="text-white font-bold  text-lg">Thank you!</h1>
          <p className="text-gray-500"> We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
      ) :(
      <div className="p-4 bg-gray-800 rounded-lg space-y-6 md:w-[23rem]">
        <div className="bg-gray-700 size-10 p-3 flex justify-center shadow-lg rounded-full">
          <img src="./images/icon-star.svg" alt="" />
        </div >
        <h1 className="text-white font-extrabold text-2xl">How do we did ?</h1>
        <p className="text-gray-500 ">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="text-rose-500 flex  justify-between items-center">
          {[1,2,3,4,5].map((num)=>(
            <Button
            key={num}
            value={num}
            rating={rating}
            setRating={setRating}


            />
          ))}
        </div>
        <button
        onClick={handleSubmit}
        className="font-bold bg-orange-500 rounded-full p-4 w-full text-center shadow2xl">Submit</button>

      </div>
      )}
    </div>
  )
}