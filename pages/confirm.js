import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import Link from 'next/link'

const Confirm = () => {

        const [ pickupCoordinates, setPickupCoordinates ] = useState()
        const [ dropoffCoordinates, setDropoffCoordinates ] = useState()


const getPickCoordinates = () => {
    const pickup = "Highland Park, IL"

    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
    new URLSearchParams({
        access_token: "pk.eyJ1Ijoiam9lczMxMiIsImEiOiJja3ZsbzhmaGVibGZiMnVvZjd2dHJwbXI4In0.LyMRdJiMExDGijeUTvDQmA",
        limit: 1
    }) 
    )
    .then(response => response.json())
    .then(data => {
        setPickupCoordinates(data.features[0].center);
    })
}
    const getDropOffCoordinates = () => {
        const dropoff = "Lake Forest, IL"

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
            access_token: "pk.eyJ1Ijoiam9lczMxMiIsImEiOiJja3ZsbzhmaGVibGZiMnVvZjd2dHJwbXI4In0.LyMRdJiMExDGijeUTvDQmA",
            limit: 1
        }) 
        )
        .then(response => response.json())
        .then(data => {
            setDropoffCoordinates(data.features[0].center);
        })
    }

    useEffect(() => {
        getPickCoordinates();
        getDropOffCoordinates();
    }, [])


    return (
      <Wrapper>
          <Map pickupCoordinates={pickupCoordinates}
               dropoffCoordinates={dropoffCoordinates}
          />
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