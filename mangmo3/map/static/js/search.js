// 검색시작
var address = "대구";
var range = "";


const urlParams = new URLSearchParams(window.location.search);
address = urlParams.get('address');
range = urlParams.get('range')


// 주소 -> 좌표 를 만듭니다.
var geocoder = new kakao.maps.services.Geocoder();

  
geocoder.addressSearch(address, function(result, status) {
    // 정상적으로 검색이 완료됐으면 
    console.log("옮길곳 " + address)
    if(address == ""){
        return;
    }else if (status === kakao.maps.services.Status.OK) {
         console.log("성공성공성공")
    
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
        // 결과값으로 받은 위치를 마커로 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: coords
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">우리집</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
    }

    else{
        alert("위치 검색정보가 없습니다.")   
    }

})








