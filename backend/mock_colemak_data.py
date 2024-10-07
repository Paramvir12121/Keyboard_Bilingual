from models import db, Lesson
from datetime import datetime
from run import app

def add_colemak_lessons():
    colemak_lessons = [
        # Home Row - Left Four Keys (Colemak)
        {
            "title": "Home Row Left Four Keys Lesson 1",
            "topic": "Home Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the home row left four keys on the Colemak keyboard.",
            "keys": "a r s t",
            "words": [
                "arts", "rats", "star", "start", "arts", "tars", "rats", "tart", "arts", "ratt",
                "tart", "stir", "tart", "rants", "start", "stair", "tars", "rants", "stirs", "stars",
                "ratt", "tart", "start", "arts", "tart", "stair", "rats", "tarts", "star", "start",
                "ratt", "rants", "tarts", "stir", "stars", "tars", "start", "stirs", "ratt", "tart"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Left Four Keys Lesson 2",
            "topic": "Home Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Practice using the home row left four keys with more complex words.",
            "keys": "a r s t",
            "words": [
                "start", "stars", "stair", "tarts", "rants", "stirs", "start", "ratt", "arts", "rats",
                "tars", "tart", "stirs", "start", "ratt", "tarts", "star", "start", "stir", "tars",
                "stair", "tart", "rats", "start", "rants", "ratt", "stars", "arts", "stirs", "rats",
                "tars", "tart", "rants", "tart", "start", "ratt", "start", "stars", "tarts", "stair"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Left Four Keys Lesson 3",
            "topic": "Home Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Master the home row left four keys with challenging words.",
            "keys": "a r s t",
            "words": [
                "tarts", "start", "stirs", "tart", "rats", "star", "ratt", "start", "stair", "arts",
                "tars", "rants", "start", "tarts", "ratt", "tars", "start", "stars", "stirs", "stair",
                "rats", "rants", "start", "tart", "tars", "ratt", "arts", "tarts", "stir", "stars",
                "start", "rants", "tart", "rats", "stir", "tarts", "start", "ratt", "stars", "tars"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Home Row - Right Four Keys (Colemak)
        {
            "title": "Home Row Right Four Keys Lesson 1",
            "topic": "Home Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the home row right four keys on the Colemak keyboard.",
            "keys": "n e i o",
            "words": [
                "none", "nine", "neon", "note", "noon", "none", "neon", "note", "nine", "note",
                "neon", "none", "note", "neon", "nine", "note", "none", "noon", "note", "none",
                "neon", "nine", "noon", "none", "note", "neon", "none", "nine", "note", "noon",
                "neon", "none", "note", "nine", "noon", "neon", "none", "nine", "note", "noon"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Right Four Keys Lesson 2",
            "topic": "Home Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Practice using the home row right four keys with more complex words.",
            "keys": "n e i o",
            "words": [
                "note", "none", "neon", "nine", "noon", "none", "neon", "note", "none", "nine",
                "note", "noon", "neon", "none", "nine", "note", "noon", "neon", "nine", "note",
                "none", "neon", "note", "none", "nine", "noon", "note", "none", "neon", "nine",
                "none", "noon", "note", "neon", "none", "nine", "noon", "note", "none", "neon"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Right Four Keys Lesson 3",
            "topic": "Home Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Master the home row right four keys with challenging words.",
            "keys": "n e i o",
            "words": [
                "neon", "none", "note", "nine", "noon", "none", "neon", "nine", "note", "none",
                "noon", "note", "none", "neon", "nine", "note", "none", "noon", "neon", "none",
                "nine", "noon", "note", "neon", "none", "nine", "note", "noon", "neon", "none",
                "note", "nine", "none", "noon", "neon", "note", "none", "nine", "noon", "neon"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Home Row - Middle Four Keys (Colemak)
        {
            "title": "Home Row Middle Four Keys Lesson 1",
            "topic": "Home Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the home row middle four keys on the Colemak keyboard.",
            "keys": "s t n e",
            "words": [
                "sent", "tent", "nest", "test", "nest", "sent", "test", "tent", "nest", "sent",
                "test", "tent", "nest", "test", "sent", "tent", "nest", "test", "tent", "nest",
                "sent", "test", "tent", "nest", "sent", "test", "nest", "tent", "sent", "test",
                "nest", "tent", "test", "sent", "tent", "nest", "sent", "test", "tent", "nest"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Middle Four Keys Lesson 2",
            "topic": "Home Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Practice using the home row middle four keys with more complex words.",
            "keys": "s t n e",
            "words": [
                "tent", "nest", "sent", "test", "nest", "sent", "tent", "test", "nest", "tent",
                "sent", "test", "tent", "nest", "sent", "test", "nest", "tent", "test", "nest",
                "sent", "tent", "test", "sent", "nest", "test", "tent", "sent", "nest", "test",
                "tent", "sent", "test", "nest", "tent", "sent", "test", "nest", "tent", "test"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Middle Four Keys Lesson 3",
            "topic": "Home Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Master the home row middle four keys with challenging words.",
            "keys": "s t n e",
            "words": [
                "test", "nest", "sent", "tent", "nest", "test", "tent", "sent", "test", "nest",
                "tent", "sent", "nest", "test", "tent", "nest", "test", "tent", "sent", "nest",
                "tent", "test", "sent", "nest", "test", "tent", "sent", "nest", "test", "sent",
                "tent", "test", "sent", "nest", "tent", "sent", "test", "nest", "tent", "sent"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Home Row - Complete (Colemak)
        {
            "title": "Complete Home Row Lesson 1",
            "topic": "Home Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the home row of the Colemak keyboard.",
            "keys": "a r s t n e i o",
            "words": [
                "start", "stone", "notes", "noise", "train", "stare", "rates", "store", "earns", "tones",
                "taser", "reset", "stain", "roast", "notes", "tarts", "raise", "rains", "siren", "steer",
                "reset", "taser", "store", "notes", "earns", "noise", "tart", "tones", "tart", "stone",
                "train", "stare", "store", "taser", "reset", "steer", "rates", "siren", "roast", "rains"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
         # Top Row - Left Four Keys (Colemak)
        {
            "title": "Top Row Left Four Keys Lesson 1",
            "topic": "Top Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the top row left four keys on the Colemak keyboard.",
            "keys": "q w f p",
            "words": [
                "wrap", "warp", "waft", "quip", "puff", "flap", "weep", "quip", "waft", "flip",
                "wip", "piff", "fawn", "flap", "warp", "weep", "flip", "wip", "puff", "flip",
                "waft", "warp", "piff", "wrap", "weep", "flip", "flap", "warp", "fawn", "puff",
                "flip", "wrap", "piff", "waft", "fawn", "wip", "flip", "weep", "flap", "wrap"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Left Four Keys Lesson 2",
            "topic": "Top Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Practice using the top row left four keys with more complex words.",
            "keys": "q w f p",
            "words": [
                "waft", "quip", "puff", "flip", "flap", "wrap", "warp", "wip", "weep", "fawn",
                "flip", "piff", "wrap", "weep", "warp", "flip", "fawn", "puff", "wrap", "flip",
                "waft", "warp", "piff", "wrap", "weep", "flip", "flap", "warp", "fawn", "puff",
                "flip", "wrap", "piff", "waft", "fawn", "wip", "flip", "weep", "flap", "wrap"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Left Four Keys Lesson 3",
            "topic": "Top Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Master the top row left four keys with challenging words.",
            "keys": "q w f p",
            "words": [
                "flap", "warp", "wrap", "quip", "waft", "flip", "weep", "puff", "flip", "fawn",
                "warp", "flap", "piff", "wrap", "flip", "wip", "puff", "waft", "flip", "fawn",
                "warp", "weep", "flip", "wrap", "puff", "flap", "flip", "wrap", "warp", "weep",
                "flip", "fawn", "wrap", "piff", "flip", "fawn", "wrap", "waft", "wip", "wrap"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Top Row - Right Four Keys (Colemak)
        {
            "title": "Top Row Right Four Keys Lesson 1",
            "topic": "Top Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the top row right four keys on the Colemak keyboard.",
            "keys": "g j l u",
            "words": [
                "glue", "gull", "jug", "lug", "glug", "juggle", "lug", "gulp", "lug", "glue",
                "jog", "gulp", "glue", "lug", "jug", "gulp", "gull", "jog", "glue", "lug",
                "glug", "gulp", "lug", "glue", "juggle", "gull", "lug", "jog", "glue", "gulp",
                "jug", "lug", "glug", "gulp", "gull", "glue", "lug", "jog", "jug", "glug"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Right Four Keys Lesson 2",
            "topic": "Top Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Practice using the top row right four keys with more complex words.",
            "keys": "g j l u",
            "words": [
                "juggle", "glug", "lug", "gull", "jug", "lug", "glue", "gulp", "jug", "lug",
                "juggle", "glue", "gull", "lug", "glug", "lug", "jug", "gull", "glue", "gulp",
                "lug", "glug", "gull", "jog", "lug", "jug", "glue", "juggle", "glug", "gulp",
                "glue", "jug", "lug", "glug", "gull", "jug", "glue", "gulp", "lug", "glug"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Right Four Keys Lesson 3",
            "topic": "Top Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Master the top row right four keys with challenging words.",
            "keys": "g j l u",
            "words": [
                "glue", "gull", "jug", "lug", "glug", "juggle", "lug", "gulp", "lug", "glue",
                "jog", "gulp", "glue", "lug", "jug", "gulp", "gull", "jog", "glue", "lug",
                "glug", "gulp", "lug", "glue", "juggle", "gull", "lug", "jog", "glue", "gulp",
                "jug", "lug", "glug", "gulp", "gull", "glue", "lug", "jog", "jug", "glug"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Top Row - Middle Four Keys (Colemak)
        {
            "title": "Top Row Middle Four Keys Lesson 1",
            "topic": "Top Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the top row middle four keys on the Colemak keyboard.",
            "keys": "w f j l",
            "words": [
                "wolf", "flow", "jolt", "left", "fell", "flow", "fowl", "jell", "wolf", "felt",
                "jolt", "flow", "fowl", "jell", "felt", "left", "wolf", "flow", "fell", "felt",
                "flow", "felt", "jolt", "left", "fowl", "wolf", "felt", "fowl", "flow", "jell",
                "left", "felt", "fowl", "wolf", "flow", "fell", "left", "jolt", "wolf", "felt"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Middle Four Keys Lesson 2",
            "topic": "Top Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Practice using the top row middle four keys with more complex words.",
            "keys": "w f j l",
            "words": [
                "felt", "flow", "wolf", "fell", "fowl", "jolt", "left", "jell", "flow", "felt",
                "wolf", "flow", "jell", "fowl", "felt", "flow", "wolf", "felt", "left", "fell",
                "jolt", "fowl", "left", "flow", "jell", "felt", "wolf", "fowl", "left", "felt",
                "flow", "felt", "jolt", "fowl", "wolf", "flow", "left", "fell", "jolt", "felt"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Middle Four Keys Lesson 3",
            "topic": "Top Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Master the top row middle four keys with challenging words.",
            "keys": "w f j l",
            "words": [
                "fowl", "flow", "felt", "wolf", "left", "jolt", "fell", "flow", "wolf", "jell",
                "felt", "flow", "left", "fell", "wolf", "felt", "fowl", "left", "flow", "jolt",
                "jell", "felt", "flow", "wolf", "left", "fowl", "fell", "felt", "flow", "jolt",
                "wolf", "left", "felt", "flow", "jell", "wolf", "felt", "fowl", "left", "fell"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Top Row - Complete (Colemak)
        {
            "title": "Complete Top Row Lesson 1",
            "topic": "Top Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the top row of the Colemak keyboard.",
            "keys": "q w f p g j l u",
            "words": [
                "gulf", "plug", "jolt", "juggle", "gull", "full", "gulp", "fluff", "quill", "pull",
                "flip", "wolf", "jell", "fell", "foul", "left", "plow", "flow", "fell", "glue",
                "flap", "gulp", "jog", "flip", "puff", "gull", "wolf", "lug", "flow", "glow",
                "plug", "puff", "quill", "wolf", "full", "jolt", "pull", "foul", "fell", "plow"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Left Four Keys Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the bottom row left four keys on the Colemak keyboard.",
            "keys": "z x c v",
            "words": [
                "vex", "czar", "vac", "cave", "vex", "czar", "cave", "vex", "cave", "vac",
                "czar", "vex", "czar", "vex", "vac", "cave", "vex", "vac", "czar", "vex",
                "vex", "cave", "czar", "vac", "vex", "czar", "vac", "vex", "czar", "cave",
                "vac", "cave", "czar", "vac", "cave", "czar", "vex", "vac", "czar", "cave"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Left Four Keys Lesson 2",
            "topic": "Bottom Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Practice using the bottom row left four keys with more complex words.",
            "keys": "z x c v",
            "words": [
                "vex", "czar", "vac", "cave", "vex", "vac", "czar", "vex", "cave", "czar",
                "vex", "czar", "vac", "cave", "vex", "cave", "czar", "vex", "vac", "cave",
                "vex", "czar", "vac", "vex", "cave", "czar", "vac", "cave", "vex", "czar",
                "vac", "czar", "cave", "vex", "vac", "czar", "cave", "vex", "vac", "czar"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Left Four Keys Lesson 3",
            "topic": "Bottom Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Master the bottom row left four keys with challenging words.",
            "keys": "z x c v",
            "words": [
                "cave", "vex", "czar", "vac", "vex", "czar", "vac", "cave", "vex", "czar",
                "vac", "vex", "cave", "czar", "vac", "vex", "cave", "czar", "vac", "vex",
                "czar", "vex", "vac", "cave", "vex", "czar", "vac", "vex", "cave", "czar",
                "vac", "vex", "czar", "vex", "vac", "cave", "vex", "czar", "vac", "cave"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Bottom Row - Right Four Keys (Colemak)
        {
            "title": "Bottom Row Right Four Keys Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the bottom row right four keys on the Colemak keyboard.",
            "keys": "b n m ,",
            "words": [
                "man", "ban", "nab", "bam", "men", "bean", "mean", "barn", "main", "name",
                "nab", "mend", "beam", "band", "bend", "man", "bam", "bend", "name", "nab",
                "mean", "main", "beam", "band", "mend", "barn", "nab", "bend", "mean", "bean",
                "name", "main", "man", "mend", "bam", "nab", "man", "bend", "beam", "band"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Right Four Keys Lesson 2",
            "topic": "Bottom Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Practice using the bottom row right four keys with more complex words.",
            "keys": "b n m ,",
            "words": [
                "banner", "namely", "number", "nabber", "member", "banana", "manner", "banner", "member", "nabber",
                "manner", "namely", "banners", "number", "banana", "banners", "manner", "banter", "member", "banner",
                "nabber", "manner", "banana", "number", "namely", "banner", "nabber", "member", "banners", "banter",
                "namely", "banana", "banner", "nabber", "manner", "member", "banana", "number", "banter", "manner"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Right Four Keys Lesson 3",
            "topic": "Bottom Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Master the bottom row right four keys with challenging words.",
            "keys": "b n m ,",
            "words": [
                "banana", "manner", "banner", "member", "number", "nabber", "namely", "banana", "banner", "member",
                "banners", "manner", "number", "nabber", "banner", "namely", "banana", "nabber", "banner", "manner",
                "namely", "banners", "member", "number", "nabber", "banana", "banners", "number", "manner", "namely",
                "nabber", "banner", "banners", "number", "banana", "member", "manner", "number", "nabber", "banana"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Bottom Row - Middle Four Keys (Colemak)
        {
            "title": "Bottom Row Middle Four Keys Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the bottom row middle four keys on the Colemak keyboard.",
            "keys": "c v b n",
            "words": [
                "cave", "bean", "ban", "nab", "cab", "vibe", "van", "nab", "bean", "cab",
                "van", "nab", "vibe", "ban", "cab", "cave", "nab", "van", "cab", "bean",
                "vibe", "ban", "cave", "van", "nab", "bean", "cab", "vibe", "ban", "cab",
                "bean", "vibe", "van", "nab", "ban", "cave", "van", "bean", "nab", "cab"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Middle Four Keys Lesson 2",
            "topic": "Bottom Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Practice using the bottom row middle four keys with more complex words.",
            "keys": "c v b n",
            "words": [
                "nab", "bean", "vibe", "ban", "van", "cab", "vibe", "bean", "cave", "van",
                "cab", "nab", "van", "bean", "cave", "vibe", "nab", "van", "ban", "cave",
                "vibe", "bean", "cab", "van", "nab", "bean", "cab", "vibe", "ban", "van",
                "cave", "bean", "nab", "cab", "vibe", "ban", "van", "bean", "cave", "nab"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Middle Four Keys Lesson 3",
            "topic": "Bottom Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Master the bottom row middle four keys with challenging words.",
            "keys": "c v b n",
            "words": [
                "vibe", "nab", "cab", "van", "cave", "bean", "ban", "van", "cab", "nab",
                "vibe", "bean", "van", "cave", "cab", "bean", "nab", "vibe", "cave", "ban",
                "van", "bean", "nab", "vibe", "cab", "cave", "bean", "van", "nab", "vibe",
                "cave", "bean", "cab", "vibe", "van", "bean", "nab", "ban", "cab", "van"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Bottom Row - Complete (Colemak)
        {
            "title": "Complete Bottom Row Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the bottom row of the Colemak keyboard.",
            "keys": "z x c v b n m ,",
            "words": [
                "ban", "nab", "man", "men", "cave", "czar", "vex", "vac", "mean", "main",
                "beam", "band", "bend", "bean", "nab", "vex", "czar", "vac", "bend", "mend",
                "main", "man", "nab", "czar", "vex", "bend", "beam", "band", "mean", "mend",
                "ban", "czar", "vex", "vac", "man", "bean", "mend", "bend", "czar", "vex"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Number Row - Left Four Keys (1 2 3 4)
        {
            "title": "Number Row Left Four Keys Lesson 1",
            "topic": "Number Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the number row left four keys (1-4) on the Colemak keyboard.",
            "keys": "1 2 3 4",
            "words": [
                "123", "132", "231", "124", "134", "234", "312", "241", "341", "213",
                "321", "342", "143", "421", "431", "2413", "3142", "4123", "1342", "3241",
                "4321", "1243", "1324", "1423", "2134", "3214", "2412", "3124", "4231", "3412",
                "2143", "1341", "4312", "2131", "2314", "3143", "4213", "2341", "4124", "3242"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Number Row Left Four Keys Lesson 2",
            "topic": "Number Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Practice using the number row left four keys with more complex combinations (1-4).",
            "keys": "1 2 3 4",
            "words": [
                "1324", "3241", "2314", "3412", "1243", "4213", "1342", "2143", "3421", "2413",
                "2134", "3214", "4321", "3142", "1241", "1321", "4123", "1432", "3413", "4231",
                "2412", "2341", "3124", "4312", "3141", "3213", "1234", "1341", "2131", "4212",
                "2414", "3243", "4313", "2141", "3422", "3144", "1322", "3414", "4322", "2142"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Number Row Left Four Keys Lesson 3",
            "topic": "Number Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Master the number row left four keys with challenging combinations (1-4).",
            "keys": "1 2 3 4",
            "words": [
                "2413", "1243", "4312", "1324", "3412", "2134", "3142", "3214", "2412", "1231",
                "2143", "4321", "4123", "1342", "3124", "3414", "2341", "4231", "4213", "3413",
                "2411", "1323", "3144", "4322", "3243", "4313", "4124", "2131", "3421", "4312",
                "1242", "3142", "1321", "2141", "2314", "4323", "3413", "3121", "4214", "3422"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Number Row - Right Four Keys (5 6 7 8)
        {
            "title": "Number Row Right Four Keys Lesson 1",
            "topic": "Number Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the number row right four keys (5-8) on the Colemak keyboard.",
            "keys": "5 6 7 8",
            "words": [
                "567", "576", "758", "687", "568", "678", "758", "875", "586", "675",
                "876", "785", "867", "6758", "8576", "7685", "5678", "8765", "6757", "7865",
                "8578", "7568", "8767", "6756", "8657", "5676", "7586", "8768", "7687", "8576",
                "8765", "8678", "5768", "7587", "6758", "8675", "7586", "5677", "6876", "7688"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Number Row Right Four Keys Lesson 2",
            "topic": "Number Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Practice using the number row right four keys with more complex combinations (5-8).",
            "keys": "5 6 7 8",
            "words": [
                "7685", "8678", "7856", "5768", "6758", "8576", "6785", "8765", "7586", "5678",
                "8675", "8768", "5677", "5765", "6756", "8677", "5768", "7865", "8578", "7658",
                "8678", "7587", "6757", "5678", "7856", "8767", "8568", "7585", "6756", "8675",
                "8765", "5676", "7685", "7867", "5675", "8677", "7858", "8765", "7686", "8768"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Number Row Right Four Keys Lesson 3",
            "topic": "Number Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Master the number row right four keys with challenging combinations (5-8).",
            "keys": "5 6 7 8",
            "words": [
                "8675", "7586", "6758", "8765", "7856", "5768", "5677", "7685", "8768", "6578",
                "7865", "7587", "8576", "7687", "8678", "6756", "5678", "7867", "6757", "8578",
                "8765", "7658", "7585", "6578", "8677", "5765", "6758", "5768", "7587", "8675",
                "7687", "6756", "7857", "8678", "7685", "8767", "6756", "7858", "8765", "8768"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Number Row - Middle Four Keys (9 0 - =)
        {
            "title": "Number Row Middle Four Keys Lesson 1",
            "topic": "Number Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the number row middle four keys (9 0 - =) on the Colemak keyboard.",
            "keys": "9 0 - =",
            "words": [
                "90-", "9-0", "=0-", "=-9", "0=-", "90=", "0=9", "9-=", "=90", "=-0",
                "0=-", "-09", "90-", "0=9", "=09", "=-0", "90=", "0-9", "=-9", "-90",
                "09=", "=09", "9-0", "=90", "-90", "0=-", "=0-9", "90-", "=-9", "-09",
                "0=-", "=-9", "90=", "=09", "-0=", "09-", "9-=", "90-0", "=90", "-90", "09="
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Number Row Middle Four Keys Lesson 2",
            "topic": "Number Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Practice using the number row middle four keys with more complex combinations (9 0 - =).",
            "keys": "9 0 - =",
            "words": [
                "=0-9", "90=", "=-9", "09=", "90-0", "=90-", "=-0", "-09", "9-0=", "=09",
                "=-90", "0-9", "=09", "-09", "90=", "=-90", "-90=", "09=", "=-9", "0=-",
                "=90", "09-0", "-90", "90=", "=-0", "=09", "0-9", "=-90", "9-=", "-09",
                "=0-9", "=-9", "90-", "=90", "=-09", "-0=", "90=", "=-90", "=0-", "09-"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Number Row Middle Four Keys Lesson 3",
            "topic": "Number Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Master the number row middle four keys with challenging combinations (9 0 - =).",
            "keys": "9 0 - =",
            "words": [
                "=0-9", "90-=", "=90", "-09=", "=09-", "90=", "=-09", "0=-", "=09", "-90",
                "0=9-", "=90", "-0=9", "09-", "=09=", "9-0=", "=-09", "-90", "90-=", "09-",
                "=90=", "-90=", "0-=", "=09-", "9-0", "=09", "=-09", "-0=", "90-", "=90-0",
                "=-90", "=09=", "-09", "90-=", "=90", "09-0", "=90=", "=-09", "-09", "90="
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Symbols Row - Left Four Keys (` ~ ! @)
        {
            "title": "Symbols Row Left Four Keys Lesson 1",
            "topic": "Symbols Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the symbols row left four keys (` ~ ! @) on the Colemak keyboard.",
            "keys": "` ~ ! @",
            "words": [
                "`~!@", "@!~`", "~@!`", "`!~@", "~`@!", "@~!`", "!@~`", "`~@!", "~!`@", "`~!@",
                "~@`!", "`@!~", "!~@`", "`~@!", "~!`@", "!@~`", "~`@!", "`~!@", "!~`@", "~!@`",
                "`@!~", "~@!`", "@`~!", "`@~!", "`~@!", "!~`@", "`!@~", "@!`~", "~`@!", "!@~`",
                "~`@!", "`~@!", "`!@~", "@`~!", "!@~`", "`!~@", "~!@`", "`@~!", "`~!@", "!@~`"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Symbols Row Left Four Keys Lesson 2",
            "topic": "Symbols Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Practice using the symbols row left four keys with more complex combinations (` ~ ! @).",
            "keys": "` ~ ! @",
            "words": [
                "~@`!", "`~@!", "@~!`", "`!~@", "~!@`", "`~!@", "`~@!", "!@~`", "~!`@", "`@!~",
                "!~@`", "~@!`", "`~!@", "!@~`", "`~@!", "~!`@", "`@!~", "!~`@", "@`~!", "~`@!",
                "!~`@", "`@!~", "~!@`", "`~@!", "!@~`", "`~!@", "~@!`", "`!@~", "`~@!", "!~`@",
                "~`@!", "`@~!", "!~@`", "@~!`", "`~@!", "!@~`", "~`@!", "@!`~", "`!~@", "~!`@"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Symbols Row Left Four Keys Lesson 3",
            "topic": "Symbols Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Master the symbols row left four keys with challenging combinations (` ~ ! @).",
            "keys": "` ~ ! @",
            "words": [
                "!@~`", "`!~@", "~`@!", "`~!@", "!~@`", "`~@!", "~@`!", "`@!~", "~!`@", "!~`@",
                "`@~!", "`~!@", "!@~`", "~`@!", "`!@~", "@~!`", "`~@!", "!~@`", "~!@`", "`@!~",
                "!~@`", "`@~!", "~!`@", "`!~@", "`~!@", "~!@`", "`@!~", "!~@`", "`~@!", "!~`@",
                "~`@!", "`~!@", "@~!`", "`!@~", "!@~`", "~@!`", "`~@!", "`~!@", "!~@`", "`@!~"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Symbols Row - Right Four Keys (# $ % ^)
        {
            "title": "Symbols Row Right Four Keys Lesson 1",
            "topic": "Symbols Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the symbols row right four keys (# $ % ^) on the Colemak keyboard.",
            "keys": "# $ % ^",
            "words": [
                "#$%^", "$%^#", "^%$#", "%$^#", "#%^$", "#$^%", "$%^#", "%^#$", "#%^$", "^$%#",
                "$#%^", "^%$#", "#$%^", "%^$#", "^#%$", "$#%^", "^$#%", "%^#$", "#$^%", "^%$#",
                "#%^$", "$%^#", "%$#^", "#$%^", "^%$#", "#%^$", "^$%#", "$#%^", "#$^%", "%^#$",
                "^#%$", "$%^#", "#%^$", "$^%#", "^$#%", "%^#$", "$#%^", "^%$#", "#$%^", "^#%$"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Symbols Row Right Four Keys Lesson 2",
            "topic": "Symbols Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Practice using the symbols row right four keys with more complex combinations (# $ % ^).",
            "keys": "# $ % ^",
            "words": [
                "$#%^", "^%$#", "#%^$", "$^#%", "%$^#", "#$%^", "^$%#", "#$^%", "^%#$", "%^#$",
                "#$%^", "%$#^", "#%^$", "^%$#", "$%^#", "%^#$", "#$%^", "^$#%", "%$^#", "$%^#",
                "#%^$", "^#%$", "%$#^", "$#%^", "^%#$", "#$^%", "^$%#", "#%^$", "^%$#", "$#%^",
                "%^#$", "#$^%", "$%^#", "^#%$", "%$^#", "^$%#", "#%^$", "$#%^", "^%#$", "%^#$"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Symbols Row Right Four Keys Lesson 3",
            "topic": "Symbols Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Master the symbols row right four keys with challenging combinations (# $ % ^).",
            "keys": "# $ % ^",
            "words": [
                "^%$#", "#%^$", "$#%^", "%^#$", "^$#%", "%$^#", "#$%^", "^#%$", "$%^#", "%$^#",
                "#$%^", "^$%#", "%#^$", "$%^#", "#%^$", "%^#$", "#$^%", "^%$#", "%$^#", "$#%^",
                "#$%^", "%^#$", "^$#%", "#%^$", "^$%#", "$#%^", "%$^#", "^%#$", "#%^$", "$%^#",
                "%^#$", "#%^$", "^$%#", "%$^#", "#$%^", "^%#$", "$%^#", "^$%#", "#%^$", "$^%#"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Symbols Row - Middle Four Keys (& * ( ))
        {
            "title": "Symbols Row Middle Four Keys Lesson 1",
            "topic": "Symbols Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the symbols row middle four keys (& * ( )) on the Colemak keyboard.",
            "keys": "& * ( )",
            "words": [
                "&*()", "*&()", "(*)&", "(*&)", "&(*)", "&()*", "*()&", "(*)&", "&(*)", "&()*",
                "(*)&", "&(*)", "*&()", "()*&", "&*()", "(*&)", "&()*", "(*&)", "&(*)", "*()&",
                "(*)&", "&()*", "*&()", "&(*)", "(*)&", "()*&", "&(*)", "&*()", "*&()", "(*)&",
                "&(*)", "&()*", "*()&", "(*)&", "&*()", "(*&)", "&()*", "&()*", "()*&", "&*()"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Symbols Row Middle Four Keys Lesson 2",
            "topic": "Symbols Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Practice using the symbols row middle four keys with more complex combinations (& * ( )).",
            "keys": "& * ( )",
            "words": [
                "&()*", "(*)&", "*&()", "(*&)", "&(*)", "&*()", "*()&", "(*)&", "&()*", "&(*)",
                "(*&)", "&()*", "*()&", "(*)&", "&(*)", "&()*", "*&()", "()*&", "&*()", "(*&)",
                "&()*", "(*&)", "&(*)", "*&()", "()*&", "&()*", "(*)&", "&(*)", "*()&", "&*()",
                "(*&)", "&()*", "&(*)", "()*&", "&*()", "*()&", "(*)&", "&(*)", "&()*", "*&()"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Symbols Row Middle Four Keys Lesson 3",
            "topic": "Symbols Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Master the symbols row middle four keys with challenging combinations (& * ( )).",
            "keys": "& * ( )",
            "words": [
                "(*)&", "&*()", "*&()", "()*&", "&()*", "(*&)", "&()*", "*()&", "(*)&", "&(*)",
                "&()*", "(*)&", "&(*)", "*&()", "()*&", "&*()", "(*)&", "&()*", "*()&", "&(*)",
                "&()*", "(*&)", "&*()", "*()&", "&()*", "(*)&", "&()*", "*&()", "()*&", "&(*)",
                "(*)&", "&()*", "&(*)", "(*&)", "&*()", "()*&", "&(*)", "*()&", "&*()", "&()*"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Symbols Row - Complete (& * ( ) ! @ # $ % ^ ` ~)
        {
            "title": "Complete Symbols Row Lesson 1",
            "topic": "Symbols Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the symbols row of the Colemak keyboard.",
            "keys": "& * ( ) ! @ # $ % ^ ` ~",
            "words": [
                "&!~#", "#$%^", "@*!&", "(^&%)", "`~!@", "!@#^", "&(*)", "$^%#", "(*@!)", "`!~#",
                "%^@#", "$!@~", "#%^&", "(*#%)", "&@^$", "!~`#", "(*^%)", "&^%@#", "`~@!", "#^$%",
                "%^@#", "*&@!$", "`#^&@", "&*#^", "!^%@&", "`!~#@", "&%@#$", "`~!@", "*&!^@", "$%^@",
                "#!@~$", "&@%!*", "(*^$)", "#%@`~", "!~@#", "`~!@", "#^$%&", "!@~#^", "&%@^", "%^@#"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]

    for lesson in colemak_lessons:
        new_lesson = Lesson(
            title=lesson["title"],
            topic=lesson["topic"],
            subtopic=lesson["subtopic"],
            keyboard_type=lesson["keyboard_type"],
            description=lesson["description"],
            keys=lesson["keys"],
            words=",".join(lesson["words"]),
            difficulty=lesson["difficulty"],
            created_at=lesson["created_at"],
            updated_at=lesson["updated_at"]
        )
        db.session.add(new_lesson)

    db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        add_colemak_lessons()
        print("Colemak lessons added to the Lessons table.")
