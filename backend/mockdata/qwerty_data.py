from .models import db, Lesson
from datetime import datetime
from run import app

def add_qwerty_top_row_lessons():
    qwerty_lessons = [
        # Top Row - Left Four Keys (QWERTY)
        {
            "title": "Top Row Left Four Keys Lesson 1",
            "topic": "Top Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the top row left four keys.",
            "keys": "q w e r",
            "words": [
                "were", "we", "rew", "ewer", "were", "wee", "we", "ere", "wre", "rew", 
                "ewer", "weer", "wore", "were", "were", "rew", "wee", "rew", "wore", "ree", 
                "rew", "wee", "wore", "were", "wore", "weer", "rew", "weer", "we", "were", 
                "ere", "wee", "wore", "ere", "wore"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Left Four Keys Lesson 2",
            "topic": "Top Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Practice the top row left four keys with slightly longer words.",
            "keys": "q w e r",
            "words": [
                "rewire", "ewer", "rewore", "wrest", "rewear", "rewore", "wrote", "reword", 
                "rewired", "rework", "rewore", "rework", "reward", "rewrote", "reworked", 
                "rewiring", "rewear", "reword", "wrestle", "reword", "rewear", "wrote", 
                "rewound", "rewired", "rewrote", "reworked", "reworking", "rewound", "rewind", 
                "rewiring", "rewritten", "reworded", "rewriting", "wrest", "rewriting"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Left Four Keys Lesson 3",
            "topic": "Top Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Master the top row left four keys with a variety of words.",
            "keys": "q w e r",
            "words": [
                "rewriting", "rewind", "rewiring", "rewritten", "reworded", "rework", "wrestled", 
                "rewire", "rewiring", "rewound", "rewriting", "rewording", "rewound", "rewarded", 
                "reworking", "rewritten", "reworked", "wrestler", "rewore", "rewording", 
                "reworded", "rewound", "rewriting", "reworking", "rewarded", "rewind", 
                "rewriting", "rework", "rewind", "rewired", "rewound", "rewriting", 
                "rewriting", "rewear", "rewound"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Top Row - Right Four Keys (QWERTY)
        {
            "title": "Top Row Right Four Keys Lesson 1",
            "topic": "Top Row",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the top row right four keys.",
            "keys": "u i o p",
            "words": [
                "up", "pop", "pip", "pit", "pot", "put", "tip", "top", "pot", "pit", 
                "pop", "put", "top", "tip", "pit", "top", "put", "pip", "top", "tip", 
                "up", "pop", "pit", "top", "put", "pop", "top", "tip", "pop", "pit", 
                "put", "pop", "top", "tip", "pit"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Right Four Keys Lesson 2",
            "topic": "Top Row",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Practice the top row right four keys with slightly longer words.",
            "keys": "u i o p",
            "words": [
                "popup", "piping", "tiptop", "pipped", "piping", "popped", "tipped", "tipping", 
                "popping", "output", "popper", "tipping", "popping", "outputs", "tipping", 
                "popped", "topped", "tiptop", "poppet", "toppers", "popping", "tipping", 
                "tipped", "popped", "tipper", "poppers", "poppet", "topping", "outputs", 
                "toppers", "tipping", "tipped", "popping", "output", "popped"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Right Four Keys Lesson 3",
            "topic": "Top Row",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Master the top row right four keys with a variety of words.",
            "keys": "u i o p",
            "words": [
                "outputting", "toppings", "tipping", "populated", "popper", "popping", "tiptop", 
                "popping", "outputs", "toppers", "tipper", "popping", "outputting", "poppet", 
                "popping", "topping", "popping", "outputted", "popping", "outputting", "popper", 
                "topping", "tiptop", "poppet", "poppers", "topping", "popping", "outputs", 
                "tipper", "outputting", "topped", "tipping", "popping", "outputs", 
                "toppings"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Top Row - Middle Four Keys (QWERTY)
        {
            "title": "Top Row Middle Four Keys Lesson 1",
            "topic": "Top Row",
            "subtopic": "Middle",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the top row middle four keys.",
            "keys": "e r u i",
            "words": [
                "ruin", "rue", "tier", "tire", "true", "truer", "user", "ire", "rite", "rue", 
                "tier", "tire", "true", "rite", "truer", "rue", "ire", "user", "true", "rue", 
                "rite", "user", "tier", "tire", "truer", "rue", "ruin", "tier", "rite", "true", 
                "rue", "user", "tier", "rite", "tire"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Middle Four Keys Lesson 2",
            "topic": "Top Row",
            "subtopic": "Middle",
            "keyboard_type": "qwerty",
            "description": "Practice the top row middle four keys with slightly longer words.",
            "keys": "e r u i",
            "words": [
                "retire", "ruler", "retiree", "urine", "ruler", "rerun", "retire", "ruler", 
                "rueful", "retirees", "ruiner", "tireless", "retired", "rerun", "rulers", 
                "retiring", "reruns", "retired", "ruiners", "tirelessly", "truer", "retired", 
                "ruining", "tireless", "rulers", "ruler", "retiring", "ruined", "retiree", 
                "tiredness", "retiring", "rulers", "ruiners", "retirement", "rulers"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Middle Four Keys Lesson 3",
            "topic": "Top Row",
            "subtopic": "Middle",
            "keyboard_type": "qwerty",
            "description": "Master the top row middle four keys with a variety of words.",
            "keys": "e r u i",
            "words": [
                "retirement", "retirees", "ruiners", "tireless", "ruler", "rulers", "ruining", 
                "retirement", "retire", "ruined", "rulers", "retiring", "ruler", "ruiner", 
                "rulers", "retiring", "retire", "retiree", "ruining", "rueful", "tiredness", 
                "rulers", "tirelessly", "ruining", "ruler", "rerunning", "retiree", "ruefully", 
                "retiring", "ruining", "retirement", "rulers", "retiring", "retire", "rulers"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Top Row - Whole Row (QWERTY)
        {
            "title": "Complete Top Row Lesson 1",
            "topic": "Top Row",
            "subtopic": "Complete",
            "keyboard_type": "qwerty",
            "description": "Master all keys on the top row.",
            "keys": "q w e r u i o p",
            "words": [
                "quite", "power", "quote", "tire", "route", "topic", "truer", "quieter", 
                "quilt", "queue", "quiet", "router", "power", "quote", "quiet", "quieter", 
                "query", "quiet", "quote", "route", "power", "quiet", "truer", "quiet", 
                "quote", "power", "truer", "topic", "route", "quite", "quieter", "quote", 
                "topic", "router", "power"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Complete Top Row Lesson 2",
            "topic": "Top Row",
            "subtopic": "Complete",
            "keyboard_type": "qwerty",
            "description": "Advance your skills on the top row.",
            "keys": "q w e r u i o p",
            "words": [
                "quiet", "requote", "queries", "retire", "trouper", "requote", "requirer", 
                "require", "router", "trouper", "retired", "require", "queries", "require", 
                "querying", "requoted", "troupe", "requiring", "requoted", "requiring", 
                "queries", "quieted", "requiring", "quieting", "retired", "require", "queries", 
                "requiring", "trouper", "queries", "require", "querying", "requirement", 
                "requiring", "quieted"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Left Four Keys Lesson 1",
            "topic": "Home Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the home row left four keys.",
            "keys": "a s d f",
            "words": [
                "sad", "fad", "dad", "ads", "saf", "fas", "afs", "add", "ass", "sad", 
                "afs", "saf", "fas", "add", "sad", "fad", "dad", "ads", "ass", "saf", 
                "fas", "ads", "fad", "dad", "sad", "afs", "saf", "fas", "add", "sad", 
                "fad", "dad", "sad", "ads", "afs"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Left Four Keys Lesson 2",
            "topic": "Home Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Practice the home row left four keys with slightly longer words.",
            "keys": "a s d f",
            "words": [
                "fads", "sads", "adds", "dads", "fast", "sift", "saft", "fads", "dads", "sadly", 
                "fad", "sad", "fasts", "daft", "sadly", "safts", "dads", "fats", "daft", "adds", 
                "sad", "saft", "fads", "fads", "sad", "sift", "dads", "fasts", "sadly", "adds", 
                "dafts", "adds", "sad", "fads", "sifts"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Left Four Keys Lesson 3",
            "topic": "Home Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Master the home row left four keys with a variety of words.",
            "keys": "a s d f",
            "words": [
                "fads", "fast", "sadly", "daft", "adds", "sifts", "fads", "sads", "adds", "dads", 
                "sad", "saft", "fads", "dads", "fad", "sift", "fasts", "dafts", "adds", "sadly", 
                "sifted", "fads", "adds", "dads", "fast", "fats", "sadly", "adds", "dafts", "sifted", 
                "adds", "fads", "sads", "fats", "dafts"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Home Row - Right Four Keys (QWERTY)
        {
            "title": "Home Row Right Four Keys Lesson 1",
            "topic": "Home Row",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the home row right four keys.",
            "keys": "j k l ;",
            "words": [
                "jak", "jail", "kill", "lil", "lik", "jill", "lil", "ilk", "kill", "ilk", 
                "kill", "jill", "lilk", "kilk", "jill", "kill", "ilk", "kill", "jill", "kilk", 
                "lil", "lilk", "kill", "kill", "lilk", "kill", "ilk", "kill", "jill", "kilk", 
                "lilk", "kilk", "jill", "kill", "ilk"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Right Four Keys Lesson 2",
            "topic": "Home Row",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Practice the home row right four keys with slightly longer words.",
            "keys": "j k l ;",
            "words": [
                "kills", "jills", "likes", "kills", "jails", "kills", "jills", "likes", 
                "kill", "jill", "kills", "jails", "killed", "likes", "killed", "lilk", 
                "jilled", "kills", "liked", "killed", "likes", "jills", "killed", "killing", 
                "kills", "kills", "jilled", "killing", "liked", "kills", "lilk", "likes", 
                "jilled", "kills", "killed"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Right Four Keys Lesson 3",
            "topic": "Home Row",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Master the home row right four keys with a variety of words.",
            "keys": "j k l ;",
            "words": [
                "kills", "jills", "likes", "killed", "likes", "jilled", "kills", "killed", 
                "liked", "kills", "likes", "jilled", "killed", "kills", "jilled", "liked", 
                "kills", "jilled", "kills", "likes", "killed", "killing", "jills", "kills", 
                "killing", "killed", "likes", "kills", "killed", "jills", "liked", "killing", 
                "kills", "kills", "liked"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Home Row - Middle Four Keys (QWERTY)
        {
            "title": "Home Row Middle Four Keys Lesson 1",
            "topic": "Home Row",
            "subtopic": "Middle",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the home row middle four keys.",
            "keys": "s d f j",
            "words": [
                "sad", "fad", "jads", "fads", "ads", "jads", "saf", "fads", "fads", "jads", 
                "sad", "fad", "fads", "jads", "sad", "fad", "fads", "sad", "fads", "fad", 
                "jads", "sad", "fad", "fads", "sad", "fad", "fads", "jads", "sad", "fad", 
                "fads", "sad", "fads", "fad", "sad"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Middle Four Keys Lesson 2",
            "topic": "Home Row",
            "subtopic": "Middle",
            "keyboard_type": "qwerty",
            "description": "Practice the home row middle four keys with slightly longer words.",
            "keys": "s d f j",
            "words": [
                "fads", "jads", "sadly", "fad", "adds", "sadly", "adds", "sads", "jads", "fadly", 
                "sads", "fad", "adds", "sadly", "fads", "jads", "sads", "fadly", "adds", "sadly", 
                "fads", "sadly", "fad", "fads", "sad", "adds", "jads", "fads", "fadly", "sads", 
                "sadly", "fads", "fadly", "jads", "adds", "sads"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Home Row Middle Four Keys Lesson 3",
            "topic": "Home Row",
            "subtopic": "Middle",
            "keyboard_type": "qwerty",
            "description": "Master the home row middle four keys with a variety of words.",
            "keys": "s d f j",
            "words": [
                "fads", "sadly", "adds", "fads", "jads", "sadly", "fads", "sadly", "jads", "fads", 
                "sadly", "adds", "fadly", "sads", "jads", "sadly", "fads", "sadly", "adds", "fadly", 
                "fads", "sadly", "jads", "fads", "adds", "fadly", "sadly", "fads", "jads", "sadly", 
                "fads", "fadly", "sadly", "jads", "sadly"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Home Row - Whole Row (QWERTY)
        {
            "title": "Complete Home Row Lesson 1",
            "topic": "Home Row",
            "subtopic": "Complete",
            "keyboard_type": "qwerty",
            "description": "Master all keys on the home row.",
            "keys": "a s d f j k l ;",
            "words": [
                "sad", "fad", "dad", "add", "ask", "fell", "fail", "sad", "jill", "flask", 
                "lad", "lad", "fall", "kill", "fad", "sad", "fail", "fall", "add", "sail", 
                "lass", "fad", "add", "lads", "fall", "jill", "kill", "sill", "fail", "sail", 
                "lad", "lads", "sad", "fad", "fail"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Complete Home Row Lesson 2",
            "topic": "Home Row",
            "subtopic": "Complete",
            "keyboard_type": "qwerty",
            "description": "Advance your skills on the home row.",
            "keys": "a s d f j k l ;",
            "words": [
                "fails", "fads", "jills", "dads", "lads", "asks", "flask", "sadly", "adds", 
                "killed", "jills", "lads", "sadly", "fads", "adds", "fails", "killed", "fads", 
                "jills", "lads", "fails", "lads", "kills", "adds", "fads", "jills", "lads", 
                "fails", "adds", "sadly", "flask", "killed", "fails", "asks", "adds", "lads"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Left Four Keys Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the bottom row left four keys.",
            "keys": "z x c v",
            "words": [
                "vac", "vex", "czar", "cave", "vex", "vac", "cav", "czar", "vex", "vac", 
                "vex", "cave", "vex", "vac", "czar", "vex", "cav", "vex", "cave", "czar", 
                "vex", "vac", "cave", "vex", "cave", "czar", "vex", "vac", "cave", "vex", 
                "czar", "vac", "vex", "cave", "vac"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Left Four Keys Lesson 2",
            "topic": "Bottom Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Practice the bottom row left four keys with slightly longer words.",
            "keys": "z x c v",
            "words": [
                "vacuum", "vexing", "caving", "czars", "vaccines", "vacated", "vaccine", 
                "vexed", "vacated", "vaccine", "czarist", "caving", "vacancies", "vexation", 
                "vaccines", "czars", "cavern", "vacated", "excavate", "vacancies", "vacated", 
                "vaccine", "vexes", "czarist", "vaccine", "vacancies", "vexation", "excavated", 
                "vexing", "vacating", "vaccine", "caving", "vexed", "czarist", "excavator"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Left Four Keys Lesson 3",
            "topic": "Bottom Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Master the bottom row left four keys with a variety of words.",
            "keys": "z x c v",
            "words": [
                "vaccine", "czarist", "vexation", "excavate", "vaccinated", "cavern", 
                "vexing", "czarists", "vaccination", "vacancies", "vaccine", "vexation", 
                "excavating", "czarist", "vaccinating", "vaccine", "vacating", "vaccine", 
                "excavated", "czarists", "vexation", "vacation", "vaccine", "excavator", 
                "vaccines", "czarists", "excavated", "vexations", "vaccine", "vacationing", 
                "czarist", "excavations", "vaccine", "vexed", "vaccines"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Bottom Row - Right Four Keys (QWERTY)
        {
            "title": "Bottom Row Right Four Keys Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the bottom row right four keys.",
            "keys": "b n m ,",
            "words": [
                "ban", "man", "nab", "bam", "ban", "nab", "man", "nab", "ban", "bam", 
                "nab", "man", "ban", "bam", "man", "ban", "nab", "man", "nab", "bam", 
                "ban", "man", "nab", "bam", "ban", "nab", "man", "bam", "ban", "nab", 
                "man", "bam", "man", "ban", "nab"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Right Four Keys Lesson 2",
            "topic": "Bottom Row",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Practice the bottom row right four keys with slightly longer words.",
            "keys": "b n m ,",
            "words": [
                "bananas", "manner", "nabbed", "manners", "banner", "banter", "manned", 
                "nabber", "manning", "banners", "manners", "nabbed", "mannish", "nabber", 
                "banning", "nabbing", "manned", "manners", "manning", "bananas", "banner", 
                "banter", "manning", "nabber", "mannered", "mannish", "nabbing", "bananas", 
                "manners", "banners", "nabbed", "manning", "bannered", "mannish", "nabber"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Right Four Keys Lesson 3",
            "topic": "Bottom Row",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Master the bottom row right four keys with a variety of words.",
            "keys": "b n m ,",
            "words": [
                "banishment", "mannish", "mannerism", "bannered", "nabber", "banning", 
                "manning", "manners", "nabbed", "bannered", "bananas", "mannish", "nabbing", 
                "mannerless", "banished", "mannerism", "banishing", "nabber", "mannish", 
                "banning", "mannerisms", "nabbers", "bantering", "mannerless", "banishment", 
                "nabbed", "banners", "mannerisms", "mannish", "mannerless", "banishment", 
                "banning", "nabbers", "manners", "mannerism"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Bottom Row - Middle Four Keys (QWERTY)
        {
            "title": "Bottom Row Middle Four Keys Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Middle",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the bottom row middle four keys.",
            "keys": "c v b n",
            "words": [
                "ban", "cab", "nab", "van", "ban", "cab", "van", "nab", "ban", "cab", 
                "van", "ban", "cab", "van", "nab", "ban", "cab", "nab", "van", "ban", 
                "cab", "van", "nab", "ban", "cab", "van", "ban", "cab", "nab", "van", 
                "cab", "nab", "ban", "van", "cab"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Middle Four Keys Lesson 2",
            "topic": "Bottom Row",
            "subtopic": "Middle",
            "keyboard_type": "qwerty",
            "description": "Practice the bottom row middle four keys with slightly longer words.",
            "keys": "c v b n",
            "words": [
                "vacant", "banner", "cabins", "vanish", "cabinet", "nabbed", "banned", 
                "cabinetry", "vacancies", "vanities", "banning", "vacated", "banners", 
                "cabinet", "vanish", "banner", "vanishing", "vacated", "cabbage", "vanities", 
                "cabinet", "vacating", "banners", "cabinetry", "vacant", "vanishing", 
                "banning", "vanquish", "vacancies", "cabin", "vacated", "bannered", 
                "cabinet", "banning", "vanities"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Bottom Row Middle Four Keys Lesson 3",
            "topic": "Bottom Row",
            "subtopic": "Middle",
            "keyboard_type": "qwerty",
            "description": "Master the bottom row middle four keys with a variety of words.",
            "keys": "c v b n",
            "words": [
                "cabinetry", "vanquish", "banished", "cabins", "vanities", "vacating", 
                "banners", "cabinet", "vanquished", "bannered", "cabbage", "vacancies", 
                "vanquishing", "banning", "vacated", "vanished", "cabinetry", "vacant", 
                "vanities", "cabinet", "vacations", "bannered", "vanishing", "vacancy", 
                "banished", "cabinet", "vanquish", "banning", "vacancies", "cabbage", 
                "vacating", "vanities", "vacant", "banners", "vanishing"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Bottom Row - Whole Row (QWERTY)
        {
            "title": "Complete Bottom Row Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Complete",
            "keyboard_type": "qwerty",
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
            "keyboard_type": "qwerty",
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

    for lesson in qwerty_lessons:
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
        add_qwerty_top_row_lessons()
        print("QWERTY lessons added to the Lessons table.")
