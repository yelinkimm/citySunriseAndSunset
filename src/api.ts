const GEO_BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1";
const SUNRISE_AND_SUNSET_BASE_URL = "https://api.sunrisesunset.io/json";

export async function getAllCities() {
  // return fetch(
  //   `${GEO_BASE_URL}/geo/adminDivisions`, {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  //       "X-RapidAPI-Key": "e51ecd69afmsh70d211bbff8e9b4p1887c9jsncf5cb8fcf121"
  //     }
  //   }
  // ).then(response => response.json());
  return {
    "data": [
        {
            "id": 3725808,
            "wikiDataId": "Q4743291",
            "type": "CITY",
            "city": "Yeongdeok-dong",
            "name": "Yeongdeok-dong",
            "country": "South Korea",
            "countryCode": "KR",
            "region": "Gyeonggi",
            "regionCode": "41",
            "regionWdId": "Q20937",
            "latitude": 37.26248,
            "longitude": 127.0866,
            "population": 0,
            "distance": 0.71
        },
        {
            "id": 3803983,
            "wikiDataId": "Q27338613",
            "type": "CITY",
            "city": "Maetan 4(sa) Dong",
            "name": "Maetan 4(sa) Dong",
            "country": "South Korea",
            "countryCode": "KR",
            "region": "Gyeonggi",
            "regionCode": "41",
            "regionWdId": "Q20937",
            "latitude": 37.26323,
            "longitude": 127.04928,
            "population": 0,
            "distance": 1.7
        },
        {
            "id": 3052662,
            "wikiDataId": "Q50425",
            "type": "ADM2",
            "city": "Yeongtong-gu",
            "name": "Yeongtong-gu",
            "country": "South Korea",
            "countryCode": "KR",
            "region": "Gyeonggi",
            "regionCode": "41",
            "regionWdId": "Q20937",
            "latitude": 37.272,
            "longitude": 127.056,
            "population": 376868,
            "distance": 1.71
        },
        {
            "id": 3804047,
            "wikiDataId": "Q27337832",
            "type": "CITY",
            "city": "Maetan 2(i) Dong",
            "name": "Maetan 2(i) Dong",
            "country": "South Korea",
            "countryCode": "KR",
            "region": "Gyeonggi",
            "regionCode": "41",
            "regionWdId": "Q20937",
            "latitude": 37.26775,
            "longitude": 127.05053,
            "population": 0,
            "distance": 1.77
        },
        {
            "id": 3202542,
            "wikiDataId": "Q12621032",
            "type": "CITY",
            "city": "Mangpo-dong",
            "name": "Mangpo-dong",
            "country": "South Korea",
            "countryCode": "KR",
            "region": "Gyeonggi",
            "regionCode": "41",
            "regionWdId": "Q20937",
            "latitude": 37.23862,
            "longitude": 127.05046,
            "population": 0,
            "distance": 1.88
        }
    ],
    "links": [
        {
            "rel": "first",
            "href": "/v1/geo/cities?offset=0&limit=5&location=+37.2546+127.0782"
        },
        {
            "rel": "next",
            "href": "/v1/geo/cities?offset=5&limit=5&location=+37.2546+127.0782"
        },
        {
            "rel": "last",
            "href": "/v1/geo/cities?offset=1150&limit=5&location=+37.2546+127.0782"
        }
    ],
    "metadata": {
        "currentOffset": 0,
        "totalCount": 1151
    }
}
}

export async function getCityDetail(latitude: string, longitude: string) {
  // return fetch(
  //   `${SUNRISE_AND_SUNSET_BASE_URL}?lat=${latitude}&lng=${longitude}`
  // ).then(response => response.json());
  return {
    "results": [
        {
            "date": "2024-01-17",
            "sunrise": "7:45:29 AM",
            "sunset": "5:39:32 PM",
            "first_light": "6:13:50 AM",
            "last_light": "7:11:10 PM",
            "dawn": "7:17:05 AM",
            "dusk": "6:07:56 PM",
            "solar_noon": "12:42:30 PM",
            "golden_hour": "5:00:15 PM",
            "day_length": "9:54:02",
            "timezone": "Asia/Seoul",
            "utc_offset": 540
        },
        {
            "date": "2024-01-18",
            "sunrise": "7:45:08 AM",
            "sunset": "5:40:34 PM",
            "first_light": "6:13:37 AM",
            "last_light": "7:12:04 PM",
            "dawn": "7:16:47 AM",
            "dusk": "6:08:55 PM",
            "solar_noon": "12:42:51 PM",
            "golden_hour": "5:01:23 PM",
            "day_length": "9:55:26",
            "timezone": "Asia/Seoul",
            "utc_offset": 540
        },
        {
            "date": "2024-01-19",
            "sunrise": "7:44:44 AM",
            "sunset": "5:41:37 PM",
            "first_light": "6:13:22 AM",
            "last_light": "7:12:59 PM",
            "dawn": "7:16:27 AM",
            "dusk": "6:09:54 PM",
            "solar_noon": "12:43:10 PM",
            "golden_hour": "5:02:32 PM",
            "day_length": "9:56:52",
            "timezone": "Asia/Seoul",
            "utc_offset": 540
        },
        {
            "date": "2024-01-20",
            "sunrise": "7:44:19 AM",
            "sunset": "5:42:40 PM",
            "first_light": "6:13:06 AM",
            "last_light": "7:13:53 PM",
            "dawn": "7:16:05 AM",
            "dusk": "6:10:54 PM",
            "solar_noon": "12:43:29 PM",
            "golden_hour": "5:03:41 PM",
            "day_length": "9:58:20",
            "timezone": "Asia/Seoul",
            "utc_offset": 540
        },
        {
            "date": "2024-01-21",
            "sunrise": "7:43:52 AM",
            "sunset": "5:43:44 PM",
            "first_light": "6:12:47 AM",
            "last_light": "7:14:48 PM",
            "dawn": "7:15:41 AM",
            "dusk": "6:11:54 PM",
            "solar_noon": "12:43:48 PM",
            "golden_hour": "5:04:52 PM",
            "day_length": "9:59:51",
            "timezone": "Asia/Seoul",
            "utc_offset": 540
        },
        {
            "date": "2024-01-22",
            "sunrise": "7:43:23 AM",
            "sunset": "5:44:48 PM",
            "first_light": "6:12:27 AM",
            "last_light": "7:15:44 PM",
            "dawn": "7:15:16 AM",
            "dusk": "6:12:55 PM",
            "solar_noon": "12:44:05 PM",
            "golden_hour": "5:06:02 PM",
            "day_length": "10:01:25",
            "timezone": "Asia/Seoul",
            "utc_offset": 540
        },
        {
            "date": "2024-01-23",
            "sunrise": "7:42:52 AM",
            "sunset": "5:45:53 PM",
            "first_light": "6:12:05 AM",
            "last_light": "7:16:40 PM",
            "dawn": "7:14:49 AM",
            "dusk": "6:13:56 PM",
            "solar_noon": "12:44:22 PM",
            "golden_hour": "5:07:13 PM",
            "day_length": "10:03:00",
            "timezone": "Asia/Seoul",
            "utc_offset": 540
        },
        {
            "date": "2024-01-24",
            "sunrise": "7:42:20 AM",
            "sunset": "5:46:58 PM",
            "first_light": "6:11:41 AM",
            "last_light": "7:17:36 PM",
            "dawn": "7:14:19 AM",
            "dusk": "6:14:58 PM",
            "solar_noon": "12:44:39 PM",
            "golden_hour": "5:08:25 PM",
            "day_length": "10:04:38",
            "timezone": "Asia/Seoul",
            "utc_offset": 540
        }
    ],
    "status": "OK"
}
}