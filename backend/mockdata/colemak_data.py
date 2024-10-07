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
            "description": "Learn the basics of the home row left four keys.",
            "keys": "a r s t",
            "words": [
                "art", "rats", "start", "star", "arts", "sat", "rest", "tarts", "astra", "treats", 
                "taste", "arrest", "asset", "stat", "tartar", "rasters", "restarts", "strats", 
                "stars", "tasters", "startles", "tart", "states", "startle", "strata", "start", 
                "traits", "arrest", "rest", "tart", "tartan", "stair", "stare", "strap", "startle"
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
            "description": "Practice the home row left four keys with slightly longer words.",
            "keys": "a r s t",
            "words": [
                "arrest", "starter", "starting", "tartness", "restart", "tartrate", "restarting", 
                "starry", "asserts", "tasters", "starters", "restart", "treat", "tartar", 
                "staring", "restarts", "transit", "retreats", "straits", "satire", "starters", 
                "artists", "assert", "stares", "traits", "strata", "startled", "treaters", 
                "treating", "starts", "artisans", "treatises", "staircase", "stargaze", "tartar"
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
            "description": "Master the home row left four keys with a variety of words.",
            "keys": "a r s t",
            "words": [
                "startling", "restarting", "assertion", "staring", "tartness", "retreats", "starlight", 
                "transit", "restarts", "starters", "strata", "restart", "treaties", "arrests", 
                "artist", "starkest", "restrain", "arrested", "startling", "startling", "treaters", 
                "starring", "restart", "artistry", "treatments", "starter", "restrain", "strata", 
                "restarted", "starker", "starting", "treating", "arrests", "transits", "startler"
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
            "description": "Learn the basics of the home row right four keys.",
            "keys": "n e i o",
            "words": [
                "neon", "nine", "noon", "none", "ion", "one", "note", "tone", "into", "net", 
                "teen", "niece", "no", "on", "in", "none", "inn", "note", "nose", "notion", 
                "neat", "neon", "item", "noise", "entire", "nitro", "note", "non", "iron", 
                "noir", "intone", "nitrate", "entice", "nite", "intoned"
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
            "description": "Practice the home row right four keys with slightly longer words.",
            "keys": "n e i o",
            "words": [
                "intention", "noises", "invention", "notions", "enemies", "neon", "inept", "nation", 
                "notice", "noon", "entire", "inner", "entries", "enrich", "innocent", "neonate", 
                "eon", "niece", "notation", "enter", "intent", "neither", "invite", "noises", 
                "entertain", "notions", "ironies", "intonation", "entirety", "notified", "noting", 
                "retention", "intoner", "intoning", "nonentity"
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
            "description": "Master the home row right four keys with a variety of words.",
            "keys": "n e i o",
            "words": [
                "notionless", "intentioned", "oneness", "neonates", "noises", "invention", 
                "neon", "intention", "noteworthy", "internet", "nitrate", "intoner", "neonates", 
                "innermost", "neon", "ironic", "noontime", "ironies", "nineteen", "notified", 
                "notation", "neither", "intone", "entertained", "engineer", "nonexistent", 
                "ironman", "intoning", "innocence", "ironing", "entering", "neatly", "intone", 
                "retention", "noticeable"
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
            "description": "Learn the basics of the home row middle four keys.",
            "keys": "s t n e",
            "words": [
                "sent", "tense", "ten", "set", "nest", "seen", "net", "sent", "test", "sense", 
                "tents", "stone", "sent", "tens", "tents", "stent", "nestle", "seine", "nest", 
                "nest", "tenor", "senses", "stern", "test", "nets", "tenets", "sentries", "tent", 
                "tenser", "stent", "tensile", "sentient", "testers", "tense", "sentient"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Home Row - Middle Four Keys (Colemak)
        {
            "title": "Home Row Middle Four Keys Lesson 1",
            "topic": "Home Row",
            "subtopic": "Middle",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the home row middle four keys.",
            "keys": "s t n e",
            "words": [
                "sent", "tense", "ten", "set", "nest", "seen", "net", "sent", "test", "sense", 
                "tents", "stone", "sent", "tens", "tents", "stent", "nestle", "seine", "nest", 
                "tent", "tenor", "senses", "stern", "test", "nets", "tenets", "sentries", "tent", 
                "tenser", "stent", "tensile", "sentient", "testers", "tense", "nestle"
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
            "description": "Practice the home row middle four keys with slightly longer words.",
            "keys": "s t n e",
            "words": [
                "sentence", "tenser", "tenants", "senates", "settle", "tension", "nets", "tenure", 
                "sense", "sentences", "nesting", "testament", "nestle", "entente", "intent", "tenants", 
                "sentiment", "stenos", "tensile", "stench", "seventeen", "tenet", "nest", "stent", 
                "testes", "nestling", "tenets", "stenographer", "enter", "tenser", "tenure", 
                "tenements", "tenters", "sentimental", "tender"
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
            "description": "Master the home row middle four keys with a variety of words.",
            "keys": "s t n e",
            "words": [
                "sentimental", "tensions", "nesting", "testament", "sentient", "settlements", 
                "sentinel", "tenderness", "intense", "tenacious", "settle", "seventeen", "nestlings", 
                "sentiments", "tenaciously", "tenacity", "nestling", "stenographer", "tendering", 
                "tentacles", "entering", "entente", "sentencing", "settlers", "testimony", 
                "tense", "tenderness", "tendency", "entertain", "sentinel", "nestles", 
                "stenographers", "sentences", "tensely", "tentacles"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Home Row - Whole Row (Colemak)
        {
            "title": "Complete Home Row Lesson 1",
            "topic": "Home Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the home row.",
            "keys": "a r s t n e i o",
            "words": [
                "train", "senior", "ration", "arise", "store", "station", "reason", "stare", "artist", 
                "retain", "resonate", "noise", "tension", "entire", "intent", "retain", "assert", 
                "strain", "aster", "roast", "saint", "senior", "ration", "terrain", "stare", "antiresonant", 
                "entertain", "artisans", "retrain", "trains", "stationer", "instate", "rent", "rotation", 
                "instates"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Complete Home Row Lesson 2",
            "topic": "Home Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Advance your skills on the home row.",
            "keys": "a r s t n e i o",
            "words": [
                "assertion", "retainer", "staining", "rationing", "starting", "trainers", "resonant", 
                "restrain", "stationed", "tear", "notion", "asteroid", "eastern", "retain", "roasted", 
                "terrain", "artisan", "satin", "arisen", "stone", "instant", "tension", "rations", 
                "entire", "senior", "tensions", "stationery", "retain", "artisans", "assertion", 
                "resonate", "roasting", "stints", "airstone", "orientate"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
         # Top Row - Left Four Keys (Colemak)
        {
            "title": "Top Row Left Four Keys Lesson 1",
            "topic": "Top Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the top row left four keys.",
            "keys": "q w f p",
            "words": [
                "quip", "flip", "flap", "wipe", "quip", "flap", "puff", "flip", "flow", "piff", 
                "pulp", "quip", "flip", "wolf", "flow", "puff", "flip", "pulp", "flap", "quill", 
                "puff", "pupil", "wolf", "flap", "flip", "flip", "flow", "quip", "fluff", "flap", 
                "flip", "flip", "flop", "flip", "quip", "flip"
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
            "description": "Practice the top row left four keys with slightly longer words.",
            "keys": "q w f p",
            "words": [
                "flipping", "quip", "flapping", "flips", "puffing", "whiff", "flippers", "whipping", 
                "puffed", "flipflop", "flipper", "whiff", "quipped", "flapped", "wolfpack", "flipped", 
                "fluff", "flip", "flapper", "puffier", "whipped", "whiffed", "quipping", "puffball", 
                "flipping", "flip", "flipchart", "flipping", "puffball", "flipped", "puffy", 
                "whiffed", "whips", "flippers", "flippant"
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
            "description": "Master the top row left four keys with a variety of words.",
            "keys": "q w f p",
            "words": [
                "whippoorwill", "flapping", "quipping", "flippers", "whiff", "flip", "puffier", 
                "whipping", "flipping", "puffball", "flippant", "flappers", "whiplash", "flipped", 
                "puffiness", "flipflop", "fluffing", "whipped", "puffballs", "flip", "flipchart", 
                "flippers", "flapping", "whiplike", "fluffiest", "quipping", "flipcharts", "whippoorwill", 
                "puffiest", "flippable", "whipped", "whiffle", "flapper", "flip", "flipbook"
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
            "description": "Learn the basics of the top row right four keys.",
            "keys": "u g l y",
            "words": [
                "ugly", "gully", "gull", "lug", "guy", "glug", "gulp", "gully", "ugly", "lug", 
                "guy", "gull", "lull", "yule", "lull", "gully", "glug", "gulp", "ugly", "guy", 
                "lug", "gull", "gully", "gully", "lug", "gulp", "lull", "gull", "ugly", "guy", 
                "gulp", "glug", "ugly", "lull", "guy"
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
            "description": "Practice the top row right four keys with slightly longer words.",
            "keys": "u g l y",
            "words": [
                "gullying", "uglier", "glum", "gulps", "gullible", "lullaby", "glum", "uglier", 
                "ugliest", "lugged", "gulled", "gluing", "gully", "lullaby", "lugging", "gulps", 
                "gullible", "lulling", "lullabies", "gluing", "lugged", "gullet", "ugliest", "gulling", 
                "lugger", "gullet", "luggage", "glaring", "gullies", "gluing", "lulling", "gulped", 
                "glaring", "lugging", "luggage"
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
            "description": "Master the top row right four keys with a variety of words.",
            "keys": "u g l y",
            "words": [
                "ugliest", "gullible", "glaring", "lugging", "glaring", "gullies", "lugged", 
                "glum", "glaring", "gluing", "uglier", "glaring", "luggage", "gullies", "lugged", 
                "gullet", "lugger", "gluing", "glumly", "glaring", "lulling", "glaring", "gullied", 
                "lugged", "gullible", "glumly", "lugged", "glaring", "gulping", "lugger", 
                "gluing", "lullabies", "glumly", "glaring"
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
            "description": "Learn the basics of the top row middle four keys.",
            "keys": "f l u i",
            "words": [
                "fluff", "flip", "fill", "full", "file", "fluid", "flail", "flute", "fluff", "foul", 
                "full", "flip", "futile", "flint", "fill", "flirt", "fluff", "file", "flute", "flip", 
                "fluff", "flint", "file", "full", "fluid", "fill", "flip", "flirt", "fluff", "foul", 
                "file", "flute", "flail", "futile", "flirt"
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
            "description": "Practice the top row middle four keys with slightly longer words.",
            "keys": "f l u i",
            "words": [
                "fluffier", "fulfill", "fluting", "flirting", "fluidly", "futility", "fluffing", 
                "fluster", "fulfill", "flirting", "futility", "fluting", "fluffier", "fluster", "fluid", 
                "fulfill", "flirting", "fluffier", "fluting", "futility", "fluently", "fluffiest", 
                "fluffing", "flustered", "flirting", "fluidly", "flirted", "fluffiest", "fluidity", 
                "fluster", "fluting", "fulfill", "fluffy", "fluster", "fluid"
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
            "description": "Master the top row middle four keys with a variety of words.",
            "keys": "f l u i",
            "words": [
                "fluffiness", "fluting", "fluffier", "fluently", "fluidity", "flustering", "flustered", 
                "flirting", "fluidly", "fluffiness", "fulfillment", "fluidity", "fluency", "flirting", 
                "fluid", "flustered", "fluffing", "fluster", "fluently", "futility", "fulfillment", 
                "fluffiest", "fluidity", "fluting", "fluffing", "fluently", "fluid", "fluency", "futile", 
                "fluffiness", "fluster", "flirting", "flustered", "flustered", "futility"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Top Row - Whole Row (Colemak)
        {
            "title": "Complete Top Row Lesson 1",
            "topic": "Top Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the top row.",
            "keys": "q w f p u g l y",
            "words": [
                "quip", "fluff", "puffy", "gully", "lull", "ugly", "flip", "flap", "puff", "wolf", 
                "gulp", "whip", "quill", "lull", "flip", "puff", "fluff", "gulp", "wolf", "flop", 
                "flip", "fluff", "whip", "gull", "puff", "flip", "flap", "quip", "gully", "ugly", 
                "wolf", "flap", "flip", "puff", "flip"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Complete Top Row Lesson 2",
            "topic": "Top Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Advance your skills on the top row.",
            "keys": "q w f p u g l y",
            "words": [
                "whip", "quilling", "gulling", "fluff", "puffball", "whippoorwill", "flipping", 
                "flipflop", "puffiest", "gullies", "fluffier", "whiplash", "flipflops", "puffing", 
                "gluing", "fluffiest", "quipping", "glaring", "luggage", "glaring", "flipping", 
                "whipping", "gullied", "flipper", "glaring", "puffing", "glaring", "flipflops", 
                "puffiest", "fluffed", "flipcharts", "quillings", "glaring", "whipping", "fluffiest"
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
            "description": "Learn the basics of the bottom row left four keys.",
            "keys": "z x c v",
            "words": [
                "vex", "czar", "vac", "vex", "cave", "vex", "czar", "vac", "vex", "czar", 
                "vac", "vex", "cave", "vex", "czar", "vac", "cave", "vex", "vac", "vex", 
                "czar", "vac", "vex", "vac", "cave", "czar", "vex", "vex", "cave", "czar", 
                "vac", "vex", "vac", "vex", "czar", "vac"
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
            "description": "Practice the bottom row left four keys with slightly longer words.",
            "keys": "z x c v",
            "words": [
                "vacuum", "vexing", "caving", "vacated", "vaccine", "czarist", "caverns", 
                "vaccines", "vacancies", "excavation", "vexation", "vacant", "excavate", 
                "vaccine", "vexing", "czarist", "vacuum", "vexation", "caverns", "vaccine", 
                "vacant", "vexes", "czarists", "vacated", "vaccines", "excavate", "vexes", 
                "excavating", "vaccine", "vexation", "vacancies", "vaccine", "cavities", 
                "vacant", "vexing", "czarist"
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
            "description": "Master the bottom row left four keys with a variety of words.",
            "keys": "z x c v",
            "words": [
                "vaccinate", "excavated", "vexing", "czarist", "vaccination", "vexation", 
                "vaccine", "vacancies", "excavation", "vexations", "czarists", "vaccinates", 
                "vacation", "excavate", "vaccine", "vexes", "vaccine", "excavating", "vexed", 
                "vacations", "vaccine", "czarists", "excavator", "vexed", "vaccinating", 
                "vexations", "vaccine", "excavations", "czarists", "vexing", "vacationing", 
                "excavators", "vaccinations", "vaccination", "vexing"
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
            "description": "Learn the basics of the bottom row right four keys.",
            "keys": "b n m ,",
            "words": [
                "ban", "nab", "man", "bam", "nab", "ban", "man", "nab", "bam", "man", 
                "ban", "nab", "man", "bam", "nab", "ban", "man", "nab", "bam", "nab", 
                "man", "ban", "nab", "man", "bam", "nab", "ban", "nab", "man", "bam", 
                "ban", "nab", "man", "bam", "nab"
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
            "description": "Practice the bottom row right four keys with slightly longer words.",
            "keys": "b n m ,",
            "words": [
                "banana", "manner", "banned", "banner", "manners", "nabbed", "manned", 
                "mannerism", "bananas", "banter", "nabber", "mannish", "manning", 
                "banning", "nabbing", "manners", "banishment", "mannered", "banished", 
                "nabbers", "banners", "mannerisms", "bantered", "manning", "banned", 
                "manning", "bananas", "banning", "nabbing", "mannish", "bannered", 
                "mannerless", "bantered", "nabber", "manned"
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
            "description": "Master the bottom row right four keys with a variety of words.",
            "keys": "b n m ,",
            "words": [
                "banishment", "bannermen", "mannerism", "mannered", "bannister", "banished", 
                "mannish", "banishment", "nabbing", "bantering", "nabber", "mannish", 
                "banisters", "mannerisms", "bananas", "banterers", "manning", "bannered", 
                "banquet", "mannerless", "manning", "nabber", "mannish", "banishing", 
                "mannerless", "banqueting", "nabbers", "mannish", "banishing", "manners", 
                "banner", "bantering", "banisters", "bantering", "manning"
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
            "description": "Learn the basics of the bottom row middle four keys.",
            "keys": "x c v b",
            "words": [
                "vex", "cab", "vac", "vex", "cab", "vac", "vex", "cab", "vac", "vex", 
                "cab", "vac", "vex", "cab", "vac", "vex", "cab", "vac", "vex", "cab", 
                "vac", "vex", "cab", "vac", "vex", "cab", "vac", "vex", "cab", "vac", 
                "vex", "cab", "vac", "vex", "cab"
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
            "description": "Practice the bottom row middle four keys with slightly longer words.",
            "keys": "x c v b",
            "words": [
                "vexing", "cabinet", "vaccines", "excavator", "vaccine", "cab", "excavation", 
                "vexing", "cabinet", "vexation", "cabinet", "vaccination", "vaccine", 
                "vexation", "cavities", "vaccine", "vacation", "excavate", "cab", "vaccine", 
                "vexation", "cabinet", "vaccine", "excavation", "vexes", "cabinetry", 
                "vaccines", "excavate", "vaccine", "vexing", "cab", "vaccines", 
                "vaccine", "cabinetry", "excavator"
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
            "description": "Master the bottom row middle four keys with a variety of words.",
            "keys": "x c v b",
            "words": [
                "vaccination", "excavated", "vexing", "cabinet", "vaccination", "vexation", 
                "cavern", "vaccine", "excavation", "vexations", "cabinetry", "vaccines", 
                "vacation", "excavate", "vaccine", "vexing", "vaccine", "cabinetry", 
                "vexations", "vacation", "vaccine", "vaccines", "excavations", "vexing", 
                "cabinetry", "vaccinations", "excavators", "vaccine", "vexation", "cab", 
                "vaccinations", "vaccine", "vexation", "caverns"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Bottom Row - Whole Row (Colemak)
        {
            "title": "Complete Bottom Row Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the bottom row.",
            "keys": "z x c v b n m ,",
            "words": [
                "ban", "vac", "man", "cab", "bam", "nab", "vex", "czar", "ban", "vac", 
                "nab", "man", "bam", "vac", "cab", "vex", "ban", "vac", "nab", "vex", 
                "czar", "vac", "ban", "vex", "man", "czar", "vac", "ban", "vac", "man", 
                "cab", "vex", "vac", "ban", "czar", "man"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Complete Bottom Row Lesson 2",
            "topic": "Bottom Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Advance your skills on the bottom row.",
            "keys": "z x c v b n m ,",
            "words": [
                "bananas", "vaccines", "mannerisms", "cabinet", "banner", "nabbing", "vaccination", 
                "czarist", "banishing", "vacation", "manning", "bannered", "czarists", 
                "mannerism", "vaccine", "cabinetry", "nabbing", "vexation", "vaccinating", 
                "manners", "vaccinated", "nabbing", "bannered", "vaccinating", "vacationing", 
                "cabinet", "nabbing", "banishing", "czarist", "mannish", "vexations", 
                "vaccination", "cabinetry", "mannered", "bantered"
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
