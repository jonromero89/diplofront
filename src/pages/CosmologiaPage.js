import './../styles/components/pages/Cosmologia.css';

const CosmopologiaPage = (props) => {
    return (
        <main className="holder">
            <div className="columna1">
                <div className="texto">
                    <p>En la mitología nórdica el mundo está representado como un disco plano.   <img className='cosmologia1' src="/images/cosmologia/cosmologia1.jpg" alt="cosmologia1" />


                        El disco está situado en las ramas del árbol del mundo Yggdrasil, que sostenía los nueve mundos.

                        En él habitaban varias criaturas entre las que destacamos a las siguientes: un dragón llamado Nidhogg que habitaba en las raíces.

                        Este dragón roía las raíces para derribar a un águila sin nombre (consiguiéndolo en el Ragnarök) que habitaba en la rama más alta, y desde ahí vigila los nueve mundos. Esta a su vez tiene un halcón llamado Veðrfölnir en el entrecejo, que vigila los movimientos del águila. Además, hay una ardilla llamada Ratatösk que corretea de las raíces a la copa llevando noticias falsas del dragón al águila, y viceversa, sembrando así la discordia entre ellos. </ p>

                    <p>Asgard, la región alta del cielo, (as- indica áss/Æsir, gard es asentamiento o residencia), donde vivían los dioses, estaba localizada en el centro del disco, y solamente podría llegarse hasta allí caminando por el arco iris (el puente Bifröst), guardado por Heimdall, quien estaba provisto de un gran cuerno con el que avisaba cada vez que un Æsir (dioses del panteón de la mitología nórdica) o un Vanir lo cruzaba. Los gigantes vivían en un lugar llamado Jötunheim. <img className='cosmologia2' src="/images/cosmologia/cosmologia2.jpg" alt="cosmologia2" />

                        Había una fría y oscura morada llamada Niflheim, y en la zona más profunda de esta se encontraba Helheim, lugar regido por Hela, hija de Loki.  De acuerdo a la Edda prosaica, este era el lugar último de residencia de la mayoría de los muertos. Estaba situado en algún lugar al sur del ardiente reino de Muspelheim, hogar de los gigantes de fuego. <img className='cosmologia3' src="/images/cosmologia/cosmologia3.jpg" alt="cosmologia3" />

                        Entre otros reinos que componen esta cosmología podemos destacar Alfheim, hogar de los elfos de luz (ljósálfar) y Svartálfaheim, hogar de los elfos oscuros. En medio de Asgard y Niflheim se encontraba Midgard, la región baja del cielo, el mundo habitado por los humanos. </p>

                    <p>  La cosmología de la mitología nórdica incluye un fuerte componente de dualidad. Por ejemplo el día y la noche tienen sus contrapartidas mitológicas: Dagr/Skinfaxi y Nótt/Hrímfaxi, el sol y el lobo que la persigue (en esta mitología «el» sol es femenino y «la» luna, masculina)  trayendo la oscuridad Sól y Sköll, la luna y el lobo que la persigue Máni y Hati, y la oposición total entre Niflheim y Muspelheim que da origen al mundo. Esto puede verse reflejado en una profunda creencia metafísica en los opuestos para la creación del universo.  </p>


                </div>


                
            </div>

            

            <div className="columna2">
                <div className="textomundos">
                <h3>LOS NUEVE MUNDOS:</h3>
                    <ul className='reinos'>
                        <li>Asgard, el reino de los dioses</li>
                        <li>Midgard, el reino de los humanos</li>
                        <li>Jotunheim, el reino de los gigantes</li>
                        <li>Helheim, el reino de los muertos</li>
                        <li>Niflheim, el reino de la oscuridad y el hielo</li>
                        <li>Muspelheim, el reino del fuego</li>
                        <li>Alfheim, el reino de los elfos</li>
                        <li>Vanaheim, el reino de los vanir</li>
                        <li>Svartalfheim, el reino de los enanos</li>
                    </ul>
                </div>
                <div className="imagenmundos">
                    <img src="/images/cosmologia/yggdrasil.webp" alt="yggdrasil" />
                </div>
            </div>
        </main>


    )
}

export default CosmopologiaPage;