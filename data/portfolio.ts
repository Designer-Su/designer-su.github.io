export const portfolioData = {
  hero: {
    greeting: "Sukyeong Lee",
    headline: "is a UX/UI Designer delivering intuitive, data-driven experiences through user-centered design and full product ownership.",
    about:
      "With a strong focus on user experience and a data-driven approach, I specialize in optimizing user flows and solving complex usability challenges through research, analytics, and iterative design. I focus on delivering user-centered solutions that enhance both usability and product performance.",
    skills: ["User Experience", "User Interface", "Prototyping", "Design Systems", "Interaction Design", "Wireframing", "Figma", "Web Design", "User Research", "User Testing", "Adobe CC"],
  },
  experience: [
    {
      id: 1,
      role: "Operations Intern",
      company: "SAP Labs Korea",
      period: "Sep 2025 - Present",
      description: "Optimize internal SharePoint architecture to improve accessibility and operational efficiency. Streamline cross-team collaboration by analyzing workflows and resolving communication bottlenecks. Design data-driven reporting materials to enhance decision-making and support employee experience initiatives.",
    },
    {
      id: 2,
      role: "UX Design Intern",
      company: "Volt Micro Co., Ltd.",
      period: "Sep 2023 - Dec 2023",
      description: "Led the end-to-end redesign of CameraFi Studio (web & mobile), focusing on user funnel optimization. Increased feature engagement by 28% and session duration by 1.6x through A/B testing and behavioral data analysis. Contributed to design preparations for the service's exhibition at CES 2024. Collaborated with engineers to deliver production-ready solutions, resolving usability bottlenecks and enhancing retention.",
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
      summary: "Simulate your exchange application and connect with mentors through real-time data and verified stories.",
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
      userProblem: "Prospective exchange students struggle with highly fragmented application information and a blind preparation process, relying on unverified rumors and scattered spreadsheets.",
      businessGoal: "Streamline application management, boost verified alumni matching conversion rates, and reduce the onboarding drop-off rate (Bounce Rate) on informational pages to under 15%.",
      designHypothesis: "If we divide the fragmented application form into a 9-step structured wizard, users will experience reduced cognitive load, which will decrease application bounce rates by 30% because step-by-step progressive disclosure lowers form completion friction.",
      problem: "Prospective exchange students face extreme uncertainty due to highly fragmented information and a blind application process. On the product side, the lack of structured, predictive tools leads to low engagement, high drop-off during school selection, and low conversion from casual interest into finalized applications.",
      solution: [
        "Centralized Data: Replaced scattered spreadsheets with a unified, searchable global school database.",
        "Predictive Application: Developed a mock application system to visualize real-time competition rates and acceptance probabilities.",
        "Verified Community: Built a 1:1 mentor-mentee matching system connecting applicants with verified alumni."
      ],
      background: "By transforming a blind, anxiety-inducing application process into a predictable, data-guided journey, we empower students to prepare with clarity and confidence.",
      research: {
        text: "We conducted in-depth interviews and surveys with 50+ prospective applicants and recent exchange students to identify exact drop-off points in the preparation funnel.",
        insights: [
          { title: "Information Fragmentation", description: "Users spent over 40 hours manually searching for school requirements. Hypothesis: A centralized, filterable database will reduce search friction by 80%, driving higher user activation." },
          { title: "Application Anxiety", description: "The inability to gauge acceptance probability was the primary bottleneck causing users to delay submissions. Hypothesis: Visualizing real-time specs and mock competition rates will build trust and accelerate application completions." }
        ]
      },
      userJourney: [
        {
          type: "Type A: Early Interest Stage",
          description: "For users lost in a flood of information, the community acts as a 'navigation compass'.",
          stages: [
            { stage: "Awareness", doing: "Encounters vivid reviews on the in-app 'Real Stories' board instead of social media.", feeling: '"Where did people with similar concerns end up going?"', solution: "Trending Schools: Real-time popular countries and schools list." },
            { stage: "Exploration", doing: "Narrows down regions of interest through recommended posts and Q&As.", feeling: '"It felt overwhelming, but reading real reviews makes me feel like I can do it too."', solution: "Adaptive Onboarding: Customized community content curation based on user type." },
            { stage: "Decision", doing: "Saves guides for beginners and advice from seniors.", feeling: '"I can trust this place to start preparing."', solution: "Onboarding Community: A shared space for basic info for beginner applicants." }
          ]
        },
        {
          type: "Type B: Preparing Stage",
          description: "For users feeling anxious amidst competition, the community provides 'strategic data'.",
          stages: [
            { stage: "Analysis", doing: "Enters grades into the 'Mock Application' system and checks the applicant distribution.", feeling: '"Where do my grades stand among the applicants for this school?"', solution: "Applicant Overview: Sharing real-time application status and competition rates." },
            { stage: "Comparison", doing: "Adjusts application strategy by checking the community's real-time ranking signals.", feeling: '"Looking at others\' specs, I should find a slightly safer option."', solution: "Peer Insights: Anonymous applicant specs and strategy sharing system." },
            { stage: "Application", doing: "Gains confidence by exchanging feedback in the community after a virtual application.", feeling: '"Sharing info with people in a similar grade range is so reassuring."', solution: "Live Rankings: Visualizing the competitive landscape based on real-time data." }
          ]
        },
        {
          type: "Type C: Needs Specific Info",
          description: "For users needing concrete information, the community connects them with 'verified mentoring'.",
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
          description: "Users enter their current GPA, language scores, and target region to initialize their personalized applicant profile.",
          flow: ["Sign Up", "Input Specs", "Home Dashboard"]
        },
        {
          title: "2. Exploration",
          description: "Search and compare global universities using the unified database, checking acceptance reviews and local facilities.",
          flow: ["Search Univ.", "Filter Data", "Check Reviews"]
        },
        {
          title: "3. Mentoring",
          description: "Reach out directly to verified alumni from target universities to ask specific lifestyle and interview questions via 1:1 Q&A.",
          flow: ["Mentor Profile", "1:1 Matching", "Ask Questions"]
        },
        {
          title: "4. Mock Apply",
          description: "Select 1st and 2nd choice schools, input application tendency (safe/ambitious), and submit to the real-time queue.",
          flow: ["Select 1st/2nd", "Input Tendency", "Submit Mock"]
        },
        {
          title: "5. Strategize",
          description: "Analyze competitor specs and real-time competition rates to finalize the actual exchange student application strategy.",
          flow: ["View Dashboard", "Analyze Competitors", "Finalize"]
        }
      ],
      ideation: {
        text: "Based on our research, we defined core opportunity areas focusing on data transparency, cognitive load reduction, and community trust. To execute this effectively, we established a targeted feature strategy tailored to specific user types.",
        points: [
          { title: "Opportunity: Data Transparency", description: "How might we consolidate global school data into an actionable, unified interface that reduces search time?" },
          { title: "Opportunity: Relieving Anxiety", description: "How might we alleviate application anxiety through real-time data visualization and peer community?" },
          { title: "Strategy: Adaptive Content Curation", description: "For early-stage users (Type A), we curated trending schools and beginner guides to act as a clear navigation compass against information overload." },
          { title: "Strategy: Data-Driven Predictability", description: "To resolve the intense anxiety of preparing applicants (Type B), we designed a 'Mock Application' system that transparently visualizes real-time competition rates." },
          { title: "Strategy: Trust-Based Verification UX", description: "For users needing concrete details (Type C), we structured a global database and a 1:1 verified mentoring system to ensure high-reliability connections." }
        ]
      },
      design: {
        text: "The final design prioritized clarity, data visualization, and community engagement.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        features: [
          { 
            title: "Centralized Data", 
            description: "Replaced scattered spreadsheets with a unified, searchable global school database."
          },
          { 
            title: "Predictive Application", 
            description: "Developed a mock application system to visualize real-time competition rates and acceptance probabilities."
          },
          { 
            title: "Verified Community", 
            description: "Built a 1:1 mentor-mentee matching system connecting applicants with verified alumni."
          }
        ]
      },
      testing: [],
      impact: {
        points: [
          { title: "Quantitative Results", description: "Acquired 400+ new users and surpassed 77,000 total events, maintaining an average session duration of 2m 28s." },
          { title: "Qualitative Feedback", description: "Verified the product's value with user feedback such as: 'Exchange student applications are finally predictable' and 'I no longer need to ask seniors one by one.'" },
          { title: "Learnings & Next Steps", description: "Learned that visualizing real-time data directly impacts user trust and engagement. Next steps involve scaling the database to include European universities." }
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
      summary: "An intuitive environment where creators can discover the features they need, exactly when they need them.",
      overview: { year: "2023", duration: "4 Months", role: "UX/UI Design Intern (Design Contribution: 95%)" },
      userProblem: "First-time creators face high cognitive load due to an overloaded first screen exposing all advanced live-broadcasting options at once, leading to drop-offs.",
      businessGoal: "Optimize the first-session activation funnel, increase dashboard creation conversion, and improve homepage CTR by 25% while maintaining fast web asset load times under 1.5 seconds.",
      designHypothesis: "If we hide advanced stream configurations behind contextual drawer UI (FAB) and provide a conversational live simulator, users will understand core features faster, increasing onboarding activation and CTR because interactive sandbox models increase confidence.",
      problem: "During initial onboarding, CameraFi Studio suffered from high user drop-off. The home screen exposed all advanced live-broadcasting options at once, overwhelming new users. From a product perspective, this feature-heavy presentation created a steep learning curve, leading to poor first-session completion and low activation rates.",
      solution: [
        "Value-Centric IA: Shifted from a feature-centric to a value-centric UI, prioritizing actions based on frequency of use and context.",
        "Contextual UI (FAB): Introduced Floating Action Buttons to expose creation options only when needed, reducing decision fatigue.",
        "Brand System Renewal: Consolidated logo, typography, color, and microcopy to build a consistent, welcoming brand identity."
      ],
      background: "We hypothesized that by dynamically revealing advanced features based on user action (Contextual Disclosure) rather than showing all options upfront, we could decrease cognitive load and increase conversion to streaming creation.",
      research: {
        text: "We asked users which part of the initial experience created the biggest entry barrier, then validated the findings through surveys with 45 external users and 14 internal employees, followed by A/B testing on the onboarding funnel. The survey confirmed that the main issue was not missing functionality, but an overloaded first screen that made the product hard to understand, hard to trust, and hard to enter.",
        insights: [
          { title: "Initial Screen Overload", description: "The survey confirmed that the entry barrier was visual and conceptual overload. Hypothesis: Reducing the initial active surface by hiding advanced parameters under a contextual menu will increase user activation." },
          { title: "Clarity Before Features", description: "Users indicated that homepage clarity and brand identity were their top bottlenecks. Hypothesis: Replacing flat feature descriptions with a scrollable interactive simulator will increase feature comprehension by 30%." },
          { title: "Survey-Driven Brand Renewal", description: "The visual results confirmed that the solution needed both structural and brand-level changes, including FAB-based reveal patterns and a cleaner identity system." }
        ],
        chart: {
          title: "Survey: What Blocks First-Time Users?",
          question: "Which area should be clarified first to reduce onboarding friction?",
          note: "The survey reframes the challenge itself: users are not asking for more features, but for a clearer first screen that makes navigation, identity, and entry points easier to understand.",
          items: [
            { label: "Homepage UI/UX", value: 41.7 },
            { label: "Logo / Symbol", value: 33.3 },
            { label: "Banner / Icon System", value: 16.6 },
            { label: "Brand Slogan / Color", value: 8.4 }
          ]
        }
      },
      ideation: { 
        text: "We focused on reducing initial friction by aligning the interface with the user's natural broadcasting context.", 
        points: [
          { title: "Opportunity: Contextual Reveal", description: "How might we expose only relevant features based on the user's immediate context, rather than overwhelming them upfront?" },
          { title: "Opportunity: Interactive Onboarding", description: "How might we transform an information-heavy layout into an interactive tutorial using actual screen walkthroughs?" }
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
          description: "We compared the original layout (A) against the conversational simulator layout (B). Heatmap and user path analysis revealed that in Layout A, users suffered from visual paralysis and skipped reading feature specifications entirely, leading to a 34% drop-off. In Layout B, the interactive sandbox scoreboard encouraged immediate engagement, guiding 68% of users straight to the stream setup funnel and resulting in a 28% increase in overall CTR.",
          beforeImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800",
          afterImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800"
        }
      ],
      impact: {
        points: [
          { 
            title: "IA & flow redesign\n(CTR ↑ 28%, session time ×1.6)", 
            description: "Redesigned the previously complex information architecture with a user-centered structure, and simplified key feature flows using clear, flowchart-based mapping. As a result, users were able to navigate more efficiently — leading to a 28% increase in click-through rate and a 1.6× improvement in average session duration." 
          },
          { 
            title: "From UX Renewal to Global Recognition\n(CES 2024 Feedback)", 
            description: "Through the renewal, the brand tone and intuitive main page received positive feedback even on a global stage. Visitors from various countries commented that “the features are complex but well organized,” and “the landing page clearly presents the core functions.” These insights served as strong validation for the overall design direction.\n\nCES 2024 was a valuable opportunity to understand how user-centered UX design can build brand trust and how design contributes directly to business value." 
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
      summary: "A personal Kitchen Resource Planning app that helps users manage fridge inventory, reduce food waste, and decide what to cook with ingredients they already have.",
      overview: {
        year: "2024",
        duration: "4 Months",
        role: "UX/UI Designer",
        team: "Ali Basim Khalaf Khalaf, Aria Abbaspour, SuKyeong Lee\nZeynep Geyik, Le Dai Duong Bui"
      },
      problem: "Busy users often struggle to track their fridge inventory, leading to forgotten ingredients, duplicate purchases, expired food waste, and daily decision fatigue over what to cook.",
      solution: [
        "Kitchen Resource Planning (KRP): Framed the app as a personal ERP system for the kitchen to manage household food resources.",
        "Inventory Visibility: A centralized dashboard to track ingredients, categories, and expiration dates at a glance.",
        "Smart Recipe Recommendations: Suggests actionable meals based on currently available ingredients to reduce food waste."
      ],
      background: "Smart Fridge started from a simple need: making everyday kitchen inventory visible, manageable, and actionable to reduce waste and stress.",
      research: {
        text: "We utilized semi-structured interviews and think-aloud testing to understand fridge management habits, pain points, and expected features.",
        insights: [
          { title: "Inventory Blindness", description: "Users frequently forgot what they owned before grocery shopping, directly causing duplicate purchases." },
          { title: "Decision Fatigue", description: "Even with a full fridge, users struggled to decide what to cook, indicating a need for ingredient-based recipe suggestions." }
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
      ideation: { 
        text: "We moved from initial concept definition to scenarios, storyboards, and lo-fi prototyping to validate the core interaction model.", 
        points: [
          { title: "HMW: Visibility", description: "How might we provide effortless visibility into the fridge's current state without tedious manual entry?" },
          { title: "HMW: Actionability", description: "How might we connect expiring ingredients directly to meal planning and recipe suggestions?" }
        ] 
      },
      design: {
        text: "The final design organizes fridge inventory, recipe recommendations, add-item flows, and event planning into a simple mobile app experience. The interface focuses on helping users quickly understand what they have, what is expiring soon, and what they can cook now.",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=1200",
        features: [
          { title: "Home Screen", description: "Surfaces fridge status, key alerts, and entry points to recommendations so users can quickly understand the current state of their kitchen.", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800" },
          { title: "Inventory Screen", description: "Shows owned ingredients with clear categories, quantities, and expiration-related information for easier food management.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" },
          { title: "Recipe Screen", description: "Recommends meals based on available ingredients, emphasizing dishes users can make immediately.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
          { title: "Event Planner", description: "Supports meal or event preparation by helping users connect planned dishes with required ingredients.", image: "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?auto=format&fit=crop&q=80&w=800" },
          { title: "Add Item Flow", description: "Lets users register new ingredients through a simple and understandable input flow.", image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800" }
        ],
        styleGuide: {
          text: "Created a warm, approachable UI with rounded cards, fresh food-inspired accent colors, and intuitive iconography.",
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200"
        },
        hiFiGallery: [
          { src: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800", alt: "Home overview mockup" },
          { src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800", alt: "Pantry management mockup" },
          { src: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800", alt: "Recipe selection mockup" }
        ]
      },
      testing: [
        {
          title: "Think-Aloud Testing",
          description: "Lo-fi prototypes were evaluated through think-aloud testing. Users responded positively to the overall usability, visual direction, and inventory management concept, while accessibility of some functions and the purpose of the event planner needed improvement.",
          beforeImage: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800",
          afterImage: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=800"
        }
      ],
      impact: {
        points: [
          { title: "Improved Management", description: "Successfully systematized fridge contents, making quantities and expiration status instantly understandable." },
          { title: "Reduced Decision Burden", description: "Connected available ingredients with automated recipe recommendations, significantly reducing meal prep time." },
          { title: "Learnings & Next Steps", description: "Think-aloud testing revealed that terminology (e.g., 'Event Planner') must match user mental models. Future iterations would integrate barcode scanning." }
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
      summary: "A self-celebration ritual platform that helps users mark personal milestones through personalized color themes, guided declarations, and a private self-narrative archive.",
      overview: {
        year: "2024",
        duration: "8 Weeks",
        role: "Lead Product Designer (Brand Identity & UX/UI Design)"
      },
      problem: "Traditional celebration culture heavily focuses on social milestones (e.g., marriage), leaving personal growth, recovery, and self-overcoming without an official platform for recognition. Individuals often feel emotionally underserved by a culture that rarely legitimizes solo rituals.",
      solution: [
        "Emotional Diagnostic System: Visualizes the user's emotional state through a personalized color zone that becomes the theme of their experience.",
        "Ritual Experience Design: Uses guided ceremony flows and multi-modal inputs to turn a personal promise into a formal declaration.",
        "Self-Narrative Archive: Preserves emotional themes and declarations so users can revisit their personal growth over time."
      ],
      background: "What happens when the object of celebration is the self? Fiora transforms wedding traditions into a warm ritual for self-acceptance.",
      research: {
        text: "Grounded in demographic shifts and social trend analysis, we examined the rapid rise of single-person households and the concurrent decline in traditional marriages to validate the necessity of alternative self-celebration rituals.",
        insights: [
          { title: "Demographic Shift", description: "The proportion of single-person households in Korea surged from 29.3% in 2018 to 35.5% in 2023, reflecting a fast-growing demographic prioritizing individual lifestyles." },
          { title: "Marriage Decline", description: "Annual marriages plummeted from over 305k in 2014 to under 194k in 2023, showing that traditional social milestones are losing their structural dominance." },
          { title: "The Social Hurdle", description: "Users needed a safe, private way to celebrate themselves without feeling exposed or judged by conventional norms." },
          { title: "Psychological Value", description: "Research showed that formalized rituals significantly reduce anxiety and strengthen self-efficacy." }
        ]
      },
      ideation: {
        text: "The experience was structured as a three-step architecture: Exploration (self-discovery), Transformation (visual theme), and Manifestation (ceremony).",
        points: [
          { title: "HMW: Validation", description: "How might we design an interface that makes solo celebration feel intentional, premium, and meaningful?" },
          { title: "HMW: Expression", description: "How might we provide multi-modal inputs (voice, text) to accommodate different comfort levels during the declaration?" }
        ]
      },
      design: {
        text: "The UI balances emotional storytelling with practical interaction. Personalized color themes, multi-modal input support, and spacious typography create an interface that feels ceremonial rather than transactional.",
        image: "/Thumbnail/Solo%20wedding%20main.png",
        features: [
          { title: "Personalized Color Theme", description: "The selected emotional color is applied across the interface so the experience feels personal and coherent.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
          { title: "Multi-Modal Input Support", description: "Users can record their declaration through voice, text, or selfie-based interaction depending on comfort level.", image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80&w=800" },
          { title: "Emotional Visual Identity", description: "Large typography, intentional white space, and warm visual pacing reinforce the feeling of self-celebration.", image: "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?auto=format&fit=crop&q=80&w=800" }
        ],
        styleGuide: {
          text: "The design language relies on soft gradients, elegant serif typography, and generous white space to emulate a premium ritual experience.",
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
          description: "The onboarding flow was refined to feel less artificial by introducing question-based color suggestions and delayed choice reveal. Declaration writing support was also strengthened with AI-assisted sentence guidance based on selected keywords.",
          beforeImage: "/Thumbnail/Solo%20wedding%20main.png",
          afterImage: "/Thumbnail/Solo%20wedding%20main.png"
        }
      ],
      impact: {
        points: [
          { title: "Emotional Clarity", description: "Successfully framed solo celebration as a legitimate ritual for personal milestones, not just a substitute for conventional weddings." },
          { title: "Private Archive", description: "Created a secure digital space where users can revisit their declarations and memories tied to specific growth phases." },
          { title: "Learnings & Next Steps", description: "Learned that spacious typography and intentional white space are critical for setting a 'ceremonial' pacing in UX. Next steps involve opt-in social sharing." }
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
      summary: "An intuitive environment where creators can discover the features they need, exactly when they need them.",
      overview: { year: "2023", duration: "4 Months", role: "UX/UI Design Intern (Design Contribution: 95%)" },
      problem: "Despite having powerful features, too many features were exposed on the initial screen, creating a high barrier to entry for new users. This caused high cognitive load and user drop-off.",
      solution: [
        "IA Innovation: Shifted from a feature-centric to a value-centric UI, redesigning the information architecture based on frequency of use and context.",
        "FAB-based UI Structure: Introduced contextual Floating Action Buttons (FAB) to expose only the creation options needed at the moment, reducing decision fatigue.",
        "Brand System Renewal: Consolidated logo, typography, color, and microcopy to build a consistent brand identity."
      ],
      background: "The core of the design was not to simply list complex features, but to create an intuitive environment where creators can discover the features they need, exactly when they need them.",
      research: {
        text: "We conducted a survey with 45 users and approximately 14 internal employees. The results revealed that more than half felt uncomfortable with the existing brand identity and UI/UX.",
        insights: [
          { title: "A/B Testing Insights", description: "Compared the cluttered UI with the improved UI to identify exactly where users were hesitating." }
        ]
      },
      ideation: { 
        text: "We explored solutions that align with user context to reduce initial friction.", 
        points: [
          { title: "Contextual Reveal", description: "Adopted an approach that exposes only relevant features based on the user's context, rather than showing all features at once." },
          { title: "Tutorial-style Landing Page", description: "Applied the idea of transforming an information-heavy layout into an interactive tutorial with actual screen walkthroughs." }
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
      summary: "An intuitive environment where creators can discover the features they need, exactly when they need them.",
      overview: { year: "2023", duration: "4 Months", role: "UX/UI Design Intern (Design Contribution: 95%)" },
      problem: "Despite having powerful features, too many features were exposed on the initial screen, creating a high barrier to entry for new users. This caused high cognitive load and user drop-off.",
      solution: [
        "IA Innovation: Shifted from a feature-centric to a value-centric UI, redesigning the information architecture based on frequency of use and context.",
        "FAB-based UI Structure: Introduced contextual Floating Action Buttons (FAB) to expose only the creation options needed at the moment, reducing decision fatigue.",
        "Brand System Renewal: Consolidated logo, typography, color, and microcopy to build a consistent brand identity."
      ],
      background: "The core of the design was not to simply list complex features, but to create an intuitive environment where creators can discover the features they need, exactly when they need them.",
      research: {
        text: "We conducted a survey with 45 users and approximately 14 internal employees. The results revealed that more than half felt uncomfortable with the existing brand identity and UI/UX.",
        insights: [
          { title: "A/B Testing Insights", description: "Compared the cluttered UI with the improved UI to identify exactly where users were hesitating." }
        ]
      },
      ideation: { 
        text: "We explored solutions that align with user context to reduce initial friction.", 
        points: [
          { title: "Contextual Reveal", description: "Adopted an approach that exposes only relevant features based on the user's context, rather than showing all features at once." },
          { title: "Tutorial-style Landing Page", description: "Applied the idea of transforming an information-heavy layout into an interactive tutorial with actual screen walkthroughs." }
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
      summary: "An intuitive environment where creators can discover the features they need, exactly when they need them.",
      overview: { year: "2023", duration: "4 Months", role: "UX/UI Design Intern (Design Contribution: 95%)" },
      problem: "Despite having powerful features, too many features were exposed on the initial screen, creating a high barrier to entry for new users. This caused high cognitive load and user drop-off.",
      solution: [
        "IA Innovation: Shifted from a feature-centric to a value-centric UI, redesigning the information architecture based on frequency of use and context.",
        "FAB-based UI Structure: Introduced contextual Floating Action Buttons (FAB) to expose only the creation options needed at the moment, reducing decision fatigue.",
        "Brand System Renewal: Consolidated logo, typography, color, and microcopy to build a consistent brand identity."
      ],
      background: "The core of the design was not to simply list complex features, but to create an intuitive environment where creators can discover the features they need, exactly when they need them.",
      research: {
        text: "We conducted a survey with 45 users and approximately 14 internal employees. The results revealed that more than half felt uncomfortable with the existing brand identity and UI/UX.",
        insights: [
          { title: "A/B Testing Insights", description: "Compared the cluttered UI with the improved UI to identify exactly where users were hesitating." }
        ]
      },
      ideation: { 
        text: "We explored solutions that align with user context to reduce initial friction.", 
        points: [
          { title: "Contextual Reveal", description: "Adopted an approach that exposes only relevant features based on the user's context, rather than showing all features at once." },
          { title: "Tutorial-style Landing Page", description: "Applied the idea of transforming an information-heavy layout into an interactive tutorial with actual screen walkthroughs." }
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
      summary: "A curtain-based adaptive workspace system that connects physical spatial control with a digital interface for privacy, comfort, and focus.",
      overview: { year: "2024", duration: "4 Months", role: "Product Designer (UX/UI, Research, Concept, Prototype)" },
      problem: "Open office and hybrid work environments often lack control over privacy, noise, and environmental comfort. Users struggle with limited visual and acoustic separation, inconsistent light and temperature, and no integrated system to manage workspace conditions seamlessly, leading to reduced productivity and dissatisfaction.",
      solution: [
        "Spatial Control: A curtain-based modular partition system that can divide or connect workspace zones as needed.",
        "Environmental Control: Temperature, lighting, and acoustic adjustments that support focus, privacy, and comfort.",
        "App Integration: A mobile interface for real-time workspace control, reframing the curtain as an interface for dynamically managing physical space."
      ],
      background: "As hybrid work environments expanded, users needed flexible ways to control their surroundings. This project explores how a physical object, curtains, can evolve into an interactive system that improves focus, privacy, and wellbeing.",
      research: {
        text: "Research combined persona and empathy mapping, workspace behavior analysis, survey inputs, and trend research to reframe the project from a curtain product concept into an environmental UX solution.",
        insights: [
          { title: "Privacy & Focus Issues", description: "Users struggled to concentrate in open environments and needed adjustable personal boundaries for visual and acoustic separation." },
          { title: "Environmental Discomfort", description: "Light, temperature, and noise conditions were inconsistent, while users lacked a unified way to control them." },
          { title: "Desire for Flexible Spaces", description: "Hybrid work increased the need for spaces that can shift between focus, collaboration, and rest modes." }
        ]
      },
      ideation: { 
        text: "The concept was developed around a smart curtain system that treats space itself as an interface, combining modular physical separation with a digital control layer.", 
        points: [
          { title: "Space as Interface", description: "Expanded the curtain from a passive physical element into an active UX interface for controlling privacy, focus, and ambiance." },
          { title: "Modular System", description: "Designed the system to flexibly separate or integrate spaces depending on changing work activities." },
          { title: "Smart Control Layer", description: "Connected the physical curtain system to app-based controls for temperature, lighting, and environmental feedback." }
        ] 
      },
      design: {
        text: "The design connects physical interaction, digital control, and material experience. The curtain functions as a room divider, acoustic buffer, and light filter, while the app provides temperature control, space configuration, and real-time environmental feedback.",
        image: "/smart-curtain-main.png",
        features: [
          { title: "Physical Interaction Design", description: "Defined the curtain as a room divider, acoustic buffer, and light filter that gives users direct spatial feedback." },
          { title: "Digital Interface", description: "Designed an app experience for temperature control, space configuration, and real-time environment feedback across physical and digital touchpoints." },
          { title: "Material & Experience Design", description: "Connected wool and linen material choices to user experience qualities such as acoustic comfort, insulation, breathability, and thermal comfort." }
        ]
      },
      testing: [
        {
          title: "Prototype Testing",
          description: "Validated the physical curtain prototype, 3D structural model, and app interactions. Users preferred simple, intuitive controls; over-automation reduced perceived control; and the physical movement of the curtain was critical to the experience.",
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
