"use client"
import { ReturnHome } from '@/components/ReturnHome'
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

type Colour = "Red" | "White" | "Pink" | "Blue" | "";
type BoxColour = "bg-red-500" | "bg-white" | "bg-pink-500" | "bg-blue-500" | "";
const UseStatePage = () => {

    const [colour, setColour] = useState<Colour>("");
    const [boxColour, setboxColour] = useState<BoxColour>("");
    const { cart } = useCart()
    function handleClick(e:React.MouseEvent<HTMLButtonElement>) {
        console.log(e.currentTarget.value);
        const value = e.currentTarget.value;
        setColour(value);
    }


    useEffect(() => {
        if(colour === "Red") {
            setboxColour("bg-red-500")
        } else if (colour === "White") {
            setboxColour("bg-white")
        } else if (colour === "Pink") {
            setboxColour("bg-pink-500")
        } else if (colour === "Blue") {
            setboxColour("bg-blue-500")
        } else {
            setboxColour("")
        }
    },[colour])



    return (
        <main className='flex gap-6 flex-col justify-center items-center'>
            <ReturnHome />
            <h1>useState Simple Example</h1>
            <div className='flex flex-row gap-10 mt-4 py-2'>
                <button onClick={(e)=>handleClick(e)} className='py-2 px-4 bg-red-500 rounded-lg' value="Red">Red</button>
                <button onClick={(e)=>handleClick(e)} className='py-2 px-4 bg-white text-black rounded-lg' value="White">White</button>
                <button onClick={(e)=>handleClick(e)} className='py-2 px-4 bg-pink-500 rounded-lg' value="Pink">Pink</button>
                <button onClick={(e)=>handleClick(e)} className='py-2 px-4 bg-blue-500 rounded-lg' value="Blue">Blue</button>
            </div>
            <h4>{ colour!=="" ? `Selected colour ${colour}` : 'No colour selected' }</h4>
            <div className={`w-[100px] aspect-square rounded-xl ${boxColour}`}></div>
            <h4>cartContext:{JSON.stringify(cart)}</h4>
        </main>
    )
}

export default UseStatePage