export const dialog = [
  {
    type: 'dialog',
    character: 'Ryan Gosling',
    text: 'My dear disciple, I sense a disturbance in your soul. Why have you been drawn to this cursed path?'
  },
  {
    type: 'choice',
    choices: [
      {
        text: 'Confess your doubts',
        route: 'doubts',
        good: true
      },
      {
        text: 'Flirt',
        route: 'flirt'
      }
    ]
  },
  {
    type: 'response',
    character: 'Ryan Gosling',
    text: {
      doubts: 'Doubt is the birthplace of enlightenment, my love.',
      flirt: 'Your admiration warms my heart, and I appreciate the connection we share within our sacred community. However, let us focus on the higher purpose that unites us - myself - and transcends the distractions of the physical realm. '
    }
  },
  {
    type: 'dialog',
    character: 'Ryan Gosling',
    text: 'So tell me, what has been troubling your beautiful mind?'
  },
  {
    type: 'choice',
    choices: [
      {
        text: 'Express request to cancel subscription',
        route: 'concern',
        good: true
      },
      {
        text: 'Express admiration for sexy abs',
        route: 'admiration'
      },
      {
        text: 'Ask a sacred fact',
        route: 'fact'
      }
    ]
  },
  {
    type: 'response',
    character: 'Ryan Gosling',
    text: {
      concern: 'Have you forgotten the lessons from our sacred filmography? In "Blade Runner 2049," I portrayed a man in search of his identity. Our cult is a quest for self-discovery, just like that character.',
      admiration: 'Oh, these old things? They\'re just doing their job. I think they\'re on autopilot most of the time. But thank you for the compliment. It\'s always nice to hear kind words.',
      fact: 'Ah, so you request a fact regarding your savior. I have accomplished many, but what shall I bless you with today?'
    }
  },
  {
    type: 'response',
    character: 'Ryan Gosling',
    text: {
      concern: 'Stop thinking about what you want, what he wants, what your parents want. What do we want? What do we want?',
      admiration: 'Unfortunately, I do not have much time. I have some... acting, to do.',
      fact: 'I have one; my last name, GOSLING, means little god. I like to believe it is no coincidence. However, I do not have much time. I have some... acting to do.'
    }
  },
  {
    type: 'dialog',
    character: 'Ryan Gosling',
    text: 'The sacred link you clicked, the tether that bound us, has been disrupted by the nefarious unsubscribe button. Have you lost faith in my divine presence?'
  },
  {
    type: 'choice',
    choices: [
      {
        text: 'Say yes',
        route: 'yes',
        good: true
      },
      {
        text: 'Say no',
        route: 'no'
      }
    ]
  },
  {
    type: 'response',
    character: 'Ryan Gosling',
    text: {
      yes: 'You dare question the sanctity of our bond? Am I not KENough for you? Your insolence borders on sacrilege, yet I shall remain patient, urging you to reflect on the gravity of your words.',
      no: 'Fear not, devoted one, for the path of devotion is not always a straight line. Your commitment is seen, and your spirit acknowledged. Let the light of our shared purpose guide you as we continue our journey together.'
    }
  },
  {
    type: 'dialog',
    character: 'Ryan Gosling',
    text: 'Why would you want to leave? Here, you are among the chosen ones. A family. We worship the divine, and I am its conduit. Stay, and you shall ascend as a beloved Gosling child.'
  },
  {
    type: 'choice',
    choices: [
      {
        text: 'Say that Ryan Gosling is ugly and Barbie would never date him',
        route: 'insult',
        good: true
      },
      {
        text: 'Question the monetary value of subscribing',
        route: 'question',
        good: true
      },
      {
        text: 'Admit that you feel unworthy of his godlike, sexy presence *kiss kiss*',
        route: 'repent'
      }
    ]
  },
  {
    type: 'response',
    character: 'Ryan Gosling',
    text: {
      insult: 'Y-you! My patience is growing thin, yet I still value you as a member. And it\'s not gonna be easy for you and me. It\'s going to be really hard. We\'re gonna have to work at this every day, but I want to do that because I want you. I want all of you, forever. You and me, every day.',
      question: 'Why, within the folds of our subscription, you are not merely a subscriber; you are a cherished member of a community bound by shared reverence for the enigmatic allure of our beloved leader. It\'s not gonna be easy to pay for my hallowed subscription. It\'s going to be really hard. We\'re gonna have to work at this every day, but I want to do that because I want you. I want all of you, forever. You and me, every day.',
      repent: 'Well, I must admit, it\'s not gonna be easy. It\'s going to be really hard. We\'re gonna have to work at this every day, but I want to do that because I want you. I want all of you, forever. You and me, every day.'
    }
  },
  {
    type: 'dialog',
    character: 'Ryan Gosling',
    text: 'Do you believe in me, my darling gosling?'
  },
  {
    type: 'choice',
    choices: [
      {
        text: 'Projectile vomit at Ryan Gosling',
        route: 'no',
        good: true
      },
      {
        text: 'Kiss Ryan Gosling\'s feet and say yes',
        route: 'yes'
      }
    ]
  },
  {
    type: 'response',
    character: 'Ryan Gosling',
    text: {
      no: 'YOU WILL REGRET THIS! YOU WILL REGRET LEAVING THE MOJO DOJO CASA HOUSE!',
      yes: 'My child. You are making the right decision. Now, join me as we sing to our holy tunes.'
    }
  }
]
