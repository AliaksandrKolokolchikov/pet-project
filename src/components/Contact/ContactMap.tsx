import { Map, Placemark, YMaps } from 'react-yandex-maps';

export const ContactMap = () => {
  return (
    <>
      <YMaps>
        <Map
          width="100%"
          height="400px"
          defaultState={{ center: [55.751574, 37.573856], zoom: 12 }}
          query={{ apikey: 'ваш ключ' }}
        >
          <Placemark geometry={[55.751574, 37.573856]} />
        </Map>
      </YMaps>
    </>
  );
};
