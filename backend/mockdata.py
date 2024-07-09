from models import db, Lesson
from datetime import datetime
from run import app 

# Function to add mock data to the Lessons table
def add_mock_data():
    # List of mock lessons to add
    mock_lessons = [
        {
            "title": "Basics of Home Row",
            "description": "Learn the basics of the home row keys.",
            "keys": "a s d f j k l ;",
            "words": "dad, sad, lad, fad",
            "difficulty": "easy",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Advanced Home Row",
            "description": "Master the home row with complex words.",
            "keys": "a s d f j k l ;",
            "words": "alfalfa, flask, lads, salads",
            "difficulty": "medium",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        },
        {
            "title": "Numbers and Symbols",
            "description": "Learn to type numbers and symbols efficiently.",
            "keys": "1 2 3 4 5 6 7 8 9 0 - =",
            "words": "1/2, $3.99, @home, #trending",
            "difficulty": "hard",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
    ]

    # Adding each mock lesson to the database
    for lesson in mock_lessons:
        new_lesson = Lesson(
            title=lesson["title"],
            description=lesson["description"],
            keys=lesson["keys"],
            words=lesson["words"],
            difficulty=lesson["difficulty"],
            created_at=lesson["created_at"],
            updated_at=lesson["updated_at"]
        )
        db.session.add(new_lesson)

    # Committing the changes to the database
    db.session.commit()

if __name__ == "__main__":
    with app.app_context():  # Create an application context
        add_mock_data()
        print("Mock data added to the Lessons table.")