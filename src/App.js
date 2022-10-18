import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Columns from "./components/Columns";
import CreateModal from "./components/CreateModal";
import CreateColumn from "./components/CreateColumn";

function App() {
    const [columns, setColumns] = useState([])
    const [cards, setCards] = useState([])
    const [priorities, setPriorities] = useState([1, 2, 3, 4, 5])

    function getColumns() {
        axios.get('http://nazarov-kanban-server.herokuapp.com/column')
            .then(function (response) {
                setColumns(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const deleteColumns = (_id) => {
        axios.delete(`http://nazarov-kanban-server.herokuapp.com/column/${_id}`)
            .then((response) => {
                getColumns();
            })
            .catch(function (error) {
                console.log(error)
            })

        const posts = columns.filter(item => item._id !== _id);
        setColumns(posts);
    }

    function createColumns(column) {
        axios.post('http://nazarov-kanban-server.herokuapp.com/column', column)
            .then(function (response) {
                getColumns()
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    function getCards() {
        axios.get('http://nazarov-kanban-server.herokuapp.com/card')
            .then(function (response) {
                setCards(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    useEffect(() => {
        getColumns()
        getCards()
    }, []);


    function changePriority(id, priority, value) {
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${id}`, {'priority': priority + value})
            .then(function (response) {
                getCards();
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    const updateCard = (card) => {
        axios.patch(`http://nazarov-kanban-server.herokuapp.com/card/${card._id}`, card)
            .then((response) => {
                getCards();
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const createCard = (card) => {
        axios.post(`http://nazarov-kanban-server.herokuapp.com/card`, card)
            .then((response) => {
                getCards();
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    const deleteCard = (_id) => {
        axios.delete(`http://nazarov-kanban-server.herokuapp.com/card/${_id}`)
            .then((response) => {
                getCards();
            })
            .catch(function (error) {
                console.log(error)
            })

        const posts = cards.filter(item => item._id !== _id);
        setCards(posts);
    }




    return (
        <div className="App">
            <h1>Kanban board</h1>
            <div className='container'>
               <div className='row align-items-start'>
                <CreateColumn
                    cards={cards}
                    setCards={setCards}
                    columns={columns}
                    createColumns={createColumns}
                    setColumns={setColumns}
                />
                <CreateModal
                    createCard={createCard}
                    cards={cards}
                    setCards={setCards}
                    changePriority={changePriority}
                    columns={columns}
                    priorities={priorities}
                    updateCard={updateCard}
                />
               </div>
                <div className='row align-items-start'>
                    {columns.map(el => <Columns column={el}
                                                cards={cards}
                                                key={el._id}
                                                changePriority={changePriority}
                                                columns={columns}
                                                priorities={priorities}
                                                updateCard={updateCard}
                                                setCards={setCards}
                                                deleteCard={deleteCard}
                                                deleteColumns={deleteColumns}


                    />)}

                </div>
            </div>
        </div>
    );
}

export default App;
