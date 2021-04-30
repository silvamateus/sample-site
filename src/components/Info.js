import React from 'react';

function Info() {
  return (
    <section className="info">
      <div className="user-info" >
        Lorem ipsum  <i className="far fa-user-circle"></i>
      </div>
      <img src="https://www.fillmurray.com/180/100" alt="main plane" className="main-img"/>
      <p className="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus tempora rem at quos veritatis laborum nisi ipsum suscipit magni odit!</p>
      <div className="lazy1">
        <img src="https://www.fillmurray.com/69/30" alt="lazy 1"/>
      </div>
      <div className="lazy2">
        <img src="https://www.fillmurray.com/69/30" alt="lazy 2"/>
      </div>
      <div className="lazy3">
        <img src="https://www.fillmurray.com/69/30" alt="lazy 3"/>
      </div>
    </section>
  )
}

export default Info;