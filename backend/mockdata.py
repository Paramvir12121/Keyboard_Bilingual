from models import db, Lesson
from datetime import datetime
from run import app

def add_mock_data():
    mock_lessons = [
        {
            "title": "Basics of Home Row",
            "description": "Learn the basics of the home row keys.",
            "keys": "a s d f j k l ;",
            "words": [
                "dad", "sad", "lad", "fad", "add", "ass", "all", "fall",
                "sall", "lass", "lass", "lasso", "jass", "kass", "alas",
                "salad", "flask", "Alaska", "sass", "assail", "halal",
                "halls", "falls", "calls", "stall", "shall", "small",
                "tall", "wall", "mall", "gall", "fall", "call"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Advanced Home Row",
            "description": "Master the home row with complex words.",
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
        {
            "title": "Numbers and Symbols",
            "description": "Learn to type numbers and symbols efficiently.",
            "keys": "1 2 3 4 5 6 7 8 9 0 - =",
            "words": [
                "1/2", "$3.99", "@home", "#trending", "100%", "24/7", "9-5",
                "50/50", "2020", "100+", "1st", "2nd", "3rd", "4th", "5th",
                "6th", "7th", "8th", "9th", "10th", "1-800", "1+1=2", "$100",
                "99%", "1,000", "1:1", "3.14", "007", "4x4", "360°", "1080p",
                "5G", "4K", "8K"
            ],
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]

    for lesson in mock_lessons:
        new_lesson = Lesson(
            title=lesson["title"],
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