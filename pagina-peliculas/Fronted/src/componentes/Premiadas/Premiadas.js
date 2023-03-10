import React from "react";
import "./Premiadas.css";
import "./premiadas2.0.css";
import "./peliculasPremiadas.css";

export default function Premiadas() {
  return (
    <div>
      <h1>Actores</h1>

      <div className="containerPremiadas">
        <div className="carouselPremiadas">
          <div className="carousel__face">
            <span className="actors">Jim Carrey</span>
          </div>
          <div className="carousel__face">
            <span className="actors">Margot Robbie</span>
          </div>
          <div className="carousel__face">
            <span className="actors">Will Smith</span>
          </div>
          <div className="carousel__face">
            <span className="actors">Emma Stone</span>
          </div>
          <div className="carousel__face">
            <span className="actors">Dwayne Johnson</span>
          </div>
          <div className="carousel__face">
            <span className="actors">Leonardo Dicaprio</span>
          </div>
          <div className="carousel__face">
            <span className="actors">Anya Taylor-Joy</span>
          </div>
          <div className="carousel__face">
            <span className="actors">Adan Sandler</span>
          </div>
          <div className="carousel__face">
            <span className="actors">Gal Gadot</span>
          </div>
        </div>
      </div>
      {/*                                         JIM CARREY                                    */}
      {/* ------------------------------------------------------------------------------------ */}
      <div className="containerGrande">
        <div className="modalPremiadas">
          <div className="section">
            <input
              className="modal-btn"
              type="checkbox"
              id="modal-btn"
              name="modal-btn"
            />
            <label htmlFor="modal-btn">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal">
              <div className="modal-wrap">
                <img
                  src="https://e00-elmundo.uecdn.es/elmundo/imagenes/2010/02/27/1267281470_0.gif"
                  alt=""
                />
                <p>
                  James Eugene ??Jim?? Carrey (Newmarket, Ontario; 17 de enero de
                  1962) es un actor y comediante canadiense-estadounidense. Es
                  conocido por sus interpretaciones c??micas slapstick. Por su
                  trabajo gan?? dos premios Globo de Oro y fue candidato a un
                  premio BAFTA.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Jim_Carrey"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/206-jim-carrey"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                             MAROT ROBBIE                               */}
        {/*----------------------------------------------------------------------------------------*/}

        <div className="modalPremiadas2">
          <div className="section2">
            <input
              className="modal-btn2"
              type="checkbox"
              id="modal-btn2"
              name="modal-btn2"
            />
            <label htmlFor="modal-btn2">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal2">
              <div className="modal-wrap2">
                <img
                  src="https://s.yimg.com/sr/imgv1/1/54c5dda4-b1d1-3a76-9523-bc72307146ee"
                  alt=""
                />
                <p>
                  Margot Elise Robbie (Dalby, Queensland; 2 de julio de 1990) es
                  una actriz y productora de cine australiana. Criada en una
                  granja, Robbie debi?? trabajar desde temprana edad para ayudar
                  a sustentar a su familia luego del abandono de su padre. En su
                  infancia siempre hab??a mostrado inter??s por la actuaci??n y a
                  los 17 a??os se mud?? a Melbourne en busca de oportunidades.
                </p>
                <br></br>
                <a
                  href="https://es.wikipedia.org/wiki/Margot_Robbie"
                  className="apremios"
                >
                  Leer m??s
                </a>
                <br></br>
                <a
                  href="https://www.themoviedb.org/person/234352-margot-robbie"
                  className="apremios"
                >
                  pel??culas
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*                                            WILL SMITH                                               */}
        {/* ----------------------------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section3">
            <input
              className="modal-btn3"
              type="checkbox"
              id="modal-btn3"
              name="modal-btn3"
            />
            <label htmlFor="modal-btn3">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal3">
              <div className="modal-wrap3">
                <img
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1388090285.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*"
                  alt=""
                />
                <p>
                  Willard Carroll Smith (Filadelfia, Pensilvania; 25 de
                  septiembre de 1968), m??s conocido como Will Smith, es un
                  actor, rapero, productor cinematogr??fico, productor
                  discogr??fico, guionista, empresario y fil??ntropo
                  estadounidense. Ha tenido ??xito en sus dos facetas art??sticas:
                  siendo ganador de un Premio ??scar con dos nominaciones
                  previas, nominado a cuatro Premios Globo de Oro y ha ganado
                  cuatro Premios Grammy.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Will_Smith"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/2888-will-smith"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                             EMMA STONE                                               */}
        {/* -------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section4">
            <input
              className="modal-btn4"
              type="checkbox"
              id="modal-btn4"
              name="modal-btn4"
            />
            <label htmlFor="modal-btn4">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal4">
              <div className="modal-wrap4">
                <img
                  src="https://media.revistavanityfair.es/photos/60e82c4c83a12578074959ac/master/w_1600%2Cc_limit/247124.jpg"
                  alt=""
                />
                <p>
                  Emily Jean Stone (Scottsdale, Arizona; 6 de noviembre de
                  1988), m??s conocida profesionalmente como Emma Stone, es una
                  actriz estadounidense. Tambi??n ha incursionado en la
                  producci??n cinematogr??fica. Ha recibido numerosos premios,
                  entre ellos un ??scar, un BAFTA, un SAG y un Globo de Oro a
                  mejor actriz, por su interpretaci??n en la cinta La La Land.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Emma_Stone"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/54693-emma-stone"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                           DWAYNE JHONSON                                              */}
        {/* ------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section5">
            <input
              className="modal-btn5"
              type="checkbox"
              id="modal-btn5"
              name="modal-btn5"
            />
            <label htmlFor="modal-btn5">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal5">
              <div className="modal-wrap5">
                <img
                  src="https://st1.uvnimg.com/d2/d6/772ae82444c98ae25f339e8ad5fa/dwayne-johnson-0.jpg"
                  alt=""
                />
                <p>
                  Dwayne Douglas Johnson (Hayward, California; 2 de mayo de
                  1972) es un actor y luchador profesional estadounidense. Se
                  desempe???? como luchador profesional para la WWE hasta su
                  retirada oficial en 2019,con el objetivo de centrarse en su
                  carrera art??stica. Ha participado en una gran diversidad de
                  pel??culas siendo premiado en bastantes de ellas.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Dwayne_Johnson"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/18918-dwayne-johnson"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                      leonardo dicaprio                              */}
        {/* ------------------------------------------------------------------------------------ */}
        <div className="modalPremiadas">
          <div className="section6">
            <input
              className="modal-btn6"
              type="checkbox"
              id="modal-btn6"
              name="modal-btn6"
            />
            <label htmlFor="modal-btn6">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal6">
              <div className="modal-wrap6">
                <img
                  src="https://people.com/thmb/g7XQO4JJeF4GTUgR9PFFnvEZ_tY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(665x0:667x2)/leonardo-dicaprio-6-1333x2000-df923fdba7e5404bb9dc2e39dcefb106.jpg"
                  alt=""
                />
                <p>
                  Leonardo Wilhelm DiCaprio (Los ??ngeles, California; 11 de
                  noviembre de 1974) es un actor, productor de cine y
                  ambientalista estadounidense. Ha recibido numerosos premios
                  entre los que destacan un ??scar al mejor actor; un premio
                  BAFTA al mejor actor por su actuaci??n en El renacido (2015);
                  dos Globos de Oro al mejor actor de drama por sus actuaciones
                  en El aviador (2004) y El renacido; y un Globo de Oro al mejor
                  actor de comedia o musical por El lobo de Wall Street (2013).
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Leonardo_DiCaprio"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/6193-leonardo-dicaprio"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                        Anya taylor joy                                */}
        {/* ------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section7">
            <input
              className="modal-btn7"
              type="checkbox"
              id="modal-btn7"
              name="modal-btn7"
            />
            <label htmlFor="modal-btn7">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal7">
              <div className="modal-wrap7">
                <img
                  src="https://www.instyle.es/medio/2021/09/20/anya-taylor-joy-con-vestido-color-champan-de-dior-en-los-premios-emmy-2021_4f729aa6_1000x1466.jpg"
                  alt=""
                />
                <p>
                  Anya-Josephine Marie Taylor-Joy (Miami, Florida; 16 de abril
                  de 1996) es una actriz y modelo brit??nica-argentina nacida en
                  Estados Unidos. Ha recibido varios reconocimientos, incluido
                  un Globo de Oro, un Premio del Sindicato de Actores y un
                  Premio de la Cr??tica Televisiva, adem??s de recibir
                  nominaciones a los Premios BAFTA y a los Premios Primetime
                  Emmy. En 2021, la revista Time la coloc?? en la lista ??Los
                  pr??ximos 100 de Time??.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Anya_Taylor-Joy"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/1397778-anya-taylor-joy"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                        ADAM SANDLER                                   */}
        {/* ------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section8">
            <input
              className="modal-btn8"
              type="checkbox"
              id="modal-btn8"
              name="modal-btn8"
            />
            <label htmlFor="modal-btn8">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal8">
              <div className="modal-wrap8">
                <img
                  src="https://e.rpp-noticias.io/normal/2020/02/08/231423_898437.jpg"
                  alt=""
                />
                <p>
                  Adam Richard Sandler (Nueva York, 9 de septiembre de 1966), es
                  un comediante, actor, escritor, y productor estadounidense.
                  Despu??s de convertirse en miembro del elenco de Saturday Night
                  Live, ha protagonizado una gran cantidad de pel??culas de
                  Hollywood que han recaudado cerca de dos mil millones de
                  d??lares de taquilla.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Adam_Sandler"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/19292-adam-sandler"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                         GAL GADOT                                    */}
        {/* ------------------------------------------------------------------------------------ */}
        <div className="modalPremiadas">
          <div className="section9">
            <input
              className="modal-btn9"
              type="checkbox"
              id="modal-btn9"
              name="modal-btn9"
            />
            <label htmlFor="modal-btn9">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal9">
              <div className="modal-wrap9">
                <img
                  src="https://fotografias.antena3.com/clipping/cmsimages02/2018/01/12/686C91D5-E9F9-4DBA-A173-81ADECF7088A/98.jpg?crop=1120,630,x0,y0&width=1900&height=1069&optimize=high&format=webply"
                  alt=""
                />
                <p>
                  Gal Gadot Varsano (en hebreo, ???? ????????; Petaj Tikva, 30 de
                  abril de 1985) es una actriz, productora y modelo israel??. A
                  los 18 a??os gan?? el t??tulo de Miss Israel 2004 con el cual
                  represent?? a Israel en Miss Universo 2004, donde no logr??
                  entrar al top de finalistas. Sirvi?? dos a??os en las Fuerzas de
                  Defensa de Israel como instructora de combate, y comenz?? a
                  estudiar derecho y relaciones internacionales en la
                  universidad IDC Herzliya mientras desarrollaba su carrera de
                  modelo y actuaci??n.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Gal_Gadot"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/90633-gal-gadot"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                         SAMUEL L JACKSON                                */}
        {/* *---------------------------------------------------------------------------------*---* */}
        <div className="modalPremiadas">
          <div className="section10">
            <input
              className="modal-btn10"
              type="checkbox"
              id="modal-btn10"
              name="modal-btn10"
            />
            <label htmlFor="modal-btn10">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal10">
              <div className="modal-wrap10">
                <img
                  src="https://img.asmedia.epimg.net/resizer/VKiOrjtBuHnZLnhIJuZ3Cd9H188=/1952x1098/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/35DLHQL2NWZGV7OYGBMCVRBNBE.jpg"
                  alt=""
                />
                <p>
                  Samuel Leroy Jackson (Washington D. C., 21 de diciembre de
                  1948), conocido como Samuel L. Jackson, es un actor y
                  productor de cine, televisi??n y teatro estadounidense. Ha sido
                  candidato al Premio ??scar, a los Globos de Oro y al Premio del
                  Sindicato de Actores, as?? como ganador de un BAFTA al mejor
                  actor de reparto y en 2022 se le entreg?? un ??scar honor??fico a
                  su trayectoria profesional.1??? Es conocido por sus
                  intervenciones en pel??culas como Coming to America (1988),
                  Goodfellas (1990), Jurassic Park (1993), Pulp Fiction (1994),
                  Die Hard with a Vengeance (1995), A Time to Kill (1996), El
                  protegido (2000), Changing Lanes (2002), S.W.A.T. (2003),
                  Django Unchained (2012), Spiral, From the Book of Saw (2021)
                  en el Universo cinematogr??fico de Marvel como el director de
                  S.H.I.E.L.D., Nick Fury, en la saga Star Wars como el maestro
                  Mace Windu (1999, 2002 y 2005) y en The Hateful Eight (2015)
                  como el mayor Marquis Warren, El Cazarrecompensas. Jackson
                  tambi??n es conocido por interpretar la voz del superh??roe
                  Frozono en The Incredibles (2004), la de Whiplash en Turbo
                  (2013), ZOG en Astro Boy (2009) y el oficial Frank Tenpenny en
                  el exitoso videojuego sandbox Grand Theft Auto San Andreas
                  (2004).
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Samuel_L._Jackson"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/2231-samuel-l-jackson"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                        CHIRS HEMSWORTH                               */}
        {/* ------------------------------------------------------------------------------------ */}
        <div className="modalPremiadas11">
          <div className="section11">
            <input
              className="modal-btn11"
              type="checkbox"
              id="modal-btn11"
              name="modal-btn11"
            />
            <label htmlFor="modal-btn11">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal11">
              <div className="modal-wrap11">
                <img
                  src="https://e00-elmundo.uecdn.es/blogs/elmundo/personajazos/imagenes_posts/2019/02/14/197835_540x399.jpg"
                  alt=""
                />
                <p>
                  Christopher Hemsworth (Melbourne; 11 de agosto de 1983),
                  conocido simplemente como Chris Hemsworth, es un actor, actor
                  de voz y productor australiano. Criado en la comunidad de
                  Bulman, al norte de Australia, mostr?? inter??s por la actuaci??n
                  motivado por su hermano mayor e inici?? su carrera en 2002 con
                  apariciones menores en series de televisi??n de su pa??s. A??os
                  m??s tarde, se mud?? a S??dney para conseguir mejores
                  oportunidades y logr?? reconocimiento tras unirse al elenco
                  principal de Home and Away, serie para la que grab?? 189
                  episodios en cuesti??n de tres a??os.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Chris_Hemsworth"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/74568-chris-hemsworth"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                    JENIFFER ANISTON                                   */}
        {/* ------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section12">
            <input
              className="modal-btn12"
              type="checkbox"
              id="modal-btn12"
              name="modal-btn12"
            />
            <label htmlFor="modal-btn12">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal12">
              <div className="modal-wrap12">
                <img
                  src="https://www.eluniverso.com/resizer/RA0NxoO8nIyhoMVnCNfw4bfMIh0=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/2BMLCX75INBTBGR5F6DRDE77M4.jpg"
                  alt=""
                />
                <p>
                  Jennifer Joanna Aniston (Los ??ngeles, California, 11 de
                  febrero de 1969), conocida como Jennifer Aniston, es una
                  actriz, comediante, directora y productora de cine
                  estadounidense. En la d??cada de 1990 se gan?? el reconocimiento
                  mundial interpretando a Rachel Green en la serie de televisi??n
                  Friends.Dicho papel le hizo ganar un Premio Emmy, un Premio
                  Globo de Oro y un Premio del Sindicato de Actores.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Jennifer_Aniston"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/4491-jennifer-aniston"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                   BRUCE WILLIS                                         */}
        {/* -------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section13">
            <input
              className="modal-btn13"
              type="checkbox"
              id="modal-btn13"
              name="modal-btn13"
            />
            <label htmlFor="modal-btn13">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal13">
              <div className="modal-wrap13">
                <img
                  src="https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/2/ec/2ec8e58a-8e3a-58a4-a1d9-42977915033a/6244969bb83c8.image.jpg?resize=1200%2C778"
                  alt=""
                />
                <p>
                  Walter Bruce Willis (Idar-Oberstein, Alemania Occidental; 19
                  de marzo de 1955) es un actor, productor y m??sico
                  estadounidense, cuya trayectoria comenz?? en la industria
                  televisiva durante los a??os 1980. Ha interpretado roles
                  c??micos, dram??ticos y de acci??n. Es conocido por su
                  interpretaci??n del oficial John McClane en la saga Die Hard,
                  que obtuvo buenas cr??ticas y una recaudaci??n considerable a
                  partir del estreno de la primera cinta en 1988. Asimismo, ha
                  aparecido en m??s de sesenta pel??culas, entre las que se
                  incluyen ??xitos de taquilla como Pulp Fiction, Sin City, Doce
                  Monos, El quinto elemento, Armageddon, El sexto sentido, El
                  protegido, Glass, Looper, Lucky Number Slevin o The
                  Expendables.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Bruce_Willis"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/62-bruce-willis"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                             CAMERON DIAZ                              */}
        {/* ------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section14">
            <input
              className="modal-btn14"
              type="checkbox"
              id="modal-btn14"
              name="modal-btn14"
            />
            <label htmlFor="modal-btn14">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal14">
              <div className="modal-wrap14">
                <img
                  src="http://www.quelapaseslindo.com.ar/wp-content/uploads/camerondiazoscar.jpg"
                  alt=""
                />
                <p>
                  Cameron Michelle Diaz (San Diego, California; 30 de agosto de
                  1972) es una actriz, generalmente de cine, y modelo
                  estadounidense. Salt?? a la fama en la d??cada de 1990 por sus
                  papeles en pel??culas como La M??scara (1994), La boda de mi
                  mejor amigo (1997) y Algo pasa con Mary (1998). Otras
                  pel??culas por las que es conocida son Los ??ngeles de Charlie
                  (2000) y su secuela Los ??ngeles de Charlie: Al l??mite (2003),
                  por darle voz a la Princesa Fiona en la franquicia de Shrek
                  (2001-2010), The Holiday (2006), Knight & Day (2010), The
                  Green Hornet (2011), Bad Teacher (2011), The Other Woman
                  (2014) y Annie (2014).
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Cameron_Diaz"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/6941-cameron-diaz"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                   ROBERT DAWNIE JR--------------------------------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section15">
            <input
              className="modal-btn15"
              type="checkbox"
              id="modal-btn15"
              name="modal-btn15"
            />
            <label htmlFor="modal-btn15">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal15">
              <div className="modal-wrap15">
                <img
                  src="https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2013/04/936full-robert-downey-jr..jpg?resize=596%2C840"
                  alt=""
                />
                <p>
                  Robert John Downey Jr. (Nueva York, 4 de abril de 1965) es un
                  actor, actor de voz, productor y cantante estadounidense.
                  Inici?? su carrera como actor a temprana edad apareciendo en
                  varios filmes dirigidos por su padre, Robert Downey Sr., y en
                  su infancia estudi?? actuaci??n en varias academias de Nueva
                  York. Downey gan?? relevancia en el cine protagonizando la
                  pel??cula Chaplin (1992), actuaci??n con la cual gan?? un BAFTA y
                  fue nominado a los premios ??scar y los Globo de Oro. Sin
                  embargo, se vio envuelto en una serie de problemas legales por
                  posesi??n de drogas que llevaron a que fuera arrestado en
                  numerosas ocasiones y a su vez que las productoras se negaran
                  a contratarlo para nuevos papeles. Gracias al apoyo de Mel
                  Gibson, Downey pudo regresar a la actuaci??n y en 2001 gan??
                  reconocimiento en la televisi??n con su papel en la serie Ally
                  McBeal, con el cual gan?? un Globo de Oro. En 2004 debut?? como
                  cantante con el lanzamiento de su ??lbum debut The Futurist. En
                  2008, recibi?? elogios de la cr??tica por su papel en Tropic
                  Thunder (2008), actuaci??n por la cual ser??a nuevamente
                  nominado a los premios ??scar. Tambi??n fue elogiado por su
                  papel en Sherlock Holmes (2009), con el cual gan?? un segundo
                  Globo de Oro y realiz?? una secuela titulada Sherlock Holmes:
                  Juego de sombras (2011).
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Robert_Downey_Jr."
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/3223-robert-downey-jr"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                                ANNE HATHAWAY  ------------------------------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section16">
            <input
              className="modal-btn16"
              type="checkbox"
              id="modal-btn16"
              name="modal-btn16"
            />
            <label htmlFor="modal-btn16">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal16">
              <div className="modal-wrap16">
                <img
                  src="https://e00-telva.uecdn.es/assets/multimedia/imagenes/2018/03/05/15202331411673.jpg"
                  alt=""
                />
                <p>
                  Anne Jacqueline Hathaway (Brooklyn, Nueva York; 12 de
                  noviembre de 1982) es una actriz estadounidense. Gan?? el
                  premio ??scar, el Globo de Oro, el BAFTA y el SAG a la Mejor
                  actriz de reparto por su interpretaci??n en Los miserables. La
                  revista People la nombr?? como una de las grandes estrellas
                  descubiertas en 2001 y apareci?? por primera vez en la lista de
                  las 50 personas m??s bellas del mundo de dicha revista en 2006.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Anne_Hathaway"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/1813-anne-hathaway"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*                                                JONNY DEEP--------------------------------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section17">
            <input
              className="modal-btn17"
              type="checkbox"
              id="modal-btn17"
              name="modal-btn17"
            />
            <label htmlFor="modal-btn17">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal17">
              <div className="modal-wrap17">
                <img
                  src="https://www.elcolombiano.com/documents/10157/0/640x280/0c0/0d0/none/11101/WGIM/johnny-depp-premio-maquillaje-afp-640x280-17022014.jpg"
                  alt=""
                />
                <p>
                  John Christopher Depp II (Owensboro, Kentucky; 9 de junio de
                  1963) es un actor, productor de cine y m??sico estadounidense.
                  Ha sido nominado en tres ocasiones al ??scar y recibi?? un Globo
                  de Oro,un premio del Sindicato de Actores y un C??sar. Comenz??
                  su carrera en la pel??cula de terror A Nightmare on Elm Street
                  de 1984 como Glen Lantz, una de las v??ctimas de Freddy
                  Krueger. Dos a??os despu??s, en 1986, tuvo un papel de reparto
                  en Platoon dirigido por Oliver Stone. Su papel de Tom Hanson
                  en la serie de televisi??n 21 Jump Street lo convirti?? en un
                  ??dolo adolescente. Mientras trabajaba en esta, Depp actu?? en
                  la pel??cula Edward Scissorhands, que le vali?? su primera
                  nominaci??n al Globo de Oro y reconocimiento por parte de la
                  cr??tica.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Johnny_Depp"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/85-johnny-depp"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*jackie chan
   --------------------------------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section18">
            <input
              className="modal-btn18"
              type="checkbox"
              id="modal-btn18"
              name="modal-btn18"
            />
            <label htmlFor="modal-btn18">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal18">
              <div className="modal-wrap18">
                <img
                  src="https://img.europapress.es/fotoweb/fotonoticia_20161113155428_1200.jpg"
                  alt=""
                />
                <p>
                  Chan Kong-sang (en chino, ?????????) (Cumbre Victoria, Hong Kong;
                  7 de abril de 1954), conocido por su nombre art??stico Jackie
                  Chan es un artista marcial, comediante, cantante, actor,
                  acr??bata, doble de acci??n, coordinador de dobles de acci??n,
                  director, guionista, productor y actor de voz chino. Ha
                  recibido estrellas en la Avenida de las Estrellas de Hong Kong
                  y en el Paseo de la Fama en Hollywood. Ha sido referenciado en
                  varias canciones populares, videojuegos e historietas. Como
                  cantante tambi??n fue una estrella en los g??neros cantopop y
                  mandopop, habiendo lanzado varios ??lbumes y cantando en muchas
                  de las bandas sonoras de las pel??culas en las que ha actuado.
                  Tambi??n es un reconocido fil??ntropo. En 2015, la revista
                  Forbes estim?? su fortuna en 350 millones de d??lares. En el a??o
                  2016, Jackie Chan recibi?? un ??scar Honor??fico, debido a su
                  trayectoria profesional.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Jackie_Chan"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/18897-jackie-chan"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  scarlet johanson
        -------------------------------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section19">
            <input
              className="modal-btn19"
              type="checkbox"
              id="modal-btn19"
              name="modal-btn19"
            />
            <label htmlFor="modal-btn19">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal19">
              <div className="modal-wrap19">
                <img
                  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scarlett-johansson-premiada-en-los-tony-awards-1605791157.jpg?resize=480:*"
                  alt=""
                />
                <p>
                  Scarlett Ingrid Johansson (Nueva York; 22 de noviembre de
                  1984) es una actriz, cantante, directora, productora, modelo y
                  empresaria estadounidense. Comenz?? a mostrar intereses en la
                  actuaci??n desde temprana edad, y a lo largo de su infancia y
                  adolescencia se form?? en distintos institutos como actriz.
                  Tras tener varios papeles secundarios en distintas
                  producciones, obtuvo su primer protag??nico a los once a??os con
                  la pel??cula Manny & Lo (1996), a la que luego le siguieron The
                  Horse Whisperer (1998) y Ghost World (2001), actuaciones que
                  le valieron elogios de la cr??tica. Al cumplir los dieciocho,
                  Johansson comenz?? a enfocarse en papeles m??s maduros y
                  protagoniz?? las cintas Lost in Translation (2003) y Girl with
                  a Pearl Earring (2003), con las cuales gan?? un premio BAFTA y
                  fue nominada a dos Globos de Oro. Poco despu??s, obtuvo dos
                  nominaciones m??s al Globo de Oro por A Love Song for Bobby
                  Long (2004) y Match Point (2005).
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Scarlett_Johansson"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/1245-scarlett-johansson"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  ryan reynolds 
        -------------------------------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section20">
            <input
              className="modal-btn20"
              type="checkbox"
              id="modal-btn20"
              name="modal-btn20"
            />
            <label htmlFor="modal-btn20">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal20">
              <div className="modal-wrap20">
                <img
                  src="https://i2-prod.mirror.co.uk/incoming/article9440997.ece/ALTERNATES/s1200d/Ryan-Reynolds-poses-with-his-award-during-the-22nd-Annual-Critics-Choice-Awards-in-Santa-Monica.jpg"
                  alt=""
                />
                <p>
                  Ryan Rodney Reynolds (Vancouver, 23 de octubre de 1976) es un
                  actor canadiense-estadounidense. El ??xito y el reconocimiento
                  le llegaron con su participaci??n en la comedia titulada Two
                  Guys and a Girl (1998-2001), antes de que iniciara su carrera
                  de comediante y actor dram??tico para la industria de cine de
                  Hollywood. Es reconocido por sus intervenciones en
                  producciones como Blade: Trinity (2004), The Amityville Horror
                  (2005), Definitely, Maybe (2008), X-Men Origins: Wolverine
                  (2009), The Proposal (2009), Buried (2010), Linterna Verde
                  (2011) y en la adaptaci??n cinematogr??fica del c??mic Deadpool
                  (2016) y su secuela, Deadpool 2 (2018). En 2010 la revista
                  estadounidense People lo eligi?? como el hombre m??s sexy del
                  a??o.
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Ryan_Reynolds"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/10859-ryan-reynolds"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* chris evans --------------------------------------------------------------------------------------------------------------- */}
        <div className="modalPremiadas">
          <div className="section21">
            <input
              className="modal-btn21"
              type="checkbox"
              id="modal-btn21"
              name="modal-btn21"
            />
            <label htmlFor="modal-btn21">
              <i className="uil uil-expand-arrows"></i>
            </label>
            <div className="modal21">
              <div className="modal-wrap21">
                <img
                  src="https://4.bp.blogspot.com/-z1Zb-KuBg9I/VtvZEcEi3xI/AAAAAAAA6Vg/Om0-dggWjAY/s1600/Chris-Evans.jpg"
                  alt=""
                />
                <p>
                  Christopher Robert Evans (Boston, 13 de junio de 1981),
                  conocido simplemente como Chris Evans, es un actor, actor de
                  voz, director y productor de cine estadounidense. Criado en el
                  pueblo de Sudbury, mostr?? inter??s a temprana edad por la
                  actuaci??n y se mud?? a Nueva York para estudiar teatro luego de
                  terminar la secundaria. Debut?? como actor en 1997 al aparecer
                  en un cortometraje educativo y a??os m??s tarde, en el 2000,
                  protagoniz?? la serie Opposite Sex. Despu??s de ello, gan??
                  reconocimiento por su participaci??n en pel??culas como Not
                  Another Teen Movie (2001) y The Perfect Score (2004).
                  <br></br>
                  <a
                    href="https://es.wikipedia.org/wiki/Chris_Evans"
                    className="apremios"
                  >
                    Leer m??s
                  </a>
                  <br></br>
                  <a
                    href="https://www.themoviedb.org/person/16828-chris-evans"
                    className="apremios"
                  >
                    pel??culas
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* --------------------------------------------------------------------------- */}
      <div className="containerPeliculasPremiadas">
        <h1 className="h1preliculapremiadas">Peliculas premiadas</h1>

        <div className="cardPelPre">
          <div className="imagePelPre">
            <img
              src="https://www.mexicoescultura.com/galerias/actividades/principal/elretornoderey.jpg"
              alt=""
            />
          </div>
          <div className="details">
            <div className="center">
              <h1>
              El Se??or de los Anillos: el retorno del Rey
                <br />
              </h1>
              <p>
                Cuenta con 11 oscars.
                4 Globos de oro y
                4 premios BAFTA.
              </p>
            </div>
          </div>
        </div>
{/* ---------------------------------------------------------------------------------------------- */}
        <div className="cardPelPre2">
          <div className="imagePelPre2">
            <img
              src="https://media-cine.entradas.com/images/film/titanic-prueba-16655.v2.jpg"
              alt=""
              />
          </div>
          <div className="details2">
            <div className="center2">
              <h1>
                Titanic
                <br />
              </h1>
              <p>
                La aclamada pelicula de leonardo cuenta con 11 oscares alzandose con el se??or de los anillos y ben-Hur
              </p>
            </div>
          </div>
        </div>
{/* ----------------------------------------------------------------------------------------------- */}
        <div className="cardPelPre3">
          <div className="imagePelPre3">
            <img
              src="https://play-lh.googleusercontent.com/_daoglv8Cz6kouEL-KtGelwwBNDWD28uWxIA6c1AlcYOq26ApAed0mLUTEym9EN4Pt2Qdg"
              alt=""
              />
          </div>
          <div className="details3">
            <div className="center3">
              <h1>
                La la land
                <br />
              </h1>
              <p>
                En el 2016 el musical llego con 14 nominaciones al oscar, Emma Stone se llevo uno por su gran papel pero a pesar de estar ganadora a mejor pelicula unos segundos,no se la llevo pero para nosotros fue la mejor pelicula del 2016.
              </p>
            </div>
          </div>
        </div>
{/* -------------------------------------------------------------------------------------------------- */}
        <div className="cardPelPre4">
          <div className="imagePelPre4">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRadZ5tdiGrvoB0kj9hd05-z0ww92leyYPTlGo3JGWaqXJMZgkE"
              alt=""
              />
          </div>
          <div className="details4">
            <div className="center4">
              <h1>
              star wars iv a new hope
                <br />
              </h1>
              <p>
              Lucas revoluciono la industria del cine, trayendonos una odisea espacial que un es recordada con unos premios ganados de 7, de 10 nominaciones.
              </p>
            </div>
          </div>
        </div>
{/* -------------------------------------------------------------------------------------------------- */}
        <div className="cardPelPre5">
          <div className="imagePelPre5">
            <img
              src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/da9bff529d8b719fd2989d9567596250dcdb235db7604644d5a6b96edf9a3a6b._RI_V_TTW_.jpg"
              alt=""
              />
          </div>
          <div className="details5">
            <div className="center5">
              <h1>
                El padrino II
                <br />
              </h1>
              <p>
                El clasico el padrino se mantiene como una de las mejores secuelas y tiene en su palmares 6 oscars y tuvo 10 nominaciones.
              </p>
            </div>
          </div>
        </div>
{/* ------------------------------------------------------------------------------------------------------ */}
        <div className="cardPelPre6">
          <div className="imagePelPre6">
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/74/Ben_hur_1959_poster.jpg"
              alt=""
            />
          </div>
          <div className="details6">
            <div className="center6">
              <h1>
                Ben-Hur
                <br />
              </h1>
              <p>
              A pesar de la antiguedad, ben-Hur se mantiene con su alza de 11 oscars y manteniendose como una de las maximas ganadoras.
              </p>
            </div>
          </div>
        </div>
{/* --------------------------------------------------------------------------------------------------- */}
        <div className="cardPelPre7">
          <div className="imagePelPre7">
            <img
              src="http://www.utreradigital.com/web/wp-content/uploads/2015/05/Mad-Max-Furia-en-la-carretera.jpg"
              alt=""
            />
          </div>
          <div className="details7">
            <div className="center7">
              <h1>
                Mad max
                <br />
              </h1>
              <p>
                La secuela de las grandes peliculas de mel gibson, tuvo una gran aceptacion en la nueva decada y tuvo 10 nominaciones de las cuales se llevo 6.
              </p>
            </div>
          </div>
        </div>
{/* ---------------------------------------------------------------------------------------------------- */}
        <div className="cardPelPre8">
          <div className="imagePelPre8">
            <img
              src="https://es.web.img3.acsta.net/pictures/19/02/12/18/49/4078948.jpg"
              alt=""
            />
          </div>
          <div className="details8">
            <div className="center8">
              <h1>
              La lista de Schindler
                <br />
              </h1>
              <p>
                La grandiosa pelicula de Spilberg fue revolucion en los oscars, con un deslumbrante liam neeson llevandose el oscar a mejor actor y la pelicula siendo la ganadora del a??o.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div className="footerPremiadas">
      <section>
          <div className="parallax-one"></div>
        </section>
        <section>
          <div className="block"></div>
        </section>
        <section>
          <div className="parallax-two"></div>
        </section> 
      </div>    

    </div>
  );
}
