export default function Button({value, rating, setRating}){
  const isActive=rating===value
  return(
    <div>
      <button
      onClick={()=> setRating(value)}
      className={`rounded-full p-2 size-10 bg-gray-700 border-1 shadow-lg text-white
        ${isActive?"bg-orange-700":"bg-gray-500 hover:bg-gray-600"}

      `}>{value}</button>
    </div>
  )
}