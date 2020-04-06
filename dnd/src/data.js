
export const alignment = [
    {
        name: "Lawful good",
        desc: "Lawful good creatures can be counted on to do the right thing as expected by society."
    },
    {
        name: "Neutral good",
        desc: "Neutral good folk do the best they can to help others according to their needs."
    },
    {
        name: "Chaotic Good",
        desc: "Chaotic good creatures act as their conscience directs, with little reguard for what others expect."
    },
    {
        name: "Lauful neutral",
        desc: "Lawful neutral individuals act in accordance with law, tradition, or personal code."
    },
    {
        name: "Neutral",
        desc: "Neutral is the alignment of those who prefer to steer clear of moral questions and dont take sides, doing what seems best at the time."
    },
    {
        name: "Chaotic neutral",
        desc: "Chaotic neutral creatures follow their whims, holding personal freedom above all else."
    },
    {
        name: "Lawful evil",
        desc: "Lawful evil creatures methodically take what they want, within limits of a code or tradition, loyalty, or order."    
    },
    {
        name: "Neutral evil",
        desc: "neutral evil is the alignment of those who do whatever they can get away with, without compassion or qualms."
    },
    {
        name: "Chaotic evil",
        desc: "Chaotic evil creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust."
    }
];

export const backgrounds = [
    
        {
        name: "Acolyte",
        desc: "You spent your life in the service of a temple to a god or pantheon. You preform sacred rites in order to conduct worshipers into the presence of the devine.",
        skill_proficiencies: [
            {
                name: "Insight"
            },
            {
                name: "Religion"
            },
        ],
        languages: {
            choose: 2, 
            from:[
                {
                    index: "abyssal",
                    name: "Abyssal",
                    url: "/api/languages/abyssal"
                },
                {
                    index: "celestial",
                    name: "Celestial",
                    url: "/api/languages/celestial"
                },
                {
                    index: "common",
                    name: "Common",
                    url: "/api/languages/common"
                },
                {
                    index: "deep-speech",
                    name: "Deep Speech",
                    url: "/api/languages/deep-speech"
                },
                {
                    index: "draconic",
                    name: "Draconic",
                    url: "/api/languages/draconic"
                },
                {
                    index: "dwarvish",
                    name: "Dwarvish",
                    url: "/api/languages/dwarvish"
                },
                {
                    index: "elvish",
                    name: "Elvish",
                    url: "/api/languages/elvish"
                },
                {
                    index: "giant",
                    name: "Giant",
                    url: "/api/languages/giant"
                },
                {
                    index: "gnomish",
                    name: "Gnomish",
                    url: "/api/languages/gnomish"
                },
                {
                    index: "goblin",
                    name: "Goblin",
                    url: "/api/languages/goblin"
                },
                {
                    index: "halfling",
                    name: "Halfling",
                    url: "/api/languages/halfling"
                },
                {
                    index: "infernal",
                    name: "Infernal",
                    url: "/api/languages/infernal"
                },
                {
                    index: "orc",
                    name: "Orc",
                    url: "/api/languages/orc"
                },
                {
                    index: "primordial",
                    name: "Primordial",
                    url: "/api/languages/primordial"
                },
                {
                    index: "sylvan",
                    name: "Sylvan",
                    url: "/api/languages/sylvan"
                },
                {
                    index: "undercommon",
                    name: "Undercommon",
                    url: "/api/languages/undercommon"
                }
            ] 
        
        },
        equipment:[
            {
                name: "Holy Symbol",
                quantity: 1
            },
            {
                name: "Sticks of Incense",
                quantity: 5
            },
            {
                name: "vestments",
                quantity: 1
            },
            {
                name: "Common Clothes",
                quantity: 1
            },
            {
                name: "pouch",
                quantity: 1
            }
        ],
        equipment_choice: {
            choose: 1,
            from: [
                {
                    name: "Prayer book"
                },
                {
                    name: "Prayer wheel"
                },
            ],
        },
        money:[
            {
                type: "Gp", 
                amount: 15 
            }
        ],

        feature:{
            name: "Shelter of the Faithful",
            desc: "You and your companions can expect to recieve free healing and care at a temple, shrine, or other established presence of your faith. "
        },
        chararacteristics:{
            personality_trait: [ 
                "I idolize a particular hero of my faith, and constantly refer to that person's deeds and example",
                "I can find common ground between the fericest enimies, empathizing with them and always working towards peace",
                "I see omens in every event and action. The god's are trying to speak to us, we just need to listen ",
                "Nothing can shake my optimistic attitude",
                "I quote (or misquote) sacred texts and proverbs in almost every situation.",
                "I am tolerant (or intolerant) of other faiths and respects (or condemns) the worship of other gods.",
                "I've enjoyed fine food, drink, and high society among my temple's elite. Rough living grates on me.",
                "I've spent so long in the temple that I have little experience dealing with people in the outside world.",        
            ],
            ideal: [
                {
                    name: "Tradition",
                    desc: "The ancient traditions of worship and sacrifice must be preserved and upheld."
                },
                {
                    name: "Charity",
                    desc: "I always try to help those in need, no matter what the personal cost."
                },
                {
                    name: "Change",
                    desc: "We must help bring about the changes the god's are constantly working in the world."
                },
                {
                    name: "Power",
                    desc: "I hope to one day rise to the top of my faiths religious hierarchy."
                },
                {
                    name: "Faith",
                    desc: "I trust that my deity will guide my actions. I have faith that if I work hard, things will go well."
                },
                {
                    name: "Aspiration",
                    desc: "I seek to prove myself worthy of my god's favor by mathing mu actions against his or her teachings."
                }
            ],
            bond:[
                "I would die to recover an ancient relic of my faith that was lost long ago.",
                "I will someday ge revenge on the corrupt temple hierchy who branded me a heretic.",
                "I owe my life to the priest who took me in when my parents died.",
                "Everything I do is for the common people.",
                "I will do anything to protect the temple where I served.",
                "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy."
            ],
            flaw:[
                "I judge others harshly, and myself even more severely",
                "I put too much trust in those who wield power within my temple's hierarchy.",
                "My piety sometimes leads me to blindly trust those that profess faith in my god.",
                "I am inflexable in my thinking.",
                "I am suspicious of strangers.",
                "Once I pick a goal, I become obsessed with it to the detriment of everything else in my life."
            ]
        }

    },
    {
        name: "Criminal",
        desc: "You are a criminal and still have contracts within the criminal underworld.",
        skill_proficiencies:[
            {
                name: "Deception"
            },
            {
                name: "Stealth"
            }
        ],
        tool_proficiencies:[
            {
                name: "Thieves' tools",
                url: "/api/equipment/thieves-tools",
            }
        ],
        tool_choices:[
            {
                choose: 1,
                from:[
                    {
                        name: "Dice set",
                        url: "/api/equipment/dice-set",    
                    },
                    {
                        name: "Playing card set",
                        url: "/api/equipment/playing-card-set",    
                    }
                ]
            },
        ],
        equipment: [
            {
                name: "Crowbar",
                quantity: 1
            },
            {
                name: "Common clothes with hood",
                quantity: 1
            },
            {
                name: "Pouch",
                quantity: 1,
            }
        ],
        money:[
            {
                type: "Gp",
                amount: 15,
            }
        ],
        criminal_specialty: [
            "Blackmailer",
            "Burglar",
            "Enforcer",
            "Fence",
            "Highway robber",
            "Hired Killer",
            "Pickpocket",
            "Smuggler",
        ],
        feature: {
            name: "Criminal Contact",
            desc: "You know how to get messages to and from your contacts, even over great distances. You know the local messengers, corupt caravan masters, and seedy sailors who can deliever messages for you.",
        },
        personality_trait:[
            "I always plan for what to do when things go wrong.",
            "I'm always calm no matter what the situation. I never raise my voice or let my emotions controll me.",
            "The first thiong I do in a new place is note the locations of everything valuable--or where such things could be hidden.",
            "I would rather make a new friend than a new enemy.",
            "I am incedibly slow to trust. Those who seem the fairest often have the most to hide.",
            "I never pay attention to the risks in a situation. Never tell me the odds.",
            "The best way to get me to do something is to tell me I can't do it.",
            "I blow up at the sleightest insult."
        ],
        ideal: [
            {
                name: "Honor",
                desc: "I don't steal from others in the trade"
            },
            {
                name: "Freedom",
                desc: "Chains are meant to be borken, as are those who forge them."
            },
            {
                name: "Charity",
                desc: "I steal from the wealthy so that I can help people in need."
            },
            {
                name: "Greed",
                desc: "I'll do whatever it takes to become wealthy."
            },
            {
                name: "People",
                desc: "I'm loyal to my friends, not any ideals, and enyone else can take a trip down the Styx for all I care.",
            },
            {
                name: "Redemption",
                desc: "There's good in everyone."
            },
            
        ],
        bond:[
            "I'm trying to pay off a debt I owe to a kind benifactor.",
            "My ill-gotten gains go to support my family.",
            "Something important was taken from me and I aim to steal it back.",
            "I will become the gratest theif that ever lived.",
            "I'm guity of a terrible crime and want to redeem myself",
            "Somone I loved died because of a mistake I made. That will never happen again",
        ],
        flaw:[
            "When I see something valuable, I can't think about anything but how to steal it.",
            "When faced with a choice between money and my friends, I usually choose the money.",
            "If theres a plan, I'll forget it. If I don't forget it, I'll ignore it.",
            "I have a 'tell' that reveals whem I'm lying.",
            "I turn tail and run when things look bad.",
            "An inocent person is in prision for a crime that I commited. I'm okay with that."
        ]
    },
    {
        name: "Entertainer",
        desc: "You thrive in front of an audience. You know how to entrance them, amuse them, and even inspire them. Whatever techniques you use, your art is your life",
        skill_proficiencies: [
            {
                name: "Acrobatics"
            },
            {
                name: "Performance"
            },
        ],
        tool_proficiencies:[
            {
                name: "Disguise kit",
                url: "/api/equipment/disguise-kit",
            }
        ],
        equipment:[
            {
                name: "Favor of an admirer",
                quantity: 1
            },
            {
                name: "Costume",
                quantity: 1
            },
            {
                name: "Pouch",
                quantity: 1
            },
            
        ],
        equipment_choices:{
            choose: 1,
            from:[
                {
                    url: "/api/equipment/bagpipes",
                    name: "Bagpipes"
                },
                {
                    url: "/api/equipment/drum",
                    name: "Drum"
                },
                {
                    url: "/api/equipment/dulcimer",
                    name: "Dulcimer"
                },
                {
                    url: "/api/equipment/flute",
                    name: "Flute"
                },
                {
                    url: "/api/equipment/lute",
                    name: "Lute"
                },
                {
                    url: "/api/equipment/lyre",
                    name: "Lyre"
                },
                {
                    url: "/api/equipment/horn",
                    name: "Horn"
                },
                {
                    url: "/api/equipment/pan-flute",
                    name: "Pan flute"
                },
                {
                    url: "/api/equipment/shawm",
                    name: "Shawm"
                },
                {
                    url: "/api/equipment/viol",
                    name: "Viol"
                }
            ]
        },
        money: [
            {
                type: "Gp",
                amount: 15
            }
        ],
        entertainer_routines:[
            "Actor",
            "Dancer",
            "Fire-Eater",
            "Jester",
            "Juggler",
            "Instrumentalist",
            "Poet",
            "Singer",
            "Storyteller",
            "Tumbler"
        ],
        feature:{
            name: "By Popular Demand",
            desc: "You can always find a place to preform. At such places you recieve free lodging and food of a modest or comfotable standard, as long as you preform each night."
        },
        personality_trait: [
            "I know a story relevant to almost every situation.",
            "Whenever I come to a new place, I collect local rumors and spread gossip.",
            "I'm a hopless romantic, always searching for that special someone.",
            "No one stays angry at me or around me for long, since I can defuse any amount of tension.",
            "I love a good insult, even one dorected at me.",
            "I get bitter if I'm not the center of attention.",
            "I'll settle for nothing less than perfection.",
            "I change my mood as quickly as I change key in a song.",
        ],
        ideal:[
            {
                name: "Tradition",
                desc: "The stories, legends, and songs of the past must never be forgotten, for they teach us who we are."
            },
            {
                name: "Beauty",
                desc: "When I preform, I make the world better than it was."
            },
            {
                name: "Creativity",
                desc: "The world is in need of new ideas and bold action."
            },
            {
                name: "Greed",
                desc: "I'm only in it for the money and fame"
            },
            {
                name: "People",
                desc: "I like seeing the smiles on people's faces when I preform. That's all that matters."
            },
            {
                name: "Honesty",
                desc: "Art should reflect the soul; it should come from within and reveal who we really are."
            }
        ],
        bond: [
            "My instrument is my most treasured possession, and it reminds me of some one I love.",
            "Someone stole my precious instrument, and someday I'll get it back.",
            "I want to be famous whatever it takes.",
            "I idolize a hero of the old tales and measure my deeds against that person's.",
            "I will do anything to prove myself superior to my rival.",
            "I will do anything for the other members of my old troupe."
        ],
        flaw: [
            "I'll do anything for fame and renown.",
            "I'm a sucker for a pretty face.",
            "A scandal prevents me from ever going home again. That kind of trouble seemes to follow me arround.",
            "I once stirized a noble who still wants my head. It was a mistake that I will likely repeat.",
            "I have trouble keeping my true feelings hidden. My sharp tongue lands me in trouble.",
            "Despite my best efforts, I am unreliable to my friends."
        ]
    },
    {
        name: "Sage",
        desc:"You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subject that interests you. Your efforts have made you a master in your fields of study.",
        skill_proficiencies: [
            {
                name: "Arcana"
            },
            {
                name: "History"
            },
        ],
        languages: {
            choose: 2, 
            from:[
                {
                    index: "abyssal",
                    name: "Abyssal",
                    url: "/api/languages/abyssal"
                },
                {
                    index: "celestial",
                    name: "Celestial",
                    url: "/api/languages/celestial"
                },
                {
                    index: "common",
                    name: "Common",
                    url: "/api/languages/common"
                },
                {
                    index: "deep-speech",
                    name: "Deep Speech",
                    url: "/api/languages/deep-speech"
                },
                {
                    index: "draconic",
                    name: "Draconic",
                    url: "/api/languages/draconic"
                },
                {
                    index: "dwarvish",
                    name: "Dwarvish",
                    url: "/api/languages/dwarvish"
                },
                {
                    index: "elvish",
                    name: "Elvish",
                    url: "/api/languages/elvish"
                },
                {
                    index: "giant",
                    name: "Giant",
                    url: "/api/languages/giant"
                },
                {
                    index: "gnomish",
                    name: "Gnomish",
                    url: "/api/languages/gnomish"
                },
                {
                    index: "goblin",
                    name: "Goblin",
                    url: "/api/languages/goblin"
                },
                {
                    index: "halfling",
                    name: "Halfling",
                    url: "/api/languages/halfling"
                },
                {
                    index: "infernal",
                    name: "Infernal",
                    url: "/api/languages/infernal"
                },
                {
                    index: "orc",
                    name: "Orc",
                    url: "/api/languages/orc"
                },
                {
                    index: "primordial",
                    name: "Primordial",
                    url: "/api/languages/primordial"
                },
                {
                    index: "sylvan",
                    name: "Sylvan",
                    url: "/api/languages/sylvan"
                },
                {
                    index: "undercommon",
                    name: "Undercommon",
                    url: "/api/languages/undercommon"
                }
            ] 
        
        },
        specialty:[
            "Alchemist",
            "Astronomer",
            "Descredited academic",
            "Librarian",
            "Professor",
            "Researcher",
            "Wizard's apprentice",
            "Scribe"
        ],
        feature:{
            name: "Researcher",
            desc: "When you attempt to learn or recall a piece of lore, if you dont know that information, you often know where and from whom you can obtain it. Usually, this information comes from a university, or a sage or other learned person or creature.",
        },
        personality_trait:[
            "I use polysillabic words that convey the impression of great erudition.",
            "I've read every book in the world's greatest libraries--or so I like to boast that I have.",
            "I'm used to helping out those who aren't as smart as I am, and I patiently explain anything and everything to others.",
            "There's nothing I like more than a good mystery.",
            "I'm willing to listen to every side of an argument before I make my own judgment.",
            "I... speak... slowly... when talking... to idiots, which almost everyone is compared to me.",
            "I am horribly, horribly awkward in socal situations.",
            "I'm convinced that people are always trying to steal my secrets."
        ],
        ideal:[
            {
                name: "Knowledge",
                desc: "The path to power and self-improvement is through knowledge."
            },
            {
                name: "Beauty",
                desc: "What beautiful points us beyonditself toward what is true."
            },
            {
                name: "Logic",
                desc: "Emotions must not cloud our logical thinking."
            },
            {
                name: "No Limits",
                desc: "Nothing should fetter the infinite possibility inherent in all existence."
            },
            {
                name: "Power",
                desc: "Knowledge is the path to power."
            },
            {
                name: "Self-Improvement",
                desc: "The goal of a life of study is the betterment of oneself."
            }
        ],
        bond:[
            "It's my duty to protect my students",
            "I have an ancient text that holds terrible secrets that must not fail into the wrong hands.",
            "I work to preserve a library, university, scriptorum, or monistary.",
            "My lifes work is a series of tomes related to a specific field of lore.",
            "I've been searching my whole life for the answer to a certian question.",
            "I sold my soul for knowledge. I hope to do great deeds and win it back."
        ],
        flaw: [
            "I am easily distracted by the promise of information.",
            "Most people scream and run when they see a demon. I stop and take notes on its anatomy.",
            "Unlocking an ancient mystery is worth the price of a civilization.",
            "I overlook obvious solutions in favor of complicated ones.",
            "I speak without really thinking through my words, invariably insulting others.",
            "I can't keep a secret to save my life, or anyone elses."
        ] 
    },
    {
        name: "Soldier",
        desc: "War has long been your life. You might have been a part of a national army or a mercenary company, or perhaps a member of a local militia.",
        skill_proficiencies: [
            {
                name: "Athletics"
            },
            {
                name: "Intimidation"
            },
        ],
        tool_proficiencies:[
            {
                name: "vehicles (land)",
            }
        ],
        tool_choices:[
            {
                choose: 1,
                from:[
                    {
                        name: "Dice set",
                        url: "/api/equipment/dice-set",    
                    },
                    {
                        name: "Playing card set",
                        url: "/api/equipment/playing-card-set",    
                    }
                ]
            }
        ],
        equipment:[
            {
                name: "Insignia of Rank",
                quantity: 1
            },
            {
                name: "common clothes",
                quantity: 1
            },
            {
                name: "Pouch",
                quantity: 1
            }
        ],
        equipment_choices:[
            {
                choose: 1,
                from: [
                    {
                        name: "Dice set",
                        url: "/api/equipment/dice-set",    
                    },
                    {
                        name: "Playing card set",
                        url: "/api/equipment/playing-card-set",    
                    }

                ]
            }
        ],
        specialty: [
            "Officer",
            "Scout",
            "Infantry",
            "Cavalry",
            "Healer",
            "Quartermaster",
            "Standard bearer",
            "Support staff (cook, blacksmith, or the like)"
        ],
        feature:{
            name: "Military",
            desc: "You have a military rank from your career as a soilder. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain ascces to friendly millitary encampments and fortresses where your rank is recognized.",
        },
        personality_trait:[
            "I'm always polite and respectfull.",
            "I'm haunted by memories of war. I can't get images of violence out of my mind.",
            "I've lost too many friends, and I'm slow to make new ones.",
            "I'm full of inspiring and cautionary tales from my military experience relevant to almost every combat situation.",
            "I can stare down a hell hound without flinching",
            "I enjoy being strong and like breaking things.",
            "I have a crude sense of humor",
            "I face problems head-on. A simple, direct solution is the best path to success."
        ],
        ideal:[
            {
                name: "Greater Good",
                desc: "Our lot is to lay down our lives in defense of others.",
            },
            {
                name: "Responsibilty",
                desc: "I do what I must and obey just authority."
            },
            {
                name: "Independence",
                desc: "When people follow orders blindly, they embrace a kind of tyranny."
            },
            {
                name: "Might",
                desc: "In life as in war, the stronger force wins."
            },
            {
                name: "Live and Let Live",
                desc: "Ideals aren't worth killing over or going to war over."
            },
            {
                name: "Nation",
                desc: "My city, nation, or people are all that matter."
            }
        ],
        bond:[
            "I would still lay down my life for the people I served with.",
            "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.",
            "My honor is my life.",
            "I'll never forget the crushing defeat my company suffered or the enemies who dealt it.",
            "Those who fight beside me are those worth dying for.",
            "I fight for those who can't fight for themselves."
        ],
        flaw:[
            "The monstrous enemy we faced in battle still leaves me quivering with fear.",
            "I have little respect for anyone who isn't a proven warrior",
            "I made a terrible mistake in battle that cost many lives--and I would do anything to keep that mistake secret.",
            "My hatred of my enemies is blind and unreasoning.",
            "I obey the law, even if the law causes misery.",
            "I'd rather eat my armor than admit when I'm wrong."
        ]
    },
    
]
    

