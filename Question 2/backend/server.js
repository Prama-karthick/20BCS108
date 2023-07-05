const express = require("express");
const bodyParser =require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.get("/listoftrains", (req, res) => {
console.log("Backend Connected");
var trainDeatils = [
    {
        "trainName": "Chai Wala Exp",
        "trainNumber": "2344",
        "departureTime": {
            "Hours": 11,
            "Minutes": 0,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 33,
            "AC": 13
        },
        "price": {
            "sleeper": 593,
            "AC": 704
        },
        "delayedBy": 4
    },
    {
        "trainName": "Pappu Exp",
        "trainNumber": "2345",
        "departureTime": {
            "Hours": 11,
            "Minutes": 23,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 4,
            "AC": 4
        },
        "price": {
            "sleeper": 606,
            "AC": 1382
        },
        "delayedBy": 5
    },
    {
        "trainName": "Love Exp",
        "trainNumber": "2346",
        "departureTime": {
            "Hours": 12,
            "Minutes": 3,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 10,
            "AC": 1
        },
        "price": {
            "sleeper": 472,
            "AC": 623
        },
        "delayedBy": 6
    },
    {
        "trainName": "Taxi Wala Exp",
        "trainNumber": "2347",
        "departureTime": {
            "Hours": 13,
            "Minutes": 32,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 2,
            "AC": 2
        },
        "price": {
            "sleeper": 470,
            "AC": 603
        },
        "delayedBy": 8
    },
    {
        "trainName": "Hawai Exp",
        "trainNumber": "2349",
        "departureTime": {
            "Hours": 14,
            "Minutes": 55,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 1,
            "AC": 0
        },
        "price": {
            "sleeper": 947,
            "AC": 1034
        },
        "delayedBy": 10
    },
    {
        "trainName": "Test Exp",
        "trainNumber": "2348",
        "departureTime": {
            "Hours": 15,
            "Minutes": 55,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 1,
            "AC": 0
        },
        "price": {
            "sleeper": 647,
            "AC": 934
        },
        "delayedBy": 11
    },
    {
        "trainName": "Funny Exp",
        "trainNumber": "2341",
        "departureTime": {
            "Hours": 7,
            "Minutes": 15,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 15,
            "AC": 5
        },
        "price": {
            "sleeper": 442,
            "AC": 675
        },
        "delayedBy": 1
    },
    {
        "trainName": "Delhi Door Hai Exp",
        "trainNumber": "2343",
        "departureTime": {
            "Hours": 9,
            "Minutes": 45,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 32,
            "AC": 1
        },
        "price": {
            "sleeper": 419,
            "AC": 1413
        },
        "delayedBy": 3
    },
    {
        "trainName": "Manoranjan Exp",
        "trainNumber": "2347",
        "departureTime": {
            "Hours": 17,
            "Minutes": 33,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 5,
            "AC": 1
        },
        "price": {
            "sleeper": 286,
            "AC": 413
        },
        "delayedBy": 12
    },
    {
        "trainName": "Pune Exp",
        "trainNumber": "2342",
        "departureTime": {
            "Hours": 23,
            "Minutes": 0,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 6,
            "AC": 7
        },
        "price": {
            "sleeper": 734,
            "AC": 1734
        },
        "delayedBy": 17
    },
    {
        "trainName": "Sundar Exp",
        "trainNumber": "2347",
        "departureTime": {
            "Hours": 13,
            "Minutes": 32,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 55,
            "AC": 0
        },
        "price": {
            "sleeper": 148,
            "AC": 338
        },
        "delayedBy": 7
    },
    {
        "trainName": "Nannu Exp",
        "trainNumber": "2349",
        "departureTime": {
            "Hours": 13,
            "Minutes": 32,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 2,
            "AC": 1
        },
        "price": {
            "sleeper": 304,
            "AC": 467
        },
        "delayedBy": 9
    },
    {
        "trainName": "Chennai Exp",
        "trainNumber": "2344",
        "departureTime": {
            "Hours": 21,
            "Minutes": 35,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 3,
            "AC": 1
        },
        "price": {
            "sleeper": 499,
            "AC": 605
        },
        "delayedBy": 15
    },
    {
        "trainName": "Mumbai Exp",
        "trainNumber": "2343",
        "departureTime": {
            "Hours": 22,
            "Minutes": 37,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 8,
            "AC": 15
        },
        "price": {
            "sleeper": 560,
            "AC": 660
        },
        "delayedBy": 16
    },
    {
        "trainName": "Hyderabad Exp",
        "trainNumber": "2341",
        "departureTime": {
            "Hours": 23,
            "Minutes": 55,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 6,
            "AC": 7
        },
        "price": {
            "sleeper": 554,
            "AC": 1854
        },
        "delayedBy": 5
    },
    {
        "trainName": "Late Latif Exp",
        "trainNumber": "2342",
        "departureTime": {
            "Hours": 8,
            "Minutes": 30,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 18,
            "AC": 7
        },
        "price": {
            "sleeper": 1182,
            "AC": 1813
        },
        "delayedBy": 2
    },
    {
        "trainName": "Manu Exp",
        "trainNumber": "2346",
        "departureTime": {
            "Hours": 19,
            "Minutes": 0,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 15,
            "AC": 10
        },
        "price": {
            "sleeper": 525,
            "AC": 725
        },
        "delayedBy": 13
    },
    {
        "trainName": "Kolkata Exp",
        "trainNumber": "2345",
        "departureTime": {
            "Hours": 20,
            "Minutes": 15,
            "Seconds": 0
        },
        "seatsAvailable": {
            "sleeper": 16,
            "AC": 70
        },
        "price": {
            "sleeper": 550,
            "AC": 650
        },
        "delayedBy": 14
    }
]

res.json(trainDeatils);
});

app.post("/traindetails", (req, res) => {
    var trainDeatils = [
        {
            "trainName": "Chai Wala Exp",
            "trainNumber": "2344",
            "departureTime": {
                "Hours": 11,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 33,
                "AC": 13
            },
            "price": {
                "sleeper": 593,
                "AC": 704
            },
            "delayedBy": 4
        },
        {
            "trainName": "Pappu Exp",
            "trainNumber": "2345",
            "departureTime": {
                "Hours": 11,
                "Minutes": 23,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 4,
                "AC": 4
            },
            "price": {
                "sleeper": 606,
                "AC": 1382
            },
            "delayedBy": 5
        },
        {
            "trainName": "Love Exp",
            "trainNumber": "2346",
            "departureTime": {
                "Hours": 12,
                "Minutes": 3,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 10,
                "AC": 1
            },
            "price": {
                "sleeper": 472,
                "AC": 623
            },
            "delayedBy": 6
        },
        {
            "trainName": "Taxi Wala Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 2,
                "AC": 2
            },
            "price": {
                "sleeper": 470,
                "AC": 603
            },
            "delayedBy": 8
        },
        {
            "trainName": "Hawai Exp",
            "trainNumber": "2349",
            "departureTime": {
                "Hours": 14,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 1,
                "AC": 0
            },
            "price": {
                "sleeper": 947,
                "AC": 1034
            },
            "delayedBy": 10
        },
        {
            "trainName": "Test Exp",
            "trainNumber": "2348",
            "departureTime": {
                "Hours": 15,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 1,
                "AC": 0
            },
            "price": {
                "sleeper": 647,
                "AC": 934
            },
            "delayedBy": 11
        },
        {
            "trainName": "Funny Exp",
            "trainNumber": "2341",
            "departureTime": {
                "Hours": 7,
                "Minutes": 15,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 15,
                "AC": 5
            },
            "price": {
                "sleeper": 442,
                "AC": 675
            },
            "delayedBy": 1
        },
        {
            "trainName": "Delhi Door Hai Exp",
            "trainNumber": "2343",
            "departureTime": {
                "Hours": 9,
                "Minutes": 45,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 32,
                "AC": 1
            },
            "price": {
                "sleeper": 419,
                "AC": 1413
            },
            "delayedBy": 3
        },
        {
            "trainName": "Manoranjan Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 17,
                "Minutes": 33,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 5,
                "AC": 1
            },
            "price": {
                "sleeper": 286,
                "AC": 413
            },
            "delayedBy": 12
        },
        {
            "trainName": "Pune Exp",
            "trainNumber": "2342",
            "departureTime": {
                "Hours": 23,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 6,
                "AC": 7
            },
            "price": {
                "sleeper": 734,
                "AC": 1734
            },
            "delayedBy": 17
        },
        {
            "trainName": "Sundar Exp",
            "trainNumber": "2347",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 55,
                "AC": 0
            },
            "price": {
                "sleeper": 148,
                "AC": 338
            },
            "delayedBy": 7
        },
        {
            "trainName": "Nannu Exp",
            "trainNumber": "2349",
            "departureTime": {
                "Hours": 13,
                "Minutes": 32,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 2,
                "AC": 1
            },
            "price": {
                "sleeper": 304,
                "AC": 467
            },
            "delayedBy": 9
        },
        {
            "trainName": "Chennai Exp",
            "trainNumber": "2344",
            "departureTime": {
                "Hours": 21,
                "Minutes": 35,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 3,
                "AC": 1
            },
            "price": {
                "sleeper": 499,
                "AC": 605
            },
            "delayedBy": 15
        },
        {
            "trainName": "Mumbai Exp",
            "trainNumber": "2343",
            "departureTime": {
                "Hours": 22,
                "Minutes": 37,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 8,
                "AC": 15
            },
            "price": {
                "sleeper": 560,
                "AC": 660
            },
            "delayedBy": 16
        },
        {
            "trainName": "Hyderabad Exp",
            "trainNumber": "2341",
            "departureTime": {
                "Hours": 23,
                "Minutes": 55,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 6,
                "AC": 7
            },
            "price": {
                "sleeper": 554,
                "AC": 1854
            },
            "delayedBy": 5
        },
        {
            "trainName": "Late Latif Exp",
            "trainNumber": "2342",
            "departureTime": {
                "Hours": 8,
                "Minutes": 30,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 18,
                "AC": 7
            },
            "price": {
                "sleeper": 1182,
                "AC": 1813
            },
            "delayedBy": 2
        },
        {
            "trainName": "Manu Exp",
            "trainNumber": "2346",
            "departureTime": {
                "Hours": 19,
                "Minutes": 0,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 15,
                "AC": 10
            },
            "price": {
                "sleeper": 525,
                "AC": 725
            },
            "delayedBy": 13
        },
        {
            "trainName": "Kolkata Exp",
            "trainNumber": "2345",
            "departureTime": {
                "Hours": 20,
                "Minutes": 15,
                "Seconds": 0
            },
            "seatsAvailable": {
                "sleeper": 16,
                "AC": 70
            },
            "price": {
                "sleeper": 550,
                "AC": 650
            },
            "delayedBy": 14
        }
    ]
   var tno= req.trainno
   var foundTrain
   for(i=0;i<trainDeatils.length;i++){
    if(tno==trainDeatils[i].trainNumber){
        foundTrain=trainDeatils[i]
        break;
    }
   } 
   if(foundTrain)
   {
    res.json(foundTrain)
   }
   else{
    res.json({message:"Train Not Found"})
   }
});




const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));