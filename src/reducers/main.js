const initialState = {
  character: {
    arenas: [
      {
        title: 'Mental',
        attributes: [
          {
            text: 'Intelligence',
            value: 1
          },
          {
            text: 'Wits',
            value: 1
          },
          {
            text: 'Resolve',
            value: 1
          }
        ]
      },
      {
        title: 'Physical',
        attributes: [
          {
            text: 'Strength',
            value: 1
          },
          {
            text: 'Dexterity',
            value: 1
          },
          {
            text: 'Stamina',
            value: 1
          }
        ]
      },
      {
        title: 'Social',
        attributes: [
          {
            text: 'Presence',
            value: 1
          },
          {
            text: 'Manipulation',
            value: 1
          },
          {
            text: 'Composure',
            value: 1
          }
        ]
      }
    ],
    skills: [
      {
        title: 'Mental (-3 Unskilled)',
        list: [
          {
            name: 'Academics',
            value: 0
          },
          {
            name: 'Computer',
            value: 0
          },
          {
            name: 'Crafts',
            value: 0
          },
          {
            name: 'Investigation',
            value: 0
          },
          {
            name: 'Medicine',
            value: 0
          },
          {
            name: 'Occult',
            value: 0
          },
          {
            name: 'Politics',
            value: 0
          },
          {
            name: 'Science',
            value: 0
          }
        ]
      },
      {
        title: 'Physical (-1 Unskilled)',
        list: [
          {
            name: 'Athletics',
            value: 0
          },
          {
            name: 'Brawl',
            value: 0
          },
          {
            name: 'Drive',
            value: 0
          },
          {
            name: 'Firearms',
            value: 0
          },
          {
            name: 'Larceny',
            value: 0
          },
          {
            name: 'Stealth',
            value: 0
          },
          {
            name: 'Survival',
            value: 0
          },
          {
            name: 'Weaponry',
            value: 0
          }
        ]
      },
      {
        title: 'Social (-1 Unskilled)',
        list: [
          {
            name: 'Animal Ken',
            value: 0
          },
          {
            name: 'Empathy',
            value: 0
          },
          {
            name: 'Expression',
            value: 0
          },
          {
            name: 'Intimidation',
            value: 0
          },
          {
            name: 'Persuasion',
            value: 0
          },
          {
            name: 'Socialize',
            value: 0
          },
          {
            name: 'Streetwise',
            value: 0
          },
          {
            name: 'Subterfuge',
            value: 0
          }
        ]
      }
    ],
    charInfo: [
      {
        title: 'info1',
        field: [
          {
            text: 'Name:',
            value: 'Adam'
          },
          {
            text: 'Age:',
            value: '23'
          },
          {
            text: 'Player:',
            value: 'David'
          }
        ]
      },
      {
        title: 'info2',
        field: [
          {
            text: 'Virtue:',
            value: 'Ambitious'
          },
          {
            text: 'Vice:',
            value: 'Greedy'
          },
          {
            text: 'Concept:',
            value: 'An awkward try-hard'
          }
        ]
      },
      {
        title: 'info3',
        field: [
          {
            text: 'Chronicle:',
            value: 'Seattle By Night'
          },
          {
            text: 'Faction:',
            value: 'Undecided'
          },
          {
            text: 'Group',
            value: 'Roll20 Forsaken'
          }
        ]
      }
    ]
  }
};

export const mainReducer = (state = initialState, action) => {
  return state;
};
