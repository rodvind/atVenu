import React from 'react';
import Modal from 'react-modal';
const AddNote = (props) => (
  <div>
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      contentLabel="Selected Option"
    >
      <h3>Selected Option</h3>
      <input type='text' name='description' onChange={props.handleNote}/>
      <input type='number' name='price' onChange={props.handlePrice}/>
      <button onClick={props.closeModal}>Save</button>

    </Modal>
  </div>
);

export default AddNote;