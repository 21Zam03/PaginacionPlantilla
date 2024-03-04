import ReactPaginate from "react-paginate";
import SignoComponent from "./signoComponent";
import { useState } from "react";
import '../styles/paginateComponent.css';

function PaginateComponent() {
    const lista = [
        {
            id: 1,
            nombre: 'Aries',
            elemento: 'Fuego',
            fecha: '21 de marzo - 19 de abril',
            descripcion: 'Los arianos son conocidos por su valentía y energía.',
            imagen: 'aries.jpg',
        },
        {
            id: 2,
            nombre: 'Tauro',
            elemento: 'Tierra',
            fecha: '20 de abril - 20 de mayo',
            descripcion: 'Tauro es conocido por su paciencia y determinación.',
            imagen: 'tauro.jpg',
        },
        {
            id: 3,
            nombre: 'Géminis',
            elemento: 'Aire',
            fecha: '21 de mayo - 20 de junio',
            descripcion: 'Géminis es curioso y adaptable, con una naturaleza dual.',
            imagen: 'geminis.jpg',
        },
        {
            id: 4,
            nombre: 'Cáncer',
            elemento: 'Agua',
            fecha: '21 de junio - 22 de julio',
            descripcion: 'Cáncer es intuitivo y se preocupa profundamente por los demás.',
            imagen: 'cancer.jpg',
        },
        {
            id: 5,
            nombre: 'Leo',
            elemento: 'Fuego',
            fecha: '23 de julio - 22 de agosto',
            descripcion: 'Los leoninos son carismáticos y tienen una fuerte autoestima.',
            imagen: 'leo.jpg',
        },
        {
            id: 6,
            nombre: 'Virgo',
            elemento: 'Tierra',
            fecha: '23 de agosto - 22 de septiembre',
            descripcion: 'Virgo es analítico y busca la perfección en todo.',
            imagen: 'virgo.jpg',
        },
        {
            id: 7,
            nombre: 'Libra',
            elemento: 'Aire',
            fecha: '23 de septiembre - 22 de octubre',
            descripcion: 'Libra busca la armonía y la justicia en todas las cosas.',
            imagen: 'libra.jpg',
        },
        {
            id: 8,
            nombre: 'Escorpio',
            elemento: 'Agua',
            fecha: '23 de octubre - 21 de noviembre',
            descripcion: 'Escorpio es apasionado y misterioso.',
            imagen: 'escorpio.jpg',
        },
        {
            id: 9,
            nombre: 'Sagitario',
            elemento: 'Fuego',
            fecha: '22 de noviembre - 21 de diciembre',
            descripcion: 'Sagitario es aventurero y optimista.',
            imagen: 'sagitario.jpg',
        },
        {
            id: 10,
            nombre: 'Capricornio',
            elemento: 'Tierra',
            fecha: '22 de diciembre - 19 de enero',
            descripcion: 'Capricornio es ambicioso y disciplinado.',
            imagen: 'capricornio.jpg',
        },
        {
            id: 11,
            nombre: 'Acuario',
            elemento: 'Aire',
            fecha: '20 de enero - 18 de febrero',
            descripcion: 'Acuario es innovador y amigable.',
            imagen: 'acuario.jpg',
        },
        {
            id: 12,
            nombre: 'Piscis',
            elemento: 'Agua',
            fecha: '19 de febrero - 20 de marzo',
            descripcion: 'Piscis es intuitivo y compasivo.',
            imagen: 'piscis.jpg',
        },
    ]

    const itemsPerPage = 6; // Cantidad de elementos por página
    const totalItems = lista.length; // Cantidad total de elementos
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const renderContenedores = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        const productosPagina = lista.slice(startIndex, endIndex);

        return productosPagina.map((signo, index) => (
            <div key={index} className="contenedor-paginado-signo">
                <div key={signo.id} className="signo">
                    <SignoComponent signo={signo} />
                </div>
            </div>
        ));
    };

    return (
        <div className="paginacion-componente">
            <div className="signos-paginado">
                {renderContenedores()}
            </div>
            <ReactPaginate
                pageCount={Math.ceil(totalItems / itemsPerPage)}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName="paginacion"
                pageClassName="numeroPagina"
                activeClassName="paginaActual"
            />
        </div>
    );
}

export default PaginateComponent;