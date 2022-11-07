
import {
  Navbar,
  NavbarBrand
} from 'reactstrap';

import ModalMenu from './ModalMenu';

const Menu = () =>  {
    
  
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="me-auto">
            Anastasiia Ganushkevych
          </NavbarBrand>
          <ModalMenu/>
        </Navbar>
      </div>
    );
  }
  
  export default Menu;
 