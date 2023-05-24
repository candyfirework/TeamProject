const current_button = document.querySelector('.current_position')

// HTML5의 geolocation으로 사용할 수 있는지 확인합니다 
if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.watchPosition(function(position) {
        const lat = position.coords.latitude // 위도
        const lon = position.coords.longitude; // 경도
        
        const locPosition = new kakao.maps.LatLng(lat, lon) // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

        const imageSrc = "./img/pin.png"; 
        const imageSize = new kakao.maps.Size(24, 35); 
        const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 

        current_button.addEventListener('click', () => {
            var marker = new kakao.maps.Marker({
                map: map,
                position: locPosition,
                image : markerImage
            })
            map.setCenter(locPosition)
        })
    });
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667)
    console.error('현재 위치를 찾을 수 없습니다.')
}
