import '../styles/signoComponent.css';

function SignoComponent({signo}) {
    const imagePath = `/images/${signo.imagen}`;
    return(
        <div className="signo-componente">
            <img src={imagePath} alt={signo.nombre}/>
        </div>
    );
}

export default SignoComponent;