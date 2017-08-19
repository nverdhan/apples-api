# API for a PWA app

* `GET` `/api/alphabets`

Get all alphabets

* `GET` `/api/alphabets?index={integer}`

Get alphabet at index (circular)

* `POST` `/api/alphabets?index={integer}&add={string}`

Modify alphabet at index (circular) with query string add

* `POST` `/api/alphabets/reset`

Reset alphabets array
