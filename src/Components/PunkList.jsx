import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

const PunkList = ({punkListData}) => {
    return (
        <div className='punklist'>
            {punkListData.map(punk => (
                <div >
                    <CollectionCard 
                    key={punk.token_id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    image={punk.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default PunkList
