import {
  Atom,
  Database,
  FileCode,
  FileCode2,
  GitBranch,
  Layers,
  Server,
  Wind,
} from "lucide-react";

export const skillIcons = {
  JavaScript: FileCode2,
  React: Atom,
  "Node.js": Server,
  "HTML/CSS": FileCode,
  Git: GitBranch,
  "Tailwind CSS": Wind,
  MongoDB: Database,
  "Express.js": Layers,
};

export const pillColors = {
  React: "bg-sky-400/20 text-sky-300",
  "Node.js": "bg-green-600/20 text-green-300",
  MongoDB: "bg-green-500/20 text-green-300",
};