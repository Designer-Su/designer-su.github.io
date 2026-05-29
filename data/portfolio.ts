export const portfolioData = {
  hero: {
    greeting: "Sukyeong Lee",
    headline: "is a UX/UI Designer who turns research into clear flows, usable interfaces, and measurable product results.",
    about:
      "I design products by turning user research, data, and fast iteration into simpler flows. My work focuses on usability, clear decision-making, and product outcomes users can feel.",
    skills: ["User Experience", "User Interface", "Prototyping", "Design Systems", "Interaction Design", "Wireframing", "Figma", "Web Design", "User Research", "User Testing", "Adobe CC"],
  },
  experience: [
    {
      id: 1,
      role: "Operations Intern",
      company: "SAP Labs Korea",
      period: "Sep 2025 - Present",
      description: "Optimized SharePoint information architecture to improve accessibility and operational efficiency. Analyzed internal workflows, resolved communication gaps, and produced data-driven reports to support decision-making and employee experience initiatives.",
    },
    {
      id: 2,
      role: "UX Design Intern",
      company: "Volt Micro Co., Ltd.",
      period: "Sep 2023 - Dec 2023",
      description: "Led the web and mobile redesign of CameraFi Studio, improving feature engagement by 28% and average session duration by 1.6x through A/B testing and behavior analysis. Prepared CES 2024 exhibition assets and partnered with engineers to deliver production-ready UX improvements.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "B.A. in Design Convergence & Fashion Design (Double Major)",
      institution: "Inha University (Incheon, Korea)",
      period: "Mar 2020 - Aug 2025",
      details: [
        "Valedictorian | Full Scholarship",
        "Courses: Life system design, Brand design, Advanced Typography",
      ],
    },
    {
      id: 2,
      degree: "Exchange Program in Textile Management",
      institution: "University of Borås (Sweden)",
      period: "Jan 2024 - Jan 2025",
      details: [
        "Completed 29 credits",
        "Courses: UX and interaction design, Textile Innovation",
        "Projects: Smart textile innovation",
      ],
    },
  ],
  projects: [
    {
      id: "solid-connection",
      slug: "solid-connection",
      title: "Solid Connection",
      category: "Web Application",
      image: "/Thumbnail/Solid%20Connection%20main.png",
      summary: "A data-driven exchange application platform for mock applications, school comparison, and verified alumni mentoring.",
      overview: {
        year: "2023 - Ongoing",
        duration: "Every 5 months for new features",
        role: "Lead Designer & PM\n(Service Planning: 90%, Design: 60%)",
        team: "2 PMs | 2 Designers | 4 Frontend Developers\n5 Backend Developers",
        web: "https://www.solid-connection.com/",
        git: "https://github.com/solid-connection",
        logo: "/SC/solcon-logo-v2.png"
      },
      colors: ["#5950F6", "#4672EE", "#388CE8", "#2AA4E2"],
      userProblem: "Exchange applicants had to piece together school requirements, acceptance stories, and grade benchmarks from scattered sheets and rumors.",
      businessGoal: "Make application prep easier to manage, increase verified mentor matching, and lower informational page bounce rates below 15%.",
      designHypothesis: "A 9-step application wizard would make the process feel manageable and reduce form drop-off by showing only one decision at a time.",
      problem: "Exchange applicants were making high-stakes choices with scattered information and little confidence. Without comparison tools or prediction cues, users dropped off during school selection and rarely moved from interest to application.",
      solution: [
        "School Database: Replaced scattered spreadsheets with one searchable global school list.",
        "Mock Application: Showed real-time competition rates and acceptance signals before users applied.",
        "Verified Mentoring: Connected applicants with alumni through 1:1 mentor matching."
      ],
      background: "We turned an uncertain exchange application process into a clearer path powered by data, reviews, and mentor support.",
      research: {
        text: "We interviewed and surveyed 50+ applicants and recent exchange students to find where preparation became confusing or stressful.",
        insights: [
          { title: "Scattered School Data", description: "Users spent 40+ hours searching for requirements across sheets, blogs, and school pages. A filterable database could cut search time and help users start faster." },
          { title: "Acceptance Anxiety", description: "Users delayed decisions because they could not judge their chances. Real-time applicant specs and mock competition rates could make the next step feel safer." }
        ]
      },
      userJourney: [
        {
          type: "Type A: Early Interest Stage",
          description: "For users lost in too much information, the community works as a simple starting guide.",
          stages: [
            { stage: "Awareness", doing: "Encounters vivid reviews on the in-app 'Real Stories' board instead of social media.", feeling: '"Where did people with similar concerns end up going?"', solution: "Trending Schools: Real-time popular countries and schools list." },
            { stage: "Exploration", doing: "Narrows down regions of interest through recommended posts and Q&As.", feeling: '"It felt overwhelming, but reading real reviews makes me feel like I can do it too."', solution: "Adaptive Onboarding: Customized community content curation based on user type." },
            { stage: "Decision", doing: "Saves guides for beginners and advice from seniors.", feeling: '"I can trust this place to start preparing."', solution: "Onboarding Community: A shared space for basic info for beginner applicants." }
          ]
        },
        {
          type: "Type B: Preparing Stage",
          description: "For users anxious about competition, the community provides practical strategy data.",
          stages: [
            { stage: "Analysis", doing: "Enters grades into the 'Mock Application' system and checks the applicant distribution.", feeling: '"Where do my grades stand among the applicants for this school?"', solution: "Applicant Overview: Sharing real-time application status and competition rates." },
            { stage: "Comparison", doing: "Adjusts application strategy by checking the community's real-time ranking signals.", feeling: '"Looking at others\' specs, I should find a slightly safer option."', solution: "Peer Insights: Anonymous applicant specs and strategy sharing system." },
            { stage: "Application", doing: "Gains confidence by exchanging feedback in the community after a virtual application.", feeling: '"Sharing info with people in a similar grade range is so reassuring."', solution: "Live Rankings: Visualizing the competitive landscape based on real-time data." }
          ]
        },
        {
          type: "Type C: Needs Specific Info",
          description: "For users who need specific answers, the community connects them with verified mentors.",
          stages: [
            { stage: "Deep Exploration", doing: "Searches for specific details like dormitories and living costs in the target school category.", feeling: '"I need actual structured info, much better than a Google Sheet."', solution: "Searchable Database: Structured real stories from students by school." },
            { stage: "Connection", doing: "Visits the 'Mentor' page of the school of interest to leave questions or subscribe to the channel.", feeling: '"I want to ask directly from a mentor who actually went to this school."', solution: "Mentor-Mentee UX: Dedicated channels and Q&As containing mentor know-how and tips." },
            { stage: "Confirmation", doing: "Double-checks final application documents based on the mentor's acceptance reviews and interview tips.", feeling: '"Hearing even local lifestyle tips makes me feel truly ready to go."', solution: "Mentoring System: In-depth support service through 1:1 matching and Q&A." }
          ]
        }
      ],
      userFlow: [
        {
          title: "1. Onboarding",
          description: "Users enter GPA, language scores, and target region to create their applicant profile.",
          flow: ["Sign Up", "Input Specs", "Home Dashboard"]
        },
        {
          title: "2. Exploration",
          description: "Users compare schools, requirements, reviews, and local details in one database.",
          flow: ["Search Univ.", "Filter Data", "Check Reviews"]
        },
        {
          title: "3. Mentoring",
          description: "Users ask verified alumni about school life, documents, and interviews through 1:1 Q&A.",
          flow: ["Mentor Profile", "1:1 Matching", "Ask Questions"]
        },
        {
          title: "4. Mock Apply",
          description: "Users select 1st and 2nd choice schools, set their strategy, and join the live mock queue.",
          flow: ["Select 1st/2nd", "Input Tendency", "Submit Mock"]
        },
        {
          title: "5. Strategize",
          description: "Users compare applicant specs and competition rates before finalizing their real application strategy.",
          flow: ["View Dashboard", "Analyze Competitors", "Finalize"]
        }
      ],
      ideation: {
        text: "Research pointed to three priorities: clearer data, less decision pressure, and stronger trust. We mapped each priority to a specific user type.",
        points: [
          { title: "Opportunity: Data Transparency", description: "Bring school data into one interface so users can compare options quickly." },
          { title: "Opportunity: Anxiety Relief", description: "Use real-time data and peer signals to help users judge their chances." },
          { title: "Strategy: Guided Discovery", description: "For early-stage users, show trending schools and beginner guides first." },
          { title: "Strategy: Mock Application", description: "For preparing users, show live competition rates and applicant specs." },
          { title: "Strategy: Verified Mentoring", description: "For users with specific questions, connect them to verified alumni." }
        ]
      },
      design: {
        text: "The final design prioritized clarity, data visualization, and community engagement.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        features: [
          { 
            title: "School Database",
            description: "Replaced scattered spreadsheets with one searchable global school list."
          },
          { 
            title: "Mock Application",
            description: "Showed live competition rates and acceptance signals before users applied."
          },
          { 
            title: "Verified Community", 
            description: "Connected applicants with verified alumni through 1:1 mentoring."
          }
        ]
      },
      testing: [],
      impact: {
        points: [
          { title: "Quantitative Results", description: "Acquired 400+ new users, passed 77,000 total events, and kept average session duration at 2m 28s." },
          { title: "User Feedback", description: "Users said the service made exchange applications feel predictable and reduced the need to ask seniors one by one." },
          { title: "Next Steps", description: "Real-time data increased trust and engagement. Next, the database can expand to more European universities." }
        ]
      }
    },
    {
      id: "camerafi-studio",
      slug: "camerafi-studio",
      title: "CameraFi Studio Redesign",
      category: "Web & Mobile UI/UX",
      image: "/Thumbnail/Camerafi%20Studio%20main.png",
      imagePosition: "object-[30%_70%]",
      colors: ["#B8E218", "#37C556", "#2362A2"],
      summary: "A clearer creator workspace that helps streamers find the right broadcasting tools at the right moment.",
      overview: { year: "2023", duration: "4 Months", role: "UX/UI Design Intern (Design Contribution: 95%)" },
      userProblem: "New creators saw too many advanced broadcasting options on the first screen and dropped off before setup.",
      businessGoal: "Improve first-session activation, increase dashboard creation, raise homepage CTR by 25%, and keep page load under 1.5 seconds.",
      designHypothesis: "Hiding advanced settings behind contextual FAB actions and adding an interactive simulator would help users understand core features faster.",
      problem: "CameraFi Studio had strong features, but the first screen showed too much too soon. New users faced a steep learning curve, which hurt setup completion and activation.",
      solution: [
        "Value-First IA: Prioritized the actions creators use most often.",
        "Contextual FAB: Revealed creation options only when users needed them.",
        "Brand Renewal: Updated logo, typography, color, and microcopy for a clearer identity."
      ],
      background: "Instead of showing every feature upfront, we revealed advanced tools only when the user was ready to act.",
      research: {
        text: "We asked where the first experience felt difficult, then checked the findings with 45 external users, 14 employees, and onboarding A/B tests.",
        insights: [
          { title: "Overloaded First Screen", description: "The issue was not missing features. Users needed fewer visible choices and a clearer path to start." },
          { title: "Clarity Before Features", description: "Homepage clarity and brand identity were the biggest blockers. An interactive simulator could explain the product faster than long descriptions." },
          { title: "Brand Renewal", description: "The redesign needed both a simpler structure and a cleaner visual identity." }
        ],
        chart: {
          title: "Survey: What Blocks First-Time Users?",
          question: "Which area should be clarified first to reduce onboarding friction?",
          note: "Users were not asking for more features. They needed a clearer first screen, stronger identity, and easier entry points.",
          items: [
            { label: "Homepage UI/UX", value: 41.7 },
            { label: "Logo / Symbol", value: 33.3 },
            { label: "Banner / Icon System", value: 16.6 },
            { label: "Brand Slogan / Color", value: 8.4 }
          ]
        }
      },
      ideation: { 
        text: "We reduced first-use friction by matching the interface to the creator's broadcasting flow.",
        points: [
          { title: "Opportunity: Contextual Reveal", description: "Show only the tools that match the user's current task." },
          { title: "Opportunity: Interactive Onboarding", description: "Replace long feature explanations with screen-based walkthroughs." }
        ] 
      },
      design: {
        text: "The redesigned UI focuses on visual guidance and cross-platform consistency.",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200",
        features: [
          { title: "Conversational Landing Page", description: "Provided visual guides using actual app screens so users could immediately understand how to use the service.", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800" },
          { title: "Multi-Surface Support", description: "Built a responsive design system providing a consistent experience across Web, Tablet, and Mobile apps.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" }
        ]
      },
      testing: [
        {
          title: "A/B Testing: Text-Heavy (A) vs. Interactive Simulator (B)",
          description: "We compared the original layout with an interactive simulator. In the original, users skipped dense feature text and dropped off by 34%. In the simulator version, 68% moved directly to stream setup and overall CTR increased by 28%.",
          beforeImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800",
          afterImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800"
        }
      ],
      impact: {
        points: [
          { 
            title: "IA & flow redesign\n(CTR ↑ 28%, session time ×1.6)", 
            description: "Simplified the IA and key feature flows with clear task mapping. Users navigated faster, raising CTR by 28% and average session duration by 1.6x."
          },
          { 
            title: "From UX Renewal to Global Recognition\n(CES 2024 Feedback)", 
            description: "At CES 2024, visitors said the complex features felt well organized and the landing page made core functions easy to understand. The feedback confirmed that clearer UX can build trust and support business value."
          }
        ]
      }
    },
    {
      id: "smart-fridge",
      slug: "smart-fridge",
      title: "Smart Fridge",
      category: "Web & Mobile UI/UX",
      image: "/Thumbnail/Smart%20Fridge%20main.png",
      imagePosition: "object-[30%_70%]",
      summary: "A kitchen management app that tracks fridge inventory, reduces food waste, and suggests meals from ingredients users already have.",
      overview: {
        year: "2024",
        duration: "4 Months",
        role: "UX/UI Designer",
        team: "Ali Basim Khalaf Khalaf, Aria Abbaspour, SuKyeong Lee\nZeynep Geyik, Le Dai Duong Bui"
      },
      problem: "Busy users forget what is in the fridge, buy duplicates, miss expiration dates, and spend extra time deciding what to cook.",
      solution: [
        "Kitchen Planning: Framed the app as a home system for managing food resources.",
        "Inventory Visibility: Tracked ingredients, categories, quantities, and expiration dates in one view.",
        "Recipe Suggestions: Recommended meals users could cook with ingredients already available."
      ],
      background: "Smart Fridge started from a simple need: help people see what they have, use it in time, and waste less food.",
      research: {
        text: "We used interviews and think-aloud testing to understand how people manage food, shop, and choose meals.",
        insights: [
          { title: "Inventory Blindness", description: "Users frequently forgot what they owned before grocery shopping, directly causing duplicate purchases." },
          { title: "Meal Decision Fatigue", description: "Even with a full fridge, users struggled to choose meals. They needed recipe ideas based on available ingredients." }
        ]
      },
      userScenarioImages: [
        { src: "/SF/User%20story%20Emily.png", alt: "Smart Fridge user scenario for Emily" },
        { src: "/SF/User%20story%20Larry.png", alt: "Smart Fridge user scenario for Larry" }
      ],
      loFiImages: [
        { src: "/SF/main.png", alt: "Smart Fridge lo-fi main screen" },
        { src: "/SF/feature%201.png", alt: "Smart Fridge lo-fi feature screen 1" },
        { src: "/SF/feature%202.png", alt: "Smart Fridge lo-fi feature screen 2" },
        { src: "/SF/feature%203.png", alt: "Smart Fridge lo-fi feature screen 3" },
        { src: "/SF/feature%204.png", alt: "Smart Fridge lo-fi feature screen 4" }
      ],
      userFlow: [
        {
          title: "1. Set Up Kitchen",
          description: "Users set basic kitchen preferences before managing ingredients.",
          flow: ["Open App", "Set Storage", "Choose Preferences"]
        },
        {
          title: "2. Add Ingredients",
          description: "Users register food items with the minimum information needed for tracking.",
          flow: ["Tap Add", "Search Item", "Set Quantity", "Add Expiry Date", "Save Item"]
        },
        {
          title: "3. Check Inventory",
          description: "Users scan current fridge status and identify items that need attention.",
          flow: ["Open Home", "Review Alerts", "Filter Category", "Select Ingredient"]
        },
        {
          title: "4. Cook With What You Have",
          description: "Users move from available ingredients to recipes they can cook now.",
          flow: ["Open Recipes", "View Available Meals", "Check Missing Items", "Start Recipe"]
        },
        {
          title: "5. Plan & Shop",
          description: "Users connect event planning with a clear shopping action list.",
          flow: ["Create Event", "Add Dishes", "Generate List", "Mark Purchased"]
        }
      ],
      ideation: { 
        text: "We moved from concept to scenarios, storyboards, and lo-fi prototypes to test the core flow.",
        points: [
          { title: "HMW: Visibility", description: "How might we make the fridge's current state easy to see?" },
          { title: "HMW: Actionability", description: "How might we connect expiring ingredients to meals users can cook now?" }
        ] 
      },
      design: {
        text: "The final design brings inventory, expiration alerts, recipe ideas, and event planning into one simple mobile flow.",
        image: "/SF/mockup/Main.png",
        features: [
          { title: "Home Screen", description: "Shows fridge status, alerts, and recipe entry points at a glance.", image: "/SF/mockup/Main.png" },
          { title: "Inventory Screen", description: "Lists ingredients by category, quantity, and freshness status.", image: "/SF/mockup/search.png" },
          { title: "Recipe Screen", description: "Suggests meals users can cook right away with available ingredients.", image: "/SF/mockup/Quick%20meal.png" },
          { title: "Event Planner", description: "Connects planned dishes with the ingredients users need to prepare.", image: "/SF/mockup/Event%20planner.png" },
          { title: "Add Item Flow", description: "Makes new ingredient entry quick and easy to understand.", image: "/SF/mockup/stock%20plus.png" }
        ],
        styleGuide: {
          text: "Created a warm UI with rounded cards, fresh accent colors, and easy-to-scan icons.",
          image: "/SF/mockup/Onboarding.png"
        },
        hiFiGallery: [
          { src: "/SF/mockup/Main.png", alt: "Home overview mockup" },
          { src: "/SF/mockup/search.png", alt: "Pantry management mockup" },
          { src: "/SF/mockup/Quick%20meal.png", alt: "Recipe selection mockup" }
        ]
      },
      testing: [
        {
          title: "Think-Aloud Testing",
          description: "We used think-aloud testing to find where users hesitated while managing ingredients, checking expiration status, and moving from inventory to meal decisions.",
          focusAreas: [
            {
              title: "Add Item Flow",
              action: "Register a new ingredient with quantity and expiration date.",
              observation: "Can users complete the flow without asking what information is required?"
            },
            {
              title: "Inventory Check",
              action: "Find ingredients that are available or close to expiring.",
              observation: "Can users quickly understand fridge status from categories, labels, and alerts?"
            },
            {
              title: "Recipe Decision",
              action: "Choose a meal based on ingredients already in the fridge.",
              observation: "Do users trust the recommendation and understand missing ingredients?"
            },
            {
              title: "Event Planner",
              action: "Plan a meal event and turn required items into a shopping list.",
              observation: "Do users understand why this feature exists and when to use it?"
            }
          ],
          findings: [
            "Users understood the inventory concept quickly when quantity and expiration status were visible together.",
            "Recipe recommendations felt useful, but users wanted clearer separation between cook-now meals and meals with missing items.",
            "The event planner needed stronger naming and entry context because users did not immediately connect it with grocery planning.",
            "Primary actions such as Save Item and Generate Shopping List needed stronger visual emphasis."
          ],
          userQuotes: [
            "\"I can see what is expiring soon, but I want to know what I should cook first.\"",
            "\"This recipe looks useful, but I am not sure if I already have every ingredient.\"",
            "\"Event Planner sounds helpful, but I do not immediately know when I would use it.\"",
            "\"After adding an item, I want a clearer sign that it has been saved.\""
          ],
          beforeImage: "/SF/main.png",
          afterImage: "/SF/mockup/Main.png"
        }
      ],
      impact: {
        points: [
          { title: "Improved Management", description: "Made quantities and expiration status easier to understand at a glance." },
          { title: "Reduced Meal Decisions", description: "Connected available ingredients to recipe ideas, reducing meal planning time." },
          { title: "Next Steps", description: "Testing showed that terms like 'Event Planner' must match user expectations. A future version could add barcode scanning." }
        ]
      }
    },
    {
      id: "fiora-solo-wedding",
      slug: "fiora-solo-wedding",
      title: "Fiora, Solo Wedding",
      category: "Web & Mobile UI/UX",
      thumbnail: "/Thumbnail/Solo%20wedding%20main.png",
      image: "/Thumbnail/Solo%20wedding%20main.png",
      imagePosition: "object-center",
      colors: ["#A93E32", "#D36155", "#E89D95", "#F7D6D2"],
      summary: "A self-celebration platform for marking personal milestones with color themes, guided declarations, and a private archive.",
      overview: {
        year: "2024",
        duration: "8 Weeks",
        role: "Lead Product Designer (Brand Identity & UX/UI Design)"
      },
      problem: "Celebration culture often centers on social milestones like marriage. Personal growth, recovery, and self-overcoming rarely get the same kind of ritual or recognition.",
      solution: [
        "Emotional Color Theme: Turns the user's emotional state into a personal visual theme.",
        "Guided Declaration: Helps users turn a personal promise into a formal moment.",
        "Private Archive: Saves themes and declarations so users can revisit their growth."
      ],
      background: "What happens when the object of celebration is the self? Fiora transforms wedding traditions into a warm ritual for self-acceptance.",
      research: {
        text: "We studied social trends around single-person households, non-marriage, and declining weddings to understand the need for new self-celebration rituals.",
        insights: [
          { title: "Demographic Shift", description: "Single-person households in Korea rose from 29.3% in 2018 to 35.5% in 2023, showing a fast shift toward individual lifestyles." },
          { title: "Marriage Decline", description: "Annual marriages fell from over 305k in 2014 to under 194k in 2023, making traditional milestones less universal." },
          { title: "The Social Hurdle", description: "Users needed a safe, private way to celebrate themselves without feeling exposed or judged by conventional norms." },
          { title: "Psychological Value", description: "Research showed that formalized rituals significantly reduce anxiety and strengthen self-efficacy." }
        ]
      },
      ideation: {
        text: "The experience has three steps: explore the self, choose a visual theme, and complete a personal ceremony.",
        points: [
          { title: "HMW: Validation", description: "How might we make solo celebration feel intentional and meaningful?" },
          { title: "HMW: Expression", description: "How might we let users declare their promise through voice, text, or image?" }
        ]
      },
      design: {
        text: "The UI combines emotional storytelling with simple interactions. Color themes, flexible inputs, and spacious type make the experience feel ceremonial.",
        image: "/Thumbnail/Solo%20wedding%20main.png",
        features: [
          { title: "Personalized Color Theme", description: "Applies the user's emotional color across the experience.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
          { title: "Flexible Input Support", description: "Lets users create a declaration through voice, text, or selfie interaction.", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800" },
          { title: "Emotional Visual Identity", description: "Uses large type, white space, and warm pacing to support self-celebration.", image: "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?auto=format&fit=crop&q=80&w=800" }
        ],
        styleGuide: {
          text: "Soft gradients, elegant serif type, and generous white space create a premium ritual mood.",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200"
        },
        hiFiGallery: [
          { src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800", alt: "Onboarding emotion selection mockup" },
          { src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800", alt: "Declaration recording mockup" },
          { src: "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?auto=format&fit=crop&q=80&w=800", alt: "Self-archive mockup" }
        ]
      },
      testing: [
        {
          title: "Testing & Iterations",
          description: "The onboarding became more natural with question-based color suggestions and a delayed reveal. Declaration writing also gained AI sentence guidance based on selected keywords.",
          beforeImage: "/Thumbnail/Solo%20wedding%20main.png",
          afterImage: "/Thumbnail/Solo%20wedding%20main.png"
        }
      ],
      impact: {
        points: [
          { title: "Emotional Clarity", description: "Framed solo celebration as its own ritual for personal milestones, not a substitute for weddings." },
          { title: "Private Archive", description: "Created a secure digital space where users can revisit their declarations and memories tied to specific growth phases." },
          { title: "Next Steps", description: "Spacious type and white space were key to the ceremonial mood. Next, the service could test opt-in social sharing." }
        ]
      }
    }
  ],
  brandingProjects: [
    {
      id: "camerafi-studio-ci",
      slug: "camerafi-studio-ci",
      title: "CameraFi Studio CI",
      category: "Brand Identity",
      image: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_13@300x-100.png",
      imagePosition: "object-center",
      thumbnail: "/Thumbnail/Camerfi%20logo.png",
      brandImages: [
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201%20%E1%84%89%E1%85%A1%E1%84%87%E1%85%A9%E1%86%AB@300x-100.png", alt: "CameraFi Studio CI guideline cover copy" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201@300x-100.png", alt: "CameraFi Studio CI guideline 1" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_1@300x-100.png", alt: "CameraFi Studio CI guideline 2" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_2@300x-100.png", alt: "CameraFi Studio CI guideline 3" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_3@300x-100.png", alt: "CameraFi Studio CI guideline 4" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_4@300x-100.png", alt: "CameraFi Studio CI guideline 5" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_5@300x-100.png", alt: "CameraFi Studio CI guideline 6" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_6@300x-100.png", alt: "CameraFi Studio CI guideline 7" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_7@300x-100.png", alt: "CameraFi Studio CI guideline 8" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_8@300x-100.png", alt: "CameraFi Studio CI guideline 9" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_9@300x-100.png", alt: "CameraFi Studio CI guideline 10" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_10@300x-100.png", alt: "CameraFi Studio CI guideline 11" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_11@300x-100.png", alt: "CameraFi Studio CI guideline 12" },
        { src: "/Camerafi%20Branding/%E1%84%83%E1%85%A2%E1%84%8C%E1%85%B5%201_13@300x-100.png", alt: "CameraFi Studio CI guideline 13" }
      ],
      summary: "A clearer creator workspace that helps streamers find the right tools at the right moment.",
      overview: { year: "2023", duration: "4 Months", role: "UX/UI Design Intern (Design Contribution: 95%)" },
      problem: "The product had powerful features, but the first screen showed too much at once. New users struggled to understand where to start.",
      solution: [
        "Value-First IA: Reorganized the UI around frequent creator actions.",
        "FAB Structure: Used Floating Action Buttons to show creation options only when needed.",
        "Brand System Renewal: Consolidated logo, typography, color, and microcopy to build a consistent brand identity."
      ],
      background: "The design goal was simple: help creators find the right feature at the moment they need it.",
      research: {
        text: "We conducted a survey with 45 users and approximately 14 internal employees. The results revealed that more than half felt uncomfortable with the existing brand identity and UI/UX.",
        insights: [
          { title: "A/B Testing Insights", description: "Compared the cluttered UI with the improved UI to identify exactly where users were hesitating." }
        ]
      },
      ideation: { 
        text: "We explored ways to make the first experience clearer and easier to enter.",
        points: [
          { title: "Contextual Reveal", description: "Show only the features that match the user's current task." },
          { title: "Tutorial-style Landing Page", description: "Turn dense feature text into screen-based walkthroughs." }
        ] 
      },
      design: {
        text: "The redesigned UI focuses on visual guidance and cross-platform consistency.",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200",
        features: [
          { title: "Conversational Landing Page", description: "Provided visual guides using actual app screens so users could immediately understand how to use the service." },
          { title: "Multi-Surface Support", description: "Built a responsive design system providing a consistent experience across Web, Tablet, and Mobile apps." }
        ]
      },
      testing: [],
      impact: {
        points: [
          { title: "Metrics Improvement", description: "Achieved a 28% increase in Click-Through Rate (CTR) and a 1.6x improvement in average session time." },
          { title: "Global Feedback & External Achievements", description: "Verified the design direction and built brand trust in the global market by receiving feedback from visitors from various countries at CES 2024, such as 'The features are complex, but well-organized.'" }
        ]
      }
    },
    {
      id: "smart-fridge-identity",
      slug: "smart-fridge-identity",
      title: "Smart Fridge Identity",
      category: "Brand Identity",
      image: "/camerafi-main.png",
      imagePosition: "object-[30%_70%]",
      thumbnail: "/Thumbnail/Solid%20connection%20logo.png",
      summary: "A clearer creator workspace that helps streamers find the right tools at the right moment.",
      overview: { year: "2023", duration: "4 Months", role: "UX/UI Design Intern (Design Contribution: 95%)" },
      problem: "The product had powerful features, but the first screen showed too much at once. New users struggled to understand where to start.",
      solution: [
        "Value-First IA: Reorganized the UI around frequent creator actions.",
        "FAB Structure: Used Floating Action Buttons to show creation options only when needed.",
        "Brand System Renewal: Consolidated logo, typography, color, and microcopy to build a consistent brand identity."
      ],
      background: "The design goal was simple: help creators find the right feature at the moment they need it.",
      research: {
        text: "We conducted a survey with 45 users and approximately 14 internal employees. The results revealed that more than half felt uncomfortable with the existing brand identity and UI/UX.",
        insights: [
          { title: "A/B Testing Insights", description: "Compared the cluttered UI with the improved UI to identify exactly where users were hesitating." }
        ]
      },
      ideation: { 
        text: "We explored ways to make the first experience clearer and easier to enter.",
        points: [
          { title: "Contextual Reveal", description: "Show only the features that match the user's current task." },
          { title: "Tutorial-style Landing Page", description: "Turn dense feature text into screen-based walkthroughs." }
        ] 
      },
      design: {
        text: "The redesigned UI focuses on visual guidance and cross-platform consistency.",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200",
        features: [
          { title: "Conversational Landing Page", description: "Provided visual guides using actual app screens so users could immediately understand how to use the service." },
          { title: "Multi-Surface Support", description: "Built a responsive design system providing a consistent experience across Web, Tablet, and Mobile apps." }
        ]
      },
      testing: [],
      impact: {
        points: [
          { title: "Metrics Improvement", description: "Achieved a 28% increase in Click-Through Rate (CTR) and a 1.6x improvement in average session time." },
          { title: "Global Feedback & External Achievements", description: "Verified the design direction and built brand trust in the global market by receiving feedback from visitors from various countries at CES 2024, such as 'The features are complex, but well-organized.'" }
        ]
      }
    },
    {
      id: "solid-connection-brand",
      slug: "solid-connection-brand",
      title: "Solid Connection Brand",
      category: "Brand Identity",
      image: "/camerafi-main.png",
      imagePosition: "object-[30%_70%]",
      thumbnail: "/Thumbnail/logo.png",
      summary: "A clearer creator workspace that helps streamers find the right tools at the right moment.",
      overview: { year: "2023", duration: "4 Months", role: "UX/UI Design Intern (Design Contribution: 95%)" },
      problem: "The product had powerful features, but the first screen showed too much at once. New users struggled to understand where to start.",
      solution: [
        "Value-First IA: Reorganized the UI around frequent creator actions.",
        "FAB Structure: Used Floating Action Buttons to show creation options only when needed.",
        "Brand System Renewal: Consolidated logo, typography, color, and microcopy to build a consistent brand identity."
      ],
      background: "The design goal was simple: help creators find the right feature at the moment they need it.",
      research: {
        text: "We conducted a survey with 45 users and approximately 14 internal employees. The results revealed that more than half felt uncomfortable with the existing brand identity and UI/UX.",
        insights: [
          { title: "A/B Testing Insights", description: "Compared the cluttered UI with the improved UI to identify exactly where users were hesitating." }
        ]
      },
      ideation: { 
        text: "We explored ways to make the first experience clearer and easier to enter.",
        points: [
          { title: "Contextual Reveal", description: "Show only the features that match the user's current task." },
          { title: "Tutorial-style Landing Page", description: "Turn dense feature text into screen-based walkthroughs." }
        ] 
      },
      design: {
        text: "The redesigned UI focuses on visual guidance and cross-platform consistency.",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200",
        features: [
          { title: "Conversational Landing Page", description: "Provided visual guides using actual app screens so users could immediately understand how to use the service." },
          { title: "Multi-Surface Support", description: "Built a responsive design system providing a consistent experience across Web, Tablet, and Mobile apps." }
        ]
      },
      testing: [],
      impact: {
        points: [
          { title: "Metrics Improvement", description: "Achieved a 28% increase in Click-Through Rate (CTR) and a 1.6x improvement in average session time." },
          { title: "Global Feedback & External Achievements", description: "Verified the design direction and built brand trust in the global market by receiving feedback from visitors from various countries at CES 2024, such as 'The features are complex, but well-organized.'" }
        ]
      }
    }
  ],
  productProjects: [
    {
      id: "smart-fridge-product",
      slug: "smart-fridge-product",
      title: "Smart Curtain System",
      category: "Product Design",
      thumbnail: "/Thumbnail/Smart%20curtain%20main.JPG",
      image: "/smart-curtain-main.png",
      imagePosition: "object-[50%_14%]",
      presentationImages: [
        { src: "/Smart%20Curtain%20project/1.png", alt: "Smart Curtain presentation slide 1" },
        { src: "/Smart%20Curtain%20project/2.png", alt: "Smart Curtain presentation slide 2" },
        { src: "/Smart%20Curtain%20project/3.png", alt: "Smart Curtain presentation slide 3" },
        { src: "/Smart%20Curtain%20project/4.png", alt: "Smart Curtain presentation slide 4" },
        { src: "/Smart%20Curtain%20project/5.png", alt: "Smart Curtain presentation slide 5" },
        { src: "/Smart%20Curtain%20project/6.png", alt: "Smart Curtain presentation slide 6" },
        { src: "/Smart%20Curtain%20project/7.png", alt: "Smart Curtain presentation slide 7" },
        { src: "/Smart%20Curtain%20project/8.png", alt: "Smart Curtain presentation slide 8" },
        { src: "/Smart%20Curtain%20project/9.png", alt: "Smart Curtain presentation slide 9" },
        { src: "/Smart%20Curtain%20project/10.png", alt: "Smart Curtain presentation slide 10" },
        { src: "/Smart%20Curtain%20project/11.png", alt: "Smart Curtain presentation slide 11" },
        { src: "/Smart%20Curtain%20project/12.png", alt: "Smart Curtain presentation slide 12" },
        { src: "/Smart%20Curtain%20project/13.png", alt: "Smart Curtain presentation slide 13" },
        { src: "/Smart%20Curtain%20project/14.png", alt: "Smart Curtain presentation slide 14" },
        { src: "/Smart%20Curtain%20project/15.png", alt: "Smart Curtain presentation slide 15" },
        { src: "/Smart%20Curtain%20project/16.png", alt: "Smart Curtain presentation slide 16" },
        { src: "/Smart%20Curtain%20project/17.png", alt: "Smart Curtain presentation slide 17" },
        { src: "/Smart%20Curtain%20project/18.png", alt: "Smart Curtain presentation slide 18" },
        { src: "/Smart%20Curtain%20project/19.png", alt: "Smart Curtain presentation slide 19" },
        { src: "/Smart%20Curtain%20project/20.png", alt: "Smart Curtain presentation slide 20" },
        { src: "/Smart%20Curtain%20project/21.png", alt: "Smart Curtain presentation slide 21" },
        { src: "/Smart%20Curtain%20project/22.png", alt: "Smart Curtain presentation slide 22" },
        { src: "/Smart%20Curtain%20project/23.png", alt: "Smart Curtain presentation slide 23" },
        { src: "/Smart%20Curtain%20project/24.png", alt: "Smart Curtain presentation slide 24" },
        { src: "/Smart%20Curtain%20project/25.png", alt: "Smart Curtain presentation slide 25" },
        { src: "/Smart%20Curtain%20project/26.png", alt: "Smart Curtain presentation slide 26" },
        { src: "/Smart%20Curtain%20project/27.png", alt: "Smart Curtain presentation slide 27" },
        { src: "/Smart%20Curtain%20project/28.png", alt: "Smart Curtain presentation slide 28" },
        { src: "/Smart%20Curtain%20project/29.png", alt: "Smart Curtain presentation slide 29" },
        { src: "/Smart%20Curtain%20project/30.png", alt: "Smart Curtain presentation slide 30" },
        { src: "/Smart%20Curtain%20project/31.png", alt: "Smart Curtain presentation slide 31" },
        { src: "/Smart%20Curtain%20project/32.png", alt: "Smart Curtain presentation slide 32" },
        { src: "/Smart%20Curtain%20project/33.png", alt: "Smart Curtain presentation slide 33" },
        { src: "/Smart%20Curtain%20project/34.png", alt: "Smart Curtain presentation slide 34" },
        { src: "/Smart%20Curtain%20project/35.png", alt: "Smart Curtain presentation slide 35" },
        { src: "/Smart%20Curtain%20project/36.png", alt: "Smart Curtain presentation slide 36" },
        { src: "/Smart%20Curtain%20project/37.png", alt: "Smart Curtain presentation slide 37" },
        { src: "/Smart%20Curtain%20project/38.png", alt: "Smart Curtain presentation slide 38" },
        { src: "/Smart%20Curtain%20project/39.png", alt: "Smart Curtain presentation slide 39" },
        { src: "/Smart%20Curtain%20project/40.png", alt: "Smart Curtain presentation slide 40" },
        { src: "/Smart%20Curtain%20project/41.png", alt: "Smart Curtain presentation slide 41" },
        { src: "/Smart%20Curtain%20project/42.png", alt: "Smart Curtain presentation slide 42" },
        { src: "/Smart%20Curtain%20project/43.png", alt: "Smart Curtain presentation slide 43" },
        { src: "/Smart%20Curtain%20project/44.png", alt: "Smart Curtain presentation slide 44" },
        { src: "/Smart%20Curtain%20project/45.png", alt: "Smart Curtain presentation slide 45" },
        { src: "/Smart%20Curtain%20project/46.png", alt: "Smart Curtain presentation slide 46" },
        { src: "/Smart%20Curtain%20project/47.png", alt: "Smart Curtain presentation slide 47" },
        { src: "/Smart%20Curtain%20project/48.png", alt: "Smart Curtain presentation slide 48" },
        { src: "/Smart%20Curtain%20project/49.png", alt: "Smart Curtain presentation slide 49" },
        { src: "/Smart%20Curtain%20project/50.png", alt: "Smart Curtain presentation slide 50" },
        { src: "/Smart%20Curtain%20project/51.png", alt: "Smart Curtain presentation slide 51" },
        { src: "/Smart%20Curtain%20project/52.png", alt: "Smart Curtain presentation slide 52" },
        { src: "/Smart%20Curtain%20project/53.png", alt: "Smart Curtain presentation slide 53" },
        { src: "/Smart%20Curtain%20project/54.png", alt: "Smart Curtain presentation slide 54" },
        { src: "/Smart%20Curtain%20project/56.png", alt: "Smart Curtain presentation slide 56" },
        { src: "/Smart%20Curtain%20project/Wictoria.png", alt: "Smart Curtain presentation contributor Wictoria" }
      ],
      summary: "A smart curtain system that lets workers adjust privacy, comfort, and focus through physical space control and a mobile app.",
      overview: { year: "2024", duration: "4 Months", role: "Product Designer (UX/UI, Research, Concept, Prototype)" },
      problem: "Open offices and hybrid workplaces often give users little control over privacy, noise, light, and temperature. This makes focus and comfort harder to maintain.",
      solution: [
        "Spatial Control: A modular curtain system that divides or connects work zones.",
        "Environmental Control: Light, temperature, and acoustic settings that support focus and comfort.",
        "App Control: A mobile interface for adjusting the workspace in real time."
      ],
      background: "As hybrid work grew, people needed more flexible control over their surroundings. This project turns curtains into an interactive system for focus, privacy, and wellbeing.",
      research: {
        text: "Research combined personas, empathy maps, workspace behavior, survey inputs, and trend research to move from a curtain product to a workspace UX system.",
        insights: [
          { title: "Privacy & Focus Issues", description: "Users struggled to concentrate in open environments and needed adjustable personal boundaries for visual and acoustic separation." },
          { title: "Environmental Discomfort", description: "Light, temperature, and noise conditions were inconsistent, while users lacked a unified way to control them." },
          { title: "Desire for Flexible Spaces", description: "Hybrid work increased the need for spaces that can shift between focus, collaboration, and rest modes." }
        ]
      },
      ideation: { 
        text: "The concept treats space as an interface by combining modular curtains with app-based control.",
        points: [
          { title: "Space as Interface", description: "Turned the curtain into an active tool for privacy, focus, and ambiance." },
          { title: "Modular System", description: "Designed flexible separation for focus, collaboration, and rest." },
          { title: "Smart Control Layer", description: "Linked the curtain to app controls for temperature, lighting, and environmental feedback." }
        ] 
      },
      design: {
        text: "The design connects physical movement, digital control, and material comfort. The curtain divides space, softens sound, filters light, and responds through the app.",
        image: "/smart-curtain-main.png",
        features: [
          { title: "Physical Interaction", description: "Used the curtain as a divider, acoustic buffer, and light filter." },
          { title: "Digital Interface", description: "Designed app controls for temperature, layout, and environmental feedback." },
          { title: "Material Experience", description: "Linked wool and linen choices to sound comfort, insulation, breathability, and warmth." }
        ]
      },
      testing: [
        {
          title: "Prototype Testing",
          description: "Prototype tests covered the curtain model, 3D structure, and app flow. Users preferred simple controls, disliked too much automation, and valued the physical curtain movement.",
          beforeImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800",
          afterImage: "/smart-curtain-main.png"
        }
      ],
      impact: {
        points: [
          { title: "Improved Perceived Privacy", description: "Helped users create clearer personal boundaries in open and shared work environments." },
          { title: "Increased Workspace Adaptability", description: "Enabled spaces to shift between focus, collaboration, and comfort modes through modular physical control." },
          { title: "Integrated Physical + Digital UX", description: "Connected material, movement, and app-based environmental control into one coherent workspace experience." }
        ]
      }
    }
  ],
};
