import CountdownTimer from "./CountdownTimer";

import React from 'react'

const ConsoleLog = () => {
    const handleCountdownEnd = () => {
        console.log('Countdown ended');
        
        // Add any additional logic you want to execute when the countdown ends
      };
  return (
    <div>
    <h1>Countdown Timer Example</h1>
    <CountdownTimer initialSeconds={30} onCountdownEnd={handleCountdownEnd} />
  </div>
  )
}

export default ConsoleLog