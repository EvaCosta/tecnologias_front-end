import React from 'react';
import './UndoNotification.css';

const UndoNotification = ({ onClick }) => {
  return (
    <div className="undo-notification" onClick={onClick}>
      Tarefa excluída. <span className="undo-link">Desfazer</span>
    </div>
  );
};

export default UndoNotification;
