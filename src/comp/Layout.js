import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import CharacterCard from "./CharacterCard"

const Layout = () => {

    const Person = useSelector(state=>state.Person)
    let people = Person.person


    if(!Person.person && !Person.loading && !Person.failure){
        return(
            <section className="section">
                <div className="container">
                    <div>
                        no people yet! Start searching your favorite characters by name!
                    </div>
                </div>
            </section>
            )
    }

    if(Person.loading){
        return(
            <section className="section">
                <div className="container">
                    <div>
                        loading....
                    </div>
                </div>
            </section>
            )
    }

    if(Person.failure || Person.person.length === 0){
        return(
            <section className="section">
                <div className="container">
                    <div>
                        no results
                        <span className="icon has-text-warning">
                            <i className="fas fa-exclamation-triangle"></i>
                        </span>
                    </div>
                </div>
            </section>
            )
    }






    return (
        <section className="section">
            <div className="container">
                <div className="columns grid">
                    <div className="column">
                        {people.map((char,index)=>{
                            
                            if(index%2 === 0){
                                return <CharacterCard key={index} person={char}/>
                            }
                        })}
                    </div>
                    <div className="column">
                        {people.map((char,index)=>{

                            if(index%2 === 1){
                                return <CharacterCard key={index} person={char}/>
                            }
                            
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Layout
