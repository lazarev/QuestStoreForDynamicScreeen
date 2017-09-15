module.exports = {
    "variant": "push",
    "page": {
        "footer": [{
            "style": "button_orange",
            "action": require("./action_unpause.js"),
            "text": "Continue",
            "type": "button"
        }],
        "content": [{
            "style": "text_title",
            "text": "Make yourself happier in 2 weeks",
            "type": "text"
        }, {
            "height": 10,
            "type": "spacer"
        }, {
            "align": "center",
            "image": {
                "height": 38,
                "url": "https://ucarecdn.com/d96fae25-17bc-4de2-8e35-0d6030c2b55b/",
                "width": 136,
                "uploadcare_id": "d96fae25-17bc-4de2-8e35-0d6030c2b55b"
            },
            "type": "image"
        }, {
            "height": 26,
            "type": "spacer"
        }, {
            "style": "text_header1",
            "text": "About the quest",
            "type": "text"
        }, {
            "height": 10,
            "type": "spacer"
        }, {
            "style": "text_default",
            "text": "Learn to correctly spend and restore energy, to feel cheerful every day.\n\nWithin 7 days you will learn to rest properly.\n\nEvery day is a new occupation to restore physical, emotional and intellectual energy.",
            "type": "text"
        }]
    },
    "type": "open"
}
