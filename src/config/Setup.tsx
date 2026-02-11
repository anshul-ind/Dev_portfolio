import { Download, Settings, Code, Terminal } from 'lucide-react';

export const steps = [
  {
    id: 1,
    title: 'Install Development Tools',
    icon: <Download className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Install Node.js (v18 or higher) from nodejs.org',
      },
      {
        type: 'instruction',
        text: 'Install Bun package manager from bun.sh',
      },
      {
        type: 'instruction',
        text: 'Install Visual Studio Code from code.visualstudio.com',
      },
      {
        type: 'instruction',
        text: 'Install Git from git-scm.com',
      },
    ],
  },
  {
    id: 2,
    title: 'VS Code Extensions Setup',
    icon: <Code className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Install essential extensions for development:',
      },
      {
        type: 'list',
        items: [
          'ES7+ React/Redux/React-Native snippets',
          'Prettier - Code formatter',
          'ESLint',
          'Auto Rename Tag',
          'Bracket Pair Colorizer',
          'GitLens',
          'Thunder Client (for API testing)',
          'Tailwind CSS IntelliSense',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Configure Development Environment',
    icon: <Settings className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Configure VS Code settings for optimal development:',
      },
      {
        type: 'list',
        items: [
          'Set Prettier as default formatter',
          'Configure ESLint for auto-fix on save',
          'Set up Git configuration',
          'Configure terminal integration',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'AI Tools & Productivity',
    icon: <Terminal className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Set up AI-powered development tools:',
      },
      {
        type: 'list',
        items: [
          'ChatGPT for code assistance',
          'Claude for debugging help',
          'Perplexity for research',
          'Cursor IDE for AI-assisted coding',
          'Replit for quick prototyping',
        ],
      },
    ],
  },
];

export const settingsJson = `{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "tailwindCSS.includeLanguages": {
        "javascript": "javascriptreact",
        "typescript": "typescriptreact"
    }
}`;
