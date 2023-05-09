import React from 'react';
import {Modal} from 'reactstrap';
import { ModalBody, ModalHeader, Row, Col } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

function Profile(){

    const [modal, setmodal] = useState(false);

    const [asset, setasset] = useState({
        type: '',
        location: '',
        threat: '',
        level: '',
        currentdefense: '',
        proposeddefense: ''

    })
    const handleInput = (event) => {
        setasset({...asset, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('https://nodetry.azurewebsites.net/postasset', asset)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
                <ModalHeader>
                    <ModalBody>
                        <form>
                            <Row>
                                <Col lg={12}>
                                    <div>
                                        <label htmlFor = 'type'>
                                            Type
                                        </label>
                                        <input type='text' className='form-control' placeholder='Enter Type' name='type' onChange={handleInput}/>
                                        
                                        <label htmlFor = 'location'>
                                        Location
                                        </label>
                                        <input type='text' className='form-control' placeholder='Enter Location' name='location' onChange={handleInput}/>
                                        
                                        <label htmlFor = 'threat'>
                                        Threat
                                        </label>
                                        <input type='text' className='form-control' placeholder='Enter Threat' name='threat' onChange={handleInput}/>
                                        
                                        <label htmlFor = 'level'>
                                        Level
                                        </label>
                                        <input type='number' className='form-control' placeholder='Enter Level' name='level'  onChange={handleInput}/>
                                        
                                        <label htmlFor = 'currentdefense'>
                                        Current Defense
                                        </label>
                                        <input type='text' className='form-control' placeholder='Enter Current Defense' name='currentdefense' onChange={handleInput}/>
                                        
                                        <label htmlFor = 'proposeddefense'>
                                        Proposed Defense
                                        </label>
                                        <input type='text' className='form-control' placeholder='Enter Proposed Defense' name='proposeddefense' onChange={handleInput}/>
                                    </div>
                                </Col>
                            </Row>
                        </form>
                        <button className='btn mt-3' style={{ backgroundColor: '#0b3629', color: 'white'}} onClick = {handleSubmit}>Open Form</button>
                    </ModalBody>
                </ModalHeader>
            </Modal>

            <button className='btn mt-3' style={{ backgroundColor: '#0b3629', color: 'white'}} onClick = {()=>setmodal(true)}>Open Form</button>
        </div>
    )
}

export default Profile;