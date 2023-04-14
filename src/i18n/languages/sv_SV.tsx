const globals = {
  login: 'Loginn',
  register: 'Registrera',
  month: 'månad',
  start: 'Starta',
  exit: 'Avsluta',
};

const navbar = {
  home: 'Hem',
  games: 'Spel',
  trails: 'Trails',
  create_trail: 'Skapa Trail',
  become_premium: 'Bli Premium',
};

const footer = {
  privacy_policy: 'Integritetspolicy',
  legal_notice: 'Juridisk information',
  contact: 'Kontakt',
  terms_and_conditions: 'Användarvillkor',
  cookies_policy: 'Cookie-policy',
};

const landing = {
  // Landing Page
  FaqSection: {
    what_is_a_trail: 'Vad är en Trail?',
    answer_what_is_a_trail: 'En trail är en lista full av spel eller en karta över dem, som du kan gå med i eller skapa för att uppnå oändliga äventyr med nya människor.',
    can_I_keep_a_record_of_my_games: 'Kan jag spara en lista över mina spel?',
    answer_can_I_keep_a_record_of_my_games: 'Ja, du kan spara en lista över dina spel och dela den med andra användare.',
    how_can_I_interact_with_other_users: 'Hur kan jag interagera med andra användare?',
    answer_how_can_I_interact_with_other_users: 'Du kan interagera med andra användare genom att gå med i deras trails eller skapa egna trails för att hitta nya vänner.',
    can_I_join_any_trail: 'Kan jag gå med i en trail?',
    answer_can_I_join_any_trail: 'Ja, du kan gå med i alla spår du vill, men du kan bara gå med i ett spår per spel. Om du vill gå med i ett spår som redan är fullt kan du be skaparen att lägga till dig i spåret.',
    can_I_leave_a_trail: 'Kan jag lämna ett spår?',
    answer_can_I_leave_a_trail: 'Ja, du kan lämna ett spår när som helst, men du kommer inte att kunna gå med i ett annat spår för det spelet förrän spåret du befinner dig i är klar.',

  },
  AboutSection: {
    steam_and_xbox_live: 'Steam och Xbox Live',
    steam_and_xbox_live_description: 'Anslut dina Steam- och Xbox Live-konton för att uppdatera framstegen i dina spel och lägga till dem i dina listor',
    custom_trails: 'Anpassade Trails',
    custom_trails_description: 'Skapa dina egna trails och dela dem med andra användare för att hitta nya vänner',
    save_your_progress: 'Spara dina framsteg',
    save_your_progress_description: 'Spara dina framsteg i dina spel och dela dem med andra användare för att hitta nya vänner',
    feel_at_home: 'Känns som hemma',
    feel_at_home_description: 'Välj ditt favoritspråk och njut av upplevelsen. Klicka på valfri flagga för att prova det!',
  },
  MainSection: {
    about_gametrail: 'Utforska nya sätt att spela dina favoritspel med nya människor och hålla ett register över din spelupplevelse.',
    welcome_to_premium: 'Välkommen till Premium!',
    go_to_gametrail: 'Gå till GameTrail',
  },
  PricingSection: {
    unlimited_lists: '✅ Obegränsade spel för dina spår',
    limit_trail_people: '❌ Upp till 4 medlemmar per spår',
    limit_trail_simultaneously: '❌ Endast 1 skapad spår åt gången',
    limit_trail_games: '❌ Upp till 3 spel per skapat spår',
    limit_trail_join: '❌ Du kan bara gå med i 4 spår per månad',
    chat_with_trail_members: '✅ Chatt med spårmedlemmar',

    everything_in_standard: '✅ Allt i Standard',
    find_new_friends: '👑 Hitta personer med liknande intressen',
    filter_trail_members: '👑 Kontrollera vilka som kan gå med i dina spår',
    trail_recommendations: '👑 Rekommenderade spår för dig',
    connect_steam: '👑 Koppla ditt Steam-konto',
    connect_xbox: '👑 Koppla ditt Xbox Live-konto',

  },
};

const Dictionary = {
  ...globals,
  ...landing.FaqSection,
  ...landing.AboutSection,
  ...landing.MainSection,
  ...landing.PricingSection,
  ...navbar,
  ...footer,
};

export default Dictionary;
