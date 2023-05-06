export type BlogItem = {
  id: string;
  shortTitle: string;
  title: string;
  author: string;
  subject: string;
  date: string;
  content: string;
  image: string;
};

export type BlogSummary = Pick<BlogItem, 'title' | 'author' | 'subject' | 'date'>;

export const MOCK_BLOGS: BlogItem[] = [
  {
    id: '1',
    shortTitle: '¿Es PlayStation 4 una consola retro?',
    title: '¿Es PlayStation 4 una consola retro? La hemos encontrado en segunda mano a precios ridículos',
    author: 'Ángela Montañez',
    subject: 'Gaming',
    date: '6 may. 2023 8:01h',
    image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2023/05/dualshock-juegos-ps4-3025076.jpg?itok=wY6yIIkg',
    content: '<p>La PlayStation 4 sigue siendo una opción atractiva para los amantes de los videojuegos, a pesar de la llegada de su sucesora. Descubre cómo encontrar la PS4, PS4 Slim y PS4 Pro en el mercado de segunda mano a precios increíbles y disfruta de su amplia selección de juegos aclamados.</p></br></br><p>La PlayStation 4, lanzada en 2013, revolucionó la industria de los videojuegos con su potente hardware y una gran cantidad de juegos exclusivos que cautivaron a millones de jugadores en todo el mundo. A pesar de la llegada de su sucesora, la PlayStation 5, la PS4 sigue siendo una opción atractiva para aquellos que buscan una consola de calidad a un precio más accesible. Con la creciente demanda de consolas retro y una amplia selección de títulos aclamados por la crítica, no es sorprendente que la PS4 haya encontrado su lugar en el mercado de segunda mano. El auge de las consolas retro ha llevado a muchos jugadores a explorar sistemas de generaciones anteriores, buscando revivir la nostalgia de los videojuegos clásicos o descubrir joyas ocultas.</p></br></br><p>La PS4, aunque no tan antigua como otras consolas consideradas "retro", ofrece una biblioteca de juegos que es difícil de ignorar, desde éxitos de taquilla hasta títulos indie que dejaron huella en la industria. Además, las diferentes versiones de la PS4, como la Slim y la Pro, ofrecen distintas opciones a los jugadores en función de sus preferencias y presupuestos</p></br></br><p>El mercado de segunda mano es una excelente opción para adquirir una PS4 a precios significativamente más bajos que los de una consola nueva. Además, muchos vendedores ofrecen paquetes con juegos populares, lo que facilita el acceso a una amplia variedad de títulos sin gastar demasiado. Estas son las mejores ofertas de PS4 que hemos encontrado.</p></br></br><p>La PlayStation 4 original sigue siendo una opción sólida para aquellos que buscan una consola de calidad sin gastar demasiado. Con un diseño elegante y una gran potencia bajo el capó, la PS4 ofrece una experiencia de juego excepcional.</p></br></br><h2><strong>PS4 de 500 GB y 1 TB</strong></h2></br></br><p>La PS4 de 500 GB es el modelo básico que comenzó todo. A pesar de su capacidad de almacenamiento limitada, sigue siendo una opción sólida para aquellos que buscan una consola económica con una amplia biblioteca de juegos. Por otro lado, la PS4 de 1 TB ofrece el doble de capacidad, permitiendo a los usuarios almacenar más juegos y contenido multimedia. Además, esta oferta incluye dos juegos populares: GTA V y PES 2016, así como un controlador adicional.</p>',
  },
  {
    id: '2',
    shortTitle: 'Nintendo Treehouse Live anunciado',
    title: 'Nintendo Treehouse Live anunciado para The Legend of Zelda Tears of the Kingdom',
    author: 'Javier Escribano',
    subject: 'Gaming',
    date: '5 may. 2023 20:16h',
    image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2023/05/zelda-treehouse-live-3026364.jpg?itok=Ps8D2heR',
    content: '<h1><strong>Nintendo organiza un nuevo evento Nintendo Treehouse Live en la cuenta atrás del lanzamiento de The Legend of Zelda Tears of the Kingdom, con nuevo gameplay.</strong></h1></br></br><p>El nuevo Zelda Tears of the Kingdom, "Breath of the Wild 2", ha sido el juego más deseado por los usuarios de Nintendo Switch desde que fuera anunciado en el E3 de junio de 2019. </p></br></br><p>Hasta septiembre de 2022 no supimos su título definitivo... y prácticamente hasta hace un mes no habíamos visto nada de gameplay.</p></br></br><p>Y ahora que queda una semana, Nintendo anuncia una presentación Nintendo Treehouse Live para mostrar cuatro segmentos nuevos del juego... ¡para cuando resten apenas horas al lanzamiento!</p></br></br><h1><strong>Nintendo Treehouse en la madrugada del jueves al viernes 12 de mayo sobre Zelda Tears of the Kingdom</strong></h1></br></br><p>Hacía mucho que no veíamos al equipo del Nintendo Treehouse, una forma de mostrar a los próximos juegos en directo, más cercana y más en detalle, emitidio en directo a través de YouTube o Twitch.</p></br></br><p> Y el próximo será un Livestream especial por el lanzamiento de Zelda Tears of the Kingdom, que terminará en la medianoche del 12 de mayo, cuando el nuevo Zelda de Switch salga oficialmente (en horario de Nueva York, desde dónde se emitirá):</p></br></br><p>Horario del Nintendo Treehouse Live de The Legend of Zelda Tears of the Kingdom: viernes 12 de mayo a las 3:45 AM CEST (hora peninsular española).</p></br></br>',
  },
  {
    id: '3',
    shortTitle: 'Unboxing de Asus ROG Ally',
    title: 'Unboxing de Asus ROG Ally: os enseñamos el gran rival de Steam Deck',
    author: 'Javier Escribano',
    subject: 'Gaming',
    date: '1 may. 2023 22:14h.',
    image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2023/05/asus-rog-ally-3026390.jpg?itok=pp_8gead',
    content: '<p><strong>Os ofrecemos el primer unboxing de Asus ROG Ally, la "consola PC" que rivaliza con Steam Deck y es aún más potente: os enseñamos la máquina y comenzamos a trastear probando algunos juegos.</strong></p></br></br><p>Steam Deck, el "PC consola" de Valve, tiene un nuevo rival muy competitivo. Asus, una de las compañías de accesorios gaming más popular, a través del sello ROG (Republic of Gamers) sorprendió hace muy poco anunciando Ally, una consola portátil muy parecida... y más potente.</p></br></br><p>¡Pues ya la tenemos en nuestras manos! Os ofrecemos el primer unboxing de Asus ROG Ally.</p></br></br><p>En este vídeo abrimos la elegante caja del Ally (mucho más cuidada que los paquetes en los que se envía Steam Deck), la comparamos con la máquina de Valve, y os enseñamos de forma rápida sus menús, ¡y probamos algunos juegos!</p></br></br><h3><strong>Primer contacto con Asus ROG Ally, a priori, más potente que Steam Deck ¿y más versátil?</strong></h3></br></br><p>Asus todavía no ha confirmado la fecha de lanzamiento o el precio de Asus ROG Ally. Según filtraciones, será más caro que Steam Deck, y es que también sería más potente que Steam Deck y que Ayaneo 2, otro de los "alumnos aventajados" de Valve.</p></br></br><p>Lo que sí sabemos es que tendrá un procesador Z1 de AMD, con 16 GB de RAM, y una pantalla de 7 pulgadas 16:9 a 1080p y 120 Hz, todo ello la colocarían por encima de Steam Deck.</p></br></br><p>¿Y los juegos? Asus ROG Ally cuenta con un procesador de Windows 11, y como ocurre con Steam Deck, cuenta con un launcher propio, Armory Crate SE, desde donde podemos acceder rápidamente a todos los launchers de juegos de PC que instalemos.</p></br></br><p>Steam, Epic Games Launcher, EA App, GOG Galaxy, Ubisoft Connect... la "Ally" será muy versátil para instalar juegos de diferentes launchers y acceder a ellos desde un interfaz muy cómodo, muy familiar para los usuarios de consola.</p></br></br><p>El 11 de mayo Asus revelará en un evento toda la información que nos falta por conocer de Asus ROG Ally, pero mientras tanto vamos a seguir trasteando, haciendo pruebas de rendimiento con diferentes juegos, y os contaremos en detalle qué tal es la experiencia de uso con Asus ROG Ally y si está a la altura de Steam Deck.</p></br></br>',
  },
];
