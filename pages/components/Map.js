import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9lczMxMiIsImEiOiJja3ZsbzhmaGVibGZiMnVvZjd2dHJwbXI4In0.LyMRdJiMExDGijeUTvDQmA';

const Map = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
           container: 'map',
           style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
           center: [-87.8, 42.2],
           zoom: 11,
         })
    })

    return (
        <Wrapper id= 'map'>
            
        </Wrapper>
    )
}

export default Map 

const Wrapper = tw.div`
    flex-1
`