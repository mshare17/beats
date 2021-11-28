let myMap;

const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.752004, 37.576133],
        zoom: 14
    });

    const coords = [
        [55.757581, 37.571958],
        [55.752004, 37.576133],
        [55.758405, 37.604593],
        [55.741602, 37.576492],
    ];

    const myCollection = new ymaps.GeoObjectCollection({}, {
        preset: 'islands#redIcon',
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref: './img/marker.svg',
        iconImageSize: [43, 55],
        iconImageOffset: [-3, -42]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    })

    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);