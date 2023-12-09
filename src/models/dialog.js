export const dialog = [
  {
    type: 'dialog',
    character: 'Ryan Gosling',
    text: 'Emma, my dear disciple, I sense a disturbance in your soul. What troubles you?'
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
        text: 'Express curiosity',
        route: 'curiosity'
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
      doubts: "Doubt is the birthplace of enlightenment, my friend. But tell me, what's troubling your beautiful mind?",
      curiosity: "Ah, the mysteries of the cosmos. But, my dear, there's more to life than just questions. What's on your mind?",
      flirt: "Ah, the future, a mysterious landscape. Let's focus on the present, my dear. Our connection is what matters now."
    }
  },
  {
    type: 'choice',
    choices: [
      {
        text: 'Express concern',
        route: 'concern'
      },
      {
        text: 'Seek guidance',
        route: 'guidance'
      },
      {
        text: 'Change the topic',
        route: 'change_topic'
      }
    ]
  },
  {
    type: 'response',
    character: 'Ryan Gosling',
    text: {
      concern: 'Emma, have you forgotten the lessons from our sacred filmography? In "Blade Runner 2049," I portrayed a man in search of his identity. Our cult is a quest for self-discovery, just like that character.',
      guidance: 'But of course, Emma. The path to purpose is unique for each of us. Let me guide you towards your own divine calling.',
      change_topic: "Ah, the reality we create, Emma. It's a journey we embark on together. Care to explore it with me?"
    }
  }
]
