import React from 'react'
import {toast} from "react-toastify";

const SelectedCardList = ({ addToCard, setAddToCard }) => {
    console.log(addToCard, 'hello')

    const total=addToCard.reduce((sum, item) => {
        return sum+item.price ;
    }, 0)
    console.log( total )

    const removeData=() => {
        setAddToCard([])
        toast.success("Payment Successful!")
    }

    const deleteItem=(delItem) => {
        const filterItem=addToCard.filter(i => i.name!==delItem.name)
        // console.log(filterItem)
        setAddToCard(filterItem)
        toast.success("Item remove")
    }

  
    return (
        <div className='max-w-7xl mx-auto my-[90px]'>
           

              {
                addToCard.length===0? <p className="text-4xl font-bold text-center border border-gray-400 bg-amber-200 py-12  rounded-tl-4xl rounded-br-4xl text-red-500 ">Oops! Your Cart is Empty </p>:<>
                     <h1 className='text-4xl font-bold '>Your Cart</h1>
                {addToCard.map((item) => (
                <div className="    my-4" key={item.name}>
                    <div className='flex justify-center  gap-6 items-center my-[40px] bg-amber-100 p-5 rounded-4xl  '>
                        <div className=''>
                            <img
                                className='w-[100px] h-[100px] object-contain hover:scale-110 transition-transform duration-300'
                                src={item.img}
                                alt=''
                            />
                        </div>

                        <div className='flex-1'>
                            <h1 className="text-2xl font-bold">{item.name}</h1>
                            <p> {item.description} </p>
                        </div>

                        <div className='flex justify-center gap-4'>
                                <p className="text-2xl font-bold" > ${item.price}/month </p>
                                <button onClick={() => deleteItem (item)} className="text-2xl font-bold btn btn-error
                                rounded-full"> X </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex justify-between  gap-6 my-[40px] bg-black p-5 rounded-4xl">
                <div className="text-2xl font-bold text-white">
                    Total
                </div>
                <div className="text-2xl font-bold text-white">
                    ${total}
                </div>
            </div>

            <button onClick={removeData}  className=" w-full text-center gap-6 my-[40px] bg-amber-800 p-5 rounded-4xl text-white text-2xl font-bold">
                Proceed to Cheackout
            </button>
                
                </>
    }
            
        </div>
    )
}

export default SelectedCardList
