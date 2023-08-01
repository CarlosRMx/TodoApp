import React from 'react'
import './emptyTodos.css'

function EmptyTodos() {
    return (
      <div className="content">
        <div className="content__container">
          <p className="content__container__text">
            Hello,
          </p>
          
          <ul className="content__container__list">
            <li className="content__container__list__item">crea una tarea !</li>
          </ul>
        </div>
      </div>
    );
}

export {EmptyTodos}