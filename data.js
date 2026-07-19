// [장소 데이터] 총 100건
const placeData = {
    "airpack": {
        "station": "공통 안전 가이드",
        "title": "공기호흡기 사용법",
        "phone": "032-451-4446",
        "video_id": "Xm4MCl_Q25U" // 여기에 유튜브 영상 고유 ID만 입력합니다 (예: "Xm4MCl_Q25U")
    },
    "211ES001": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 1호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE08.jpg"
    },
    "211ES002": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 2호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE14.jpg"
    },
    "211ES003": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 3호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE07.jpg"
    },
    "211ES004": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 4호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE12.jpg"
    },
    "211ES005": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 5호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE07.jpg"
    },
    "211ES006": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 6호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE09.jpg"
    },
    "211ES007": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 7호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE08.jpg"
    },
    "211ES008": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 8호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE11.jpg"
    },
    "211ES009": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 9호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE08.jpg"
    },
    "211ES010": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 10호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE08.jpg"
    },
    "211ES011": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 11호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE07.jpg"
    },
    "211ES012": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 12호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE07.jpg"
    },
    "211ES013": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 13호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE02.jpg"
    },
    "211ES014": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 14호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE02.jpg"
    },
    "211ES015": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 15호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE05.jpg"
    },
    "211ES016": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 16호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE05.jpg"
    },
    "211ES017": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 17호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE01.jpg"
    },
    "211ES018": {
        "station": "가정역",
        "title": "가정역 에스컬레이터 18호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE01.jpg"
    },
    "211EL001": {
        "station": "가정역",
        "title": "가정역 엘리베이터 1호기(B1)",
        "phone": "032-451-4311",
        "image_name": "211ZONE02.jpg"
    },
    "211EL002": {
        "station": "가정역",
        "title": "가정역 엘리베이터 2호기(B1)",
        "phone": "032-451-4311",
        "image_name": "211ZONE05.jpg"
    },
    "211EL003": {
        "station": "가정역",
        "title": "가정역 엘리베이터 3호기(B1)",
        "phone": "032-451-4311",
        "image_name": "211ZONE05.jpg"
    },
    "211EL004": {
        "station": "가정역",
        "title": "가정역 엘리베이터 4호기(B1)",
        "phone": "032-451-4311",
        "image_name": "211ZONE02.jpg"
    },
    "211EL005": {
        "station": "가정역",
        "title": "가정역 엘리베이터 5호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE02.jpg"
    },
    "211EL006": {
        "station": "가정역",
        "title": "가정역 엘리베이터 6호기",
        "phone": "032-451-4311",
        "image_name": "211ZONE02.jpg"
    },
    "211EL007": {
        "station": "가정역",
        "title": "가정역 엘리베이터 1호기(B3)",
        "phone": "032-451-4311",
        "image_name": "211ZONE13.jpg"
    },
    "211EL008": {
        "station": "가정역",
        "title": "가정역 엘리베이터 2호기(B3)",
        "phone": "032-451-4311",
        "image_name": "211ZONE13.jpg"
    },
    "211EL009": {
        "station": "가정역",
        "title": "가정역 엘리베이터 3호기(B3)",
        "phone": "032-451-4311",
        "image_name": "211ZONE10.jpg"
    },
    "211EL010": {
        "station": "가정역",
        "title": "가정역 엘리베이터 4호기(B3)",
        "phone": "032-451-4311",
        "image_name": "211ZONE10.jpg"
    },
    "211EXIT001": {
        "station": "가정역",
        "title": "가정역 1번출구",
        "phone": "032-451-4311",
        "image_name": "211ZONE03.jpg"
    },
    "211EXIT002": {
        "station": "가정역",
        "title": "가정역 2번출구",
        "phone": "032-451-4311",
        "image_name": "211ZONE06.jpg"
    },
    "211EXIT003": {
        "station": "가정역",
        "title": "가정역 3번출구",
        "phone": "032-451-4311",
        "image_name": "211ZONE06.jpg"
    },
    "211EXIT004": {
        "station": "가정역",
        "title": "가정역 4번출구",
        "phone": "032-451-4311",
        "image_name": "211ZONE04.jpg"
    },
    "211EXIT005": {
        "station": "가정역",
        "title": "가정역 5번출구",
        "phone": "032-451-4311",
        "image_name": "211ZONE04.jpg"
    },
    "211EXIT006": {
        "station": "가정역",
        "title": "가정역 6번출구",
        "phone": "032-451-4311",
        "image_name": "211ZONE01.jpg"
    },
    "211EXIT007": {
        "station": "가정역",
        "title": "가정역 7번출구",
        "phone": "032-451-4311",
        "image_name": "211ZONE01.jpg"
    },
    "211EXIT008": {
        "station": "가정역",
        "title": "가정역 8번출구",
        "phone": "032-451-4311",
        "image_name": "211ZONE03.jpg"
    },
    "211TOILET6M": {
        "station": "가정역",
        "title": "가정역 6번출구 방면 남자화장실",
        "phone": "032-451-4311",
        "image_name": "211ZONE01.jpg"
    },
    "211TOILET6W": {
        "station": "가정역",
        "title": "가정역 6번출구 방면 여자화장실",
        "phone": "032-451-4311",
        "image_name": "211ZONE01.jpg"
    },
    "211TOILET5M": {
        "station": "가정역",
        "title": "가정역 5번출구 방면 남자화장실",
        "phone": "032-451-4311",
        "image_name": "211ZONE04.jpg"
    },
    "211TOILET5W": {
        "station": "가정역",
        "title": "가정역 5번출구 방면 여자화장실",
        "phone": "032-451-4311",
        "image_name": "211ZONE04.jpg"
    },
    "211UPFRONT": {
        "station": "가정역",
        "title": "가정역 상선 전부(검단오류 방면)",
        "phone": "032-451-4311",
        "image_name": "211ZONE14.jpg"
    },
    "211UPMID": {
        "station": "가정역",
        "title": "가정역 상선 중앙(검단오류 방면)",
        "phone": "032-451-4311",
        "image_name": "211ZONE13.jpg"
    },
    "211UPREAR": {
        "station": "가정역",
        "title": "가정역 상선 후부(검단오류 방면)",
        "phone": "032-451-4311",
        "image_name": "211ZONE12.jpg"
    },
    "211DOWNFRONT": {
        "station": "가정역",
        "title": "가정역 하선 전방(운연 방면)",
        "phone": "032-451-4311",
        "image_name": "211ZONE09.jpg"
    },
    "211DOWNMID": {
        "station": "가정역",
        "title": "가정역 하선 중앙(운연 방면)",
        "phone": "032-451-4311",
        "image_name": "211ZONE10.jpg"
    },
    "211DOWNREAR": {
        "station": "가정역",
        "title": "가정역 하선 후부(운연 방면)",
        "phone": "032-451-4311",
        "image_name": "211ZONE11.jpg"
    },
    "211STA001": {
        "station": "가정역",
        "title": "가정역 대합실(1, 6, 7, 8번 출구 방면)",
        "phone": "032-451-4311",
        "image_name": "211ZONE02.jpg"
    },
    "211STA002": {
        "station": "가정역",
        "title": "가정역 대합실(2, 3, 4, 5번 출구 방면)",
        "phone": "032-451-4311",
        "image_name": "211ZONE05.jpg"
    },
    "209ES001": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 1호기",
        "phone": "032-451-4309",
        "image_name": "209ZONE05.jpg"
    },
    "209ES002": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 2호기",
        "phone": "032-451-4309",
        "image_name": "209ZONE03.jpg"
    },
    "209ES003": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 3호기",
        "phone": "032-451-4309",
        "image_name": "209ZONE07.jpg"
    },
    "209ES004": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 4호기",
        "phone": "032-451-4309",
        "image_name": "209ZONE03.jpg"
    },
    "209ES005": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 5호기",
        "phone": "032-451-4309",
        "image_name": "209ZONE01.jpg"
    },
    "209ES006": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 6호기",
        "phone": "032-451-4309",
        "image_name": "209ZONE01.jpg"
    },
    "209ES007": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 7호기",
        "phone": "032-451-4309",
        "image_name": "209ZONE02.jpg"
    },
    "209ES008": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 에스컬레이터 8호기",
        "phone": "032-451-4309",
        "image_name": "209ZONE02.jpg"
    },
    "209TOILET4M": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 4번 출구 방면 남자화장실",
        "phone": "032-451-4309",
        "image_name": "209ZONE03.jpg"
    },
    "209TOILET4W": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 4번 출구 방면 여자화장실",
        "phone": "032-451-4309",
        "image_name": "209ZONE04.jpg"
    },
    "209EL001": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 엘리베이터 1호기(상선승강장)",
        "phone": "032-451-4309",
        "image_name": "209ZONE04.jpg"
    },
    "209EL002": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 엘리베이터 2호기(하선승강장)",
        "phone": "032-451-4309",
        "image_name": "209ZONE06.jpg"
    },
    "209EL003": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 엘리베이터 3호기(1, 2번 출구)",
        "phone": "032-451-4309",
        "image_name": "209ZONE01.jpg"
    },
    "209EL004": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 엘리베이터 4호기(3, 4번 출구)",
        "phone": "032-451-4309",
        "image_name": "209ZONE02.jpg"
    },
    "209EXIT001": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 1번 출구",
        "phone": "032-451-4309",
        "image_name": "209ZONE01.jpg"
    },
    "209EXIT002": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 2번 출구",
        "phone": "032-451-4309",
        "image_name": "209ZONE01.jpg"
    },
    "209EXIT003": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 3번 출구",
        "phone": "032-451-4309",
        "image_name": "209ZONE02.jpg"
    },
    "209EXIT004": {
        "station": "아시아드경기장역",
        "title": "아시아드경기장역 4번 출구",
        "phone": "032-451-4309",
        "image_name": "209ZONE02.jpg"
    },
    "212ES001": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 1호기",
        "phone": "032-451-4312",
        "image_name": "212ZONE05.jpg"
    },
    "212ES002": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 2호기",
        "phone": "032-451-4312",
        "image_name": "212ZONE03.jpg"
    },
    "212ES003": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 3호기",
        "phone": "032-451-4312",
        "image_name": "212ZONE07.jpg"
    },
    "212ES004": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 4호기",
        "phone": "032-451-4312",
        "image_name": "212ZONE03.jpg"
    },
    "212ES005": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 5호기",
        "phone": "032-451-4312",
        "image_name": "212ZONE01.jpg"
    },
    "212ES006": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 에스컬레이터 6호기",
        "phone": "032-451-4312",
        "image_name": "212ZONE01.jpg"
    },
    "212EL001": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 엘리베이터 1호기",
        "phone": "032-451-4312",
        "image_name": "212ZONE04.jpg"
    },
    "212EL002": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 엘리베이터 2호기",
        "phone": "032-451-4312",
        "image_name": "212ZONE06.jpg"
    },
    "212EL003": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 엘리베이터 3호기",
        "phone": "032-451-4312",
        "image_name": "212ZONE01.jpg"
    },
    "212EL004": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 엘리베이터 4호기",
        "phone": "032-451-4312",
        "image_name": "212ZONE02.jpg"
    },
    "212EL005": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 엘리베이터 5호기",
        "phone": "032-451-4312",
        "image_name": "212ZONE02.jpg"
    },
    "212TOILET1M": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 남자화장실",
        "phone": "032-451-4312",
        "image_name": "212ZONE01.jpg"
    },
    "212TOILET1W": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 여자화장실",
        "phone": "032-451-4312",
        "image_name": "212ZONE01.jpg"
    },
    "212EXIT001": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 1번 출구",
        "phone": "032-451-4312",
        "image_name": "212ZONE01.jpg"
    },
    "212EXIT002": {
        "station": "가정중앙시장역",
        "title": "가정중앙시장역 2번 출구",
        "phone": "032-451-4312",
        "image_name": "212ZONE01.jpg"
    },
    "210ES001": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 1호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE06.jpg"
    },
    "210ES002": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 2호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE07.jpg"
    },
    "210ES003": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 3호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE06.jpg"
    },
    "210ES004": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 4호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE08.jpg"
    },
    "210ES005": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 5호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE06.jpg"
    },
    "210ES006": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 6호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE04.jpg"
    },
    "210ES007": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 7호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE01.jpg"
    },
    "210ES008": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 8호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE01.jpg"
    },
    "210ES009": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 9호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE03.jpg"
    },
    "210ES010": {
        "station": "서해구청역",
        "title": "서해구청역 에스컬레이터 10호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE03.jpg"
    },
    "210EL001": {
        "station": "서해구청역",
        "title": "서해구청역 엘리베이터 1호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE07.jpg"
    },
    "210EL002": {
        "station": "서해구청역",
        "title": "서해구청역 엘리베이터 2호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE08.jpg"
    },
    "210EL003": {
        "station": "서해구청역",
        "title": "서해구청역 엘리베이터 3호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE01.jpg"
    },
    "210EL004": {
        "station": "서해구청역",
        "title": "서해구청역 엘리베이터 4호기",
        "phone": "032-451-4310",
        "image_name": "210ZONE02.jpg"
    },
    "210EXIT001": {
        "station": "서해구청역",
        "title": "서해구청역 1번 출구",
        "phone": "032-451-4310",
        "image_name": "210ZONE01.jpg"
    },
    "210EXIT002": {
        "station": "서해구청역",
        "title": "서해구청역 2번 출구",
        "phone": "032-451-4310",
        "image_name": "210ZONE01.jpg"
    },
    "210EXIT003": {
        "station": "서해구청역",
        "title": "서해구청역 3번 출구",
        "phone": "032-451-4310",
        "image_name": "210ZONE02.jpg"
    },
    "210EXIT004": {
        "station": "서해구청역",
        "title": "서해구청역 4번 출구",
        "phone": "032-451-4310",
        "image_name": "210ZONE03.jpg"
    },
    "210TOILET001": {
        "station": "서해구청역",
        "title": "서해구청역 화장실",
        "phone": "032-451-4310",
        "image_name": "210ZONE03.jpg"
    }
};
