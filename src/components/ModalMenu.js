import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBIcon,
} from "mdb-react-ui-kit";

const ModalMenu = () => {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
        <MDBIcon icon="camera-retro" size="2x" onClick={toggleShow} />
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
        <MDBModalDialog size="sm">
          <MDBModalContent>
          <MDBModalHeader>
              <MDBModalTitle>Menu</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <ul className="list-container">
                <li className="list home">HOME</li>

                <li className="list about">ABOUT</li>

                <li className="list contact">CONTACT</li>
              </ul>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};
export default ModalMenu;
