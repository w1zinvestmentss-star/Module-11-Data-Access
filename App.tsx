
import React from 'react';
import Presentation from './components/Presentation';
import { SlideContent } from './types';
import { 
  ShieldCheckIcon, CheckCircleIcon, XCircleIcon, GavelIcon,
  ClockIcon, ClipboardDocumentCheckIcon, KeyIcon, BookOpenIcon, UserGroupIcon,
  DocumentTextIcon, CurrencyDollarIcon, ChevronRightIcon, PoliceBadgeIcon, NistIcon, UsersIcon, BeakerIcon, LightBulbIcon,
  ScaleIcon, ArchiveBoxIcon, PencilSquareIcon, ChatBubbleBottomCenterTextIcon, LockClosedIcon, ExclamationTriangleIcon,
  NewspaperIcon, CircleStackIcon, SearchIcon
} from './components/icons';

const initialSlides: SlideContent[] = [
  // SLIDE 1: Title
  {
    title: 'HINF5502 - Module 11 - Data Access, Governance & Management',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
        <KeyIcon className="w-32 h-32 text-purple-400" />
        <p className="text-2xl mt-8 text-gray-300">Professor: Jeffrey Munroe</p>
      </div>
    ),
  },
  // SLIDE 2: Section Intro
  {
    title: 'Part 1: Individual Access Requests under PHIPA',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-4xl font-bold mb-4">Understanding the Core Principles of Patient Access in Ontario</p>
            <p className="text-xl text-gray-300">This section covers the foundational rights and processes governing how individuals can access their Personal Health Information (PHI).</p>
        </div>
    ),
  },
  // SLIDE 3: Agenda
  {
    title: 'Agenda: Access Requests under PHIPA',
    content: (
      <div className="h-full flex flex-col justify-center">
        <ul className="list-none space-y-4 text-2xl">
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '100ms' }}><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Overview of the Right of Access</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '200ms' }}><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>What Can Be Requested & How</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '300ms' }}><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Response Timelines & Fees</div></li>
            <li className="flex items-start animate-slide-in-up" style={{ animationDelay: '400ms' }}><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Exceptions & The Denial Process</div></li>
        </ul>
      </div>
    ),
  },
   // SLIDE 4: Overview
  {
    title: 'Overview of Right of Access under PHIPA',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <BookOpenIcon className="w-32 h-32 text-purple-400 mb-6" />
            <p className="text-3xl font-bold mb-4">A Fundamental Right</p>
            <p className="text-xl mb-6">Ontario's Personal Health Information Protection Act (PHIPA) gives individuals a legal right to request and receive a copy of their own personal health information (PHI).</p>
            <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">This principle promotes <span className="text-purple-400 font-bold">transparency</span> and empowers individuals to be active participants in their own healthcare.</p>
        </div>
    ),
  },
  // SLIDE 5: Who is Covered
  {
    title: 'Who are Health Information Custodians (HICs)?',
    content: (
      <div className="space-y-6">
        <p>The responsibility to provide access falls on "Health Information Custodians" (HICs). This includes a wide range of providers:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center h-24"><p>Hospitals</p></div>
            <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center h-24"><p>Doctors' Offices</p></div>
            <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center h-24"><p>Pharmacies</p></div>
            <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center h-24"><p>Medical Labs</p></div>
            <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center h-24"><p>Long-Term Care Homes</p></div>
            <div className="p-4 bg-gray-800/50 rounded-lg flex items-center justify-center h-24"><p>Community Care</p></div>
        </div>
      </div>
    ),
  },
  // SLIDE 6: What can be requested
  {
    title: 'What Individuals Can Request',
    content: (
        <div className="space-y-6">
            <p>Individuals have the right to access any "record" of personal health information held by a custodian.</p>
            <div className="p-4 bg-gray-800/40 rounded-lg flex items-center space-x-4">
              <DocumentTextIcon className="w-16 h-16 text-purple-400 flex-shrink-0" />
              <div>
                <p><strong className="text-purple-400 text-2xl">A "Record" is Broadly Defined:</strong></p>
                <p>It includes any recorded information, in any form (paper, electronic, images, etc.), about an identifiable individual.</p>
              </div>
            </div>
            <p className="font-bold">Examples include: Medical charts, lab results, billing information, diagnostic images (X-rays), and clinical notes.</p>
        </div>
    ),
  },
  // SLIDE 7: How to make a request
  {
    title: 'How to Make a Request',
    content: (
      <div className="space-y-6">
        <p>The process is designed to be straightforward but requires a formal step to initiate.</p>
        <ul className="list-none space-y-4 text-xl">
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Must be a Written Request:</strong> The request must be in writing to be considered a formal request under PHIPA. Email is acceptable.</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Sufficient Detail:</strong> The individual should provide enough detail for the custodian to identify the records being requested.</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Identity Verification:</strong> The custodian has a right and responsibility to verify the identity of the person making the request before releasing information.</div></li>
        </ul>
      </div>
    ),
  },
  // NEW SLIDE
  {
    title: 'Access by Substitute Decision-Makers (SDMs)',
    content: (
      <div className="space-y-6">
        <p>PHIPA recognizes that not all individuals can exercise their own access rights. A Substitute Decision-Maker (SDM) can make a request on an individual's behalf if they are deemed incapable.</p>
        <p className="font-bold text-xl">Common SDMs include:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
          <li>Guardian of the person or property</li>
          <li>Attorney for personal care or property (under a Power of Attorney)</li>
          <li>A representative appointed by the Consent and Capacity Board</li>
          <li>Spouse, partner, or relative (in a specific hierarchy)</li>
        </ul>
        <p className="text-lg bg-gray-800/50 p-4 rounded-lg">The custodian must verify both the individual's incapability and the requester's authority as a valid SDM before granting access.</p>
      </div>
    ),
  },
  // SLIDE 8: Response Timelines
  {
    title: 'Response Timelines',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-5xl font-bold mb-4 pt-16">30 Calendar Days</p>
        <p className="text-xl mb-6">A custodian must provide a response to a request <span className="text-purple-400 font-bold">as soon as possible, but no later than 30 days</span> after receiving it.</p>
        <p className="text-lg bg-gray-800/50 p-4 rounded-lg">An extension of an additional 30 days is possible if the request is for a large volume of records or requires extensive consultation, but the individual must be notified.</p>
      </div>
    ),
  },
  // SLIDE 9: Exceptions
  {
    title: 'Exceptions to Access',
    content: (
      <div className="space-y-6">
        <p>The right of access is not absolute. PHIPA outlines specific, limited situations where a custodian can or must deny access.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="p-6 bg-yellow-900/30 rounded-lg border border-yellow-500">
                <h3 className="font-bold text-2xl text-yellow-400 mb-2">Discretionary Exceptions</h3>
                <p>The custodian <span className="font-bold">may</span> refuse access. (e.g., risk of serious harm, legal privilege).</p>
            </div>
            <div className="p-6 bg-red-900/30 rounded-lg border border-red-500">
                <h3 className="font-bold text-2xl text-red-400 mb-2">Mandatory Exceptions</h3>
                <p>The custodian <span className="font-bold">must</span> refuse access. (e.g., the information is subject to a legal privilege that is not the custodian's).</p>
            </div>
        </div>
      </div>
    ),
  },
  // SLIDE 10: Common Exceptions
  {
    title: 'Common Grounds for Refusal',
    content: (
      <div className="space-y-4">
        <p>Some of the most common reasons a custodian might deny access include:</p>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-center"><XCircleIcon className="w-8 h-8 text-red-400 mr-4 flex-shrink-0"/>Likely to result in a <strong className="mx-1 text-red-400">risk of serious harm</strong> to the individual or another person.</div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-center"><XCircleIcon className="w-8 h-8 text-red-400 mr-4 flex-shrink-0"/>The record was created primarily in anticipation of a <strong className="mx-1 text-red-400">legal proceeding.</strong></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-center"><XCircleIcon className="w-8 h-8 text-red-400 mr-4 flex-shrink-0"/>Granting access would reveal the identity of a <strong className="mx-1 text-red-400">confidential source.</strong></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-center"><XCircleIcon className="w-8 h-8 text-red-400 mr-4 flex-shrink-0"/>The record contains PHI about <strong className="mx-1 text-red-400">another individual</strong> which cannot be severed.</div>
      </div>
    ),
  },
  // SLIDE 11: Fees
  {
    title: 'Fees for Access',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <CurrencyDollarIcon className="w-32 h-32 text-purple-400 mb-6" />
            <p className="text-3xl font-bold mb-4">Reasonable Cost Recovery</p>
            <p className="text-xl mb-6">Custodians are permitted to charge a fee for providing access to cover costs like photocopying, printing, or staff time to prepare the records.</p>
            <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">They must provide a fee estimate in advance if requested, and the fees <span className="text-red-500 font-bold">cannot</span> be used as a barrier to prevent access.</p>
        </div>
    ),
  },
  // SLIDE 12: Denial Process
  {
    title: 'Denial of Access: The Formal Process',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <GavelIcon className="w-40 h-40 text-purple-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p>If a custodian denies access (in whole or in part), they cannot simply say "no." They must provide the individual with a formal written response that includes:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
            <li>The specific reason for the denial, referencing the relevant section of PHIPA.</li>
            <li>A statement that the individual has the right to appeal the decision to the Information and Privacy Commissioner of Ontario (IPC).</li>
          </ul>
        </div>
      </div>
    ),
  },
  // SLIDE 13: Key Takeaways
  {
    title: 'PHIPA Access: Key Takeaways',
    content: (
      <div className="space-y-6">
        <ul className="list-none space-y-4 text-xl">
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Fundamental Right:</strong> Access is a core principle of PHIPA, not a courtesy.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Formal Process:</strong> A written request triggers a legal timeline and set of obligations.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>30-Day Clock:</strong> Custodians must be timely in their responses.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Exceptions are Limited:</strong> Denials must be based on specific, justifiable reasons outlined in the Act.</div></li>
           <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Right to Appeal:</strong> Individuals have recourse through the IPC if they believe a decision was made in error.</div></li>
        </ul>
      </div>
    ),
  },
];

const phipaOtherSectionSlides: SlideContent[] = [
  // SLIDE 14: Section Intro
  {
    title: 'Part 2: Other Access Requests under PHIPA',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-4xl font-bold mb-4">Navigating Third-Party Disclosures of Personal Health Information</p>
            <p className="text-xl text-gray-300">Beyond the individual, various institutions may seek access to PHI. This section covers when and how that information can be shared.</p>
        </div>
    ),
  },
  // SLIDE 15: Agenda
  {
    title: 'Agenda: Third-Party Access Requests',
    content: (
      <div className="h-full flex flex-col justify-center">
        <ul className="list-none space-y-4 text-2xl">
            <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Law Enforcement Access</div></li>
            <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Legal Orders (Subpoenas & Warrants)</div></li>
            <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Insurance Company Requests</div></li>
            <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Children's Aid Society (CAS) Inquiries</div></li>
            <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Other Important Disclosures</div></li>
        </ul>
      </div>
    ),
  },
  // SLIDE 16: Core Principle
  {
    title: 'The Golden Rule: Consent',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <ShieldCheckIcon className="w-32 h-32 text-purple-400 mb-6" />
        <p className="text-3xl font-bold mb-4">Consent is the Cornerstone</p>
        <p className="text-xl mb-6">Under PHIPA, the default position is that any disclosure of PHI to a third party requires the <span className="text-purple-400 font-bold">express, knowledgeable consent</span> of the individual.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">The following slides discuss the specific, limited exceptions to this fundamental rule.</p>
      </div>
    ),
  },
  // SLIDE 17: Police Access
  {
    title: 'Law Enforcement Access to PHI',
    content: (
      <div className="space-y-6">
        <div className="flex items-center justify-center mb-4"><PoliceBadgeIcon className="w-24 h-24 text-purple-400" /></div>
        <p className="text-center font-bold text-2xl">Police do NOT have a blanket right to access PHI.</p>
        <p>A custodian must not disclose PHI simply because a police officer asks for it. Disclosure is only permitted under specific circumstances, such as:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
          <li>To comply with a <span className="text-purple-400">warrant, subpoena, or court order.</span></li>
          <li>If the custodian believes disclosure is necessary to <span className="text-purple-400">prevent or reduce a risk of serious bodily harm.</span></li>
          <li>To a CAS to report a suspicion of <span className="text-purple-400">child abuse or neglect.</span></li>
        </ul>
      </div>
    ),
  },
  // SLIDE 18: Legal Orders
  {
    title: 'Responding to Legal Orders',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center"><GavelIcon className="w-40 h-40 text-purple-500" /></div>
        <div className="md:w-2/3 space-y-4">
          <p className="text-2xl font-bold">A Compulsion of Law</p>
          <p>A subpoena, warrant, or other court order is a legal requirement. PHIPA permits disclosure to comply with these orders.</p>
          <p className="font-bold text-xl text-yellow-400">Key Actions:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
            <li>Verify the document's validity (signed, dated, specific).</li>
            <li>Disclose <span className="font-bold">only</span> the specific information required by the order—nothing more.</li>
          </ul>
        </div>
      </div>
    ),
  },
  // SLIDE 19: Insurance Companies
  {
    title: 'Requests from Insurance Companies',
    content: (
      <div className="space-y-6">
        <p className="text-2xl font-bold text-center pt-16">Consent is Mandatory</p>
        <p>This is a common scenario, and it is almost always governed by one thing: <span className="text-purple-400 font-bold text-2xl">the individual's consent.</span></p>
        <div className="p-4 bg-gray-800/40 rounded-lg">
          <p>Custodians must obtain a valid, specific, and recent <strong className="text-purple-400">written consent form</strong> signed by the individual before releasing any PHI to an insurance company for claims, underwriting, or other purposes.</p>
        </div>
        <p>It's crucial to check that the consent form clearly states what information can be disclosed and for what purpose.</p>
      </div>
    ),
  },
  // SLIDE 20: Children's Aid Society
  {
    title: 'Children\'s Aid Society (CAS) Inquiries',
    content: (
      <div className="space-y-6">
        <p className="text-2xl font-bold pt-16 text-center">An Exception for Child Protection</p>
        <p>PHIPA permits a custodian to disclose PHI to a CAS, without consent, if the custodian suspects that a child is or may be <span className="text-red-500 font-bold">"in need of protection."</span></p>
        <p className="bg-gray-800/50 p-4 rounded-lg">This is a discretionary disclosure, but the duty to report under the <i className="text-purple-300">Child, Youth and Family Services Act</i> often makes this a professional and ethical obligation.</p>
      </div>
    ),
  },
  // SLIDE 21: Other Disclosures
  {
    title: 'Other Important Permitted Disclosures',
    content: (
      <div className="space-y-6">
        <p>PHIPA allows for other essential, non-consent-based disclosures:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg"><p><strong>Public Health:</strong> For reporting communicable diseases or other public health surveillance activities.</p></div>
          <div className="p-4 bg-gray-800/50 rounded-lg"><p><strong>Coroners:</strong> For the purpose of investigating a death.</p></div>
          <div className="p-4 bg-gray-800/50 rounded-lg col-span-1 md:col-span-2"><p><strong>Continuity of Care:</strong> Disclosing to other health care providers involved in the individual's "circle of care" for the purpose of providing health care.</p></div>
        </div>
      </div>
    ),
  },
  // NEW SLIDE
  {
    title: 'Disclosures for Research Purposes',
    content: (
      <div className="space-y-6">
        <p>PHI is vital for health research. PHIPA permits disclosure without consent for research, but only under strict conditions to protect privacy.</p>
        <p className="font-bold text-xl">Key Requirements:</p>
        <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
          <li>A <span className="text-purple-400">Research Ethics Board (REB)</span> has approved a detailed research plan.</li>
          <li>The REB has determined the research cannot be reasonably accomplished without the PHI.</li>
          <li>The researcher enters into a strict confidentiality agreement with the custodian.</li>
          <li>Disclosure in a <span className="text-purple-400">de-identified form</span> is prioritized wherever possible.</li>
        </ul>
        <p className="text-lg bg-gray-800/50 p-4 rounded-lg">The REB acts as an independent gatekeeper to ensure the research is ethical and privacy-protective.</p>
      </div>
    ),
  },
  // SLIDE 22: Gray Areas
  {
    title: 'Navigating Discretionary Disclosures',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-3xl font-bold mb-4 pt-16">"May Disclose" vs. "Must Disclose"</p>
        <p className="text-xl mb-6">Many exceptions are <span className="text-yellow-400 font-bold">discretionary</span>, placing a heavy burden on the custodian to assess the situation and make a reasonable judgment.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">Key Principle: <span className="text-purple-400 font-bold">Document everything.</span> The reason for disclosure, the specific PHIPA provision relied upon, what was disclosed, and to whom. When in doubt, consult a privacy officer.</p>
      </div>
    ),
  },
  // SLIDE 23: Key Takeaways Part 2
  {
    title: 'Third-Party Access: Key Takeaways',
    content: (
      <div className="space-y-6">
        <ul className="list-none space-y-4 text-xl">
          <li className="flex items-start"><div><strong>Consent First:</strong> This is the default. Exceptions are specific and limited.</div></li>
          <li className="flex items-start"><div><strong>Not All Requests are Equal:</strong> A legal order is a compulsion; a police inquiry is a request that must be evaluated against PHIPA rules.</div></li>
          <li className="flex items-start"><div><strong>Verify, Verify, Verify:</strong> Always validate the legitimacy of the request and any supporting documentation (consent forms, warrants).</div></li>
          <li className="flex items-start"><div><strong>Minimum Necessary:</strong> Only disclose the minimum amount of information required to fulfill the request.</div></li>
           <li className="flex items-start"><div><strong>Documentation is Defense:</strong> A clear record of your decision-making process is crucial.</div></li>
        </ul>
      </div>
    ),
  },
  // SLIDE 24: Placeholder
  {
    title: 'Coming Up Next...',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
        <p className="text-3xl text-gray-400 mb-8">This concludes our section on third-party access.</p>
        <p className="text-4xl text-purple-400">Next Section: Introduction to Access under FIPPA</p>
      </div>
    ),
  },
];

const fipaSectionSlides: SlideContent[] = [
  // SLIDE 25: Section Intro
  {
    title: 'Part 3: Introduction to Access under FIPPA',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <p className="text-4xl font-bold mb-4">Accessing Government Information in Ontario</p>
            <p className="text-xl text-gray-300">This section explores the Freedom of Information and Protection of Privacy Act (FIPPA) and the public's right to access government-held records.</p>
        </div>
    ),
  },
  // SLIDE 26: Agenda
  {
    title: 'Agenda: Access Requests under FIPPA',
    content: (
      <div className="h-full flex flex-col justify-center">
        <ul className="list-disc list-inside ml-4 space-y-4 text-2xl">
            <li className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>Overview of FIPPA's Dual Mandate</li>
            <li className="animate-slide-in-up" style={{ animationDelay: '200ms' }}>Types of Requests: Personal vs. General</li>
            <li className="animate-slide-in-up" style={{ animationDelay: '300ms' }}>The Formal Request Process & Timelines</li>
            <li className="animate-slide-in-up" style={{ animationDelay: '400ms' }}>Exemptions, Fees, and Appeals</li>
            <li className="animate-slide-in-up" style={{ animationDelay: '500ms' }}>Real-World Examples of FIPPA Requests</li>
        </ul>
      </div>
    ),
  },
  // SLIDE 27: Overview of FIPPA
  {
    title: 'Overview of Right of Access under FIPPA',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-3xl font-bold mb-4 pt-16">A Dual Mandate: Access & Privacy</p>
        <p className="text-xl mb-6">FIPPA provides a right of access to information under the control of government institutions, while also protecting the privacy of individuals whose personal information is held by these institutions.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">It aims to balance public accountability with the protection of personal privacy.</p>
      </div>
    ),
  },
  // NEW SLIDE
  {
    title: 'FIPPA vs. MFIPPA',
    content: (
      <div className="space-y-6">
        <p className="text-center">Ontario has two public sector access laws. The core principles are nearly identical, but they apply to different types of institutions.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-800/40 rounded-lg border border-purple-500">
                <h3 className="font-bold text-2xl text-purple-400 mb-2">FIPPA (Provincial)</h3>
                <p>Applies to provincial bodies:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Government Ministries (e.g., Ministry of Health)</li>
                  <li>Provincial Agencies (e.g., Ontario Health)</li>
                  <li>Hospitals</li>
                  <li>Universities & Colleges</li>
                </ul>
            </div>
            <div className="p-4 bg-gray-800/40 rounded-lg border border-indigo-500">
                <h3 className="font-bold text-2xl text-indigo-400 mb-2">MFIPPA (Municipal)</h3>
                <p>Applies to local government bodies:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Municipalities (e.g., City of Toronto)</li>
                  <li>School Boards</li>
                  <li>Police Services Boards</li>
                  <li>Public Libraries</li>
                </ul>
            </div>
        </div>
      </div>
    ),
  },
  // SLIDE 28: Two Types of Requests
  {
    title: 'Two Types of FIPPA Requests',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        <div className="p-6 bg-gray-800/50 rounded-lg text-center border border-purple-500">
          <h3 className="text-2xl font-bold mb-2">Personal Information Request</h3>
          <p>A request by an individual for records containing their own personal information.</p>
        </div>
        <div className="p-6 bg-gray-800/50 rounded-lg text-center border border-indigo-500">
          <h3 className="text-2xl font-bold mb-2">General Records Request</h3>
          <p>A request for any other type of record held by a government institution (e.g., reports, correspondence, financial data).</p>
        </div>
      </div>
    ),
  },
  // SLIDE 29: How to make a request
  {
    title: 'How to Make a FIPPA Request',
    content: (
      <div className="space-y-6">
        <p>A formal FIPPA request must be made to the institution that holds the records.</p>
        <ul className="list-disc list-inside ml-4 space-y-4 text-xl">
          <li><strong>Written Request:</strong> Must be in writing (letter or designated form).</li>
          <li><strong>Sufficient Detail:</strong> Must provide enough detail for an experienced employee to identify the record.</li>
          <li><strong>Application Fee:</strong> A mandatory $5.00 fee must accompany most general records requests.</li>
        </ul>
        <p className="text-lg bg-gray-800/50 p-4 rounded-lg">Note: The $5 application fee is typically waived for personal information requests.</p>
      </div>
    ),
  },
  // SLIDE 30: FIPPA Response Timelines
  {
    title: 'FIPPA Response Timelines',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-5xl font-bold mb-4 pt-16">30 Calendar Days</p>
        <p className="text-xl mb-6">Similar to PHIPA, an institution must respond to a request <span className="text-purple-400 font-bold">within 30 days</span> of receiving the request and the application fee (if applicable).</p>
        <p className="text-lg bg-gray-800/50 p-4 rounded-lg">Time extensions are possible for large or complex requests, but the requester must be notified.</p>
      </div>
    ),
  },
  // SLIDE 31: Exceptions to Access
  {
    title: 'Exceptions & Exemptions under FIPPA',
    content: (
      <div className="space-y-6">
        <p>Access is not absolute. FIPPA contains both mandatory and discretionary exemptions to protect certain types of information.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="p-6 bg-red-900/30 rounded-lg border border-red-500">
            <h3 className="font-bold text-2xl text-red-400 mb-2">Mandatory Exemptions</h3>
            <p>The institution <span className="font-bold">must</span> refuse access (e.g., Cabinet records, information received in confidence from another government).</p>
          </div>
          <div className="p-6 bg-yellow-900/30 rounded-lg border border-yellow-500">
            <h3 className="font-bold text-2xl text-yellow-400 mb-2">Discretionary Exemptions</h3>
            <p>The institution <span className="font-bold">may</span> refuse access (e.g., advice to government, law enforcement matters, solicitor-client privilege).</p>
          </div>
        </div>
      </div>
    ),
  },
  // SLIDE 32: Fees
  {
    title: 'Fees for General Records',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <CurrencyDollarIcon className="w-32 h-32 text-purple-400 mb-6" />
            <p className="text-3xl font-bold mb-4">Beyond the Application Fee</p>
            <p className="text-xl mb-6">For general records requests, institutions can charge fees to recover the costs of processing the request, including:</p>
            <ul className="list-disc list-inside text-lg">
                <li>Search time (over 2 hours)</li>
                <li>Record preparation</li>
                <li>Photocopying / computer costs</li>
            </ul>
            <p className="text-2xl bg-gray-800/50 p-6 rounded-lg mt-4">A fee estimate must be provided if costs are expected to exceed $25, and a 50% deposit may be required for estimates over $100.</p>
        </div>
    ),
  },
   // SLIDE 33: Examples
  {
    title: 'Examples of FIPPA Requests',
    content: (
      <div className="space-y-4">
        <p>FIPPA requests can cover a vast range of government activities:</p>
        <div className="p-3 bg-gray-800/40 rounded-lg"><div><strong>Personal:</strong> "A copy of all records related to my application for social assistance."</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><div><strong>General (Accountability):</strong> "All expense reports submitted by the Deputy Minister of Transportation for the last fiscal year."</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><div><strong>General (Public Interest):</strong> "The final report and recommendations from the task force on long-term care home standards."</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><div><strong>General (Policy):</strong> "Any briefing notes or memos provided to the Minister of Education regarding the new science curriculum."</div></div>
      </div>
    ),
  },
  // SLIDE 34: Denial of Access and Appeals
  {
    title: 'Denial of Access and Appeals',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center">
            <GavelIcon className="w-40 h-40 text-purple-500" />
        </div>
        <div className="md:w-2/3 space-y-4">
          <p>If an institution denies access, it must provide a written decision letter that:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
            <li>States the specific exemption(s) from FIPPA being applied.</li>
            <li>Explains why the exemption(s) apply to the records.</li>
            <li>Informs the requester of their right to appeal the decision to the IPC within 30 days.</li>
          </ul>
        </div>
      </div>
    ),
  },
  // SLIDE 35: Key Takeaways
  {
    title: 'FIPPA Access: Key Takeaways',
    content: (
      <div className="space-y-6">
        <ul className="list-none space-y-4 text-xl">
          <li className="flex items-start"><div><strong>Transparency & Accountability:</strong> FIPPA is a key tool for ensuring government transparency.</div></li>
          <li className="flex items-start"><div><strong>Two Streams:</strong> Clearly distinguish between personal and general records requests, as rules for fees and exemptions differ.</div></li>
          <li className="flex items-start"><div><strong>Process is Formal:</strong> A written request and a $5 fee (for general) starts the 30-day clock.</div></li>
          <li className="flex items-start"><div><strong>Exemptions are the Guardrails:</strong> Access is broad but subject to specific, legally defined exemptions.</div></li>
           <li className="flex items-start"><div><strong>Appeal to the IPC:</strong> The IPC provides independent oversight and adjudication of access disputes.</div></li>
        </ul>
      </div>
    ),
  },
  // SLIDE 36: Placeholder
  {
    title: 'Coming Up Next...',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
        <p className="text-3xl text-gray-400 mb-8">This concludes our introduction to FIPPA access.</p>
        <p className="text-4xl text-purple-400">Next Section: Correction Requests Process under PHIPA</p>
      </div>
    ),
  },
];

const phipaCorrectionSectionSlides: SlideContent[] = [
  // SLIDE 37: Section Intro
  {
    title: 'Part 4: Correction Requests Process under PHIPA',
    content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
            <PencilSquareIcon className="w-32 h-32 text-purple-400 mb-6" />
            <p className="text-4xl font-bold mb-4">Ensuring the Accuracy of Health Records</p>
            <p className="text-xl text-gray-300">This section details an individual's right to request corrections to their PHI, a critical component of patient empowerment and safety.</p>
        </div>
    ),
  },
  // SLIDE 38: Agenda
  {
    title: 'Agenda: The Correction Process',
    content: (
      <div className="h-full flex flex-col justify-center">
        <ul className="list-none space-y-4 text-2xl">
            <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>The Right to Correct Your PHI</div></li>
            <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>How to Submit a Request</div></li>
            <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Timelines for a Decision</div></li>
            <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Grounds for Refusal</div></li>
            <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>The Statement of Disagreement</div></li>
            <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Notifying Third Parties of Changes</div></li>
        </ul>
      </div>
    ),
  },
  // SLIDE 39: The Right to Correct
  {
    title: 'Ensuring Accuracy: The Right to Correct',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <ClipboardDocumentCheckIcon className="w-32 h-32 text-purple-400 mb-6" />
        <p className="text-3xl font-bold mb-4">A Pillar of Patient Rights</p>
        <p className="text-xl mb-6">PHIPA provides individuals with the legal right to request corrections to their records of personal health information to ensure they are <span className="text-purple-400">accurate and complete</span>.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">This right is fundamental to high-quality healthcare, patient safety, and individual autonomy.</p>
      </div>
    ),
  },
  // SLIDE 40: Factual vs. Opinion
  {
    title: 'Factual Information vs. Professional Opinion',
    content: (
      <div className="space-y-6">
        <p className="text-center">A critical distinction: the right to correction applies to factual information, not professional opinions or observations made in good faith.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-900/30 rounded-lg border border-green-500">
                <h3 className="flex items-center font-bold text-2xl text-green-400 mb-2"><CheckCircleIcon className="w-8 h-8 mr-2"/>Correctable</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>Incorrect date of birth</li>
                  <li>Wrong address or contact info</li>
                  <li>Inaccurate allergy information</li>
                  <li>Mistaken medical history fact</li>
                </ul>
            </div>
            <div className="p-4 bg-red-900/30 rounded-lg border border-red-500">
                <h3 className="flex items-center font-bold text-2xl text-red-400 mb-2"><XCircleIcon className="w-8 h-8 mr-2"/>Not Correctable</h3>
                <ul className="list-disc list-inside ml-4">
                  <li>A physician's diagnosis</li>
                  <li>A nurse's observation notes</li>
                  <li>A specialist's clinical opinion</li>
                  <li>Test results (the results themselves)</li>
                </ul>
            </div>
        </div>
      </div>
    ),
  },
  // SLIDE 41: How to Submit a Request
  {
    title: 'How to Submit a Correction Request',
    content: (
      <div className="space-y-6">
        <p>The process is formal to ensure clarity and create a proper record.</p>
        <ul className="list-none space-y-4 text-xl">
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Must be in Writing:</strong> A formal, written request is required to trigger the obligations under PHIPA.</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Be Specific:</strong> The request must clearly identify the information believed to be inaccurate or incomplete.</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Provide the Correction:</strong> The individual must provide the information they believe is correct, along with any available supporting documentation.</div></li>
        </ul>
      </div>
    ),
  },
  // SLIDE 42: Timeline for Response
  {
    title: 'Timeline for Response',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <ClockIcon className="w-32 h-32 text-purple-400 mb-6" />
        <p className="text-5xl font-bold mb-4">30 Calendar Days</p>
        <p className="text-xl mb-6">A custodian must provide a written response to a correction request <span className="text-purple-400 font-bold">within 30 days</span> of receiving it.</p>
        <p className="text-lg bg-gray-800/50 p-4 rounded-lg">Like access requests, a 30-day extension is possible for complex cases, but the individual must be notified in writing.</p>
      </div>
    ),
  },
  // SLIDE 43: Grounds for Refusal
  {
    title: 'Grounds for Refusing a Correction',
    content: (
      <div className="space-y-4">
        <p>A custodian can only refuse a correction request for specific reasons outlined in PHIPA:</p>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><XCircleIcon className="w-8 h-8 text-red-400 mr-4 flex-shrink-0 mt-1"/><div>The custodian did not create the original record (and doesn't have the knowledge to make the correction).</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><XCircleIcon className="w-8 h-8 text-red-400 mr-4 flex-shrink-0 mt-1"/><div>The information is a professional opinion or observation made in good faith.</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><XCircleIcon className="w-8 h-8 text-red-400 mr-4 flex-shrink-0 mt-1"/><div>The record is exempt from the right of access under PHIPA.</div></div>
      </div>
    ),
  },
  // SLIDE 44: If Correction Is Refused
  {
    title: 'If Your Correction is Refused: Your Rights',
    content: (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/3 flex justify-center"><GavelIcon className="w-40 h-40 text-purple-500" /></div>
        <div className="md:w-2/3 space-y-4">
          <p className="text-2xl font-bold">A refusal is not the end of the road.</p>
          <p>If a custodian denies a request, the individual has two key rights:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 text-lg">
            <li>To prepare a concise <strong className="text-purple-400">Statement of Disagreement</strong> that will be attached to the record.</li>
            <li>To file a complaint with the Information and Privacy Commissioner of Ontario (IPC).</li>
          </ul>
        </div>
      </div>
    ),
  },
  // SLIDE 45: Statement of Disagreement
  {
    title: 'The Statement of Disagreement',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-3xl font-bold mb-4 pt-16">Making Your Position Part of the Record</p>
        <p className="text-xl mb-6">This is a written statement from the individual explaining the correction that was requested and why they disagree with the custodian's refusal.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">The custodian is legally required to attach this statement to the disputed information, making it a permanent part of the official health record.</p>
      </div>
    ),
  },
  // SLIDE 46: Duty to Notify
  {
    title: 'The Custodian\'s Duty to Notify Others',
    content: (
      <div className="space-y-6">
        <div className="flex items-center justify-center mb-4"><UsersIcon className="w-24 h-24 text-purple-400" /></div>
        <p className="text-2xl font-bold text-center">Maintaining the Integrity of the Health System</p>
        <p>If a correction is made OR a statement of disagreement is filed, the custodian must, where reasonably possible, notify any other person or organization who received the incorrect information in the past year.</p>
        <p className="bg-gray-800/50 p-4 rounded-lg">This ensures that other healthcare providers are working with the most up-to-date and accurate information, which is critical for patient safety.</p>
      </div>
    ),
  },
  // SLIDE 47: Key Takeaways
  {
    title: 'Corrections Process: Key Takeaways',
    content: (
      <div className="space-y-6">
        <ul className="list-none space-y-4 text-xl">
          <li className="flex items-start"><div><strong>Accuracy is a Right:</strong> Individuals have a right to accurate and complete PHI.</div></li>
          <li className="flex items-start"><div><strong>Factual vs. Opinion:</strong> The process is for correcting facts, not challenging professional judgments.</div></li>
          <li className="flex items-start"><div><strong>Formal, Written Process:</strong> All requests and responses must be in writing.</div></li>
          <li className="flex items-start"><div><strong>Statement of Disagreement is Key:</strong> It ensures the patient's perspective is permanently part of their record, even if a correction is denied.</div></li>
           <li className="flex items-start"><div><strong>Notification is Mandatory:</strong> Changes must be communicated to others to prevent ongoing errors in care.</div></li>
        </ul>
      </div>
    ),
  },
  // SLIDE 48: Placeholder
  {
    title: 'Coming Up Next...',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
        <p className="text-3xl text-gray-400 mb-8">This concludes our section on PHIPA Correction Requests.</p>
        <p className="text-4xl text-purple-400">Next Section: Consent Directives & Lockboxes</p>
      </div>
    ),
  },
];

const phipaConsentSectionSlides: SlideContent[] = [
  // SLIDE 49: Section Intro
  {
    title: 'Part 5: Consent Directives & Lockboxes under PHIPA',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-4xl font-bold mb-4 pt-16">Controlling the Flow of Personal Health Information</p>
        <p className="text-xl text-gray-300">This section covers an individual's right to direct how their PHI is shared within the healthcare system.</p>
      </div>
    ),
  },
  // SLIDE 50: Agenda
  {
    title: 'Agenda: Consent Directives',
    content: (
      <div className="h-full flex flex-col justify-center">
        <ul className="list-none space-y-4 text-2xl">
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Types of Consent: Express vs. Implied</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>The Elements of a Valid Consent</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Consent Directives in Electronic Health Records (EHRs)</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Exceptions & "Breaking the Glass"</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Challenges and Ethical Considerations</div></li>
        </ul>
      </div>
    ),
  },
  // SLIDE 51: Types of Consent
  {
    title: 'Types of Consent under PHIPA',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        <div className="p-6 bg-gray-800/50 rounded-lg text-center border border-purple-500">
          <h3 className="text-2xl font-bold mb-2 text-purple-400">Express Consent</h3>
          <p>A direct, explicit "yes." Can be given verbally or in writing. Required for disclosures to non-health care providers or for purposes other than providing care (e.g., insurance, research).</p>
        </div>
        <div className="p-6 bg-gray-800/50 rounded-lg text-center border border-indigo-500">
          <h3 className="text-2xl font-bold mb-2 text-indigo-400">Implied Consent</h3>
          <p>Assumed from an individual's actions. PHIPA allows providers in the "circle of care" to assume implied consent to collect, use, and share PHI for the purpose of providing healthcare.</p>
        </div>
      </div>
    ),
  },
  // SLIDE 52: Valid Consent
  {
    title: 'Elements of Valid Consent',
    content: (
      <div className="space-y-4">
        <p>For consent to be valid under PHIPA, it must be:</p>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><ShieldCheckIcon className="w-8 h-8 text-green-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Knowledgeable:</strong> The individual must understand the purpose of the collection, use, or disclosure and their right to withhold or withdraw consent.</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><ShieldCheckIcon className="w-8 h-8 text-green-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Voluntary:</strong> It must be freely given, without coercion or deception.</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><ShieldCheckIcon className="w-8 h-8 text-green-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Related to the Information:</strong> The consent must be specific to the PHI being handled.</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><ShieldCheckIcon className="w-8 h-8 text-green-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Not Outdated:</strong> Consent is not indefinite; it should be reasonably current.</div></div>
      </div>
    ),
  },
  // SLIDE 53: What is a Lockbox?
  {
    title: 'What is a Consent Directive ("Lockbox")?',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <LockClosedIcon className="w-32 h-32 text-purple-400 mb-6" />
        <p className="text-3xl font-bold mb-4">Withdrawing Implied Consent</p>
        <p className="text-xl mb-6">A "lockbox" is the term for an individual's right to expressly <span className="text-purple-400">withhold or withdraw consent</span> for their PHI to be shared with other health care providers, even those in the circle of care.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">It allows a patient to "lock" a segment of their health record, preventing it from being viewed in a shared Electronic Health Record (EHR).</p>
      </div>
    ),
  },
  // SLIDE 54: EHRs and Lockboxes
  {
    title: 'Consent Directives in EHRs',
    content: (
      <div className="space-y-6">
        <p>In a modern, connected health system, the lockbox is a critical patient-directed tool.</p>
        <ul className="list-none space-y-4 text-xl">
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Patient's Instruction:</strong> The patient formally tells a custodian (e.g., their family doctor) not to share specific sensitive information (e.g., mental health records).</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div><strong>EHR Flagging:</strong> The custodian applies a restriction in the shared EHR system.</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Access Blocked:</strong> When another provider (e.g., an ER doctor) accesses the patient's file, the "locked" information is not visible to them.</div></li>
        </ul>
      </div>
    ),
  },
  // SLIDE 55: Exceptions
  {
    title: 'Exceptions: Overriding a Lockbox',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <ExclamationTriangleIcon className="w-32 h-32 text-yellow-400 mb-6" />
        <p className="text-3xl font-bold mb-4">"Breaking the Glass"</p>
        <p className="text-xl mb-6">A provider can override a lockbox without consent if they believe it is necessary to eliminate or reduce a <span className="text-yellow-400">significant risk of serious bodily harm</span> to a person or group.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">This action creates an immediate, auditable security event. The provider must document their reasons, and the patient must be notified of the override.</p>
      </div>
    ),
  },
  // SLIDE 56: Challenges
  {
    title: 'Challenges & Ethical Considerations',
    content: (
      <div className="space-y-4">
        <p>Implementing lockboxes effectively presents several challenges:</p>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><LightBulbIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Technology:</strong> Not all EHR systems have robust, granular lockbox capabilities.</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><LightBulbIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Patient Safety:</strong> A provider acting on incomplete information could pose a risk to care. This must be clearly explained to the patient.</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><LightBulbIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Clinician Burden:</strong> Managing directives and navigating overrides adds complexity to clinical workflows.</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><LightBulbIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Ethical Balance:</strong> Weighing the patient's right to privacy (autonomy) against the provider's duty to provide safe, effective care (beneficence).</div></div>
      </div>
    ),
  },
  // NEW SLIDE
  {
    title: 'Communicating Lockbox Implications',
    content: (
      <div className="space-y-4">
        <p>A patient's right to a lockbox must be an <span className="text-purple-400">informed</span> right. The custodian's role is to counsel the patient, not just process the request.</p>
        <div className="p-3 bg-gray-800/40 rounded-lg"><div><strong>Explain Potential for Harm:</strong> Neutrally explain that withholding information could lead to adverse events (e.g., drug interactions, misdiagnosis).</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><div><strong>Explain the "Break Glass" Exception:</strong> Ensure the patient understands it's not a perfect shield in emergencies.</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg"><div><strong>Document the Discussion:</strong> The conversation itself should be documented, noting that the risks were explained and understood by the patient.</div></div>
        <div className="p-4 bg-gray-800/50 rounded-lg mt-4 text-center font-bold text-xl">The goal is shared decision-making, not just ticking a box.</div>
      </div>
    ),
  },
  // SLIDE 57: Key Takeaways
  {
    title: 'Consent & Lockboxes: Key Takeaways',
    content: (
      <div className="space-y-6">
        <ul className="list-none space-y-4 text-xl">
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Empowerment through Control:</strong> Lockboxes give patients meaningful control over their PHI.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Implied vs. Express:</strong> The "circle of care" operates on implied consent, which a lockbox expressly withdraws.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Overrides are for Emergencies:</strong> "Breaking the glass" is a rare event for preventing serious harm, not for convenience.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Communication is Crucial:</strong> Custodians must clearly explain the potential risks of a lockbox to the patient.</div></li>
        </ul>
      </div>
    ),
  },
];

const phipaCaseStudiesSectionSlides: SlideContent[] = [
  // SLIDE 58: Section Intro
  {
    title: 'Part 6: PHIPA in Practice: Case Studies & Professional Impact',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <p className="text-4xl font-bold mb-4 pt-16">Applying the Principles to Real-World Scenarios</p>
        <p className="text-xl text-gray-300">This section explores common challenges and complaints, highlighting the critical role of Health Informatics and Information Management (HIM) professionals.</p>
      </div>
    ),
  },
  // SLIDE 59: Agenda
  {
    title: 'Agenda: Case Studies',
    content: (
      <div className="h-full flex flex-col justify-center">
        <ul className="list-none space-y-4 text-2xl">
          <li>Common IPC Complaints: An Overview</li>
          <li>Case Study: The Correction Complaint</li>
          <li>Case Study: The Complex Access Request</li>
          <li>Case Study: Lawful but Challenged Disclosures</li>
          <li>Case Study: Unauthorized Access ("Snooping")</li>
          <li>Impact and Key Skills for HIM Professionals</li>
        </ul>
      </div>
    ),
  },
    // SLIDE 60: Common IPC Complaints
  {
    title: 'Common IPC Complaints',
    content: (
      <div className="space-y-6">
        <p>The Information & Privacy Commissioner (IPC) of Ontario handles complaints when individuals feel their rights under PHIPA have been violated. Common themes include:</p>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><GavelIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Denial of Access:</strong> Believing a custodian wrongly withheld records.</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><PencilSquareIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Refusal to Correct:</strong> Disagreeing with a custodian's decision not to amend a record.</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><CurrencyDollarIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Fees:</strong> Challenging the reasonableness of fees charged for access.</div></div>
        <div className="p-3 bg-gray-800/40 rounded-lg flex items-start"><LockClosedIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/><div><strong>Unauthorized Disclosure:</strong> Alleging that PHI was shared without proper consent or legal authority.</div></div>
      </div>
    ),
  },
  // SLIDE 61: Case Study: Correction Complaint
  {
    title: 'Case Study: The Correction Complaint',
    content: (
      <div className="space-y-4">
        <p className="text-2xl font-bold">Scenario:</p>
        <p>A patient requests a correction to their record to remove a diagnosis of "anxiety disorder," stating they were just "having a bad day." The physician who made the diagnosis refuses, as it was their professional opinion at the time.</p>
        <div className="p-4 bg-gray-800/50 rounded-lg mt-4">
            <p className="text-xl font-bold text-purple-400">Resolution:</p>
            <p>The HIM professional explains that a professional opinion cannot be corrected. They assist the patient in drafting a <strong className="text-yellow-400">Statement of Disagreement,</strong> which is appended to the electronic record. The IPC would likely uphold the custodian's decision while confirming the patient's right to have their disagreement noted.</p>
        </div>
        <p className="text-xl font-bold mt-2">HIM Impact: Requires strong communication skills to explain complex rules and de-escalate patient frustration.</p>
      </div>
    ),
  },
    // SLIDE 62: Case Study: Complex Access
  {
    title: 'Case Study: Complex Records Access',
    content: (
      <div className="space-y-4">
        <p className="text-2xl font-bold">Scenario:</p>
        <p>A former patient requests their "entire file" from a large hospital, covering a 10-year period with multiple admissions and outpatient visits. The records are voluminous, exist in both paper and multiple electronic systems, and contain PHI about a family member.</p>
         <div className="p-4 bg-gray-800/50 rounded-lg mt-4">
            <p className="text-xl font-bold text-purple-400">Resolution:</p>
            <p>The HIM department invokes a 30-day time extension, provides a detailed fee estimate for search and preparation, and carefully <strong className="text-yellow-400">severs</strong> the third-party PHI before release. Clear communication with the requester about the process and costs is maintained throughout.</p>
        </div>
        <p className="text-xl font-bold mt-2">HIM Impact: Demands meticulous attention to detail, project management skills, and a deep understanding of severance rules.</p>
      </div>
    ),
  },
    // SLIDE 63: Case Study: Lawful Disclosure
  {
    title: 'Case Study: The Lawful Disclosure Complaint',
    content: (
      <div className="space-y-4">
        <p className="text-2xl font-bold">Scenario:</p>
        <p>A hospital discloses records to the Children's Aid Society (CAS) without consent based on a physician's suspicion that a child is in need of protection. The child's parents file a complaint, arguing their privacy was violated.</p>
         <div className="p-4 bg-gray-800/50 rounded-lg mt-4">
            <p className="text-xl font-bold text-purple-400">Resolution:</p>
            <p>The hospital demonstrates that the disclosure was permitted under PHIPA s. 40(1) and aligned with the duty to report under the CYFSA. The IPC investigation finds the disclosure was <strong className="text-yellow-400">legally authorized and made in good faith</strong>. The complaint is not upheld.</p>
        </div>
        <p className="text-xl font-bold mt-2">HIM Impact: Involves navigating emotionally charged situations and confidently applying legal exceptions under pressure.</p>
      </div>
    ),
  },
  // SLIDE 64: Case Study: Snooping
  {
    title: 'Case Study: Unauthorized Access ("Snooping")',
    content: (
      <div className="space-y-4">
        <p className="text-2xl font-bold">Scenario:</p>
        <p>A registration clerk at a hospital accesses the health records of their neighbor out of curiosity. A routine audit by the HIM/Privacy office flags the access as the clerk was not in the patient's circle of care.</p>
         <div className="p-4 bg-gray-800/50 rounded-lg mt-4">
            <p className="text-xl font-bold text-purple-400">Resolution:</p>
            <p>The employee's access is suspended pending an investigation. The employee is terminated for cause, the breach is reported to the IPC, and the affected patient is notified. The incident may also be referred to the employee's professional college.</p>
        </div>
        <p className="text-xl font-bold mt-2">HIM Impact: Proactive auditing and data analytics are key responsibilities. HIM professionals are on the front lines of detecting and investigating internal breaches.</p>
      </div>
    ),
  },
  // NEW SLIDE
  {
    title: 'Case Study: The Privacy Breach',
    content: (
      <div className="space-y-4">
        <p className="text-2xl font-bold">Scenario:</p>
        <p>An administrative assistant in a busy clinic accidentally faxes a patient's sensitive lab results to a local convenience store instead of the patient's new specialist, due to a clerical error in the directory.</p>
         <div className="p-4 bg-gray-800/50 rounded-lg mt-4">
            <p className="text-xl font-bold text-purple-400">Response Protocol:</p>
             <ul className="list-disc list-inside ml-4 space-y-1">
              <li><strong className="text-yellow-400">Containment:</strong> Immediately contact the store to confirm receipt and request secure destruction of the fax.</li>
              <li><strong className="text-yellow-400">Investigation:</strong> Determine the root cause (outdated number) and correct the directory.</li>
              <li><strong className="text-yellow-400">Notification:</strong> Notify the affected patient of the breach, what was disclosed, and steps taken.</li>
              <li><strong className="text-yellow-400">Reporting:</strong> Formally report the breach to the IPC as required.</li>
            </ul>
        </div>
        <p className="text-xl font-bold mt-2">HIM Impact: Highlights the HIM professional's role as a first responder in a privacy crisis, requiring quick, systematic, and empathetic action.</p>
      </div>
    ),
  },
  // SLIDE 65: Impact on HIM
  {
    title: 'The Central Role of the HIM Professional',
    content: (
      <div className="space-y-6">
        <p>These cases highlight that HIM professionals are more than just record keepers; they are crucial guardians of patient privacy and access rights.</p>
        <p className="text-2xl font-bold">Core Competencies:</p>
        <ul className="list-none space-y-3 text-xl">
          <li className="flex items-start"><CheckCircleIcon className="w-7 h-7 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Legal Expertise:</strong> Deep, practical knowledge of PHIPA, FIPPA, and other relevant laws.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-7 h-7 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Ethical Judgment:</strong> Navigating gray areas where the law is discretionary.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-7 h-7 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Communication:</strong> Clearly explaining complex privacy concepts to patients, clinicians, and leadership.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-7 h-7 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Technical Skill:</strong> Understanding EHRs, audit logs, and data security to perform investigations.</div></li>
        </ul>
      </div>
    ),
  },
];

const fippaCaseStudiesSectionSlides: SlideContent[] = [
    // SLIDE 66: Section Intro
  {
    title: 'Part 7: FIPPA in the Real World: FOI Case Studies',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <NewspaperIcon className="w-32 h-32 text-purple-400 mb-6" />
        <p className="text-4xl font-bold mb-4">From Request to Headline: FOI in Action</p>
        <p className="text-xl text-gray-300">This section examines how FIPPA is used by the public and media to drive transparency and the critical role HIM professionals play in the process.</p>
      </div>
    ),
  },
    // SLIDE 67: Agenda
  {
    title: 'Agenda: FOI Case Studies',
    content: (
      <div className="h-full flex flex-col justify-center">
        <ul className="list-none space-y-4 text-2xl">
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>FOI as a Tool for Public Accountability</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Case Study: Surgical Wait List Deaths</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Case Study: Hospital Executive Expenses</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>The HIM Professional's Role in the FIPPA Process</div></li>
          <li className="flex items-start"><ChevronRightIcon className="w-8 h-8 text-purple-400 mr-3 mt-1 flex-shrink-0"/><div>Key Skills & Challenges</div></li>
        </ul>
      </div>
    ),
  },
    // SLIDE 68: FOI Accountability
  {
    title: 'FOI: The Engine of Accountability',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <SearchIcon className="w-32 h-32 text-purple-400 mb-6" />
        <p className="text-3xl font-bold mb-4">Shining a Light on Public Institutions</p>
        <p className="text-xl mb-6">FIPPA is regularly used by investigative journalists, researchers, advocacy groups, and the public to access data and records from hospitals and other health organizations.</p>
        <p className="text-2xl bg-gray-800/50 p-6 rounded-lg">These requests transform raw data and internal documents into public knowledge, driving policy change and holding institutions accountable.</p>
      </div>
    ),
  },
    // SLIDE 69: Case Study: Surgical Wait Times
  {
    title: 'Case Study: Surgical Wait List Deaths',
    content: (
      <div className="space-y-4">
        <p className="text-2xl font-bold">Scenario:</p>
        <p>An investigative journalist files a FIPPA request with a provincial health agency for anonymized data on the number of patients who died while on surgical waitlists over the past five years, broken down by procedure type.</p>
         <div className="p-4 bg-gray-800/50 rounded-lg mt-4">
            <p className="text-xl font-bold text-purple-400">The HIM Challenge:</p>
            <p>This requires pulling and linking huge datasets from surgical information systems, patient registries, and mortality databases. The core task is to <strong className="text-yellow-400">aggregate and de-identify</strong> the data to prevent any possibility of re-identifying individuals, while still providing meaningful statistics.</p>
        </div>
        <p className="text-xl font-bold mt-2">Public Impact: The resulting news stories lead to public outcry, government reviews, and changes in funding and management of surgical waitlists.</p>
      </div>
    ),
  },
    // SLIDE 70: Case Study: Executive Expenses
  {
    title: 'Case Study: Hospital Executive Expenses',
    content: (
      <div className="space-y-4">
        <p className="text-2xl font-bold">Scenario:</p>
        <p>A media outlet files a FIPPA request for all expense reports submitted by senior executives at a major urban hospital over the last two fiscal years.</p>
         <div className="p-4 bg-gray-800/50 rounded-lg mt-4">
            <p className="text-xl font-bold text-purple-400">The HIM Challenge:</p>
            <p>This is a "general records" request. The FOI/HIM office must locate these records (often from Finance), and then painstakingly review each page to <strong className="text-yellow-400">sever</strong> information protected by FIPPA, such as personal contact information or details of confidential meetings.</p>
        </div>
        <p className="text-xl font-bold mt-2">Public Impact: Publication of the expenses can lead to public debate on executive compensation and the use of public funds, potentially impacting hospital leadership and board governance.</p>
      </div>
    ),
  },
    // NEW SLIDE
  {
    title: 'Case Study: The Procurement Dispute (FOI Appeal)',
    content: (
      <div className="space-y-4">
        <p className="text-2xl font-bold">Scenario:</p>
        <p>A company that lost a bid for a major hospital IT contract files a FIPPA request for all records related to the procurement decision, including evaluation scores and meeting minutes.</p>
         <div className="p-4 bg-gray-800/50 rounded-lg mt-4">
            <p className="text-xl font-bold text-purple-400">Resolution:</p>
            <p>The hospital's FOI office denies access to portions of the records, citing exemptions for "advice to government" and "third-party commercial information." The requester <strong className="text-yellow-400">appeals to the IPC</strong>. After mediation, the IPC adjudicator orders the release of a severed version of the records, finding some "advice" was purely factual and not exempt.</p>
        </div>
        <p className="text-xl font-bold mt-2">Public Impact: Demonstrates the IPC's role as an independent arbiter, ensuring exemptions are applied correctly and balancing transparency with legitimate confidentiality interests.</p>
      </div>
    ),
  },
    // SLIDE 71: HIM Role in FIPPA
  {
    title: 'The HIM Professional\'s Role in the FOI Process',
    content: (
      <div className="space-y-6">
        <p>HIM professionals are the operational hub for processing FIPPA requests in a healthcare setting.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center gap-4"><CircleStackIcon className="w-12 h-12 text-purple-400 flex-shrink-0" /><p><strong>Record Retrieval:</strong> Locating responsive records across complex, disparate clinical and administrative systems.</p></div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center gap-4"><GavelIcon className="w-12 h-12 text-purple-400 flex-shrink-0" /><p><strong>Applying Exemptions:</strong> Assessing records against FIPPA's legal exemptions (e.g., personal privacy, advice to government).</p></div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center gap-4"><PencilSquareIcon className="w-12 h-12 text-purple-400 flex-shrink-0" /><p><strong>Severance & Redaction:</strong> Carefully removing protected information from records before release.</p></div>
          <div className="p-4 bg-gray-800/50 rounded-lg flex items-center gap-4"><UsersIcon className="w-12 h-12 text-purple-400 flex-shrink-0" /><p><strong>Liaison:</strong> Coordinating with internal departments (Legal, IT, clinical programs) and communicating with the requester.</p></div>
        </div>
      </div>
    ),
  },
    // SLIDE 72: Key Skills
  {
    title: 'Key Skills & Challenges',
    content: (
      <div className="space-y-6">
        <p className="text-2xl font-bold">This work requires a unique and demanding skillset:</p>
        <ul className="list-none space-y-3 text-xl">
          <li className="flex items-start"><CheckCircleIcon className="w-7 h-7 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Data Analytics:</strong> The ability to query databases and manipulate large datasets is increasingly essential.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-7 h-7 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Legal Interpretation:</strong> Applying complex legal tests from FIPPA and IPC decisions to real-world records.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-7 h-7 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Risk Management:</strong> Understanding the reputational and legal risks of an improper release or denial of information.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-7 h-7 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Meticulous Attention to Detail:</strong> A single error in redaction can lead to a major privacy breach.</div></li>
        </ul>
      </div>
    ),
  },
    // SLIDE 73: Key Takeaways
  {
    title: 'FIPPA Case Studies: Key Takeaways',
    content: (
      <div className="space-y-6">
        <ul className="list-none space-y-4 text-xl">
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>FOI Drives Change:</strong> FIPPA is not an administrative task; it's a powerful driver of public policy and institutional accountability.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>Data is the New Frontier:</strong> Many high-impact requests are now for large, anonymized datasets, not just paper documents.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>HIM Professionals are Central:</strong> They are the gatekeepers and expert navigators of the complex FOI process.</div></li>
          <li className="flex items-start"><CheckCircleIcon className="w-8 h-8 text-green-400 mr-3 mt-1 flex-shrink-0"/><div><strong>The Balancing Act is Real:</strong> The core challenge is maximizing transparency while rigorously protecting personal privacy.</div></li>
        </ul>
      </div>
    ),
  },
];

const referencesSlide: SlideContent = {
  title: 'References',
  content: (
    <div className="space-y-6">
      <p>This presentation was developed based on the principles and specific provisions outlined in the following key Ontario statutes and guidance from the Information and Privacy Commissioner of Ontario:</p>
      <ul className="list-none space-y-4 text-xl">
        <li className="flex items-start">
          <BookOpenIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/>
          <div>
            <strong>Personal Health Information Protection Act, 2004 (PHIPA)</strong>
            <p className="text-lg text-gray-400">The primary legislation governing the collection, use, and disclosure of personal health information in Ontario.</p>
          </div>
        </li>
        <li className="flex items-start">
          <BookOpenIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/>
          <div>
            <strong>Freedom of Information and Protection of Privacy Act (FIPPA)</strong>
            <p className="text-lg text-gray-400">Governs access to information and protection of privacy for provincial government institutions.</p>
          </div>
        </li>
        <li className="flex items-start">
          <BookOpenIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/>
          <div>
            <strong>Municipal Freedom of Information and Protection of Privacy Act (MFIPPA)</strong>
            <p className="text-lg text-gray-400">Governs access and privacy for municipal institutions, including police services boards and school boards.</p>
          </div>
        </li>
        <li className="flex items-start">
          <BookOpenIcon className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0 mt-1"/>
          <div>
            <strong>Information and Privacy Commissioner of Ontario (IPC)</strong>
            <p className="text-lg text-gray-400">Numerous orders, decisions, and guidance documents from the IPC were consulted to interpret these Acts and provide practical examples.</p>
          </div>
        </li>
      </ul>
    </div>
  ),
};

const conclusionSlide: SlideContent = {
    title: 'Conclusion',
    content: (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <ShieldCheckIcon className="w-32 h-32 text-purple-400 mb-6" />
        <p className="text-4xl font-bold mb-4">Thank You</p>
        <p className="text-xl mb-6">Effective data access governance is a complex but essential field, balancing individual rights with public safety and the needs of a functional healthcare and government system. A strong understanding of these principles is key to building trust and ensuring compliance.</p>
        <p className="text-2xl mt-8">Questions?</p>
      </div>
    ),
  };


const slides: SlideContent[] = [
  ...initialSlides,
  ...phipaOtherSectionSlides,
  ...fipaSectionSlides,
  ...phipaCorrectionSectionSlides,
  ...phipaConsentSectionSlides,
  ...phipaCaseStudiesSectionSlides,
  ...fippaCaseStudiesSectionSlides,
  referencesSlide,
  conclusionSlide,
];

const App: React.FC = () => {
  return <Presentation slides={slides} />;
};

export default App;
