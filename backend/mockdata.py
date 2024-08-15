from models import db, Lesson
from datetime import datetime
from run import app

def add_mock_data():
    mock_lessons = [
        # Home Row - Left Four Keys (Colemak)
        {
            "title": "Home Row Left Four Keys Lesson 1",
            "topic": "Home Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the home row left four keys.",
            "keys": "a r s t",
            "words": [
                "a", "r", "s", "t", "ar", "as", "at", "ra", "rs", "rt", 
                "sa", "sr", "st", "ta", "tr", "ts", "art", "rat", "sat", 
                "tar", "star", "arts", "tars", "rats", "start", "stare", 
                "starts", "starts", "starts", "starts"
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
                "art", "rat", "tar", "star", "ars", "rast", "rats", 
                "tars", "arts", "tsar", "tart", "start", "sart", "stat", 
                "tars", "astr", "sart", "strat", "tars", "start", 
                "sart", "rast", "star", "ratt", "arts", "tsar", 
                "sart", "rat", "art", "tart"
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
                "art", "rat", "sat", "tar", "star", "arts", "tars", 
                "rats", "start", "tart", "starr", "tsar", "ratt", 
                "sart", "stat", "rast", "tarts", "arts", "strat", 
                "start", "tsar", "tars", "rats", "start", "tart", 
                "star", "art", "stat", "tart", "rat"
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
                "n", "e", "i", "o", "ne", "no", "on", "en", "in", "io", 
                "noe", "one", "ion", "nie", "neo", "eni", "nieo", "onie", 
                "ione", "eon", "neio", "neoi", "ieno", "onie", "ione", 
                "noei", "onie", "ione", "noei", "ineo"
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
                "nie", "neo", "eon", "ion", "one", "nio", "ine", 
                "noe", "nieo", "onie", "ione", "enoi", "onio", 
                "neoi", "noie", "eino", "neon", "noei", "ino", 
                "oine", "nion", "noie", "ieon", "neio", "oine", 
                "ione", "onei", "ioe", "nio", "ineo"
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
                "neon", "none", "nine", "noon", "neoin", "nieon", 
                "onein", "nonei", "noien", "ennio", "ionen", "oenni", 
                "innio", "neion", "nione", "enoin", "neoni", "noine", 
                "eno", "nei", "ino", "nino", "nio", "oen", 
                "eno", "nio", "ine", "neo", "nion", "none"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Home Row - All Keys (Colemak)
        {
            "title": "Complete Home Row Lesson 1",
            "topic": "Home Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the home row.",
            "keys": "a r s t n e i o",
            "words": [
                "arsen", "stare", "ratio", "rates", "stern", "stone", "tones", 
                "tarsi", "noirs", "senor", "inset", "saint", "arson", "irons", 
                "rosin", "train", "raise", "store", "earns", "notes", "noise", 
                "taser", "reset", "stain", "roast", "aster", "atone", "ratio", 
                "rains", "roast"
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
                "raise", "store", "saint", "roast", "train", "stare", 
                "ratio", "stone", "tones", "earns", "reset", "noise", 
                "notes", "taser", "stain", "roast", "senor", "irons", 
                "stair", "sort", "near", "rest", "airs", "star", 
                "rant", "rats", "arts", "tarn", "rain", "oats"
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
                "q", "w", "f", "p", "qw", "wf", "fp", "pq", "pw", "fw", 
                "qfp", "qwf", "pqw", "wfp", "pfw", "qfp", "qwf", "pfq", 
                "fpq", "wfq", "fwq", "pqw", "fpw", "qfw", "wfp", "pwq", 
                "fpw", "fwq", "pwf", "qwf"
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
                "fw", "pf", "wp", "qf", "fp", "pw", "qw", "fwq", 
                "pqw", "fwq", "qfp", "pwf", "fqw", "wfp", 
                "qfw", "fpq", "fwq", "pwf", "qwf", "qfw", 
                "pqw", "fpw", "qwfp", "fwqp", "qfpw", 
                "wpfq", "fpqw", "qwpf", "pqwf", "wqfp"
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
                "fwq", "pqw", "fwqp", "qfp", "pwf", "fqw", 
                "wfp", "qfw", "fpq", "fwq", "pwf", "qwf", 
                "fpqw", "qwpf", "pqwf", "fwqp", "pqw", 
                "wfp", "qfw", "fpq", "qwfp", "fwqp", 
                "pqwf", "fwq", "pqw", "qfp", "pwf", 
                "wfp", "fpq", "qfw"
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
                "u", "g", "l", "y", "ug", "ul", "gl", "ly", "gy", "yl", 
                "uly", "guy", "lug", "guy", "gul", "lug", "gly", "lgy", 
                "luy", "gyl", "lugy", "glyu", "ylug", "gluy", "ulgy", 
                "gyul", "ylug", "gluy", "ugly", "gyul"
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
                "ul", "ug", "lg", "gl", "yl", "lu", "ylg", 
                "gyl", "ulgy", "lug", "gly", "lyg", 
                "ylu", "gul", "lgy", "gyu", "uly", 
                "gyl", "ylg", "gul", "lgy", "gly", 
                "lug", "uly", "gyl", "gyl", "gly", 
                "ulg", "lug", "lyg"
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
                "lug", "gyl", "ylg", "gluy", "ugly", "ylug", 
                "lugy", "gly", "ulg", "lug", "lgy", "lyg", 
                "gyl", "ulgy", "glyu", "ylg", "gly", 
                "lug", "gyl", "lugy", "ylug", "gluy", 
                "ugly", "ylug", "lugy", "glyu", "ylg", 
                "gyl", "ulg", "lug"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Top Row - All Keys (Colemak)
        {
            "title": "Complete Top Row Lesson 1",
            "topic": "Top Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the top row.",
            "keys": "q w f p u g l y",
            "words": [
                "quip", "flup", "plug", "gulp", "gulf", "ply", "fug", "gully", 
                "pug", "guy", "flip", "flu", "flup", "quip", "gulp", "gulf", 
                "gully", "fugly", "plu", "pluy", "guy", "fug", "fup", "flip", 
                "plug", "plug", "quip", "gully", "guy", "fug"
            ],
            "difficulty": "medium",
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
                "plug", "gulp", "fug", "flup", "gull", "flip", "pug", 
                "ply", "fugly", "plu", "pluy", "gulf", 
                "quip", "flu", "glup", "gully", "fug", 
                "fup", "plug", "flip", "guy", "gulp", 
                "ply", "plug", "fup", "flip", "gully", 
                "plug", "fug", "ply"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Bottom Row - Left Four Keys (Colemak)
        {
            "title": "Bottom Row Left Four Keys Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the bottom row left four keys.",
            "keys": "z x c v",
            "words": [
                "z", "x", "c", "v", "zx", "zc", "zv", "xc", "xz", "cv", 
                "cvz", "xvz", "cvx", "vzc", "xcz", "czx", "vzx", "xcv", 
                "zxv", "zcv", "vcx", "czv", "vcz", "xvc", "vzx", "vcz", 
                "zxv", "czx", "zcv", "zcv"
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
                "czx", "vcz", "cvx", "zcv", "zxv", "vcx", "vzx", 
                "xcv", "zcv", "vcz", "czx", "xvz", "cvx", 
                "zvx", "czv", "vcx", "zcv", "xcz", "zvc", 
                "vxz", "cvz", "zcv", "vcx", "zxv", "xvz", 
                "cvz", "zcv", "cvx", "zcv", "zvx"
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
                "cvz", "vcx", "zxv", "zvc", "czx", "xvz", "cvx", 
                "zcv", "vcz", "zxv", "vcx", "czx", "xvz", 
                "zvx", "czv", "vcx", "zxv", "cvz", "zvx", 
                "czx", "xvz", "cvx", "zcv", "vcz", "xcz", 
                "zvx", "vcx", "zcv", "cvx", "czx"
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
                "b", "n", "m", ",", "bn", "bm", "b,", "nm", "nb", "mn", 
                "bm,", "bnm", "mnb", "nmb", "nbm", "mbn", "bmn", "nmb", 
                "bmn", "nbm", "mbn", "bm,", "bn,", "mn,", "bmn", "nmb", 
                "bnm", "nbm", "mn,", "bmn"
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
                "nb", "bm", "nm", "mn", "bn", "mb", "bmn", 
                "nmb", "bm,", "bn,", "mnb", "bnm", "nbm", 
                "nm,", "mn,", "bmn", "nmb", "bnm", "nbm", 
                "nm,", "mn,", "bm,", "nmb", "bmn", "mn,", 
                "bn,", "mnb", "nbm", "nm,", "mn,"
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
                "bnm", "mnb", "bmn", "nmb", "bn,", "nm,", "mn,", 
                "bm,", "bmn", "nmb", "bnm", "nbm", "mn,", 
                "nb,", "bn,", "mnb", "nbm", "nm,", "mn,", 
                "bm,", "bn,", "nm,", "mn,", "bm,", "bmn", 
                "nmb", "bnm", "nbm", "mn,", "nm,"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Bottom Row - All Keys (Colemak)
        {
            "title": "Complete Bottom Row Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the bottom row.",
            "keys": "z x c v b n m ,",
            "words": [
                "vex", "czar", "cave", "vac", "czar", "vex", "cave", "vac",
                "vex", "vac", "vac", "vex", "czar", "cave", "vex", "vac",
                "vex", "cave", "vac", "vac", "czar", "cave", "vac", "vex",
                "man", "ban", "nab", "nab", "nab", "nab"
            ],
            "difficulty": "medium",
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
                "czar", "vex", "cave", "vac", "czar", "vex", "cave", "vac",
                "vex", "vac", "vac", "vex", "czar", "cave", "vex", "vac",
                "vex", "cave", "vac", "vac", "czar", "cave", "vac", "vex",
                "man", "ban", "nab", "nab", "nab", "nab"
            ],
            "difficulty": "hard",
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
                "a", "s", "d", "f", "as", "ad", "af", "sa", "sd", "sf", 
                "da", "ds", "df", "fa", "fs", "fd", "sad", "fad", "dad", 
                "ads", "add", "ass", "sad", "ads", "fad", "dad", "saf", 
                "fas", "afs", "ads"
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
                "sad", "fad", "dad", "ads", "saf", "fas", "afs", "add", 
                "ass", "sad", "afs", "saf", "fas", "add", "sad", "fad", 
                "dad", "ads", "ass", "saf", "fas", "ads", "fad", "dad", 
                "sad", "afs", "saf", "fas", "add", "sad"
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
                "ads", "saf", "fad", "sad", "dad", "afs", "fas", "add", 
                "ass", "saf", "fad", "ads", "sad", "dad", "afs", "fas", 
                "add", "ass", "saf", "fad", "ads", "sad", "dad", "afs", 
                "fas", "add", "ass", "saf", "fad", "ads"
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
                "j", "k", "l", ";", "jk", "jl", "j;", "kj", "kl", "k;", 
                "lj", "lk", "l;", ";j", ";k", ";l", "jkl", "jlk", "j;k", 
                "klj", "lkj", "k;j", "jkl", "jlk", "j;k", "klj", "lkj", 
                "k;j", "jkl", "jlk"
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
                "kj", "jl", "k;", "lj", "lk", "kl", ";j", ";k", ";l", 
                "jkl", "jlk", "j;k", "klj", "lkj", "k;j", "jkl", 
                "jlk", "j;k", "klj", "lkj", "k;j", "jkl", "jlk", 
                "j;k", "klj", "lkj", "k;j", "jkl", "jlk"
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
                "kj", "jl", "k;", "lj", "lk", "kl", ";j", ";k", ";l", 
                "jkl", "jlk", "j;k", "klj", "lkj", "k;j", "jkl", 
                "jlk", "j;k", "klj", "lkj", "k;j", "jkl", "jlk", 
                "j;k", "klj", "lkj", "k;j", "jkl", "jlk"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Home Row - All Keys (QWERTY)
        {
            "title": "Complete Home Row Lesson 1",
            "topic": "Home Row",
            "subtopic": "Complete",
            "keyboard_type": "qwerty",
            "description": "Master all keys on the home row.",
            "keys": "a s d f j k l ;",
            "words": [
                "as", "ad", "af", "aj", "ak", "al", "a;", "sa", "sd", "sf", 
                "sj", "sk", "sl", "s;", "da", "ds", "df", "dj", "dk", "dl", 
                "d;", "fa", "fs", "fd", "fj", "fk", "fl", "f;", "ja", "js"
            ],
            "difficulty": "medium",
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
                "sad", "fad", "lad", "jas", "sal", "dad", "fall", "jazz", 
                "lass", "kala", "all", "flak", "slag", "fail", "flag", 
                "fall", "salt", "fast", "last", "ask", "sad", "sail", 
                "said", "fall", "fa", "sa", "ad", "fl", "al", "ja"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Top Row - Left Four Keys (QWERTY)
        {
            "title": "Top Row Left Four Keys Lesson 1",
            "topic": "Top Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the top row left four keys.",
            "keys": "q w e r",
            "words": [
                "q", "w", "e", "r", "qw", "we", "wr", "er", "qr", "qe", 
                "wer", "rew", "req", "qer", "qwe", "wer", "rew", "req", 
                "qer", "qwe", "wer", "rew", "req", "qer", "qwe", "wer", 
                "rew", "req", "qer", "qwe"
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
                "qwe", "wer", "rew", "req", "qer", "qwe", "wer", "rew", 
                "req", "qer", "qwe", "wer", "rew", "req", "qer", "qwe", 
                "wer", "rew", "req", "qer", "qwe", "wer", "rew", "req", 
                "qer", "qwe", "wer", "rew", "req", "qer"
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
                "wer", "rew", "req", "qer", "qwe", "wer", "rew", "req", 
                "qer", "qwe", "wer", "rew", "req", "qer", "qwe", "wer", 
                "rew", "req", "qer", "qwe", "wer", "rew", "req", "qer", 
                "qwe", "wer", "rew", "req", "qer", "qwe"
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
                "u", "i", "o", "p", "ui", "uo", "up", "io", "ip", "oi", 
                "op", "pu", "pi", "up", "pu", "pi", "io", "oi", "uo", 
                "ui", "up", "pu", "pi", "io", "oi", "uo", "ui", "up", 
                "pu", "pi", "io"
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
                "up", "io", "oi", "pu", "pi", "op", "iu", "ou", "up", 
                "ui", "pu", "op", "pi", "uo", "io", "oi", "pi", "io", 
                "op", "iu", "uo", "op", "up", "io", "iu", "uo", "up", 
                "op", "pi", "io"
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
                "up", "io", "oi", "pu", "pi", "op", "iu", "ou", "up", 
                "ui", "pu", "op", "pi", "uo", "io", "oi", "pi", "io", 
                "op", "iu", "uo", "op", "up", "io", "iu", "uo", "up", 
                "op", "pi", "io"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Top Row - All Keys (QWERTY)
        {
            "title": "Complete Top Row Lesson 1",
            "topic": "Top Row",
            "subtopic": "Complete",
            "keyboard_type": "qwerty",
            "description": "Master all keys on the top row.",
            "keys": "q w e r u i o p",
            "words": [
                "quip", "wipe", "pure", "wire", "pier", "rope", "ripe", 
                "fire", "pipe", "ripe", "fire", "wipe", "pure", "wire", 
                "pier", "rope", "fire", "pipe", "ripe", "wire", "pier", 
                "rope", "fire", "pipe", "ripe", "wire", "pier", "rope", 
                "fire", "pipe"
            ],
            "difficulty": "medium",
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
                "quip", "wipe", "pure", "wire", "pier", "rope", "ripe", 
                "fire", "pipe", "ripe", "fire", "wipe", "pure", "wire", 
                "pier", "rope", "fire", "pipe", "ripe", "wire", "pier", 
                "rope", "fire", "pipe", "ripe", "wire", "pier", "rope", 
                "fire", "pipe"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Bottom Row - Left Four Keys (QWERTY)
        {
            "title": "Bottom Row Left Four Keys Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Left Side",
            "keyboard_type": "qwerty",
            "description": "Learn the basics of the bottom row left four keys.",
            "keys": "z x c v",
            "words": [
                "z", "x", "c", "v", "zx", "zc", "zv", "xc", "xz", "cv", 
                "cz", "vc", "vz", "zx", "xc", "cv", "cz", "vz", "zx", 
                "xc", "cv", "cz", "vz", "zx", "xc", "cv", "cz", "vz", 
                "zx", "xc"
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
                "zx", "cz", "cv", "vc", "vz", "zc", "cv", "vz", 
                "xc", "cz", "vc", "cv", "cz", "zx", "xc", "vz", 
                "zc", "cv", "vx", "zc", "xc", "vc", "cz", "vz", 
                "cz", "vc", "cv", "zx", "zc", "cv"
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
                "zx", "cz", "cv", "vc", "vz", "zc", "cv", "vz", 
                "xc", "cz", "vc", "cv", "cz", "zx", "xc", "vz", 
                "zc", "cv", "vx", "zc", "xc", "vc", "cz", "vz", 
                "cz", "vc", "cv", "zx", "zc", "cv"
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
                "b", "n", "m", ",", "bn", "bm", "b,", "nm", "nb", "mn", 
                "bm,", "bnm", "mnb", "nmb", "nbm", "mbn", "bmn", "nmb", 
                "bmn", "nbm", "mbn", "bm,", "bn,", "mn,", "bmn", "nmb", 
                "bnm", "nbm", "mn,", "bmn"
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
                "bnm", "mnb", "nmb", "mbn", "bn,", "nm,", "mn,", 
                "bm,", "bmn", "nmb", "bnm", "nbm", "mn,", "nb,", 
                "bn,", "mnb", "nbm", "nm,", "mn,", "bm,", 
                "bn,", "nm,", "mn,", "bm,", "bmn", "nmb", 
                "bnm", "nbm", "mn,", "nm,"
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
                "bnm", "mnb", "bmn", "nmb", "bn,", "nm,", "mn,", 
                "bm,", "bmn", "nmb", "bnm", "nbm", "mn,", 
                "nb,", "bn,", "mnb", "nbm", "nm,", "mn,", 
                "bm,", "bn,", "nm,", "mn,", "bm,", "bmn", 
                "nmb", "bnm", "nbm", "mn,", "nm,"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Bottom Row - All Keys (QWERTY)
        {
            "title": "Complete Bottom Row Lesson 1",
            "topic": "Bottom Row",
            "subtopic": "Complete",
            "keyboard_type": "qwerty",
            "description": "Master all keys on the bottom row.",
            "keys": "z x c v b n m ,",
            "words": [
                "czar", "vex", "cave", "vac", "czar", "vex", "cave", 
                "vac", "vex", "vac", "vac", "vex", "czar", "cave", 
                "vex", "vac", "vex", "cave", "vac", "vac", "czar", 
                "cave", "vac", "vex", "man", "ban", "nab", "nab", 
                "nab", "nab"
            ],
            "difficulty": "medium",
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
                "czar", "vex", "cave", "vac", "czar", "vex", "cave", 
                "vac", "vex", "vac", "vac", "vex", "czar", "cave", 
                "vex", "vac", "vex", "cave", "vac", "vac", "czar", 
                "cave", "vac", "vex", "man", "ban", "nab", "nab", 
                "nab", "nab"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]

    for lesson in mock_lessons:
        new_lesson = Lesson(
            title=lesson["title"],
            topic=lesson["topic"],
            subtopic=lesson["subtopic"],
            keyboard_type=lesson["keyboard_type"],
            description=lesson["description"],
            keys=lesson["keys"],
            words=",".join(lesson["words"][:30]),  # Include only the first 30 words
            difficulty=lesson["difficulty"],
            created_at=lesson["created_at"],
            updated_at=lesson["updated_at"]
        )
        db.session.add(new_lesson)

    db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        add_mock_data()
        print("Mock data added to the Lessons table.")
