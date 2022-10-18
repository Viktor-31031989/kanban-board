import React from 'react';
import Card from "./Card";

function Columns({column, cards, changePriority, columns, priorities,updateCard, deleteCard, deleteColumns}) {
    return (
        <div className="col">
            <button onClick={()=> deleteColumns(column._id)}>delete {column.title}</button>
            {cards.filter(el => column.title === el.status).map
            (el => <Card card={el} key={el._id}
                         changePriority={changePriority}
                         columns={columns}
                         priorities={priorities}
                         updateCard={updateCard}
                         deleteCard={deleteCard}
            />)}

        </div>
    );
}

export default Columns;