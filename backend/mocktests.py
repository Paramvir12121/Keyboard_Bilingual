from models import db, Lesson
from datetime import datetime
from run import app

def add_mock_data():
    mock_lessons = [
        # Existing lessons data goes here...
        
        # Speed Test - Most Common Words (Beginner)
        {
            "title": "Speed Test - Common Words (Beginner)",
            "topic": "Speedtest",
            "subtopic": "Common Words",
            "keyboard_type": "all",  # Assuming the keyboard type is QWERTY for speed tests
            "description": "Test your typing speed on the most common words in English. Suitable for beginners.",
            "keys": "the of and to a in that is was he for it with as his on be at by i this had not are but from or have an they",
            "words": [
                "the", "of", "and", "to", "a", "in", "that", "is", "was", "he",
                "for", "it", "with", "as", "his", "on", "be", "at", "by", "i",
                "this", "had", "not", "are", "but", "from", "or", "have", "an", "they"
            ],
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Speed Test - Most Common Words (Intermediate)
        {
            "title": "Speed Test - Common Words (Intermediate)",
            "topic": "Speedtest",
            "subtopic": "Common Words",
            "keyboard_type": "all",
            "description": "Test your typing speed on slightly more advanced common words in English.",
            "keys": "which you were her we there can all their has been when who will more if no out so said what up its about into than them these then some",
            "words": [
                "which", "you", "were", "her", "we", "there", "can", "all", "their", "has",
                "been", "when", "who", "will", "more", "if", "no", "out", "so", "said",
                "what", "up", "its", "about", "into", "than", "them", "these", "then", "some"
            ],
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        # Speed Test - Most Common Words (Advanced)
        {
            "title": "Speed Test - Common Words (Advanced)",
            "topic": "Speedtest",
            "subtopic": "Common Words",
            "keyboard_type": "all",  # For advanced tests, we can include all keyboard types
            "description": "Challenge yourself with a typing speed test on the most advanced common words in English.",
            "keys": "would like him just over most even find way many people may one other how also because after new well must things great still where through right down life back",
            "words": [
                "would", "like", "him", "just", "over", "most", "even", "find", "way", "many",
                "people", "may", "one", "other", "how", "also", "because", "after", "new", "well",
                "must", "things", "great", "still", "where", "through", "right", "down", "life", "back"
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
