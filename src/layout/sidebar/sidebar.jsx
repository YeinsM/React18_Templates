import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;

// import { useState } from 'react';
// import './Sidebar.scss';

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//       <button className="toggle-button" onClick={toggleSidebar}>
//         <span className="toggle-icon">&#9776;</span>
//       </button>
//       <ul className="menu">
//         <li>Inicio</li>
//         <li>Acerca de</li>
//         <li>Servicios</li>
//         <li>Contacto</li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
