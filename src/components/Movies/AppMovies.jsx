import React from 'react'
import CardsTaks from './CardsMovies'
import CardSelect from './MovieSelect'
import AddTaks from './AddMovies'
import '../../styles/Login.css'
import { useSelector } from 'react-redux'
import mLogin from '../../asset/logo.png'
import { Navbar } from '../app/Navbar'

const AppTaks = () => {
    const { card } = useSelector(state => state.card)

    return (
        <div className="App">
            
            <Navbar />

            <div className="container ">
                <div className="row mt-4">
                    <div className="col-md-4 text-center py-3">
                        <img src={mLogin}  alt="logo" style={{width:"190px"}}/>
                        <AddTaks />
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <main>
                                {
                                    (card.length !== 0)
                                        ? <CardsTaks card={card} />
                                        : <CardSelect />
                                }
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppTaks