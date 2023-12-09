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
        text: 'Yes',
        route: 'yes',
        good: true
      },
      {
        text: 'No',
        route: 'no'
      }
    ]
  }
]
