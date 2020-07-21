import React from 'react'

const CharacterCard = (props) => {
    console.log(props.person)
    const {birthday, name, nickname, category, occupation, portrayed, status, img} = props.person

    
    return (
        <div className="tile is-parent is-vertical">
            <div className="tile is-child notification is-primary">
                <p className="title">{name}</p>
                <p className="subtitle">DOB:{birthday}</p>
                <p className="subtitle">played by {portrayed}</p>
                <p className="subtitle">{nickname}</p>
                <figure className="image is-3by3">
                    <img src={img} alt={name}/>
                </figure>
                <p className="subtitle">status:{status}</p>
            </div>
        </div>
    )
}

export default CharacterCard
