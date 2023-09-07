const myObject = {
    userName: 'Rishabh Mittal',
    telephoneNumber: 1234567890,
    statementPrinted: 'hello world'
}

let { userName } = myObject
const myObject1 = {
    userName: 'Rishabh Mittal',
    telephoneNumber: 1234567890,
    statementPrinted: 'hello world'
}

console.log(userName);
const myJson = { "results": [{ "gender": "male", "name": { "title": "Mr", "first": "Samu", "last": "Seppanen" }, "location": { "street": { "number": 581, "name": "Visiokatu" }, "city": "Luhanka", "state": "Northern Savonia", "country": "Finland", "postcode": 81787, "coordinates": { "latitude": "-22.0743", "longitude": "-2.4255" }, "timezone": { "offset": "+7:00", "description": "Bangkok, Hanoi, Jakarta" } }, "email": "samu.seppanen@example.com", "login": { "uuid": "ddc0f77c-d5db-44b3-963f-33fb4f2be52c", "username": "bluewolf290", "password": "goldfing", "salt": "Zu1QsRpw", "md5": "25d90830f965a787ee34439feb2523b1", "sha1": "5df5bd808d257d284a5a94cebe07d2ea3262b5cc", "sha256": "14279904e488aa7a3d83e10e4383d0c6eb009f05bbc4bb664bd99dccc0a3e58d" }, "dob": { "date": "1956-07-07T22:46:39.529Z", "age": 67 }, "registered": { "date": "2021-10-12T02:46:18.893Z", "age": 1 }, "phone": "04-917-931", "cell": "047-836-31-55", "id": { "name": "HETU", "value": "NaNNA501undefined" }, "picture": { "large": "https://randomuser.me/api/portraits/men/70.jpg", "medium": "https://randomuser.me/api/portraits/med/men/70.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/70.jpg" }, "nat": "FI" }], "info": { "seed": "5625d69e9dc686b8", "results": 1, "page": 1, "version": "1.4" } }



console.log(myJson.results[0].login.uuid )