import React from 'react';
import LessonList from './LessonList';

const LessonLists = () => {
    // Dummy data for lesson lists
    const lessonLists = [
        { id: 1, title: 'Lesson List 1', description: 'This is lesson list 1' },
        { id: 2, title: 'Lesson List 2', description: 'This is lesson list 2' },
        { id: 3, title: 'Lesson List 3', description: 'This is lesson list 3' },
    ];

    return (
        <div>
            {lessonLists.map((lessonList) => (
                <LessonList
                    key={lessonList.id}
                    title={lessonList.title}
                    description={lessonList.description}
                />
            ))}
        </div>
    );
};

export default LessonLists;