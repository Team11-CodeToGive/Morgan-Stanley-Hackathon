import { useEffect, useState } from "react";
import EventCard from "./EventCard"
import { toUserFriendlyDateFormat } from "@/utils/dateUtils";
import CreateEventButton from "./CreateEventButton";
import FloatingCreateEventButton from "./FloatingCreateEventButton";

const initDays = [
    {
        "date": "2024-09-23",
        "events": [
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:48:06.673152+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 39,
                "img": null,
                "location": {
                    "address": "123",
                    "created_at": "2024-09-22T16:48:06.445546+00:00",
                    "id": 52,
                    "latitude": 31.9059024,
                    "longitude": 35.1984346,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:46:56.768809+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 38,
                "img": null,
                "location": {
                    "address": "2400 Lakeview Pkwy",
                    "created_at": "2024-09-22T16:46:56.527653+00:00",
                    "id": 51,
                    "latitude": 34.0588234,
                    "longitude": -84.2896082,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:52:22.063945+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 40,
                "img": null,
                "location": {
                    "address": "1210 NW 5th Ave, Gainesville, FL",
                    "created_at": "2024-09-22T16:52:21.809283+00:00",
                    "id": 53,
                    "latitude": 29.6557994081633,
                    "longitude": -82.337322244898,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:53:14.954926+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 41,
                "img": null,
                "location": {
                    "address": "123 ingle wood",
                    "created_at": "2024-09-22T16:53:14.699932+00:00",
                    "id": 54,
                    "latitude": 35.2178301312742,
                    "longitude": -81.1180787578924,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [
                    {
                        "bookmark": null,
                        "created_at": "2024-09-21T19:51:55.99746+00:00",
                        "event_id": 7,
                        "registration_id": 2,
                        "status": null,
                        "user_id": 14,
                        "user_info": {
                            "address_id": 14,
                            "created_at": "2024-09-21T18:01:21.346259+00:00",
                            "email": "Shlok.Nangia@mail.com",
                            "name": "Shlok Nangia",
                            "password": "Shlok@123",
                            "role": "user",
                            "user_id": 14
                        }
                    }
                ],
                "capacity": 40,
                "community_ids": [
                    1,
                    2
                ],
                "created_at": "2024-09-21T19:03:40.948569+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T16:00:00",
                "event_id": 7,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-21T21:23:26.709718+00:00",
                    "id": 26,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": false,
                "start_datetime": "2024-09-23T14:00:00",
                "tags": [
                    "Tag1",
                    "Tag2"
                ],
                "title": "Event2"
            }
        ]
    },
    {
        "date": "2024-09-23",
        "events": [
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:48:06.673152+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 39,
                "img": null,
                "location": {
                    "address": "123",
                    "created_at": "2024-09-22T16:48:06.445546+00:00",
                    "id": 52,
                    "latitude": 31.9059024,
                    "longitude": 35.1984346,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:46:56.768809+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 38,
                "img": null,
                "location": {
                    "address": "2400 Lakeview Pkwy",
                    "created_at": "2024-09-22T16:46:56.527653+00:00",
                    "id": 51,
                    "latitude": 34.0588234,
                    "longitude": -84.2896082,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:52:22.063945+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 40,
                "img": null,
                "location": {
                    "address": "1210 NW 5th Ave, Gainesville, FL",
                    "created_at": "2024-09-22T16:52:21.809283+00:00",
                    "id": 53,
                    "latitude": 29.6557994081633,
                    "longitude": -82.337322244898,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:53:14.954926+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 41,
                "img": null,
                "location": {
                    "address": "123 ingle wood",
                    "created_at": "2024-09-22T16:53:14.699932+00:00",
                    "id": 54,
                    "latitude": 35.2178301312742,
                    "longitude": -81.1180787578924,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [
                    {
                        "bookmark": null,
                        "created_at": "2024-09-21T19:51:55.99746+00:00",
                        "event_id": 7,
                        "registration_id": 2,
                        "status": null,
                        "user_id": 14,
                        "user_info": {
                            "address_id": 14,
                            "created_at": "2024-09-21T18:01:21.346259+00:00",
                            "email": "Shlok.Nangia@mail.com",
                            "name": "Shlok Nangia",
                            "password": "Shlok@123",
                            "role": "user",
                            "user_id": 14
                        }
                    }
                ],
                "capacity": 40,
                "community_ids": [
                    1,
                    2
                ],
                "created_at": "2024-09-21T19:03:40.948569+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T16:00:00",
                "event_id": 7,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-21T21:23:26.709718+00:00",
                    "id": 26,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": false,
                "start_datetime": "2024-09-23T14:00:00",
                "tags": [
                    "Tag1",
                    "Tag2"
                ],
                "title": "Event2"
            }
        ]
    },
    {
        "date": "2024-09-23",
        "events": [
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:48:06.673152+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 39,
                "img": null,
                "location": {
                    "address": "123",
                    "created_at": "2024-09-22T16:48:06.445546+00:00",
                    "id": 52,
                    "latitude": 31.9059024,
                    "longitude": 35.1984346,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:46:56.768809+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 38,
                "img": null,
                "location": {
                    "address": "2400 Lakeview Pkwy",
                    "created_at": "2024-09-22T16:46:56.527653+00:00",
                    "id": 51,
                    "latitude": 34.0588234,
                    "longitude": -84.2896082,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:52:22.063945+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 40,
                "img": null,
                "location": {
                    "address": "1210 NW 5th Ave, Gainesville, FL",
                    "created_at": "2024-09-22T16:52:21.809283+00:00",
                    "id": 53,
                    "latitude": 29.6557994081633,
                    "longitude": -82.337322244898,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:53:14.954926+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 41,
                "img": null,
                "location": {
                    "address": "123 ingle wood",
                    "created_at": "2024-09-22T16:53:14.699932+00:00",
                    "id": 54,
                    "latitude": 35.2178301312742,
                    "longitude": -81.1180787578924,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [
                    {
                        "bookmark": null,
                        "created_at": "2024-09-21T19:51:55.99746+00:00",
                        "event_id": 7,
                        "registration_id": 2,
                        "status": null,
                        "user_id": 14,
                        "user_info": {
                            "address_id": 14,
                            "created_at": "2024-09-21T18:01:21.346259+00:00",
                            "email": "Shlok.Nangia@mail.com",
                            "name": "Shlok Nangia",
                            "password": "Shlok@123",
                            "role": "user",
                            "user_id": 14
                        }
                    }
                ],
                "capacity": 40,
                "community_ids": [
                    1,
                    2
                ],
                "created_at": "2024-09-21T19:03:40.948569+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T16:00:00",
                "event_id": 7,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-21T21:23:26.709718+00:00",
                    "id": 26,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": false,
                "start_datetime": "2024-09-23T14:00:00",
                "tags": [
                    "Tag1",
                    "Tag2"
                ],
                "title": "Event2"
            }
        ]
    },
    {
        "date": "2024-09-23",
        "events": [
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:48:06.673152+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 39,
                "img": null,
                "location": {
                    "address": "123",
                    "created_at": "2024-09-22T16:48:06.445546+00:00",
                    "id": 52,
                    "latitude": 31.9059024,
                    "longitude": 35.1984346,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:46:56.768809+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 38,
                "img": null,
                "location": {
                    "address": "2400 Lakeview Pkwy",
                    "created_at": "2024-09-22T16:46:56.527653+00:00",
                    "id": 51,
                    "latitude": 34.0588234,
                    "longitude": -84.2896082,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:52:22.063945+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 40,
                "img": null,
                "location": {
                    "address": "1210 NW 5th Ave, Gainesville, FL",
                    "created_at": "2024-09-22T16:52:21.809283+00:00",
                    "id": 53,
                    "latitude": 29.6557994081633,
                    "longitude": -82.337322244898,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:53:14.954926+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 41,
                "img": null,
                "location": {
                    "address": "123 ingle wood",
                    "created_at": "2024-09-22T16:53:14.699932+00:00",
                    "id": 54,
                    "latitude": 35.2178301312742,
                    "longitude": -81.1180787578924,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [
                    {
                        "bookmark": null,
                        "created_at": "2024-09-21T19:51:55.99746+00:00",
                        "event_id": 7,
                        "registration_id": 2,
                        "status": null,
                        "user_id": 14,
                        "user_info": {
                            "address_id": 14,
                            "created_at": "2024-09-21T18:01:21.346259+00:00",
                            "email": "Shlok.Nangia@mail.com",
                            "name": "Shlok Nangia",
                            "password": "Shlok@123",
                            "role": "user",
                            "user_id": 14
                        }
                    }
                ],
                "capacity": 40,
                "community_ids": [
                    1,
                    2
                ],
                "created_at": "2024-09-21T19:03:40.948569+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T16:00:00",
                "event_id": 7,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-21T21:23:26.709718+00:00",
                    "id": 26,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": false,
                "start_datetime": "2024-09-23T14:00:00",
                "tags": [
                    "Tag1",
                    "Tag2"
                ],
                "title": "Event2"
            }
        ]
    },
    {
        "date": "2024-09-23",
        "events": [
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:48:06.673152+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 39,
                "img": null,
                "location": {
                    "address": "123",
                    "created_at": "2024-09-22T16:48:06.445546+00:00",
                    "id": 52,
                    "latitude": 31.9059024,
                    "longitude": 35.1984346,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:46:56.768809+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 38,
                "img": null,
                "location": {
                    "address": "2400 Lakeview Pkwy",
                    "created_at": "2024-09-22T16:46:56.527653+00:00",
                    "id": 51,
                    "latitude": 34.0588234,
                    "longitude": -84.2896082,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:52:22.063945+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 40,
                "img": null,
                "location": {
                    "address": "1210 NW 5th Ave, Gainesville, FL",
                    "created_at": "2024-09-22T16:52:21.809283+00:00",
                    "id": 53,
                    "latitude": 29.6557994081633,
                    "longitude": -82.337322244898,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:53:14.954926+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 41,
                "img": null,
                "location": {
                    "address": "123 ingle wood",
                    "created_at": "2024-09-22T16:53:14.699932+00:00",
                    "id": 54,
                    "latitude": 35.2178301312742,
                    "longitude": -81.1180787578924,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [
                    {
                        "bookmark": null,
                        "created_at": "2024-09-21T19:51:55.99746+00:00",
                        "event_id": 7,
                        "registration_id": 2,
                        "status": null,
                        "user_id": 14,
                        "user_info": {
                            "address_id": 14,
                            "created_at": "2024-09-21T18:01:21.346259+00:00",
                            "email": "Shlok.Nangia@mail.com",
                            "name": "Shlok Nangia",
                            "password": "Shlok@123",
                            "role": "user",
                            "user_id": 14
                        }
                    }
                ],
                "capacity": 40,
                "community_ids": [
                    1,
                    2
                ],
                "created_at": "2024-09-21T19:03:40.948569+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T16:00:00",
                "event_id": 7,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-21T21:23:26.709718+00:00",
                    "id": 26,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": false,
                "start_datetime": "2024-09-23T14:00:00",
                "tags": [
                    "Tag1",
                    "Tag2"
                ],
                "title": "Event2"
            }
        ]
    },
    {
        "date": "2024-09-23",
        "events": [
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:48:06.673152+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 39,
                "img": null,
                "location": {
                    "address": "123",
                    "created_at": "2024-09-22T16:48:06.445546+00:00",
                    "id": 52,
                    "latitude": 31.9059024,
                    "longitude": 35.1984346,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:46:56.768809+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 38,
                "img": null,
                "location": {
                    "address": "2400 Lakeview Pkwy",
                    "created_at": "2024-09-22T16:46:56.527653+00:00",
                    "id": 51,
                    "latitude": 34.0588234,
                    "longitude": -84.2896082,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:52:22.063945+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 40,
                "img": null,
                "location": {
                    "address": "1210 NW 5th Ave, Gainesville, FL",
                    "created_at": "2024-09-22T16:52:21.809283+00:00",
                    "id": 53,
                    "latitude": 29.6557994081633,
                    "longitude": -82.337322244898,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:53:14.954926+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 41,
                "img": null,
                "location": {
                    "address": "123 ingle wood",
                    "created_at": "2024-09-22T16:53:14.699932+00:00",
                    "id": 54,
                    "latitude": 35.2178301312742,
                    "longitude": -81.1180787578924,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [
                    {
                        "bookmark": null,
                        "created_at": "2024-09-21T19:51:55.99746+00:00",
                        "event_id": 7,
                        "registration_id": 2,
                        "status": null,
                        "user_id": 14,
                        "user_info": {
                            "address_id": 14,
                            "created_at": "2024-09-21T18:01:21.346259+00:00",
                            "email": "Shlok.Nangia@mail.com",
                            "name": "Shlok Nangia",
                            "password": "Shlok@123",
                            "role": "user",
                            "user_id": 14
                        }
                    }
                ],
                "capacity": 40,
                "community_ids": [
                    1,
                    2
                ],
                "created_at": "2024-09-21T19:03:40.948569+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T16:00:00",
                "event_id": 7,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-21T21:23:26.709718+00:00",
                    "id": 26,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": false,
                "start_datetime": "2024-09-23T14:00:00",
                "tags": [
                    "Tag1",
                    "Tag2"
                ],
                "title": "Event2"
            }
        ]
    },
    {
        "date": "2024-09-28",
        "events": [
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T03:08:08.616276+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 21,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T03:08:07.859995+00:00",
                    "id": 34,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-09-28T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event8"
            },
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T02:42:18.627839+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 17,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T02:42:17.854544+00:00",
                    "id": 33,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-09-28T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event7"
            }
        ]
    },
    {
        "date": "2024-09-23",
        "events": [
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:48:06.673152+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 39,
                "img": null,
                "location": {
                    "address": "123",
                    "created_at": "2024-09-22T16:48:06.445546+00:00",
                    "id": 52,
                    "latitude": 31.9059024,
                    "longitude": 35.1984346,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:46:56.768809+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 38,
                "img": null,
                "location": {
                    "address": "2400 Lakeview Pkwy",
                    "created_at": "2024-09-22T16:46:56.527653+00:00",
                    "id": 51,
                    "latitude": 34.0588234,
                    "longitude": -84.2896082,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:52:22.063945+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 40,
                "img": null,
                "location": {
                    "address": "1210 NW 5th Ave, Gainesville, FL",
                    "created_at": "2024-09-22T16:52:21.809283+00:00",
                    "id": 53,
                    "latitude": 29.6557994081633,
                    "longitude": -82.337322244898,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:53:14.954926+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 41,
                "img": null,
                "location": {
                    "address": "123 ingle wood",
                    "created_at": "2024-09-22T16:53:14.699932+00:00",
                    "id": 54,
                    "latitude": 35.2178301312742,
                    "longitude": -81.1180787578924,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [
                    {
                        "bookmark": null,
                        "created_at": "2024-09-21T19:51:55.99746+00:00",
                        "event_id": 7,
                        "registration_id": 2,
                        "status": null,
                        "user_id": 14,
                        "user_info": {
                            "address_id": 14,
                            "created_at": "2024-09-21T18:01:21.346259+00:00",
                            "email": "Shlok.Nangia@mail.com",
                            "name": "Shlok Nangia",
                            "password": "Shlok@123",
                            "role": "user",
                            "user_id": 14
                        }
                    }
                ],
                "capacity": 40,
                "community_ids": [
                    1,
                    2
                ],
                "created_at": "2024-09-21T19:03:40.948569+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T16:00:00",
                "event_id": 7,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-21T21:23:26.709718+00:00",
                    "id": 26,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": false,
                "start_datetime": "2024-09-23T14:00:00",
                "tags": [
                    "Tag1",
                    "Tag2"
                ],
                "title": "Event2"
            }
        ]
    },
    {
        "date": "2024-09-28",
        "events": [
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T03:08:08.616276+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 21,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T03:08:07.859995+00:00",
                    "id": 34,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-09-28T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event8"
            },
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T02:42:18.627839+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 17,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T02:42:17.854544+00:00",
                    "id": 33,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-09-28T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event7"
            }
        ]
    },
    {
        "date": "2024-09-23",
        "events": [
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:48:06.673152+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 39,
                "img": null,
                "location": {
                    "address": "123",
                    "created_at": "2024-09-22T16:48:06.445546+00:00",
                    "id": 52,
                    "latitude": 31.9059024,
                    "longitude": 35.1984346,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:46:56.768809+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 38,
                "img": null,
                "location": {
                    "address": "2400 Lakeview Pkwy",
                    "created_at": "2024-09-22T16:46:56.527653+00:00",
                    "id": 51,
                    "latitude": 34.0588234,
                    "longitude": -84.2896082,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:52:22.063945+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 40,
                "img": null,
                "location": {
                    "address": "1210 NW 5th Ave, Gainesville, FL",
                    "created_at": "2024-09-22T16:52:21.809283+00:00",
                    "id": 53,
                    "latitude": 29.6557994081633,
                    "longitude": -82.337322244898,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:53:14.954926+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 41,
                "img": null,
                "location": {
                    "address": "123 ingle wood",
                    "created_at": "2024-09-22T16:53:14.699932+00:00",
                    "id": 54,
                    "latitude": 35.2178301312742,
                    "longitude": -81.1180787578924,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [
                    {
                        "bookmark": null,
                        "created_at": "2024-09-21T19:51:55.99746+00:00",
                        "event_id": 7,
                        "registration_id": 2,
                        "status": null,
                        "user_id": 14,
                        "user_info": {
                            "address_id": 14,
                            "created_at": "2024-09-21T18:01:21.346259+00:00",
                            "email": "Shlok.Nangia@mail.com",
                            "name": "Shlok Nangia",
                            "password": "Shlok@123",
                            "role": "user",
                            "user_id": 14
                        }
                    }
                ],
                "capacity": 40,
                "community_ids": [
                    1,
                    2
                ],
                "created_at": "2024-09-21T19:03:40.948569+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T16:00:00",
                "event_id": 7,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-21T21:23:26.709718+00:00",
                    "id": 26,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": false,
                "start_datetime": "2024-09-23T14:00:00",
                "tags": [
                    "Tag1",
                    "Tag2"
                ],
                "title": "Event2"
            }
        ]
    },
    {
        "date": "2024-09-28",
        "events": [
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T03:08:08.616276+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 21,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T03:08:07.859995+00:00",
                    "id": 34,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-09-28T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event8"
            },
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T02:42:18.627839+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 17,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T02:42:17.854544+00:00",
                    "id": 33,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-09-28T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event7"
            }
        ]
    },
    {
        "date": "2024-10-05",
        "events": [
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T02:42:18.875073+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 18,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T02:42:17.854544+00:00",
                    "id": 33,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-10-05T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event7"
            },
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T03:08:08.753618+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 22,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T03:08:07.859995+00:00",
                    "id": 34,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-10-05T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event8"
            }
        ]
    },
    {
        "date": "2024-09-23",
        "events": [
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:48:06.673152+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 39,
                "img": null,
                "location": {
                    "address": "123",
                    "created_at": "2024-09-22T16:48:06.445546+00:00",
                    "id": 52,
                    "latitude": 31.9059024,
                    "longitude": 35.1984346,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:46:56.768809+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 38,
                "img": null,
                "location": {
                    "address": "2400 Lakeview Pkwy",
                    "created_at": "2024-09-22T16:46:56.527653+00:00",
                    "id": 51,
                    "latitude": 34.0588234,
                    "longitude": -84.2896082,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:52:22.063945+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 40,
                "img": null,
                "location": {
                    "address": "1210 NW 5th Ave, Gainesville, FL",
                    "created_at": "2024-09-22T16:52:21.809283+00:00",
                    "id": 53,
                    "latitude": 29.6557994081633,
                    "longitude": -82.337322244898,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:53:14.954926+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 41,
                "img": null,
                "location": {
                    "address": "123 ingle wood",
                    "created_at": "2024-09-22T16:53:14.699932+00:00",
                    "id": 54,
                    "latitude": 35.2178301312742,
                    "longitude": -81.1180787578924,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [
                    {
                        "bookmark": null,
                        "created_at": "2024-09-21T19:51:55.99746+00:00",
                        "event_id": 7,
                        "registration_id": 2,
                        "status": null,
                        "user_id": 14,
                        "user_info": {
                            "address_id": 14,
                            "created_at": "2024-09-21T18:01:21.346259+00:00",
                            "email": "Shlok.Nangia@mail.com",
                            "name": "Shlok Nangia",
                            "password": "Shlok@123",
                            "role": "user",
                            "user_id": 14
                        }
                    }
                ],
                "capacity": 40,
                "community_ids": [
                    1,
                    2
                ],
                "created_at": "2024-09-21T19:03:40.948569+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T16:00:00",
                "event_id": 7,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-21T21:23:26.709718+00:00",
                    "id": 26,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": false,
                "start_datetime": "2024-09-23T14:00:00",
                "tags": [
                    "Tag1",
                    "Tag2"
                ],
                "title": "Event2"
            }
        ]
    },
    {
        "date": "2024-09-28",
        "events": [
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T03:08:08.616276+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 21,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T03:08:07.859995+00:00",
                    "id": 34,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-09-28T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event8"
            },
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T02:42:18.627839+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 17,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T02:42:17.854544+00:00",
                    "id": 33,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-09-28T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event7"
            }
        ]
    },
    {
        "date": "2024-10-05",
        "events": [
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T02:42:18.875073+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 18,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T02:42:17.854544+00:00",
                    "id": 33,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-10-05T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event7"
            },
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T03:08:08.753618+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 22,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T03:08:07.859995+00:00",
                    "id": 34,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-10-05T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event8"
            }
        ]
    },
    {
        "date": "2024-09-23",
        "events": [
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:48:06.673152+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 39,
                "img": null,
                "location": {
                    "address": "123",
                    "created_at": "2024-09-22T16:48:06.445546+00:00",
                    "id": 52,
                    "latitude": 31.9059024,
                    "longitude": 35.1984346,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:46:56.768809+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 38,
                "img": null,
                "location": {
                    "address": "2400 Lakeview Pkwy",
                    "created_at": "2024-09-22T16:46:56.527653+00:00",
                    "id": 51,
                    "latitude": 34.0588234,
                    "longitude": -84.2896082,
                    "name": "Morgan Stanley",
                    "zipcode": 30009
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:52:22.063945+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 40,
                "img": null,
                "location": {
                    "address": "1210 NW 5th Ave, Gainesville, FL",
                    "created_at": "2024-09-22T16:52:21.809283+00:00",
                    "id": 53,
                    "latitude": 29.6557994081633,
                    "longitude": -82.337322244898,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [],
                "capacity": 30,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T16:53:14.954926+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T15:30:00",
                "event_id": 41,
                "img": null,
                "location": {
                    "address": "123 ingle wood",
                    "created_at": "2024-09-22T16:53:14.699932+00:00",
                    "id": 54,
                    "latitude": 35.2178301312742,
                    "longitude": -81.1180787578924,
                    "name": "Morgan Stanley",
                    "zipcode": 32601
                },
                "recurring": false,
                "start_datetime": "2024-09-23T13:30:00",
                "tags": [
                    "Tag1"
                ],
                "title": "Code for Good Placing"
            },
            {
                "attendees": [
                    {
                        "bookmark": null,
                        "created_at": "2024-09-21T19:51:55.99746+00:00",
                        "event_id": 7,
                        "registration_id": 2,
                        "status": null,
                        "user_id": 14,
                        "user_info": {
                            "address_id": 14,
                            "created_at": "2024-09-21T18:01:21.346259+00:00",
                            "email": "Shlok.Nangia@mail.com",
                            "name": "Shlok Nangia",
                            "password": "Shlok@123",
                            "role": "user",
                            "user_id": 14
                        }
                    }
                ],
                "capacity": 40,
                "community_ids": [
                    1,
                    2
                ],
                "created_at": "2024-09-21T19:03:40.948569+00:00",
                "description": "I am an Event.",
                "end_datetime": "2024-09-23T16:00:00",
                "event_id": 7,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-21T21:23:26.709718+00:00",
                    "id": 26,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": false,
                "start_datetime": "2024-09-23T14:00:00",
                "tags": [
                    "Tag1",
                    "Tag2"
                ],
                "title": "Event2"
            }
        ]
    },
    {
        "date": "2024-09-28",
        "events": [
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T03:08:08.616276+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 21,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T03:08:07.859995+00:00",
                    "id": 34,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-09-28T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event8"
            },
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T02:42:18.627839+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 17,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T02:42:17.854544+00:00",
                    "id": 33,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-09-28T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event7"
            }
        ]
    },
    {
        "date": "2024-10-05",
        "events": [
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T02:42:18.875073+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 18,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T02:42:17.854544+00:00",
                    "id": 33,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-10-05T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event7"
            },
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T03:08:08.753618+00:00",
                "description": "Hello",
                "end_datetime": "2024-09-21T15:30:00",
                "event_id": 22,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T03:08:07.859995+00:00",
                    "id": 34,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2024-10-05T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Event8"
            }
        ]
    },
    {
        "date": "2025-09-21",
        "events": [
            {
                "attendees": [],
                "capacity": 40,
                "community_ids": [
                    1
                ],
                "created_at": "2024-09-22T03:31:35.699909+00:00",
                "description": "Hello",
                "end_datetime": "2025-09-21T15:30:00",
                "event_id": 29,
                "img": null,
                "location": {
                    "address": "4513 Inggle Drive",
                    "created_at": "2024-09-22T03:31:35.429525+00:00",
                    "id": 38,
                    "latitude": null,
                    "longitude": null,
                    "name": "Plaza Building",
                    "zipcode": 32608
                },
                "recurring": true,
                "start_datetime": "2025-09-21T13:30:00",
                "tags": [
                    "Entertainment",
                    "Fitness"
                ],
                "title": "Weekly Festival"
            }
        ]
    }
]


export default function EventTimeline() {

    useEffect(() => {
        async function fetchAndSetDays() {
            const fetchedDays = await fetchDays();
            setDays(fetchedDays);
        }
        fetchAndSetDays();
    }, []);


    const [days, setDays] = useState([]);

    return (
        <div className=" gap-4 grid w-full   min-h-[100px]">
            {days.length == 0 ?
                <div className="text-center *:mb-4">
                    <div className="text-xl w-full">No events</div>
                    <div className="text-base w-full">Try creating a new event!</div>
                    <div className="mx-auto justify-center flex w-full"><CreateEventButton /></div>
                </div> :
                <>
                <h1 className="text-2xl font-bold mb-4"> Upcoming Events</h1>
                <div className="border-b border-gray-300 mt-4"></div>
                    {days.map((day, key) =>
                        <div key={key}>
                            <h2 className="text-2xl font-semibold pb-4">{toUserFriendlyDateFormat(day.date)}</h2>
                            <div className="border-b border-1 border-gray-300 mb-4"></div>
                            <div className="gap-8 grid p-5">
                                {day.events.map((event, key, { length }) => (
                                    <>
                                        <EventCard key={key} event={event}>
                                        </EventCard>
                                        {key + 1 != length && <div className="border-b border-1 border-gray-100"></div>}
                                    </>
                                ))}
                            </div>
                        </div>)}
                    {/* <div className="mb-4"> */}
                    <FloatingCreateEventButton />
                    {/* </div> */}
                </>}
        </div>
    )
}

async function fetchDays() {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    const res = await fetch("https://PranilIngle.pythonanywhere.com/event/", requestOptions)
    const data = await res.json()

    return data;
}