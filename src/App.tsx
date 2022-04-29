import React, { MouseEventHandler, useState } from 'react';
import { ReactComponent as Star } from './icon-star.svg';
import { ReactComponent as ThankYou } from './illustration-thank-you.svg';
import './App.css';

function App() {
  const [selected, setSelected] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const onRatingClick = (rating: number): MouseEventHandler => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSelected(rating);
  };
  const onButtonClick: MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (selected > -1) {
      setSubmitted(true);
    }
  };

  return (
    <div className="App">
      {!submitted &&
        <div className='card rating'>
          <div className='star'><Star /></div>
          <h1>How did we do?</h1>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <div className='select'>
            <button className={selected === 1 ? 'selected' : ''} onClick={onRatingClick(1)}>1</button>
            <button className={selected === 2 ? 'selected' : ''} onClick={onRatingClick(2)}>2</button>
            <button className={selected === 3 ? 'selected' : ''} onClick={onRatingClick(3)}>3</button>
            <button className={selected === 4 ? 'selected' : ''} onClick={onRatingClick(4)}>4</button>
            <button className={selected === 5 ? 'selected' : ''} onClick={onRatingClick(5)}>5</button>
          </div>
          <button onClick={onButtonClick}>Submit</button>
        </div>
      }
      {submitted && <div className='card thanks'>
        <div><ThankYou /></div>
        <div className='response'>You selected {selected} out of 5</div>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
      }
    </div>
  );
}

export default App;
