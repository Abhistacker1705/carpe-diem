export const auditSteps = [
  {
    title: 'Information Gathering:',
    points: [
      'Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.',
      "Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.",
      'Discussed client concerns and specific areas of focus for the audit.',
    ],
  },
  {
    title: 'Manual Code Review:',
    points: [
      'Conducted a line-by-line review of the smart contract code, focusing on:',
      'Vulnerability identification: Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues etc.',
      'Logic flaws: Identifying inconsistencies or unintended behaviors in the code logic.',
      'Tokenomics correctness: Verifying if the code accurately implements the intended economic model and token distribution mechanisms.',
      'Solidity best practices: Compliance with secure coding standards and adherence to established guidelines.',
    ],
  },

  {
    title: 'Functional Testing:',
    points: [
      'Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.',
      'Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.',
      'Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).',
      'Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.',
    ],
  },
  {
    title: 'Automated Testing:',
    points: [
      'Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.',
      'Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.',
      'Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.',
    ],
  },
  {
    title: 'Reporting & Remediation:',
    points: [
      'Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.',
      'Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.',
      'Collaborated with the CDP team to prioritize and address the identified issues.',
      'Conducted additional verification testing after vulnerability fixes were implemented.',
    ],
  },
];

export const vulnerabilities = [
  {
    title: 'Unauthorized Claim/Compound:',
    points: [
      'Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.',
    ],
  },
  {
    title: 'Precision Loss in mintCDP():',
    points: [
      'Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.',
    ],
  },
  {
    title: 'Multiplication Accuracy:',
    points: [
      'Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.',
    ],
  },
  {
    title: 'Incorrect Share Allocation:',
    points: [
      'The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.',
    ],
  },
  {
    title: 'Logic Error in Referral Handling:',
    points: [
      'A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system',
    ],
  },
  {
    title: 'Referral Exploitation:',
    points: [
      'Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity.',
    ],
  },
];

export const remediationPoints = [
  'Implementation of reentrancy protection mechanisms.',
  'Accurate handling of decimal values using established libraries or best practices.',
  'Revised calculations with proper scaling factors',
  'Fixing logic errors to ensure deposits and waiting periods are enforced.',
  'Addressing referral system vulnerabilities to prevent abuse.',
];
