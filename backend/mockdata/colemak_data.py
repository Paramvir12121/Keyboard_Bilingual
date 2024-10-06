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
