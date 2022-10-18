import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function CreateColumn(props) {
    const [modal, setModal] = useState(false);
    const [taskName, setTaskName] = useState('');
    const [taskStatus, setTaskStatus] = useState('')

    const toggle = () => setModal(!modal);

    const okButtonHandler = () => {
        toggle();
            props.createColumns({
            status: taskStatus,
            title: taskName
        })

    }
    return (
        <div>
            <Button className="btn btn-outline-danger btn-sm mb-3" onClick={toggle}>
                Add column
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create column </ModalHeader>
                <ModalBody>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">status</span>
                        <input value={taskStatus} onChange={(e) => setTaskStatus(e.target.value)}  className="form-control " aria-label="Default select example"  aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">name</span>
                        <input value={taskName} onChange={(e)=>setTaskName(e.target.value)} type="text" className="form-control" aria-label="Sizing example input"
                               aria-describedby="inputGroup-sizing-default"/>
                    </div>



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

export default CreateColumn;