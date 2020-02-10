import React from 'react'

export default (props:any) => {
    return(
        <div>
            <p>{ props.book.title }</p>
            <button onClick={ () => props.goTo("addChapter", props.book) }>+</button>
        </div>
	)
}