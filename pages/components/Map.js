import { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
	'pk.eyJ1Ijoiam9lczMxMiIsImEiOiJja3ZsbzhmaGVibGZiMnVvZjd2dHJwbXI4In0.LyMRdJiMExDGijeUTvDQmA';

const Map = () => {
	useEffect(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
			center: [-87.8, 42.2],
			zoom: 9
		});
		addToMap(map);
	});

	const addToMap = map => {
		// Create a default Marker and add it to the map.
		const marker1 = new mapboxgl.Marker().setLngLat([-87.8, 42.2]).addTo(map);

		// Create a default Marker, colored black, rotated 45 degrees.
		const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
			.setLngLat([-87.7, 42])
			.addTo(map);
	};

	return <Wrapper id='map'></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
    flex-1
`;
