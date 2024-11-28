import './../styles/components/pages/Culturapopular.css';


const CulturapopularPage = (props) => {
    return (
        <main className="holder">
            <div>
                <h2>LITERATURA, COMICS Y CINE</h2>
                <p>La novela de J. R. R. Tolkien, El Señor de los Anillos, recibió enorme influencia de los mitos europeos septentrionales, según lo admitió el propio autor. A medida que el trabajo se popularizaba, elementos de su mundo de fantasía fueron entrando continuamente en la percepción popular del género fantástico. En casi todas las novelas modernas fantásticas se pueden encontrar criaturas nórdicas tales como elfos, enanos y gigantes de hielo. </p>
                <p>En el caso de los cómics, en la editorial Marvel aparecen dioses nórdicos como tales. Es muy conocido el caso de Thor o su hermano y enemigo Loki. También aparecen Odín, Tyr, Jörmundgandr, Heimdall y muchos otros.</p>
                <p>En el mundo del cine también se encuentra muy presente, algunas acompañan el folclore desde algún hito histórico, otras se apoyan más en la fantasía. O mismo en la televisión, podemos ver hasta en algunas series que incluso se preguntan qué estarían haciendo los dioses si existieran en el mundo actual o qué pasaría si una antigua leyenda de la mitología empezara a volverse realidad en el presente, dando pie a jugar con el misterio, al terror e incluso a la comedia en forma de serie.</p>

                <section className='sectioncultura'>
                    <img src="/images/culturapopular/anillo.webp" alt="anillo" />
                    <img src="/images/culturapopular/thorcomic.jpg" alt="comic" />
                    <img src="/images/culturapopular/thorpelicula.jpg" alt="thor" />
                    <img src="/images/culturapopular/northman.jpg" alt="jpg" />
                    <img src="/images/culturapopular/ragnarok.webp" alt="thor" />

                </section>

                <h2>VIDEOJUEGOS</h2>
                <div className="tarjeta">
                    <img src="/images/culturapopular/godofwar.jpg" alt="godaofwar" />
                    <h2>God of War: Ragnarök</h2>
                </div>

                <div className="tarjeta">
                    <img src="/images/culturapopular/hellblade.jpg" alt="hellblade" />
                    <h2>Hellblade: Senua's Sacrifice</h2>
                </div>

                <div className="tarjeta">
                    <img src="/images/culturapopular/assassin.jpg" alt="assassin" />
                    <h2>Assassin's Creed Valhalla</h2>
                </div>

                <div className="tarjeta">
                    <img src="/images/culturapopular/odinsphere.png" alt="odinsphere" />
                    <h2>Odin Sphere</h2>
                </div>

                <div className="tarjeta">
                    <img src="/images/culturapopular/ageofmithology.jpg" alt="age" />
                    <h2>Age of Mithology</h2>
                </div>

                <div className="tarjeta">
                    <img src="/images/culturapopular/banner.jpg" alt="banner" />
                    <h2>The Banner Saga</h2>
                </div>



            </div>
        </main>
    )
}

export default CulturapopularPage;