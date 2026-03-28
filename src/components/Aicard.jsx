import React, {useState} from 'react'

const Aicard=({data}) => {
    
    const [clicked, setClicked] = useState("click")
    return (
        <div className='border border-gray-300 rounded-4xl '>
            
            <div className='space-y-[10px] '>
                <div className="bg-amber-100 rounded-t-4xl">
                <div className="flex justify-center items-center py-6 ">
                    <img
                        className={`w-[200px] h-[200px] hover:scale-110 transition-transform duration-300 cursor-pointer ${data.imgClass || ''}`}
                        src={data.img}
                        alt=''
                    />
                    </div>
                </div>
                <div className=" p-[30px] space-y-[20px] ">
                <div className=''>
                    <h1 className="font-bold text-2xl">{data.name}</h1>
                </div>
                <div className=''>
                    <p className=""> {data.description} </p>
                </div>
                <div className="font-bold text-2xl">
                    <p> {data.price} </p>
                </div>
                <div className="">
                    <button onClick={() => setClicked("Subscribed")} className="btn w-full bg-amber-800 text-white rounded-3xl "> {`${clicked === "click" ? " Subscribe Now" : "Subscribed" }`} </button>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Aicard
