from models import db, Lesson
from datetime import datetime
from run import app

def add_qwerty_lessons():
    qwerty_lessons = [
        # Home Row - Left Four Keys (QWERTY)
        {
            "title": "Home Row Left Four Keys Lesson 1",
            "topic": "Home Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the home row left four keys.",
            "keys": "a s d f",
            "words": [
                "safe", "fast", "sad", "fade", "daft", "adds", "said", "fads", "staff", "afraid",
                "draft", "admit", "safes", "drafts", "fairs", "rafts", "afar", "facts", "daisy", "fist",
                "drift", "fads", "stiff", "afars", "rafts", "affair", "fails", "darts", "affix", "stiff",
                "fairs", "daffs", "rafts", "afraid", "daft", "stair", "fads", "draft", "daisy", "fats"
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
                "staff", "affix", "draft", "sadly", "fairs", "daft", "admit", "rafts", "daisy", "affair",
                "facts", "fails", "sift", "afraid", "drafts", "drift", "stiff", "draft", "dafts", "afars",
                "daisy", "staff", "stair", "fairs", "affix", "rafts", "sift", "fads", "afraid", "fist",
                "darts", "affair", "fists", "fails", "fast", "daisy", "drift", "sad", "fairs", "admit"
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
                "affair", "daft", "staff", "draft", "afars", "sift", "fails", "fist", "admit", "daisy",
                "fads", "stair", "rafts", "affix", "fairs", "sadly", "drift", "fast", "draft", "fails",
                "sift", "afraid", "facts", "daisy", "afars", "admit", "drafts", "dafts", "affair", "staff",
                "rafts", "affix", "fist", "darts", "drift", "sadly", "daft", "fast", "sift", "fairs"
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
                "kill", "lick", "lack", "lake", "kale", "jail", "jill", "jack", "like", "lull",
                "joke", "loll", "lilt", "jolt", "kill", "kick", "jell", "jilt", "lick", "lack",
                "kilo", "lila", "jolt", "kill", "joke", "lack", "lull", "like", "jill", "jail",
                "kale", "lick", "loll", "kill", "lack", "lilt", "jack", "jolt", "kill", "lake"
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
                "jacks", "kills", "locks", "kilos", "licks", "lulls", "likes", "jokes", "kilns", "lakes",
                "lolls", "jocks", "kills", "licks", "likes", "locks", "kilns", "jacks", "jokes", "lakes",
                "jocks", "lulls", "kilns", "kills", "licks", "locks", "lakes", "likes", "kilns", "lolls",
                "kilos", "lakes", "jills", "jocks", "locks", "licks", "likes", "kilns", "lakes", "lulls"
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
                "kills", "licks", "jocks", "lakes", "locks", "likes", "lulls", "kilns", "lolls", "jacks",
                "kills", "licks", "lakes", "likes", "jocks", "locks", "lulls", "kilns", "jokes", "lolls",
                "kills", "licks", "lakes", "locks", "likes", "kilns", "jocks", "lakes", "lulls", "jills",
                "locks", "licks", "likes", "kilns", "lakes", "lolls", "kilos", "jocks", "licks", "jacks"
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
                "sad", "fads", "jars", "adds", "fist", "fads", "fast", "jail", "fads", "sadly",
                "staff", "jilt", "fast", "adds", "fist", "fads", "stiff", "jars", "jams", "fast",
                "adds", "fads", "jilt", "fist", "stiff", "jars", "adds", "fads", "fast", "sadly",
                "fads", "staff", "jams", "adds", "jilt", "jars", "sad", "adds", "fast", "fist"
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
                "fades", "jails", "staff", "jades", "draft", "stiff", "admit", "fairs", "drift", "stiff",
                "affix", "jaded", "fists", "safes", "afars", "draft", "fails", "fairs", "sadly", "jails",
                "stair", "fists", "daisy", "rafts", "fails", "admit", "drafts", "drift", "fairs", "jaded",
                "stiff", "daffs", "affix", "fists", "draft", "safes", "fails", "fists", "jails", "fists"
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
                "draft", "stiff", "fades", "fairs", "jails", "fails", "rafts", "jades", "drift", "affix",
                "fists", "safes", "afars", "draft", "fails", "sadly", "fairs", "fists", "jails", "stiff",
                "daffs", "fists", "drift", "drafts", "jails", "fails", "stiff", "fists", "daisy", "rafts",
                "affix", "fails", "fairs", "fists", "fades", "jaded", "fails", "affix", "stiff", "rafts"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Home Row - Complete (QWERTY)
        {
            "title": "Complete Home Row Lesson 1",
            "topic": "Home Row",
            "subtopic": "Complete",
            "keyboard_type": "qwerty",
            "description": "Master all keys on the home row.",
            "keys": "a s d f j k l ;",
            "words": [
                "jacks", "sadly", "fists", "staff", "dafts", "kilos", "stiff", "draft", "licks", "fairs",
                "drift", "locks", "drafts", "fails", "afars", "rafts", "sadly", "jails", "fades", "fist",
                "kills", "affix", "facts", "jocks", "lakes", "rafts", "fairs", "lolls", "draft", "daff",
                "fails", "fades", "stiff", "drift", "kilns", "fists", "fails", "locks", "daffs", "licks"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Top Row Left Four Keys Lesson 1",
            "topic": "Top Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the top row left four keys.",
            "keys": "q w e r",
            "words": [
                "wear", "were", "we", "err", "raw", "ear", "war", "ewer", "rear", "rare", 
                "rew", "wee", "were", "ear", "rear", "wear", "err", "war", "rare", "ewer", 
                "we", "wear", "rear", "ewer", "raw", "were", "rare", "ear", "war", "rear", 
                "wee", "wear", "we", "rare", "rear", "ear", "wear", "raw", "err", "war"
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
                "rawer", "weary", "rewar", "ewer", "rawer", "wear", "rewear", "were", "rear", "we",
                "warr", "wear", "ear", "rew", "wear", "ewer", "weary", "war", "reear", "wore",
                "err", "ware", "wear", "we", "rear", "rere", "were", "wear", "wee", "rawer",
                "wear", "wore", "ware", "wear", "rear", "were", "we", "rew", "wear", "rewar"
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
                "wearer", "rewear", "rawer", "we", "ear", "were", "rew", "ear", "rare", "rear", 
                "war", "wear", "ear", "ewer", "wore", "rewar", "rear", "rare", "were", "err", 
                "weary", "rear", "raw", "wear", "wee", "wore", "war", "ear", "wear", "rewear",
                "rawer", "wearer", "rear", "were", "ear", "we", "war", "rare", "rewar", "wear"
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
                "pop", "pip", "tip", "pot", "pit", "top", "opt", "pop", "pit", "tip", 
                "pip", "pot", "top", "pit", "pip", "opt", "tip", "pop", "pot", "pip", 
                "pit", "tip", "top", "pot", "opt", "pop", "pit", "tip", "opt", "pip",
                "pot", "tip", "pop", "pit", "pip", "opt", "top", "tip", "pot", "pop"
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
                "potion", "pinto", "point", "input", "topic", "piton", "optic", "pinto", "topi", "input",
                "point", "popit", "piton", "optin", "potion", "input", "topic", "optin", "point", "topi",
                "optic", "piton", "pinto", "optin", "potion", "input", "point", "piton", "topic", "pinto",
                "optic", "point", "topi", "optin", "input", "topic", "piton", "potion", "input", "point"
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
                "optics", "topics", "pitons", "inputs", "potion", "output", "potions", "inputs", "tiptop", "option",
                "pintos", "options", "topics", "point", "outputs", "potions", "optics", "potion", "points", "topoi",
                "output", "optics", "options", "pitons", "points", "optics", "options", "inputs", "output", "topic",
                "potion", "topics", "pitons", "pintos", "points", "options", "inputs", "tiptop", "output", "points"
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
                "tier", "true", "tire", "rite", "ruin", "rue", "tire", "ruin", "tier", "tire", 
                "true", "rue", "tier", "tire", "true", "rite", "ruin", "tier", "true", "rue", 
                "rite", "tire", "tier", "true", "tire", "rite", "rue", "tier", "true", "ruin", 
                "tier", "rite", "true", "tire", "tier", "rue", "rite", "ruin", "tire", "true"
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
                "retire", "irritate", "retiree", "routine", "ruiner", "retiree", "retire", "irritate", "retire", "ruiner",
                "ruiner", "irritate", "retire", "retiree", "retiree", "routine", "routine", "irritate", "retire", "retiree",
                "irritate", "retire", "retiree", "routine", "ruiner", "retire", "irritate", "retiree", "ruiner", "retire",
                "routine", "ruiner", "retiree", "irritate", "routine", "retire", "retiree", "irritate", "ruiner", "retire"
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
                "retired", "routine", "irritate", "retiree", "ruiners", "retired", "retiree", "retire", "routine", "retiree",
                "irritates", "retiree", "retired", "routine", "ruiners", "routine", "retired", "retire", "irritates", "retiree",
                "ruiners", "routine", "retired", "irritates", "retire", "ruiners", "retiree", "irritates", "retired", "retire",
                "routine", "retired", "ruiners", "retire", "irritates", "retired", "routine", "ruiners", "retire", "retired"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Top Row - Complete (QWERTY)
        {
            "title": "Complete Top Row Lesson 1",
            "topic": "Top Row",
            "subtopic": "Complete",
            "keyboard_type": "qwerty",
            "description": "Master all keys on the top row.",
            "keys": "q w e r u i o p",
            "words": [
                "queue", "repair", "point", "outer", "quiet", "topic", "quite", "queer", "write", "upper",
                "pique", "quote", "quoit", "route", "power", "input", "troupe", "quirk", "equip", "outer",
                "prove", "queue", "print", "quiet", "quote", "pique", "quite", "upper", "quip", "pique",
                "route", "quoit", "power", "equip", "write", "queue", "outer", "upper", "prove", "point"
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
                "vac", "vex", "cave", "vacs", "cave", "czar", "vex", "vacs", "caves", "vexes",
                "zinc", "exec", "vacs", "czar", "vex", "cave", "zinc", "vice", "vacs", "cave",
                "vex", "vices", "zinc", "czars", "exec", "vex", "zinc", "vacs", "vice", "exec",
                "vexes", "caves", "czar", "vex", "vacs", "vice", "vexes", "czar", "vacs", "zinc"
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
                "civic", "excit", "czars", "vices", "excit", "civic", "vexes", "czars", "execs", "civic",
                "vexes", "vices", "excite", "civic", "excit", "vexed", "czars", "excit", "vexes", "civic",
                "vexes", "czars", "vices", "vexed", "excit", "czars", "vices", "vexed", "excise", "vices",
                "civic", "excite", "vexes", "civic", "excit", "czars", "vices", "vexes", "excite", "vices"
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
                "excise", "civic", "vexed", "excite", "czars", "vexes", "execs", "civic", "czars", "excise",
                "vices", "excite", "vexes", "czars", "excise", "vexed", "civic", "vices", "excit", "czars",
                "vexes", "excise", "civic", "vexed", "execs", "vexes", "vices", "excite", "civic", "excit",
                "czars", "vices", "excise", "vexes", "civic", "execs", "czars", "excise", "vexes", "czars"
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
                "man", "ban", "nab", "bam", "men", "bean", "mean", "barn", "barn", "main",
                "name", "nab", "mend", "beam", "band", "bend", "man", "bam", "bend", "name",
                "nab", "mean", "main", "beam", "band", "mend", "barn", "nab", "bend", "mean",
                "bean", "name", "main", "man", "mend", "bam", "nab", "man", "bend", "beam"
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
            "keyboard_type": "qwerty",
            "description": "Master the bottom row right four keys with a variety of words.",
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

        # Bottom Row - Middle Four Keys (QWERTY)
        {
            "title": "Bottom Row Middle Four Keys Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Middle",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the bottom row middle four keys.",
            "keys": "x c v b",
            "words": [
                "cab", "vac", "vibe", "vice", "vibe", "cab", "cave", "vac", "bice", "cab",
                "vibe", "vice", "vibe", "cab", "vice", "bice", "vibe", "vac", "vibe", "cab",
                "cave", "vibe", "cab", "vice", "cave", "cab", "vibe", "vice", "vibe", "cab",
                "vibe", "vac", "cab", "vice", "cave", "vibe", "cab", "vibe", "vice", "cab"
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
            "keys": "x c v b",
            "words": [
                "vocab", "vacuum", "vibe", "bice", "vocab", "vacuum", "cave", "bice", "vocab", "vacuum",
                "vibe", "cave", "vacuum", "vibe", "bice", "vocab", "vibe", "cave", "vocab", "vacuum",
                "vibe", "cave", "vocab", "vacuum", "vibe", "cave", "bice", "vocab", "vacuum", "vibe",
                "vocab", "cave", "vibe", "vacuum", "bice", "vocab", "vacuum", "vibe", "cave", "vocab"
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
            "keys": "x c v b",
            "words": [
                "vacuum", "vocab", "vibe", "bice", "vocab", "vacuum", "vibe", "bice", "vocab", "cave",
                "vibe", "vacuum", "vocab", "bice", "vocab", "vacuum", "vibe", "cave", "bice", "vocab",
                "vacuum", "vibe", "vocab", "cave", "bice", "vacuum", "vocab", "bice", "vibe", "vocab",
                "vacuum", "vibe", "cave", "vocab", "bice", "vocab", "vacuum", "vibe", "cave", "vocab"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Bottom Row - Complete (QWERTY)
        {
            "title": "Complete Bottom Row Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Complete",
            "keyboard_type": "qwerty",
            "description": "Master all keys on the bottom row.",
            "keys": "z x c v b n m ,",
            "words": [
                "cab", "vac", "man", "nab", "bacon", "ban", "can", "barn", "mend", "main",
                "nab", "vex", "mean", "man", "cave", "band", "bend", "bean", "nab", "mend",
                "nab", "can", "main", "bacon", "band", "vac", "man", "bean", "can", "bend",
                "main", "nab", "vac", "nab", "mean", "man", "can", "mend", "main", "bacon"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
         # Number Keys (1-4)
        {
            "title": "Number Keys 1-4 Lesson 1",
            "topic": "Numbers",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the number keys 1 to 4.",
            "keys": "1 2 3 4",
            "words": [
                "123", "321", "124", "234", "341", "432", "213", "412", "134", "231",
                "3214", "1423", "3142", "4213", "2431", "3412", "1243", "2134", "4312", "3241",
                "1234", "2143", "4321", "1342", "2413", "3124", "1432", "4231", "3124", "1342",
                "1231", "4321", "1423", "3142", "2134", "3412", "2143", "1243", "2413", "3241"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Number Keys 1-4 Lesson 2",
            "topic": "Numbers",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Practice the number keys 1 to 4 with longer combinations.",
            "keys": "1 2 3 4",
            "words": [
                "4321", "1342", "2143", "1243", "1432", "3124", "4231", "3412", "1243", "3124",
                "4312", "2143", "3412", "4321", "1243", "1342", "3412", "1432", "2341", "3124",
                "2413", "2143", "4321", "1342", "2431", "3412", "4321", "1342", "1234", "2413",
                "1243", "2134", "3412", "4231", "1432", "1243", "2431", "2134", "4312", "3241"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Number Keys 1-4 Lesson 3",
            "topic": "Numbers",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Master the number keys 1 to 4 with complex combinations.",
            "keys": "1 2 3 4",
            "words": [
                "1342", "3412", "1243", "4321", "2134", "3412", "4321", "1234", "2143", "1432",
                "2341", "4312", "2134", "1234", "4321", "2413", "3412", "1342", "4321", "3124",
                "4231", "2134", "1342", "2413", "1243", "1432", "4321", "3412", "1243", "2134",
                "1342", "1234", "3412", "2143", "4312", "1243", "2431", "3412", "2134", "1342"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Number Keys (5-0)
        {
            "title": "Number Keys 5-0 Lesson 1",
            "topic": "Numbers",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the number keys 5 to 0.",
            "keys": "5 6 7 8 9 0",
            "words": [
                "567", "678", "890", "876", "980", "765", "098", "509", "670", "856",
                "768", "905", "678", "507", "690", "758", "896", "506", "670", "785",
                "876", "590", "987", "760", "890", "980", "670", "576", "690", "876",
                "098", "760", "587", "670", "890", "876", "960", "509", "785", "876"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Number Keys 5-0 Lesson 2",
            "topic": "Numbers",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Practice the number keys 5 to 0 with longer combinations.",
            "keys": "5 6 7 8 9 0",
            "words": [
                "8765", "5908", "5098", "6709", "8765", "7805", "6908", "7856", "9765", "9870",
                "8769", "9058", "6785", "6097", "5098", "7560", "9867", "5897", "9076", "7659",
                "5678", "9806", "7590", "8907", "9870", "5769", "8760", "9075", "6987", "8765",
                "6789", "5096", "9760", "8709", "5098", "7658", "9780", "6705", "8709", "9768"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Number Keys 5-0 Lesson 3",
            "topic": "Numbers",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Master the number keys 5 to 0 with complex combinations.",
            "keys": "5 6 7 8 9 0",
            "words": [
                "9807", "5678", "5096", "8765", "6798", "5769", "8760", "9075", "5678", "8907",
                "8709", "5098", "8765", "9076", "9867", "7590", "9780", "6705", "9870", "7658",
                "9806", "5097", "6785", "9876", "5098", "7609", "8709", "8765", "6789", "8760",
                "9870", "5097", "6785", "9876", "5098", "7609", "6785", "5097", "8709", "7659"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Symbol Keys (Shift + Number)
        {
            "title": "Symbol Keys 1-4 Lesson 1",
            "topic": "Symbols",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the symbol keys 1 to 4.",
            "keys": "! @ # $",
            "words": [
                "!@#", "#@!", "$#@", "#!!", "@##", "@!", "#$", "!$", "@!#", "$!@", 
                "!#@", "$#!", "@!$", "$#", "@$", "#$!", "!$@", "$#", "@!#", "#!@", "$!#",
                "!#", "#@", "$#", "!$", "@#", "!$", "#$", "$#", "@!#", "!#", "$#@", "!$#",
                "$@#", "@!#", "$#@", "#$", "@#", "!$", "@#", "#$@", "@!$", "!#", "$@!"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Symbol Keys 1-4 Lesson 2",
            "topic": "Symbols",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Practice the symbol keys 1 to 4 with longer combinations.",
            "keys": "! @ # $",
            "words": [
                "#@$!", "!#@", "$!@", "!##", "#@!", "$!#", "#@$", "!@$", "#!!", "$##",
                "@!!", "$#@", "@##", "#@!", "$!#", "!@#", "@$", "#!!", "!$#", "@!!", "#$!",
                "!$#", "$@#", "#@!", "!#$", "$!@", "@#!!", "#!$", "$#!", "!$@", "#@!", "$!@",
                "#$@", "$!#", "@#!", "!##", "@!$", "$@#", "#$@", "$!#", "@#$", "!@$"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Symbol Keys 1-4 Lesson 3",
            "topic": "Symbols",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Master the symbol keys 1 to 4 with complex combinations.",
            "keys": "! @ # $",
            "words": [
                "$!#", "!#@", "@#$", "!@#", "#!$", "!$@", "@!#", "$#@", "#!!", "@!#",
                "$!@", "#$@", "!#$", "@!#", "$#!", "!$@", "#@!", "$##", "@#!!", "!#$", 
                "@#!", "!#$", "#@$", "!$#", "$##", "@##", "#!!", "@!$", "$#!", "@!#",
                "#$@", "!$#", "@#!!", "#$@", "!@#", "$!@", "@#$", "#!!", "@#!!", "$#!", "!@#"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },

        # Symbol Keys (Shift + Number 5-0)
        {
            "title": "Symbol Keys 5-0 Lesson 1",
            "topic": "Symbols",
            "subtopic": "Right Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the symbol keys 5 to 0.",
            "keys": "% ^ & * ( )",
            "words": [
                "%&*", "(%&", "^*&", "&(*)", "*(%", "&*(^", "())", "^^&", "&&%", "%*&", 
                "*^)", "^^%", "^&*", "%()(", "&&*", "*(&", "()*", "^^%", "((%)", "&^)(", 
                "^*(%", "&(*^", "*(&)", "%^*)", "&&*", "^*%", "^^^", "&())", "%()*", "&**", "%*(^",
                "&()^", "*()%", "%^^", "&&*", "%(*", "^^*", "&*(%", "^^&", "()(*", "*&^^"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # {
        #     "title": "Common Shortcuts Ctrl + Key Lesson 1",
        #     "topic": "Common Shortcuts",
        #     "subtopic": "Ctrl + Key",
        #     "keyboard_type": "qwerty",
        #     "description": "Learn common shortcuts using Ctrl + Key combinations.",
        #     "keys": "Ctrl + C, Ctrl + V, Ctrl + X, Ctrl + Z",
        #     "words": [
        #         "Ctrl+C", "Ctrl+V", "Ctrl+X", "Ctrl+Z", "copy", "paste", "cut", "undo",
        #         "Ctrl+C+Ctrl+V", "copy+paste", "cut+paste", "undo+cut", "Ctrl+Z+Ctrl+X",
        #         "Ctrl+V+Ctrl+Z", "Ctrl+C+Ctrl+Z", "Ctrl+C+Ctrl+X", "copy+cut", "undo+copy",
        #         "Ctrl+Z+Ctrl+V", "Ctrl+X+Ctrl+Z", "Ctrl+C+undo", "Ctrl+cut", "Ctrl+paste", 
        #         "Ctrl+undo", "cut+undo", "paste+copy", "undo+paste", "Ctrl+V+undo",
        #         "Ctrl+Z+copy", "cut+Ctrl+C", "Ctrl+C+undo", "paste+Ctrl+X", "Ctrl+Z+Ctrl+V", 
        #         "Ctrl+V+copy", "Ctrl+X+paste", "cut+Ctrl+V", "Ctrl+Z+cut", "undo+Ctrl+V",
        #         "Ctrl+Z+Ctrl+C", "Ctrl+cut", "Ctrl+paste"
        #     ],
        #     "difficulty": "easy",
        #     "created_at": datetime.utcnow(),
        #     "updated_at": datetime.utcnow()
        # },
        # {
        #     "title": "Common Shortcuts Ctrl + Key Lesson 2",
        #     "topic": "Common Shortcuts",
        #     "subtopic": "Ctrl + Key",
        #     "keyboard_type": "qwerty",
        #     "description": "Practice Ctrl + Key combinations for common operations.",
        #     "keys": "Ctrl + A, Ctrl + S, Ctrl + F, Ctrl + P",
        #     "words": [
        #         "Ctrl+A", "Ctrl+S", "Ctrl+F", "Ctrl+P", "select all", "save", "find", "print",
        #         "Ctrl+A+Ctrl+S", "save+select", "find+select", "Ctrl+P+Ctrl+S", "Ctrl+S+Ctrl+F",
        #         "print+select", "Ctrl+A+Ctrl+F", "Ctrl+A+Ctrl+P", "find+save", "Ctrl+F+print",
        #         "Ctrl+S+save", "print+find", "Ctrl+select", "Ctrl+print", "Ctrl+save", 
        #         "Ctrl+find", "select+find", "Ctrl+P+select", "find+print", "Ctrl+S+select",
        #         "save+find", "Ctrl+A+save", "Ctrl+find+print", "print+save", "Ctrl+A+Ctrl+P",
        #         "Ctrl+F+save", "Ctrl+select+Ctrl+S", "save+print", "Ctrl+A+Ctrl+save",
        #         "Ctrl+F+Ctrl+S", "Ctrl+P+save", "Ctrl+A+Ctrl+F", "print+select", "Ctrl+save+select",
        #         "Ctrl+find", "Ctrl+A+Ctrl+P"
        #     ],
        #     "difficulty": "medium",
        #     "created_at": datetime.utcnow(),
        #     "updated_at": datetime.utcnow()
        # },
        # {
        #     "title": "Common Shortcuts Ctrl + Key Lesson 3",
        #     "topic": "Common Shortcuts",
        #     "subtopic": "Ctrl + Key",
        #     "keyboard_type": "qwerty",
        #     "description": "Master advanced Ctrl + Key combinations.",
        #     "keys": "Ctrl + T, Ctrl + W, Ctrl + N, Ctrl + R",
        #     "words": [
        #         "Ctrl+T", "Ctrl+W", "Ctrl+N", "Ctrl+R", "new tab", "close tab", "new window", "reload",
        #         "Ctrl+T+Ctrl+W", "new tab+close tab", "Ctrl+N+Ctrl+T", "Ctrl+R+reload", "close+new",
        #         "Ctrl+N+new window", "reload+Ctrl+T", "Ctrl+T+reload", "new tab+reload", "Ctrl+N+Ctrl+W",
        #         "close+reload", "new window+Ctrl+R", "Ctrl+T+close tab", "reload+new tab", "Ctrl+W+Ctrl+N",
        #         "close tab+Ctrl+T", "Ctrl+R+new window", "new window+close tab", "Ctrl+N+Ctrl+R", 
        #         "reload+Ctrl+N", "Ctrl+W+reload", "new tab+Ctrl+W", "Ctrl+R+new tab", "new window+reload",
        #         "Ctrl+W+Ctrl+R", "Ctrl+T+new window", "Ctrl+N+close tab", "reload+Ctrl+W", "Ctrl+T+Ctrl+N",
        #         "new tab+Ctrl+R", "Ctrl+R+new window", "new window+Ctrl+T", "Ctrl+N+reload", "Ctrl+T+close tab",
        #         "reload+Ctrl+T", "Ctrl+W+Ctrl+R", "new tab+close tab"
        #     ],
        #     "difficulty": "hard",
        #     "created_at": datetime.utcnow(),
        #     "updated_at": datetime.utcnow()
        # },

        # # Common Shortcuts - Alt + Key
        # {
        #     "title": "Common Shortcuts Alt + Key Lesson 1",
        #     "topic": "Common Shortcuts",
        #     "subtopic": "Alt + Key",
        #     "keyboard_type": "qwerty",
        #     "description": "Learn common Alt + Key combinations for window management.",
        #     "keys": "Alt + Tab, Alt + F4, Alt + Space",
        #     "words": [
        #         "Alt+Tab", "Alt+F4", "Alt+Space", "switch window", "close window", "menu",
        #         "Alt+Tab+Alt+F4", "switch+close", "Alt+Space+menu", "Alt+Tab+switch", 
        #         "Alt+F4+close", "Alt+Space+menu", "Alt+switch", "Alt+close", "Alt+menu",
        #         "switch+Alt+Tab", "close+Alt+F4", "Alt+Tab+close", "Alt+Space+menu", 
        #         "switch+close+Alt", "Alt+Space+switch", "Alt+Tab+menu", "Alt+F4+Alt+menu", 
        #         "Alt+Tab+menu", "Alt+switch+Alt+Space", "Alt+Tab+Alt+F4", "Alt+Space+switch",
        #         "Alt+menu+close", "switch+Alt+F4", "Alt+Tab+Alt+Space", "Alt+F4+switch", 
        #         "Alt+close+Alt+Tab", "Alt+Space+switch", "menu+Alt+Space", "switch+Alt+F4", 
        #         "Alt+Space+Alt+Tab", "close+Alt+Tab", "Alt+menu+switch", "Alt+close+menu"
        #     ],
        #     "difficulty": "easy",
        #     "created_at": datetime.utcnow(),
        #     "updated_at": datetime.utcnow()
        # },
        # {
        #     "title": "Common Shortcuts Alt + Key Lesson 2",
        #     "topic": "Common Shortcuts",
        #     "subtopic": "Alt + Key",
        #     "keyboard_type": "qwerty",
        #     "description": "Practice Alt + Key combinations for advanced window management.",
        #     "keys": "Alt + Enter, Alt + Shift + Tab, Alt + F10",
        #     "words": [
        #         "Alt+Enter", "Alt+Shift+Tab", "Alt+F10", "fullscreen", "previous window", "maximize window",
        #         "Alt+Enter+fullscreen", "Alt+Shift+previous", "Alt+F10+maximize", "Alt+Enter+fullscreen",
        #         "Alt+Shift+Tab+previous", "Alt+F10+maximize", "Alt+previous+Shift", "Alt+fullscreen",
        #         "Alt+maximize", "Alt+Enter+maximize", "Alt+Shift+fullscreen", "Alt+Tab+Alt+Shift",
        #         "Alt+previous+maximize", "Alt+fullscreen+Enter", "Alt+Enter+previous", "Alt+F10+fullscreen",
        #         "Alt+Tab+Alt+Shift+previous", "Alt+maximize+Shift+Tab", "Alt+Enter+maximize", 
        #         "Alt+Shift+previous", "Alt+Enter+Alt+Shift", "Alt+F10+maximize+window", "Alt+previous+Alt+Enter", 
        #         "Alt+fullscreen+Shift+Tab", "Alt+F10+Alt+Enter", "Alt+Shift+previous+fullscreen", "Alt+maximize"
        #     ],
        #     "difficulty": "medium",
        #     "created_at": datetime.utcnow(),
        #     "updated_at": datetime.utcnow()
        # },
        # {
        #     "title": "Common Shortcuts Alt + Key Lesson 3",
        #     "topic": "Common Shortcuts",
        #     "subtopic": "Alt + Key",
        #     "keyboard_type": "qwerty",
        #     "description": "Master advanced Alt + Key combinations for power users.",
        #     "keys": "Alt + Shift + F4, Alt + Esc, Alt + Shift + Esc",
        #     "words": [
        #         "Alt+Shift+F4", "Alt+Esc", "Alt+Shift+Esc", "force close", "cycle apps", "task manager",
        #         "Alt+Shift+Esc+force close", "Alt+Esc+cycle", "Alt+Esc+task manager", "Alt+Shift+Esc+force close",
        #         "Alt+Esc+cycle apps", "Alt+Shift+F4+close", "Alt+Esc+cycle", "Alt+Esc+task manager",
        #         "Alt+Shift+F4+Alt+Esc", "Alt+Shift+Esc+force", "Alt+Esc+Alt+Shift+F4", "Alt+cycle+Alt+Esc", 
        #         "Alt+Shift+force close", "Alt+Esc+cycle apps", "Alt+Shift+Esc+manager", "Alt+Shift+cycle+close", 
        #         "Alt+Esc+Alt+Shift+F4", "Alt+task manager+Alt+Shift+Esc", "Alt+cycle apps", "Alt+Esc+force close",
        #         "Alt+Shift+F4+Alt+cycle", "Alt+Shift+cycle", "Alt+Esc+force", "Alt+Esc+Alt+Shift", "Alt+manager",
        #         "Alt+Esc+Alt+Shift+Esc", "Alt+Shift+cycle apps", "Alt+Esc+force close", "Alt+Shift+cycle"
        #     ],
        #     "difficulty": "hard",
        #     "created_at": datetime.utcnow(),
        #     "updated_at": datetime.utcnow()
        # }
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
        add_qwerty_lessons()
        print("QWERTY lessons added to the Lessons table.")
