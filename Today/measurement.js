module.exports = function(params) {

    var hr = {
        "type": "spacer",
        "height": 1,
        "component_style": {
            "background_color": "#F0F1F4"
        }
    };

    var vr = {
        "type": "spacer",
        "width": 1,
        "component_style": {
            "background_color": "#F0F1F4"
        }
    };

    var title = params.time;

    params.tags.forEach(function(tag) {
        title += ", " + tag;
    });

    var header = {
        "type": "hbox",
        "items": [require("../Templates/image.js")({
            "name": "ic_heart.png",
            "width": 32,
            "height": 32
        }), {
            "type": "text",
            "text": title,
            "weight": 1,
            "margin": {
                "left": 16
            }
        }],
        margin: {
            top: 16,
            bottom: 16,
            left: 26,
            right: 26
        }
    }
    var items = [header, hr];

    items.push({
        "type": "hbox",
        "items": [{
                "type": "text",
                "text": "Recommendation",
                "weight": 1
            },
            require("../Templates/image.js")({
                "name": "ic_conclusion_orange.png",
                "width": 32,
                "height": 32
            })
        ],
        margin: {
            top: 16,
            left: 26,
            right: 26
        }
    });

    items.push({
        "type": "text",
        "text": params.recomendation,
        margin: {
            top: 12,
            bottom: 16,
            left: 26,
            right: 26
        }
    });

    items.push(hr);

    items.push({
        "type": "hbox",
        "height": 160,
        "items": [{
                type: "vbox",
                weight: 1,
                items: [performanceIndicator(params.performance)]
            },
            vr, {
                "type": "vbox",
                weight: 1,
                items: [moodIndicator(params.mood)]
            }
        ]
    });

    items.push(hr);

    items.push({
        "type": "hbox",
        "height": 160,
        "items": [{
                type: "vbox",
                weight: 1,
                items: [energyIndicator(params.energy)]
            },
            vr, {
                type: "vbox",
                weight: 1,
                items: [stressIndicator(params.stress)]
            }
        ]
    });

    items.push(hr);

    var buttons = [require("../Templates/image.js")({
            "name": "measurement_button_pressure.png",
            "width": 65,
            "height": 65
        }),
        require("../Templates/image.js")({
            "name": "measurement_button_details.png",
            "width": 65,
            "height": 65
        }),
        require("../Templates/image.js")({
            "name": "measurement_button_remove.png",
            "width": 65,
            "height": 65
        }),
        require("../Templates/image.js")({
            "name": "measurement_button_share.png",
            "width": 65,
            "height": 65
        })
    ];

    buttons.forEach(function(item, index, array) {
        item.margin = {
            "top": 8,
            "bottom": 8,
        }
    });
    
    items.push({
        "type": "hbox",
        "items": [
            {
                "type": "spacer",
                "weight": 1
            },
            {
                "type": "button",
                "ratio": 80,
                "text": "Параметры замера",
                "style": "button_orange_cell"
            },
            {
                "type": "spacer",
                "weight": 1
            }
        ],
        margin: {
            "top": 24
        }
    });

    items.push({
        type: "hbox",
        margin: {},
        items: [{
                type: "spacer",
                weight: 1
            },
            buttons[0], {
                type: "spacer",
                weight: 1
            },
            buttons[1], {
                type: "spacer",
                weight: 1
            },
            buttons[2], {
                type: "spacer",
                weight: 1
            },
            buttons[3], {
                type: "spacer",
                weight: 1
            },
        ],
        margin: {
            "top": 16
        }
    });

    return {
        "type": "cell",
        "items": items
    };
}

function performanceIndicator(performance) {

    var red = "#FD666F";
    var yellow = "#FFF46E";
    var green = "#4BFD9D";
    var grey = "#F0F1F4";

    var color;

    if (performance <= 2) {
        color = red;
    } else if (performance == 3) {
        color = yellow;
    } else {
        color = green;
    }

    return cell({
        "margin": {
            "top": 16
        },
        "type": "circle_progress",
        "progress": performance,
        "total": 5,
        "progress_color": color,
        "height": 71
    }, "Ok", color, "Performance");
}

function moodIndicator(mood, feel) {
    var mood_index = Math.max(Math.min(mood, 5), 1)
    var feel_index = Math.max(Math.min(feel, 5), 1)
    return cell(require("../Templates/image.js")({
        "name": "meaasurement_indicator_mood_" + mood_index + "_" + feel_index + ".png",
        "width": 91,
        "height": 91
    }), "Good / Super", "#F0F1F4", "Feel / Mood");
}

function stressIndicator(stress) {
    step = Math.max(Math.min(Math.floor(stress / 100 * 3 + 1), 3), 1);
    return cell(require("../Templates/image.js")({
        "name": "measurement_stress_" + step + ".png",
        "width": 100,
        "height": 80
    }), "Optimum", null, "Stress");
}

function energyIndicator(energy) {
    step = Math.max(Math.min(Math.floor(energy / 100 * 5 + 1), 6), 1);
    return cell(require("../Templates/image.js")({
        "name": "measurement_energy_" + step + ".png",
        "width": 100,
        "height": 80
    }), "Recover", null, "Energy");
}

function cell(icon, tag_text, color, title) {
    icon.margin = {
        "top": 4
    };
    icon.width = 90;
    icon.height = 90;

    var tag = require("../Templates/tag_small.js")({
        "text": tag_text,
        "color": color
    });
    tag.width = 100;

    var title_component = {
        "type": "text",
        "text": title,
        "style": "text_default_center",
        "margin": {
            "top": 8
        }
    };

    return {
        "type": "vbox",
        "items": [icon, {
            type: "hbox",
            items: [{
                    type: "spacer",
                    weight: 1
                },
                tag, {
                    type: "spacer",
                    weight: 1
                },
            ]
        }, title_component]
    };
}
