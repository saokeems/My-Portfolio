export const projects = [
  {
    id: "01",
    title: "Digi9Craft",
    description:
      "Full-stack e-commerce platform for custom-made products. JWT + bcrypt authentication with role-based admin access, product catalog, cart and Stripe checkout with webhook confirmation, and Cloudinary image uploads for custom orders.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
    ],
    team: [
      { name: "Saokee Musor", github: "saokeems" },
      { name: "pattarapon-repo-git", github: "pattarapon-repo-git" },
      { name: "Supakit Prongchai", github: "Prongchais-cloud" },
      { name: "PorpleumX", github: "PorpleumX" },
      { name: "Paifon Chatchaya", github: "Chatchayapf" },
    ],
    images: ["/digi9craft.png"],
    repo: "https://github.com/Chatchayapf/project-X9-sprint2",
    demo: "https://digi9craft.vercel.app",
  },
  {
    id: "02",
    title: "React CRUD Assessment",
    description:
      "React single-page application for managing member records, built as a weekly assessment. Demonstrates REST CRUD against a mock API, a custom useMembers hook that encapsulates all state and async logic, nested routing with react-router, and role-based sections where the admin view reveals the create form.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    images: [
      "/react-assessment1.png",
      "/react-assessment2.png",
      "/react-assessment3.png",
    ],
    repo: "https://github.com/saokeems/jsd13-week09-react-assessment",
  },
];
