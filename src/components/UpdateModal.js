import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function UpdateModal(props) {
    const [modal, setModal] = useState(false);
    const [taskName, setTaskName] = useState(props.card.name);
    const [taskDescription, setTaskDescription] = useState(props.card.description)
    const [taskStatus, setTaskStatus] = useState(props.card.status)
    const [taskPriority, setTaskPriority] = useState(props.card.priority)


    const toggle = () => setModal(!modal);

    const okButtonHandler = () => {
        toggle();
        props.updateCard({
            description: taskDescription,
            priority: taskPriority,
            status: taskStatus,
            _id: props.card._id,
            name: taskName

        })
    }


    return (
        <div>
            <Button className="btn btn-outline-danger btn-sm" onClick={toggle}>
                update
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Update task</ModalHeader>
                <ModalBody>
                    <select value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}  className="form-select mb-3" aria-label="Default select example">
                        {props.columns.map(el =>  <option value={el.title}>{el.title}</option>)}

                    </select>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">name</span>
                        <input value={taskName} onChange={(e)=>setTaskName(e.target.value)   } type="text" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                        <input value={taskDescription} onChange={(e)=>setTaskDescription(e.target.value)   } type="text" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <select value={taskPriority}
                            onChange={(e) => setTaskPriority(e.target.value)}
                            className="form-select mb-3"
                            aria-label="Default select example">
                        {props.priorities.map(el =>  <option value={el}>{el}</option>)}

                    </select>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={okButtonHandler}>
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
);
}

export default UpdateModal;