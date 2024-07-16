import React from 'react';

const Results = ({errorCount,accuracy,keysTyped, wordsTyped}) => {
    return (
        <div className="stats">
        <p>Errors: {errorCount}</p>
        <p>Keys Typed: {keysTyped}</p>
        <p>Accuracy: {accuracy}%</p>
        <p>Words Typed: {wordsTyped}</p>
        <p>WPM: {wpm}</p>
      </div>
    );
};

export default Results;