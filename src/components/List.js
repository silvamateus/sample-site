import React from 'react';

function List() {
  const list = [
    {
      btn: 'lorem',
      disp: '',
      title: 'Painel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, maxime.'
    },
    {
      btn: 'lorem',
      disp: 'Lorem ipsum dolor sit.',
      title: 'Painel',
      text: 'Lorem ipsum dolor sit amet.'
    },
    {
      btn: 'lorem',
      disp: 'Lorem ipsum dolor sit.',
      title: 'Painel',
      text: 'Lorem amet consectetur adipisicing elit. Odio, maxime.'
    },
    {
      btn: 'lorem',
      disp: 'Lorem ipsum dolor sit.',
      title: 'Painel',
      text: 'Lorem consectetur adipisicing elit. Odio, maxime.'
    },
    {
      btn: 'lorem',
      disp: 'Lorem ipsum dolor sit.',
      title: 'Painel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, maxime.'
    },
    {
      btn: 'lorem',
      disp: 'Lorem ipsum dolor sit.',
      title: 'Painel',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, maxime.'
    },
  ]

  return (
    <section className="list">
      <h2 className="lorem-title">lorem</h2>
      {list.map(item => (
        <div className="list-item">
          <div className="item-action">
            <button className="list-btn">{item.btn}</button>
            <p className="item-disp">{item.disp}</p>
          </div>
          <div className="item-text">
            <p className="subtitle">{item.title}</p>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default List;