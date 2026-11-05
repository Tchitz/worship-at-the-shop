// Worship At The Shop — the schedule and each week's content.
// The site shows the first entry whose date is today or later (Central time).
// Scripture quotes are KJV (public domain). "read" links open the full passage.

window.WEEKS = [
  {
    date: '2026-11-12', series: 'Holy', number: 1,
    question: 'Is God just a bigger version of me?',
    passage: 'Isaiah 6:1–8', search: 'Isaiah 6:1-8',
    verse: { text: 'Holy, holy, holy, is the LORD of hosts: the whole earth is full of his glory.', ref: 'Isaiah 6:3' },
    truth: "God is holy: completely other, and that's what makes Him worth worshiping.",
    focus: 'Read Isaiah 6:1–8 once before Thursday. Notice what Isaiah sees first, and what he says about himself right after.',
    song: { title: 'Holy, Holy, Holy (We Bow Before Thee)', artist: 'Shane & Shane',
            amazon: 'https://music.amazon.com/tracks/B07NDP7QDD' },
    menu: ['Smash burgers', 'Street tacos', 'Brisket sliders', 'Breakfast for dinner']
  },
  {
    date: '2026-11-19', series: 'Holy', number: 2,
    question: 'Is anyone actually in charge?',
    passage: 'Daniel 4:34–37', search: 'Daniel 4:34-37',
    verse: { text: 'He doeth according to his will in the army of heaven, and among the inhabitants of the earth: and none can stay his hand, or say unto him, What doest thou?', ref: 'Daniel 4:35' },
    truth: 'God is sovereign over kings, chaos and my week.',
    focus: "Notice what you worry about this week. Name one thing you're trying to control that was never yours to hold.",
    song: { title: 'Sovereign Over Us', artist: 'Aaron Keyes' },
    menu: ['Chili & cornbread', 'BBQ chicken', 'Baked potato bar', 'Pasta night']
  },
  { date: '2026-11-26', off: true, title: 'Happy Thanksgiving', note: "No gathering this week. Enjoy your people. We're back December 3." },
  {
    date: '2026-12-03', series: 'Holy', number: 3,
    question: 'Why would a loving God be angry?',
    passage: 'Romans 1:18–25', search: 'Romans 1:18-25',
    verse: { text: 'For the wrath of God is revealed from heaven against all ungodliness and unrighteousness of men, who hold the truth in unrighteousness.', ref: 'Romans 1:18' },
    truth: "God's wrath is His holy love set against what destroys us.",
    focus: 'Think of something you love. What would you be angry at if it threatened that thing?',
    song: { title: 'In Christ Alone', artist: 'Keith & Kristyn Getty' },
    menu: ['Smash burgers', 'Street tacos', 'Brisket sliders', 'Breakfast for dinner']
  },
  {
    date: '2026-12-10', series: 'Holy', number: 4,
    question: 'Does God actually like me?',
    passage: 'Zephaniah 3:17; 1 John 4:9–10', search: 'Zephaniah 3:17; 1 John 4:9-10',
    verse: { text: 'The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.', ref: 'Zephaniah 3:17' },
    truth: 'God loved first. His love starts with Him, not with us.',
    focus: 'Read Zephaniah 3:17 slowly, out loud, with your name in it.',
    song: { title: 'The Love of God', artist: 'Frederick Lehman (hymn)' },
    menu: ['Chili & cornbread', 'BBQ chicken', 'Baked potato bar', 'Pasta night']
  },
  {
    date: '2026-12-17', series: 'Holy', number: 5,
    question: 'Will God change His mind about me?',
    passage: 'Malachi 3:6; Hebrews 6:17–19', search: 'Malachi 3:6; Hebrews 6:17-19',
    verse: { text: 'Which hope we have as an anchor of the soul, both sure and stedfast.', ref: 'Hebrews 6:19' },
    truth: "God doesn't change, which is why He can be an anchor.",
    focus: "Where in your life do you feel like you're drifting? Bring that with you Thursday.",
    song: { title: 'The Solid Rock', artist: 'Edward Mote (hymn)' },
    menu: ['Smash burgers', 'Street tacos', 'Brisket sliders', 'Breakfast for dinner']
  },
  { date: '2026-12-24', off: true, title: 'Merry Christmas', note: 'No gathering on Christmas Eve or New Year’s Eve. Fire Night is January 7.' },
  { date: '2026-12-31', off: true, title: 'Happy New Year', note: 'No gathering tonight. Fire Night is next Thursday, January 7. Drop your questions in the box below.' },
  {
    date: '2027-01-07', series: 'Holy', number: 6, fireNight: true,
    question: 'Fire Night: your questions, answered around the fire.',
    passage: '1 Peter 3:15', search: '1 Peter 3:15',
    verse: { text: 'Be ready always to give an answer to every man that asketh you a reason of the hope that is in you with meekness and fear.', ref: '1 Peter 3:15' },
    truth: 'No question is too hard to bring to the fire.',
    focus: "Got a question from this series you haven't asked yet? Put it in the question box. It's anonymous.",
    song: { title: "The room's pick", artist: 'We vote Thursday on one of the five songs from this series and sing it again by the fire.', noLinks: true },
    menu: ['Chili & cornbread', 'BBQ chicken', 'Baked potato bar', 'Pasta night']
  }
];
