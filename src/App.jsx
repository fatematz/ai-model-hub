import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from './components/Navber'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Aicards from './components/Aicards'
import SelectedCardList from './components/SelectedCardList'
import Aicard from './components/Aicard'

const data = async () => {
    const res = await fetch('Data.json')
    console.log(res)
    return res.json()
}

const sentData = data()
console.log(sentData)

function App() {
    // const [count, setCount] = useState(0)
    const [select, setSelect]=useState(true)
    const [addToCard, setAddToCard]=useState([])
    console.log( addToCard )

    return (
        <>
            <NavBar></NavBar>

            <Banner></Banner>

            <main>
                <div className='max-w-7xl mx-auto flex justify-center items-center gap-[20px]'>
                    <div className=''>
                        <button
                            onClick={() => setSelect(true)}
                            className={`${select === true ? 'bg-amber-800 text-white' : 'bg-white text-black'} border border-gray-200 px-[40px] py-2 rounded-full`}
                        >
                            Models
                        </button>
                    </div>

                    <div className=''>
                        <button
                            onClick={() => setSelect(false)}
                            className={`${select === false ? 'bg-amber-800 text-white' : 'bg-white text-black'} border border-gray-200 px-[40px] py-2 rounded-full`}
                        >
                           {` Cart (${addToCard.length})`}
                        </button>
                    </div>
                </div>

                {select === true ? (
                    <Suspense
                        fallback={
                            <span className='loading loading-spinner loading-xl'></span>
                        }
                    >
                        <Aicards sentData={sentData} addToCard={addToCard} setAddToCard={setAddToCard} ></Aicards>
                    </Suspense>
                ) : (
                    <SelectedCardList addToCard={addToCard} setAddToCard={setAddToCard}></SelectedCardList>
                )}
            </main>

            <Footer></Footer>

            <div className='ticks'></div>
            <section id='spacer'></section>
        </>
    )
}

export default App
