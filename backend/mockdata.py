from models import db, Lesson
from datetime import datetime
from run import app

def add_mock_data():
    mock_lessons = [
        # Home Row - Left Four Keys
        {
            "title": "Home Row Left Four Keys",
            "topic": "Home Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the home row left four keys.",
            "keys": "a s d f",
            "words": [
                "dad", "sad", "fad", "add", "ass", "all", "fall",
                "sall", "lass", "alas", "salad", "sass", "assail", 
                "halls", "falls", "calls", "stall", "shall", "small",
                "tall", "wall", "mall", "gall", "fall", "call"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Home Row - Right Four Keys
        {
            "title": "Home Row Right Four Keys",
            "topic": "Home Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the home row right four keys.",
            "keys": "j k l ;",
            "words": [
                "jack", "lack", "kill", "fall", "skill", "jill", "jazz",
                "flask", "joke", "lake", "sake", "seal", "jail", "kale",
                "jacks", "kills", "lakes", "falls", "seals", "jokes"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Home Row - All Keys
        {
            "title": "Complete Home Row",
            "topic": "Home Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the home row.",
            "keys": "a s d f j k l ;",
            "words": [
                "alfalfa", "flask", "lads", "salads", "jackals", "hallways",
                "facades", "kladskads", "flashlights", "halfhearted", "jagged",
                "slapdash", "flabbergasted", "scaffolding", "kaleidoscope",
                "flasks", "saddles", "gladly", "salsa", "afflicted", "flashback",
                "galoshes", "lassoed", "slapdash", "flabbergast", "flashcards",
                "grasslands", "landscaped", "sandblasted", "flashdance",
                "slapdashed", "flapdoodle", "jackdaws"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Top Row - Left Four Keys
        {
            "title": "Top Row Left Four Keys",
            "topic": "Top Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the top row left four keys.",
            "keys": "q w f p",
            "words": [
                "we", "wear", "were", "rear", "queue", "war", "ear",
                "raw", "war", "era", "rare", "ware", "erase", "wee",
                "wee", "were", "rewe", "wee", "rare", "wee", "we",
                "wear", "wear", "rew", "raw"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Top Row - Right Four Keys
        {
            "title": "Top Row Right Four Keys",
            "topic": "Top Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the top row right four keys.",
            "keys": "u g l y",
            "words": [
                "ugly", "gul", "gull", "lug", "guy", "gully", "lull",
                "lullaby", "gully", "ugly", "gully", "lug", "guy",
                "gull", "gul", "ugly", "lull", "gull", "gul", "gully"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Top Row - All Keys
        {
            "title": "Complete Top Row",
            "topic": "Top Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the top row.",
            "keys": "q w f p u g l y",
            "words": [
                "quip", "quite", "quiet", "wiper", "write", "wrote", "route",
                "writ", "wire", "router", "pout", "quote", "poutier", "query",
                "require", "proud", "wiper", "required", "equip", "outwear",
                "power", "wrapper", "outer", "pow", "quirky", "quote", "quiet",
                "quirky", "equip", "pure", "putter", "pro"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Bottom Row - Left Four Keys
        {
            "title": "Bottom Row Left Four Keys",
            "topic": "Bottom Row",
            "subtopic": "Left Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the bottom row left four keys.",
            "keys": "z x c v",
            "words": [
                "vex", "czar", "cave", "vac", "czar", "vex", "cave", "vac",
                "vex", "vac", "vac", "vex", "czar", "cave", "vex", "vac",
                "vex", "cave", "vac", "vac", "czar", "cave", "vac", "vex"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Bottom Row - Right Four Keys
        {
            "title": "Bottom Row Right Four Keys",
            "topic": "Bottom Row",
            "subtopic": "Right Side",
            "keyboard_type": "colemak",
            "description": "Learn the basics of the bottom row right four keys.",
            "keys": "b n m ,",
            "words": [
                "man", "ban", "nab", "nab", "nab", "nab", "nab", "ban",
                "ban", "nab", "nab", "ban", "nab", "ban", "nab", "ban",
                "ban", "nab", "ban", "nab", "ban", "nab", "ban", "nab"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Bottom Row - All Keys
        {
            "title": "Complete Bottom Row",
            "topic": "Bottom Row",
            "subtopic": "Complete",
            "keyboard_type": "colemak",
            "description": "Master all keys on the bottom row.",
            "keys": "z x c v b n m ,",
            "words": [
                "vex", "czar", "cave", "vac", "czar", "vex", "cave", "vac",
                "vex", "vac", "vac", "vex", "czar", "cave", "vex", "vac",
                "vex", "cave", "vac", "vac", "czar", "cave", "vac", "vex",
                "man", "ban", "nab", "nab", "nab", "nab", "nab", "ban",
                "ban", "nab", "nab", "ban", "nab", "ban", "nab", "ban",
                "ban", "nab", "ban", "nab", "ban", "nab", "ban", "nab"
            ],
            "difficulty": "medium",
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
            words=",".join(lesson["words"]),  # Join the list into a comma-separated string
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
