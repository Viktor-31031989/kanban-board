import React from 'react';
import UpdateModal from "./UpdateModal";
import CreateModal from "./CreateModal";

function Card(props) {
    return (
        <div className="card">
            <div className="card-header">
                {props.card.status}
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.card.name}</h5>
                <li className="list-group-item">{props.card.description}</li>
                <p className="card-text">Priority: {props.card.priority}
                    <button className="btn btn-outline-secondary btn-sm"
                            onClick={() => props.changePriority(props.card._id, props.card.priority, 1)}>↑
                    </button>
                    <button className="btn btn-outline-secondary btn-sm"
                            onClick={() => props.changePriority(props.card._id, props.card.priority, -1)}>↓
                    </button>
                </p>
                <button className="btn btn-outline-secondary btn-sm mb-2">←</button>
                <button onClick={() => props.deleteCard(props.card._id)} className="btn btn-outline-danger btn-sm mb-2">X</button>
                <UpdateModal
                     card={props.card}
                     columns={props.columns}
                     priorities={props.priorities}
                     updateCard={props.updateCard}
                />
                <button className="btn btn-outline-secondary btn-sm mt-1" >→</button>
            </div>
        </div>
    );
}

export default Card;