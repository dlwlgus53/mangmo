// 검색시작
var address = "";
var range;


const urlParams = new URLSearchParams(window.location.search);
if(urlParams.get('address')!= undefined){
    address = urlParams.get('address');
}
if(urlParams.get('range')!= undefined){
    range = urlParams.get('range')

}


// 주소 -> 좌표 를 만듭니다.
var geocoder = new kakao.maps.services.Geocoder();

  
geocoder.addressSearch(address, function(result, status) {
    // 정상적으로 검색이 완료됐으면 
    console.log("옮길곳 " + address)
    if(address == ""){
        return;
    }else if (status === kakao.maps.services.Status.OK) {
    
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
    
        // 결과값으로 받은 위치를 마커로 표시합니다
        var imageSrc = "https://i.ibb.co/ZMtxGY8/house.png" // 마커이미지의 주소입니다    
            imageSize = new kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
            imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
    

        var marker = new kakao.maps.Marker({
            map: map,
            position: coords,
            image: markerImage // 
        });

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">우리집</div>'
        });
        infowindow.open(map, marker);

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
        map.setLevel(range);
        // 지도의 현재 영역을 얻어옵니다 
        var bounds = map.getBounds();
        // 영역의 남서쪽 좌표를 얻어옵니다 
        var swLatLng = bounds.getSouthWest(); 

        // 영역의 북동쪽 좌표를 얻어옵니다 
        var neLatLng = bounds.getNorthEast(); 
        
        //도서관 정보를 검색후 화면에 보내줍니다.
        var lib = String(counter(swLatLng, neLatLng, libraryPositions))

        var libDiv = document.getElementById('lib');  
        libDiv.innerHTML = lib;

        //유흥주점 정보를 검색후 화면에 보내줍니다.
        var badstore = String(counter(swLatLng, neLatLng, badstorePositions))

        var badstoreDiv = document.getElementById('badstore');  
        badstoreDiv.innerHTML = badstore;

        //병원 정보를 검색후 화면에 보내줍니다.
        var hospital = String(counter(swLatLng, neLatLng, hospitalPositions))

        var hospitalDiv = document.getElementById('hospital');  
        hospitalDiv.innerHTML = hospital;
    
        //공원 정보를 검색후 화면에 보내줍니다.
        var park = String(counter(swLatLng, neLatLng, parkPositions))

        var parkDiv = document.getElementById('park');  
        parkDiv.innerHTML = park;

        //유치원 정보를 검색후 화면에 보내줍니다.
        var kid = String(counter(swLatLng, neLatLng, kidPositions))

        var kidDiv = document.getElementById('kid');  
        kidDiv.innerHTML = kid;

        //학교 정보를 검색후 화면에 보내줍니다.
        var school = String(counter(swLatLng, neLatLng, schoolPositions))

        var schoolDiv = document.getElementById('school');  
        schoolDiv.innerHTML = school;


        document.getElementById("sample6_address").value = address;
        document.getElementById(String(range)).checked = true;

    
    

    }

    else{
        alert("위치 검색정보가 없습니다.")   
    }

})












function counter(swLatLng, neLatLng, list) {
    //남서보다는 커야하고, 북동보다는 작아야 한다.
    cnt =0 
    for (var i = 0; i < list.length; i++) {  
        lat = list[i].Ha//위도
        lan = list[i].Ga//경도

        if(lat>swLatLng.getLat() && lan>swLatLng.getLng() &&
        lat<neLatLng.getLat() && lan<neLatLng.getLng()){
            cnt +=1
        }
    }
    console.log(cnt)
    return cnt
}