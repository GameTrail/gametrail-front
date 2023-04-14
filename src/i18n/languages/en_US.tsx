const globals = {
  login: 'Login',
  register: 'Register',
  month: 'month',
  start: 'Start',
};

const landing = {
  // Landing Page
  FaqSection: {
    what_is_a_trail: 'What is a Trail?',
    answer_what_is_a_trail: 'A trail is a list full of games or a map of them, which you can join or create to achieve limitless adventures with new people.'
          + 'Has you ever wondered about starting to play an entire videogame saga but you dont have anyone to play it with? Complete every achievement the game'
          + 'has to offer? Or maybe you are that kind of guy that wants to just enjoy his games but you still miss some people to play with? Well, with trails you can do it,'
          + 'they are a useful tool to share gaming experiences and connect with other players that are interested in the same games and genres.',
    can_I_keep_a_record_of_my_games: 'Can I keep a record of my games?',
    answer_can_I_keep_a_record_of_my_games: 'Yes, you can create an account and add your favorite games to your lists, as well as create your own trails and share them with the community. You can also keep a record of where you are in each trail and the games you are completing.',
    how_can_I_interact_with_other_users: 'How can I interact with other users?',
    answer_how_can_I_interact_with_other_users: 'You can follow other users and see their trails, lists and favorite games and rate them with our new scoring system. Our karma system is based on 5 different metrics that allow you to see the reputation of the users: Kindness, skill, availability, fun and team play.',
    can_I_join_any_trail: 'Can I join any trail?',
    answer_can_I_join_any_trail: 'Yes, you can join any trail you want, but you can only join one trail per game. If you want to join a trail that is already full, you can ask the creator to add you to the trail.',
    can_I_leave_a_trail: 'Can I leave a trail?',
    answer_can_I_leave_a_trail: 'Yes, you can leave a trail at any time, but you will not be able to join another trail for that game until the trail you are currently in is completed.',

  },
  AboutSection: {
    steam_and_xbox_live: 'Steam and Xbox Live',
    steam_and_xbox_live_description: 'Connect your Steam and Xbox Live accounts to update the progress of your games and add them to your lists',
    custom_trails: 'Custom Trails',
    custom_trails_description: 'Create your own trails and share them with the community, or join the ones that other users have created',
    save_your_progress: 'Save your progress',
    save_your_progress_description: 'Keep a record of your games and trails, and see where you are in each one of them',
    feel_at_home: 'Feel at home',
    feel_at_home_description: 'Choose your favorite language and enjoy the experience. Click on any flag to try it out!',
  },
  MainSection: {
    about_gametrail: 'Explore new ways to play your favorite games with new people and keep a record of your gaming experience.',
    welcome_to_premium: 'Welcome to Premium!',
    go_to_gametrail: 'Go to GameTrail',
  },
  PricingSection: {
    unlimited_lists: '✅ Unlimited games for your Trails',
    limit_trail_people: '❌ Up to 4 members per Trail',
    limit_trail_simultaneously: '❌ Just 1 created Trail at a time',
    limit_trail_games: '❌ Up to 3 games per created Trail',
    limit_trail_join: '❌ You can only join 4 Trails per month',
    chat_with_trail_members: '✅ Chat with Trail members',

    everything_in_standard: '✅ Everything in Standard',
    find_new_friends: '👑 Find people with similar tastes',
    filter_trail_members: '👑 Control who can join your Trails',
    trail_recommendations: '👑 Trails recommended for you',
    connect_steam: '👑 Connect your Steam account',
    connect_xbox: '👑 Connect your Xbox Live account',
  },
};

const Dictionary = {
  ...globals,
  ...landing.FaqSection,
  ...landing.AboutSection,
  ...landing.MainSection,
  ...landing.PricingSection,
};

export default Dictionary;
