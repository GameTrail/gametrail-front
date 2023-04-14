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

const Disclaimer = {
  disclaimer: 'Ansvarsfriskrivning',
  disclaimer_last_update: 'Senast uppdaterad: 07 april 2023',
  'disclaimer-1': 'Tolkning och definitioner',
  'disclaimer-2': 'Tolkning',
  'disclaimer-3': 'Ord med inledande versaler har definierade betydelser enligt följande villkor. Följande definitioner kommer att ha samma betydelse oavsett om de förekommer i singular eller plural form.',
  'disclaimer-4': 'Definitioner',
  'disclaimer-5': 'För ändamål med denna ansvarsfriskrivning:',
  'disclaimer-6': 'Företag',
  'disclaimer-7': '(hänvisat till som "Företaget", "Vi", "Oss" eller "Vår" i denna ansvarsfriskrivning) avser GameTrail.',
  'disclaimer-8': 'Tjänst',
  'disclaimer-9': 'avser webbplatsen eller applikationen eller båda.',
  'disclaimer-10': 'Du',
  'disclaimer-11': 'means the person accessing the Service, or the company, or any legal entity on behalf of which such person accesses or uses the Service, as applicable.',
  'disclaimer-12': 'Webbplats',
  'disclaimer-13': 'refers to GameTrail, accessible from: ',
  'disclaimer-14': 'Applikation',
  'disclaimer-15': 'means the software program provided by the Company that is downloaded on any electronic device called GameTrail.',
  'disclaimer-16': 'Ansvarsfriskrivning',
  'disclaimer-17': 'The information contained on the Service is for general informational purposes only.',
  'disclaimer-18': 'The Company assumes no responsibility for errors or omissions in the content of the Service.',
  'disclaimer-19': 'The Company does not guarantee that the Service is free from viruses or other harmful components.',
  'disclaimer-20': 'Ansvarsfriskrivning för externa länkar',
  'disclaimer-21': 'Tjänsten kan innehålla länkar till externa webbplatser som inte tillhandahålls eller underhålls av eller på något sätt är anslutna till Företaget.',
  'disclaimer-22': 'Observera att Företaget inte garanterar noggrannheten, relevansen, tidpunkten eller integriteten hos någon information på dessa externa webbplatser.',
  'disclaimer-23': 'Friskrivning för fel och utelämnanden',
  'disclaimer-24': 'Informationen som tillhandahålls av Tjänsten är endast avsedd för allmän vägledning om intressanta frågor. Även om Företaget vidtar alla försiktighetsåtgärder för att säkerställa att innehållet i Tjänsten är aktuellt och korrekt kan det förekomma fel. Dessutom, med tanke på de ständigt föränderliga lagarna, normerna och reglerna kan det finnas förseningar, utelämnanden eller felaktigheter i den information som finns i Tjänsten.',
  'disclaimer-25': 'Företaget ansvarar inte för några fel eller utelämnanden, eller för resultaten som erhålls från användningen av denna information.',
  'disclaimer-26': 'Friskrivning för rättvist bruk',
  'disclaimer-27': 'Företaget kan använda material med upphovsrätt som inte alltid har godkänts specifikt av upphovsrättsinnehavaren. Företaget tillhandahåller sådant material för kritik, kommentar, nyhetsrapportering, undervisning, stipendier eller forskning.',
  'disclaimer-28': 'Företaget anser att detta utgör "rättvist bruk" av något material med upphovsrätt enligt avsnitt 107 i USA:s upphovsrättslag.',
  'disclaimer-29': 'Om du vill använda material med upphovsrätt från Tjänsten för egna ändamål som går utöver rättvist bruk måste du få tillstånd från upphovsrättsinnehavaren.',
  'disclaimer-30': 'Friskrivning för uttryckta åsikter',
  'disclaimer-31': 'Tjänsten kan innehålla åsikter och synpunkter som tillhör författarna och speglar inte nödvändigtvis någon annan författares, myndighets, organisations, arbetsgivares eller företags officiella policy eller ställning, inklusive Företaget.',
  'disclaimer-32': 'Kommentarerna som publiceras av användarna är deras enskilda ansvar och användarna kommer att ta fullt ansvar, inklusive juridiskt ansvar och skuld, för eventuell förtal eller rättsligt tvistemål som uppstår från något som är skrivet i en kommentar eller som direkt resultat av något som är skrivet i en kommentar. Företaget ansvarar inte för några kommentarer som publiceras av användarna och förbehåller sig rätten att ta bort kommentarer av vilken anledning som helst.',
  'disclaimer-33': 'Ansvarsfriskrivning utan ansvar',
  'disclaimer-34': 'Informationen i Tjänsten tillhandahålls med förståelsen att Företaget inte tillhandahåller professionell juridisk, redovisningsmässig, skattemässig eller annan rådgivningstjänst. Därför bör den inte användas som ersättning för samråd med kompetenta professionella rådgivare inom redovisning, skatt, juridik eller andra kompetenta rådgivare.',
  'disclaimer-35': 'Under inga omständigheter kommer Företaget eller dess leverantörer att vara ansvariga för någon särskild, incidental, indirekt eller följdskada som uppstår i samband med din åtkomst eller användning av Tjänsten eller oförmågan att få åtkomst till eller använda Tjänsten.',
  'disclaimer-36': 'Ansvarsfriskrivning "Använd på egen risk"',
  'disclaimer-37': 'All information i tjänsten tillhandahålls "som den är", utan garantier av integritet, noggrannhet, aktualitet eller resultaten som uppnås genom användning av denna information, och utan någon form av uttrycklig eller underförstådd garanti, inklusive men inte begränsat till prestandagarantier, marknadsgarantier och lämplighet för ett särskilt ändamål.',
  'disclaimer-38': 'Företaget kommer inte att vara ansvarigt gentemot Dig eller någon annan för något beslut som fattas eller åtgärd som vidtas i förtroende för informationen som tillhandahålls av Tjänsten, eller för någon följdskada, särskild skada eller liknande skada, även om du har informerats om möjligheten till sådana skador.',
  'disclaimer-39': 'Kontakta oss',
  'disclaimer-40': 'Om du har några frågor om denna ansvarsfriskrivning kan du kontakta oss:',
  'disclaimer-41': 'Via e-post: ',
};

const Error = {
  unexpected_error: 'Ett oväntat fel inträffade',
};

const GameData = {
  // GameData
  in_your_list: 'I din spelista',
  add_to_list: 'Lägg till',

  // GameListsButtons
  game_trails: 'Spår',
  game_comments: 'Kommentarer',

  // GameTrailList
  game_no_trails: 'Inga spår skapade ännu',
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
  ...Disclaimer,
  ...Error,
  ...GameData,
};

export default Dictionary;
