import ReactDOM from 'react-dom';

export default function Modal({children}){
    const modalRoot = document.getElementById("modal")
    return ReactDOM.createPortal((<div>{children}</div>),modalRoot)
}