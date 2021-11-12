import { useEffect } from 'react'
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import Link from 'next/link'

const Confirm = () => {
const getCoordinates = () => {
    const location = "Higland Park"

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

    useEffect(() => {
        getCoordinates();
    }, [])

    return (
      <Wrapper>
          <Map />
          <RideContainer>
            Ride Selector 
            Confirm Button 
          </RideContainer>
      </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1 
`