"use client";

import React, { useState } from 'react';
import { Eye, Copy } from 'lucide-react'; // Import the Eye and Copy icons
import { CopyToClipboard } from 'react-copy-to-clipboard'; // Library to handle copying to clipboard
import { Button } from '@/components/ui/button'; // Import the Button component

// Define the steps and answers as an array of objects
const steps = [
  {
    instruction: 'Fork the repository on GitHub',
    answer: `Forking the repository to create a copy of the project in your own GitHub account.`,
    code: '',
  },
  {
    instruction: 'Clone your fork locally',
    answer: `Once you have forked the repository, you can clone it to your local machine using Git. your-repository-url should be replaced with the URL of your fork.`,
    code: 'git clone your-repository-url',
  },
  {
    instruction: 'Create a new branch for your contribution',
    answer: `Create a new branch, to avoid making changes directly to the main branch. your-branch-name should be replaced with a descriptive name for your branch.`,
    code: 'git checkout -b your-branch-name',
  },
  {
    instruction: 'Add your name on names.txt file',
    answer: `You need to add your name to the 'names.txt' file - without spaces  you can use underscored -   Please do not remove any existing names.`,
    code: '',
  },
  {
    instruction: 'Commit your changes',
    answer: `Once you've made the changes, commit them using Git.`,
    code: 'git commit -m "your commit message"',
  },
  {
    instruction: 'Push your changes to your fork',
    answer: `Push your changes to the remote forked repository.`,
    code: 'git push origin your-branch-name',
  },
  {
    instruction: 'Open a pull request to the main repository',
    answer: `After pushing your changes, open a pull request to the main repository for review.`,
    code: '',
  },
];

export default function HowToContribute() {
  const [showAnswers, setShowAnswers] = useState(false); // State to control visibility of answers
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null); // Track the copied code index

  // Toggle show/hide answers
  const toggleAnswers = () => {
    setShowAnswers((prev) => !prev);
  };

  // Function to handle copy action
  const handleCopy = (index: number) => {
    setCopiedIndex(index); // Set the copied index
    setTimeout(() => setCopiedIndex(null), 2000); // Reset the copied index after 2 seconds
  };

  return (
    <main className="pt-20 min-h-screen text-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">How to participate</h1>

        <div className="space-y-6">
          <section className="bg-white/5 p-6 rounded-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <Button
              onClick={toggleAnswers}
              variant="secondary"
              className="flex items-center mb-6 ml-auto"
            >
              <Eye className="mr-2" /> {showAnswers ? 'Hide Answers' : 'Show Answers'}
            </Button>

            <ol className="list-decimal list-inside space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="space-y-2">
                  <p className="inline font-bold">{step.instruction}</p>
                  {showAnswers && (
                    <div className="space-y-2">
                      <p className="italic">{step.answer}</p>
                      {step.code && (
                        <div className="relative bg-gray-800 p-4 rounded-md text-white">
                          <pre className="overflow-x-auto">{step.code}</pre>
                          <CopyToClipboard text={step.code}>
                            <Button
                              variant="secondary"
                              className="absolute right-2 top-2 p-1 bg-gray-700 hover:bg-gray-600 rounded-full aspect-square"
                              onClick={() => handleCopy(index)} // Pass the index of the copied step
                            >
                              <Copy className="text-white" />
                            </Button>
                          </CopyToClipboard>

                          {/* "Copied!" Message with animation for the clicked item */}
                          {copiedIndex === index && (
                            <span className="absolute top-1/2 right-16 -translate-y-1/2 text-sm text-green-400 animate-fadeOut">
                              Copied!
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </section>
             <section className="bg-white/5 p-6 rounded-lg mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Links</h2>
            <div className="space-y-2">
              <p>
                <a
                  href="https://github.com/vAbdullh/git-github-workshop-Challenge" // Add the link to the GitHub repository
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub Repository
                </a>
              </p>
            </div>
         </section>
        </div>
      </div>
    </main>
  );
}
