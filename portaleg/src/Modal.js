import ReactDOM from 'react-dom';
import './App.css';

export default function Modal({children}){
    const modalRoot = document.getElementById("modal")
    return ReactDOM.createPortal((<div className='w3-modal'>{children}</div>),modalRoot)
}