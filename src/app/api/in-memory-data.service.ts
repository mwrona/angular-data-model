import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const dataModel = [
      {
        "id": 0,
        "name": "eu",
        "resources": [
          {
            "id": 0,
            "name": "veniam",
            "value": 459,
            "lastModified": "2015-03-25T06:13:37"
          },
          {
            "id": 1,
            "name": "quis",
            "value": 405,
            "lastModified": "2018-03-27T08:46:53"
          },
          {
            "id": 2,
            "name": "sint",
            "value": 866,
            "lastModified": "2021-07-03T04:23:20"
          },
          {
            "id": 3,
            "name": "dolore",
            "value": 62,
            "lastModified": "2019-09-30T05:02:45"
          },
          {
            "id": 4,
            "name": "minim",
            "value": 269,
            "lastModified": "2014-11-10T01:37:02"
          },
          {
            "id": 5,
            "name": "dolor",
            "value": 904,
            "lastModified": "2018-09-09T02:57:47"
          }
        ]
      },
      {
        "id": 1,
        "name": "do",
        "resources": [
          {
            "id": 0,
            "name": "id",
            "value": 527,
            "lastModified": "2018-11-27T01:22:40"
          },
          {
            "id": 1,
            "name": "Lorem",
            "value": 254,
            "lastModified": "2019-04-14T09:10:11"
          },
          {
            "id": 2,
            "name": "veniam",
            "value": 80,
            "lastModified": "2018-10-17T10:14:50"
          },
          {
            "id": 3,
            "name": "voluptate",
            "value": 407,
            "lastModified": "2016-04-27T01:20:35"
          },
          {
            "id": 4,
            "name": "laborum",
            "value": 556,
            "lastModified": "2021-10-05T07:52:13"
          }
        ]
      },
      {
        "id": 2,
        "name": "sunt",
        "resources": [
          {
            "id": 0,
            "name": "duis",
            "value": 476,
            "lastModified": "2018-11-16T03:56:18"
          },
          {
            "id": 1,
            "name": "incididunt",
            "value": 99,
            "lastModified": "2021-10-03T03:29:11"
          },
          {
            "id": 2,
            "name": "duis",
            "value": 273,
            "lastModified": "2021-03-08T09:38:54"
          },
          {
            "id": 3,
            "name": "nulla",
            "value": 47,
            "lastModified": "2015-04-22T03:30:34"
          },
          {
            "id": 4,
            "name": "aute",
            "value": 926,
            "lastModified": "2021-11-28T06:58:04"
          }
        ]
      },
      {
        "id": 3,
        "name": "nulla",
        "resources": [
          {
            "id": 0,
            "name": "commodo",
            "value": 457,
            "lastModified": "2020-05-14T08:43:13"
          },
          {
            "id": 1,
            "name": "laboris",
            "value": 555,
            "lastModified": "2014-10-11T09:58:57"
          },
          {
            "id": 2,
            "name": "proident",
            "value": 840,
            "lastModified": "2015-07-20T02:06:05"
          },
          {
            "id": 3,
            "name": "nostrud",
            "value": 191,
            "lastModified": "2015-11-29T11:22:13"
          },
          {
            "id": 4,
            "name": "velit",
            "value": 656,
            "lastModified": "2018-05-01T07:47:48"
          },
          {
            "id": 5,
            "name": "culpa",
            "value": 805,
            "lastModified": "2018-08-11T06:27:23"
          },
          {
            "id": 6,
            "name": "cillum",
            "value": 483,
            "lastModified": "2018-08-05T10:28:09"
          },
          {
            "id": 7,
            "name": "ipsum",
            "value": 829,
            "lastModified": "2014-04-25T10:50:29"
          }
        ]
      },
      {
        "id": 4,
        "name": "ullamco",
        "resources": [
          {
            "id": 0,
            "name": "Lorem",
            "value": 982,
            "lastModified": "2017-07-10T05:10:44"
          },
          {
            "id": 1,
            "name": "magna",
            "value": 883,
            "lastModified": "2017-09-13T10:35:16"
          },
          {
            "id": 2,
            "name": "sunt",
            "value": 393,
            "lastModified": "2017-09-23T12:57:16"
          },
          {
            "id": 3,
            "name": "duis",
            "value": 241,
            "lastModified": "2017-04-27T09:41:26"
          },
          {
            "id": 4,
            "name": "nisi",
            "value": 423,
            "lastModified": "2019-03-18T09:24:23"
          },
          {
            "id": 5,
            "name": "aliqua",
            "value": 51,
            "lastModified": "2021-05-15T09:31:49"
          },
          {
            "id": 6,
            "name": "eu",
            "value": 626,
            "lastModified": "2020-04-18T12:44:34"
          },
          {
            "id": 7,
            "name": "aliqua",
            "value": 573,
            "lastModified": "2016-05-16T08:21:57"
          },
          {
            "id": 8,
            "name": "laboris",
            "value": 836,
            "lastModified": "2019-04-26T07:03:25"
          }
        ]
      },
      {
        "id": 5,
        "name": "pariatur",
        "resources": [
          {
            "id": 0,
            "name": "occaecat",
            "value": 115,
            "lastModified": "2019-12-19T03:05:23"
          },
          {
            "id": 1,
            "name": "minim",
            "value": 320,
            "lastModified": "2018-08-27T11:39:07"
          },
          {
            "id": 2,
            "name": "nisi",
            "value": 672,
            "lastModified": "2018-12-08T12:49:28"
          },
          {
            "id": 3,
            "name": "est",
            "value": 184,
            "lastModified": "2018-08-24T09:00:16"
          },
          {
            "id": 4,
            "name": "magna",
            "value": 514,
            "lastModified": "2014-05-10T03:00:54"
          }
        ]
      },
      {
        "id": 6,
        "name": "duis",
        "resources": [
          {
            "id": 0,
            "name": "non",
            "value": 146,
            "lastModified": "2016-10-20T02:09:46"
          },
          {
            "id": 1,
            "name": "commodo",
            "value": 397,
            "lastModified": "2016-12-01T02:41:02"
          },
          {
            "id": 2,
            "name": "cillum",
            "value": 526,
            "lastModified": "2016-06-18T10:40:22"
          },
          {
            "id": 3,
            "name": "officia",
            "value": 43,
            "lastModified": "2016-11-28T06:24:06"
          },
          {
            "id": 4,
            "name": "ipsum",
            "value": 414,
            "lastModified": "2021-10-19T07:46:41"
          },
          {
            "id": 5,
            "name": "elit",
            "value": 299,
            "lastModified": "2018-03-06T02:04:09"
          },
          {
            "id": 6,
            "name": "eiusmod",
            "value": 366,
            "lastModified": "2014-05-09T04:09:15"
          }
        ]
      },
      {
        "id": 7,
        "name": "in",
        "resources": [
          {
            "id": 0,
            "name": "ullamco",
            "value": 58,
            "lastModified": "2016-04-08T08:11:47"
          },
          {
            "id": 1,
            "name": "nisi",
            "value": 363,
            "lastModified": "2015-05-30T08:30:18"
          },
          {
            "id": 2,
            "name": "consectetur",
            "value": 969,
            "lastModified": "2019-04-02T06:04:27"
          },
          {
            "id": 3,
            "name": "anim",
            "value": 259,
            "lastModified": "2015-09-21T01:27:18"
          },
          {
            "id": 4,
            "name": "est",
            "value": 773,
            "lastModified": "2014-02-09T04:32:46"
          }
        ]
      },
      {
        "id": 8,
        "name": "ad",
        "resources": [
          {
            "id": 0,
            "name": "ullamco",
            "value": 355,
            "lastModified": "2018-10-25T02:42:57"
          },
          {
            "id": 1,
            "name": "id",
            "value": 372,
            "lastModified": "2019-12-13T03:55:01"
          },
          {
            "id": 2,
            "name": "adipisicing",
            "value": 136,
            "lastModified": "2015-12-30T08:12:53"
          },
          {
            "id": 3,
            "name": "dolore",
            "value": 484,
            "lastModified": "2015-10-14T05:45:27"
          },
          {
            "id": 4,
            "name": "est",
            "value": 118,
            "lastModified": "2021-05-03T04:38:34"
          },
          {
            "id": 5,
            "name": "enim",
            "value": 511,
            "lastModified": "2014-05-01T09:42:45"
          }
        ]
      },
      {
        "id": 9,
        "name": "velit",
        "resources": [
          {
            "id": 0,
            "name": "et",
            "value": 350,
            "lastModified": "2021-06-06T08:00:27"
          },
          {
            "id": 1,
            "name": "tempor",
            "value": 149,
            "lastModified": "2017-05-18T02:40:37"
          },
          {
            "id": 2,
            "name": "ullamco",
            "value": 402,
            "lastModified": "2019-01-17T12:33:37"
          },
          {
            "id": 3,
            "name": "est",
            "value": 812,
            "lastModified": "2017-05-15T04:17:26"
          },
          {
            "id": 4,
            "name": "pariatur",
            "value": 993,
            "lastModified": "2015-12-08T06:31:35"
          },
          {
            "id": 5,
            "name": "non",
            "value": 700,
            "lastModified": "2021-08-29T02:58:47"
          },
          {
            "id": 6,
            "name": "officia",
            "value": 490,
            "lastModified": "2022-01-26T12:36:48"
          },
          {
            "id": 7,
            "name": "est",
            "value": 559,
            "lastModified": "2016-05-26T04:55:06"
          },
          {
            "id": 8,
            "name": "aliqua",
            "value": 656,
            "lastModified": "2020-12-13T11:03:28"
          },
          {
            "id": 9,
            "name": "amet",
            "value": 440,
            "lastModified": "2018-05-04T06:20:36"
          }
        ]
      },
      {
        "id": 10,
        "name": "nisi",
        "resources": [
          {
            "id": 0,
            "name": "sit",
            "value": 851,
            "lastModified": "2015-06-26T07:31:55"
          },
          {
            "id": 1,
            "name": "excepteur",
            "value": 719,
            "lastModified": "2020-12-12T08:15:37"
          },
          {
            "id": 2,
            "name": "enim",
            "value": 957,
            "lastModified": "2018-07-15T01:42:56"
          },
          {
            "id": 3,
            "name": "aute",
            "value": 23,
            "lastModified": "2021-02-13T02:50:44"
          },
          {
            "id": 4,
            "name": "mollit",
            "value": 313,
            "lastModified": "2021-02-11T10:19:40"
          },
          {
            "id": 5,
            "name": "dolore",
            "value": 272,
            "lastModified": "2016-12-26T02:03:50"
          },
          {
            "id": 6,
            "name": "amet",
            "value": 467,
            "lastModified": "2019-04-14T08:03:14"
          },
          {
            "id": 7,
            "name": "incididunt",
            "value": 975,
            "lastModified": "2018-09-08T09:45:57"
          },
          {
            "id": 8,
            "name": "voluptate",
            "value": 354,
            "lastModified": "2016-03-25T11:57:04"
          }
        ]
      },
      {
        "id": 11,
        "name": "aute",
        "resources": [
          {
            "id": 0,
            "name": "excepteur",
            "value": 637,
            "lastModified": "2018-03-04T11:17:17"
          },
          {
            "id": 1,
            "name": "proident",
            "value": 672,
            "lastModified": "2019-01-16T08:45:29"
          },
          {
            "id": 2,
            "name": "anim",
            "value": 245,
            "lastModified": "2018-05-29T03:07:03"
          },
          {
            "id": 3,
            "name": "eiusmod",
            "value": 205,
            "lastModified": "2021-02-19T11:29:44"
          },
          {
            "id": 4,
            "name": "enim",
            "value": 762,
            "lastModified": "2016-09-20T12:10:35"
          },
          {
            "id": 5,
            "name": "nulla",
            "value": 268,
            "lastModified": "2021-08-10T10:43:04"
          },
          {
            "id": 6,
            "name": "reprehenderit",
            "value": 73,
            "lastModified": "2021-08-26T10:09:38"
          }
        ]
      }
    ]
    return {dataModel};
  }
}
