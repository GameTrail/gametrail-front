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

const Comments = {
  send: 'Skicka',
  write_a_comment: 'Skriv en kommentar',
};

const Contact = {
  contact_us: 'Kontakta oss!',
  contact_us_description: 'Har du några frågor eller förslag? Tveka inte att kontakta oss! Vi hjälper dig gärna.',
  help_email: 'help.user.gametrail@gmail.com',
};

const CookiesPolicy = {
  cookies_policy: 'Kakor (Cookies) Policy',
  last_update: 'Senast uppdaterad: 8 april 2023',
  cookies_disclaimer: 'Kakor (Cookies) innehåller vanligtvis ingen information som personligen identifierar en användare, men den personliga information som vi lagrar om dig kan vara kopplad till den information som lagras och erhålls från kakor (cookies). För mer information om hur vi använder, lagrar och säkerställer din personliga data, vänligen se vår Integritetspolicy.',
  cookies_disclaimer2: 'Vi lagrar inte känslig personlig information, som postadresser, lösenord till konton etc., i de kakor (cookies) vi använder.',

  interpretation: 'Tolkning och definitioner',
  'interpretation-1': 'Tolkning',
  'interpretation-2': 'Ord med inledande versal har definierade betydelser enligt följande villkor. Följande definitioner ska ha samma betydelse oavsett om de förekommer i singular eller plural.',
  'interpretation-3': 'Definitioner',
  'interpretation-4': 'För ändamål av denna Kakor (Cookies) Policy:',
  company: 'Företag',
  'company-1': '(här refererat som "Företaget", "Vi", "Oss" eller "Vår" i denna Kakor (Cookies) Policy) avser GameTrail.',
  cookies: 'Kakor (Cookies)',
  'cookies-1': 'avser små filer som placeras på din persondator, mobila enhet eller annan enhet av en webbplats, som innehåller detaljer om din webbhistorik på den webbplatsen bland dess många användningsområden.',
  website: 'Webbplats',
  'website-1': 'avser GameTrail, åtkomlig från: ',
  you: 'Du',
  'you-1': 'avser den individ som får åtkomst till eller använder Webbplatsen, eller ett företag eller annan juridisk enhet för vars räkning sådan individ får åtkomst till eller använder Webbplatsen, beroende på sammanhanget.',

  cookies_use: 'Användning av kakor (cookies)',
  'cookies-use-1': 'Typ av kakor (cookies) vi använder',
  'cookies-use-2': 'Kakor (cookies) kan vara "permanenta" eller "sessionskakor (session cookies)". Permanenta kakor (cookies) förblir på din persondator eller mobila enhet när du stänger av den, medan sessionskakor (session cookies) raderas så snart du stänger din webbläsare.',
  'cookies-use-3': 'Vi använder både sessionskakor (session cookies) och permanenta kakor (cookies) för de ändamål som anges nedan:',
  'cookies-use-4': 'Nödvändiga/Essentiella kakor (cookies)',
  'cookies-use-5': 'Typ: Sessionskakor (session cookies)',
  admin_by_us: 'Administreras av: Oss',
  'cookies-use-7': 'Syfte: Dessa cookies är nödvändiga för att tillhandahålla tjänster via webbplatsen och möjliggöra användning av vissa funktioner. De hjälper till att autentisera användare och förhindra bedräglig användning av användarkonton. Utan dessa cookies kan de begärda tjänsterna inte tillhandahållas, och vi använder endast dessa cookies för att tillhandahålla dessa tjänster.',
  'cookies-use-8': 'Funktionscookies: Beständiga cookies',
  'cookies-use-9': 'Typ: Beständiga cookies',
  'cookies-use-10': 'Syfte: Dessa cookies tillåter oss att komma ihåg de val du gör när du använder webbplatsen, såsom att komma ihåg dina inloggningsuppgifter eller språkpreferens. Syftet med dessa cookies är att erbjuda en mer personlig upplevelse och förhindra att du behöver ange dina preferenser varje gång du använder webbplatsen.',
  'cookies-use-11': 'Dina val avseende cookies:',
  'cookies-use-12': 'Om du föredrar att undvika användning av cookies på webbplatsen måste du först inaktivera användningen av cookies i din webbläsare och sedan ta bort sparade cookies i din webbläsare som är associerade med denna webbplats. Du kan använda detta alternativ för att undvika användning av cookies när som helst.',
  'cookies-use-13': 'Om du inte accepterar våra cookies kan du uppleva vissa olägenheter vid användning av webbplatsen och vissa funktioner kan fungera korrekt.',
  'cookies-use-14': 'Om du vill ta bort cookies eller instruera din webbläsare att ta bort eller avvisa cookies, besök hjälpsidorna för din webbläsare.',
  'cookies-use-15': 'För webbläsaren Google Chrome, besök denna Google-sida:',
  'cookies-use-16': 'För webbläsaren Internet Explorer, besök denna Microsoft-sida:',
  'cookies-use-17': 'För webbläsaren Firefox, besök denna Mozilla-sida:',
  'cookies-use-18': 'För webbläsaren Safari, besök denna Apple-sida:',
  'cookies-use-19': 'För vilken annan webbläsare som helst, besök de officiella webbsidorna för din webbläsare.',
  'cookies-use-20': 'Mer information om cookies:',
  'cookies-use-21': 'Du kan få mer information om cookies på:',
  'cookies-use-22': 'Kontakta oss:',
  'cookies-use-23': 'Om du har några frågor om denna cookiespolicy kan du kontakta oss via e-post på',
};

const Dictionary = {
  ...globals,
  ...landing.FaqSection,
  ...landing.AboutSection,
  ...landing.MainSection,
  ...landing.PricingSection,
  ...navbar,
  ...footer,
  ...Comments,
  ...Contact,
  ...CookiesPolicy,
};

export default Dictionary;
