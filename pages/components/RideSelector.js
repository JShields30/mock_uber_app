import React from 'react'
import tw from 'tailwind-styled-components';

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                <Car>
                    <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
                    <CarDetails>
                        <Service>UberX</Service>
                        <Time>7 min away</Time>
                    </CarDetails>
                    <Price>$22</Price>
                </Car>
                <Car>
                    <CarImage src="https://i.ibb.co/YDYMKny/uberxl.png" />
                    <CarDetails>
                        <Service>UberXL</Service>
                        <Time>10 min away</Time>
                    </CarDetails>
                    <Price>$32</Price>
                </Car>
                <Car>
                    <CarImage src="https://i.ibb.co/Xx4G91m/uberblack.png" />
                    <CarDetails>
                        <Service>Black</Service>
                        <Time>15 min away</Time>
                    </CarDetails>
                    <Price>$60</Price>
                </Car>
                <Car>
                    <CarImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
                    <CarDetails>
                        <Service>Comfort</Service>
                        <Time>20 min away</Time>
                    </CarDetails>
                    <Price>$70</Price>
                </Car>
                <Car>
                    <CarImage src="https://i.ibb.co/1nStPWT/uberblacksuv.png" />
                    <CarDetails>
                        <Service>Black SUV</Service>
                        <Time>25 min away</Time>
                    </CarDetails>
                    <Price>$100</Price>
                </Car>
            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const Wrapper = tw.div`
flex-1 
`
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const CarList = tw.div`

`
const Car = tw.div`
flex p-4 items-center
`
const CarImage = tw.img`
h-14 mr-4
`
const CarDetails = tw.div`
flex-1
`
const Service = tw.div`
font-medium
`
const Time = tw.div`
text-xs text-blue-500
`
const Price = tw.div`
text-sm
`
