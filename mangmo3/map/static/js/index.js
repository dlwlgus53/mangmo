var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.49788733918121 , 127.02746869487623), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
        draggable: false,
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 







var markerImageSrc = 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FnIVp8%2FbtqAbnA2W09%2FcZhhO1p7gSH79ariCsP4yK%2Fimg.png';  // 마커이미지의 주소입니다. 스프라이트 이미지 입니다
    coffeeMarkers = [], // 커피숍 마커 객체를 가지고 있을 배열입니다
    storeMarkers = [], // 편의점 마커 객체를 가지고 있을 배열입니다
    carparkMarkers = []; // 주차장 마커 객체를 가지고 있을 배열입니다
    libraryMarkers = []; // 도서관 마커 객체를 가지고 있을 배열입니다
    badstoreMarkers = []; //유흥주점 마커 객체
    hospitalMarkers = []; //병원 마커 객체



    
// createCoffeeMarkers(); // 커피숍 마커를 생성하고 커피숍 마커 배열에 추가합니다
// createStoreMarkers(); // 편의점 마커를 생성하고 편의점 마커 배열에 추가합니다
// createCarparkMarkers(); // 주차장 마커를 생성하고 주차장 마커 배열에 추가합니다
createLibraryMarkers(); //도서관 마커를 생성하고 주차장 마커 배열에 추가합니다
createBadstoreMarkers(); //유흥주점 마커를 생성하고 주차장 마커 배열에 추가합니다
createHospitalMarkers(); //병원 마커를 생성하고 주차장 마커 배열에 추가합니다




// 마커이미지의 주소와, 크기, 옵션으로 마커 이미지를 생성하여 리턴하는 함수입니다
function createMarkerImage(src, size, options) {
    var markerImage = new kakao.maps.MarkerImage(src, size, options);
    return markerImage;            
}

// 좌표와 마커이미지를 받아 마커를 생성하여 리턴하는 함수입니다
function createMarker(position, image) {
    var marker = new kakao.maps.Marker({
        position: position,
        image: image
    });
    
    return marker;  
}   
   






// 도서관 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
function createLibraryMarkers() {
    for (var i = 0; i < libraryPositions.length; i++) {
        
        var imageSize = new kakao.maps.Size(22, 26),
  
        image ="https://i.ibb.co/MBzbnVz/book.png"
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(image, imageSize),    
            marker = createMarker(libraryPositions[i], markerImage);  

        // 생성된 마커를 도서관 마커 배열에 추가합니다
        libraryMarkers.push(marker);        
    }                
}

// 도서관 마커들의 지도 표시 여부를 설정하는 함수입니다
function setLibraryMarkers(map) {        
    for (var i = 0; i < libraryMarkers.length; i++) {  
        libraryMarkers[i].setMap(map);
    }        
}




// 유흥주점를 생성하고 주차장 마커 배열에 추가하는 함수입니다
function createBadstoreMarkers() {
    for (var i = 0; i < badstorePositions.length; i++) {
        
        var imageSize = new kakao.maps.Size(22, 26),
  
        image = "https://i.ibb.co/vXg5hgM/glass.png"
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(image, imageSize),    
            marker = createMarker(badstorePositions[i], markerImage);  

        // 생성된 마커를 유흥주점 마커 배열에 추가합니다
        badstoreMarkers.push(marker);        
    }                
}

//유흥주점 마커들의 지도 표시 여부를 설정하는 함수입니다
function setBadstoreMarkers(map) {        
    for (var i = 0; i < badstoreMarkers.length; i++) {  
        badstoreMarkers[i].setMap(map);
    }        
}

//병원 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
function createHospitalMarkers() {
    for (var i = 0; i < hospitalPositions.length; i++) {
        
        var imageSize = new kakao.maps.Size(22, 26),
  
        image = "https://i.ibb.co/PcC6qy0/hospital.png"
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(image, imageSize),    
            marker = createMarker(hospitalPositions[i], markerImage);  

        // 생성된 마커를 도서관 마커 배열에 추가합니다
        hospitalMarkers.push(marker);        
    }                
}

// 병원 마커들의 지도 표시 여부를 설정하는 함수입니다
function setHospitalMarkers(map) {        
    for (var i = 0; i < hospitalMarkers.length; i++) {  
        hospitalMarkers[i].setMap(map);
    }        
}




setLibraryMarkers(map);
setBadstoreMarkers(map);
setHospitalMarkers(map);


//이미지 링크
// book : https://i.ibb.co/MBzbnVz/book.png
//glass : https://i.ibb.co/vXg5hgM/glass.png
//hospital : https://i.ibb.co/PcC6qy0/hospital.png
// kids : https://i.ibb.co/mCS643K/kids.png
//park : https://i.ibb.co/BGQb3BF/park.png
//school : https://i.ibb.co/9yrwPdM/school.png