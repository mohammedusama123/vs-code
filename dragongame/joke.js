let a=[
    {
        "error": false,
        "amount": 10,
        "jokes": [
            {
                "category": "Programming",
                "type": "single",
                "joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "id": 55,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 44,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 184,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "single",
                "joke": "If you're here for the yodeling lesson, please form an orderly orderly orderly queue.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 139,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says \"I'll have to charge you extra, that's a root beer float\".\nThe guy says \"In that case, better make it a double.\"",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 2,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 0,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Dark",
                "type": "single",
                "joke": "My grandfather says I'm too reliant on technology.\nI called him a hypocrite and unplugged his life support.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 178,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 221,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 3,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Dark",
                "type": "single",
                "joke": "Nowadays people are so sensitive, you can't even say \"black paint\" anymore.\nInstead, you have to say \"Jamal, please paint the fence\".",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": true,
                    "sexist": false,
                    "explicit": false
                },
                "id": 133,
                "safe": false,
                "lang": "en"
            }
        ]
    }
]
let random=Math.floor(Math.random()*a.length)
console.log(a[random].joke);


