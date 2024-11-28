import './../styles/components/pages/Home.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images\homepage\arbolhome.png" alt="arbol" />
            </div>
            <div className="bienvenidos">
                <h2>¡¡¡¡¡BIENVENIDOS!!!!</h2>
                <p>Si sos un amante de la mitología, la historia y la cultura, estás en el lugar correcto. En esta página, te invitamos a sumergirte en el fascinante mundo de la mitología nórdica, lleno de dioses, gigantes, dragones y héroes.
                </p>
            </div>
        </main>
    );
}

export default HomePage;