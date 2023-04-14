const globals = {
  login: 'Iniciar sesión',
  register: 'Registrarse',
};

const landing = {
  // Landing Page
  FaqSection: {
    what_is_a_trail: '¿Qué es un Trail?',
    answer_what_is_a_trail: '        Un trail es una lista secuencial de videojuegos o una hoja de ruta que se puede seguir para alcanzar un objetivo específico.\n'
        + '        ¿Alguna vez has querido empezar una saga de videojuegos cooperativo?¿Completar todos los logros/trofeos de una saga en concreto?\n'
        + '        o ¿Simplemente quieres jugar a un juego o a varios juegos, pero no tienes con quien? Pues con los trails puedes hacerlo,\n'
        + '        son una herramienta útil para compartir experiencias de juego y conectarse con otros jugadores que estén interesados en los mismos juegos y géneros.',

    can_I_keep_a_record_of_my_games: '¿Puedo mantener un registro de mis juegos?',
    answer_can_I_keep_a_record_of_my_games: 'Sí, puedes crear una cuenta y añadir tus juegos favoritos a tus listas, así como crear tus propios trails y compartirlos con la comunidad. Además, puedes mantener un registro de donde te encuentras en cada trail y de los juegos que vas completando.',
    how_can_I_interact_with_other_users: '¿Cómo puedo interactuar con los usuarios?',
    answer_how_can_I_interact_with_other_users: 'Puedes seguir a otros usuarios y ver sus trails, listas y juegos favoritos y puntuarles con nuestro novedoso sistema de puntuación. Nuestro sistema de karma se basa en 5 métricas diferentes y que te permiten ver la reputación de los usuarios: Amabilidad, habilidad, disponibilidad, diversión y juego en equipo.',
    can_I_join_any_trail: '¿Me puedo unir a cualquier trail?',
    answer_can_I_join_any_trail: 'Sí, puedes unirte a cualquier trail que te interese, siempre y cuando el creador del trail lo permita y'
        + 'cumplas los requisitos mínimos en tus valores de karma.',
    can_I_leave_a_trail: '¿Puedo abandonar un trail?',
    answer_can_I_leave_a_trail: 'Sí, puedes abandonar un trail en cualquier momento, dejando tu hueco libre para cualquier otra persona'
        + 'que quiera unirse.',
  },
  AboutSection: {
    steam_and_xbox_live: 'Steam y Xbox Live',
    steam_and_xbox_live_description: 'Conecta tu cuenta de Steam y Xbox Live para actualizar el progreso de tus juegos y añadirlos a tus listas',
    custom_trails: 'Trails personalizados',
    custom_trails_description: 'Crea Trails personalizados para tus juegos y comparte la aventura con tus amigos o nuevas personas de la comunidad dispuestas a jugar contigo',
    save_your_progress: 'Guarda tu progreso',
    save_your_progress_description: 'Gestiona el progreso de todos tus juegos y compartelos con la comunidad mediante tus propias listas personalizadas',
    feel_at_home: 'Siéntete como en casa',
    feel_at_home_description: 'Gametrail está disponible en 2 idiomas: Español e Inglés, y se está trabajando en más idiomas para que puedas disfrutar de la experiencia en tu idioma. ¡Pulsa en cualquier bandera para cambiar el idioma!',
  },
  MainSection: {
    about_gametrail: 'Descubre una nueva manera de jugar en comunidad y guardar el progreso de tus juegos.',
    welcome_to_premium: '¡Bienvenido a GameTrail Premium! 🎉',
    go_to_gametrail: 'Ir a Gametrail',
  },
};

const Dictionary = {
  ...globals,
  ...landing.FaqSection,
  ...landing.AboutSection,
  ...landing.MainSection,
};

export default Dictionary;
