import React, { Component } from 'react';
import ReactDOM from 'react-dom'


//Imagens

// Icones

// Components
import Menu from '../../componets/menu';

//mudança de páginas

class Notificacoes extends Component{
  render(){  
    return (   

        <div className='App-header' >
            <Menu/>
            <p>Notificações</p>
            <div className='notificacoes'>
                <div className='notificacoesItem'>
                  <p>Notificações</p>
                </div>
                <div className='notificacoesItem'>
                  <p>Notificações</p>
                </div>
                <div className='notificacoesItem'>
                  <p>Notificações</p>
                </div>
                <div className='notificacoesItem'>
                  <p>Notificações</p>
                </div>
                <div className='notificacoesItem'>
                  <p>Notificações</p>
                </div>
                <div className='notificacoesItem'>
                  <p>Notificações</p>
                </div>
            </div>        
        </div>
    );
  }
}

export default Notificacoes;