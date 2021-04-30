import React from 'react';

function Header() {
  return (
    <header>
      <img src="https://www.fillmurray.com/69/46" alt="logo" />
      <span className="lobby">Lobby</span>
      <span className="rooms">Salas</span>
      <span className="wtw">WTW Fair</span>
      <span className="info">Informações</span>
      <span className="net">Network</span>
      <div className="user-card">
        Bem vindo, <strong>Usuário</strong> <i className="far fa-user-circle"></i>
      </div>
    </header>
  )
}

export default Header;