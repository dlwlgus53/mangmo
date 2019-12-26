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


    
// createCoffeeMarkers(); // 커피숍 마커를 생성하고 커피숍 마커 배열에 추가합니다
// createStoreMarkers(); // 편의점 마커를 생성하고 편의점 마커 배열에 추가합니다
// createCarparkMarkers(); // 주차장 마커를 생성하고 주차장 마커 배열에 추가합니다
createLibraryMarkers(); //도서관 마커를 생성하고 주차장 마커 배열에 추가합니다
createBadstoreMarkers(); //유흥주점 마커를 생성하고 주차장 마커 배열에 추가합니다



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
   
// 커피숍 마커를 생성하고 커피숍 마커 배열에 추가하는 함수입니다
function createCoffeeMarkers() {
    
    for (var i = 0; i < coffeePositions.length; i++) {  
        
        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {  
                spriteOrigin: new kakao.maps.Point(10, 0),    
                spriteSize: new kakao.maps.Size(36, 98)  
            };     
        
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
            marker = createMarker(coffeePositions[i], markerImage);  
        
        // 생성된 마커를 커피숍 마커 배열에 추가합니다
        coffeeMarkers.push(marker);
    }     
}



// 편의점 마커들의 지도 표시 여부를 설정하는 함수입니다
function setStoreMarkers(map) {        
    for (var i = 0; i < storeMarkers.length; i++) {  
        storeMarkers[i].setMap(map);
    }        
}

// 주차장 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
function createCarparkMarkers() {
    for (var i = 0; i < carparkPositions.length; i++) {
        
        var imageSize = new kakao.maps.Size(22, 26),
            imageOptions = {   
                spriteOrigin: new kakao.maps.Point(10, 72),    
                spriteSize: new kakao.maps.Size(36, 98)  
            };       
     
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(markerImageSrc, imageSize, imageOptions),    
            marker = createMarker(carparkPositions[i], markerImage);  

        // 생성된 마커를 주차장 마커 배열에 추가합니다
        carparkMarkers.push(marker);        
    }                
}

// 주차장 마커들의 지도 표시 여부를 설정하는 함수입니다
function setCarparkMarkers(map) {        
    for (var i = 0; i < carparkMarkers.length; i++) {  
        carparkMarkers[i].setMap(map);
    }        
}


// 도서관 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
function createLibraryMarkers() {
    for (var i = 0; i < libraryPositions.length; i++) {
        
        var imageSize = new kakao.maps.Size(22, 26),
  
        image = "https://i.ibb.co/31X0Jnp/book.png"
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




// 도서관 마커를 생성하고 주차장 마커 배열에 추가하는 함수입니다
function createBadstoreMarkers() {
    for (var i = 0; i < badstorePositions.length; i++) {
        
        var imageSize = new kakao.maps.Size(22, 26),
  
        image = "https://i.ibb.co/CQ58pxT/glass.png"
        // 마커이미지와 마커를 생성합니다
        var markerImage = createMarkerImage(image, imageSize),    
            marker = createMarker(badstorePositions[i], markerImage);  

        // 생성된 마커를 도서관 마커 배열에 추가합니다
        badstoreMarkers.push(marker);        
    }                
}

// 도서관 마커들의 지도 표시 여부를 설정하는 함수입니다
function setBadstoreMarkers(map) {        
    for (var i = 0; i < badstoreMarkers.length; i++) {  
        badstoreMarkers[i].setMap(map);
    }        
}


// setCoffeeMarkers(map);
// setStoreMarkers(map);
// setCarparkMarkers(map);
setLibraryMarkers(map);
setBadstoreMarkers(map);





// // 카테고리를 클릭했을 때 type에 따라 카테고리의 스타일과 지도에 표시되는 마커를 변경합니다
// function changeMarker(type){
    
//     var coffeeMenu = document.getElementById('coffeeMenu');
//     var storeMenu = document.getElementById('storeMenu');
//     var carparkMenu = document.getElementById('carparkMenu');
    
//     // 커피숍 카테고리가 클릭됐을 때
//     if (type === 'coffee') {
    
//         // 커피숍 카테고리를 선택된 스타일로 변경하고
//         coffeeMenu.className = 'menu_selected';
        
//         // 편의점과 주차장 카테고리는 선택되지 않은 스타일로 바꿉니다
//         storeMenu.className = '';
//         carparkMenu.className = '';
        
//         // 커피숍 마커들만 지도에 표시하도록 설정합니다
//         setCoffeeMarkers(map);
//         setStoreMarkers(null);
//         setCarparkMarkers(null);
        
//     } else if (type === 'store') { // 편의점 카테고리가 클릭됐을 때
    
//         // 편의점 카테고리를 선택된 스타일로 변경하고
//         coffeeMenu.className = '';
//         storeMenu.className = 'menu_selected';
//         carparkMenu.className = '';
        
//         // 편의점 마커들만 지도에 표시하도록 설정합니다
//         setCoffeeMarkers(null);
//         setStoreMarkers(map);
//         setCarparkMarkers(null);
        
//     } else if (type === 'carpark') { // 주차장 카테고리가 클릭됐을 때
     
//         // 주차장 카테고리를 선택된 스타일로 변경하고
//         coffeeMenu.className = '';
//         storeMenu.className = '';
//         carparkMenu.className = 'menu_selected';
        
//         // 주차장 마커들만 지도에 표시하도록 설정합니다
//         setCoffeeMarkers(null);
//         setStoreMarkers(null);
//         setCarparkMarkers(map);  
//     }    
// } 


