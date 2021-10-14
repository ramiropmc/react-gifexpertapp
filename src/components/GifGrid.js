import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
/*import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGif';*/
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    /*
    const [images, setimages] = useState([]);

    //Hace que la funcion que está dentro se renderice solo una vez
    useEffect(() => {
        getGifs ( category )
                .then( setimages );
    }, [ category ]);
    */

    const { data:images, loading } = useFetchGifs( category );

    
    return (
        <>
            <h3> { category } </h3>

            { loading && <p className="animate__animated animate__pulse" >Loading...</p> }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key = { img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>
    )
}
