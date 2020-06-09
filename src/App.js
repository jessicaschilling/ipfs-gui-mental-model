import React from 'react';
import Header from './Header';
import Nav from './Nav';
import './style.css';
import 'tachyons';
import 'ipfs-css';

function App() {
  return (
    <div className="vh-100">
      <Header />
      <div className="flex h-100">
        <Nav />

        <div className='w-60'>

        What is this?
        This IPFS GUI family mental model offers a framework for understanding how IPFS’ various GUI-based tools work together to provide cohesive, consistent enablers to using and building on IPFS for a variety of developer and non-developer stakeholder groups. 
        Source documents
        This model was created in Summer 2020 as part of an overarching effort to evaluate backlogs, calibrate on user needs, and reboot value-driving work on the IPFS GUI family. It draws heavily on core-team discussion/iteration (including the February 2020 IPFS Team Week), as well as the following foundational work:
        • IPFS Information Ecosystem Audit: Baseline definitions and stack-ranks for IPFS’ stakeholders, workstreams (journeys), core goals, and channels
        • Spring 2020 GUI Tools Use Survey: Open survey to the global IPFS community on which IPFS GUI tools they use, how, and why
        • IPFS Companion Uninstall Feedback Survey: Optional “why” survey suggested upon a Companion user’s uninstalling the extension
        • Fall 2019 Colorado IPFS User Testing Day: Open-ended user testing (within the framework of the docs beta launch) on desires, pain points, and goals
        • Summer 2019 User/Goal Personae: Initial work on core user personae, validated by engaged IPFS collabs and expanded upon in the ecosystem audit 
        How to use this model
        This model is based on three primary axes: apps (or app types), repos, and stakeholders. Each item within one of the axes (for example, the ipfs-css repo) relates to one or more items elsewhere (for example, ipfs-css is instrumental in all six apps/app types, and is relevant to all stakeholder groups). To better understand how all these items work together to provide overall tooling for users exploring, using, or building on IPFS, simply explore:
        • Apps & app types illustrate how the 17 repos in this model combine to create a unified tool set — highlighting frequently-used repos and unsung heroes • Repos illustrate how each project factors into the ecosystem audit’s 9 core stakeholder goals, the stakeholders for which a project is useful, and    our assumptions of user savvy for each project • Stakeholders consolidates the ecosystem audit’s 14 core stakeholder types into 7 types relevant to this work, and offers both a basic journey map and    use-by-time/expertise quadrant graph for each  As you explore the mental model, it’s also very useful to consider this work alongside other industry-wide longitudinal studies, such as the luence DWeb Developer Report from June 2020. 
        Comments, questions, issues
        This artifact was originally created by @jessicaschilling in June 2020 and is subject to ongoing modification as the apps, repos, and stakeholders referenced continue to evolve. For questions or comments, please feel free either to leave a comment in this Figma prototype itself, or (particularly if you have something specific and actionable in mind) open an issue in the ipfs/ipfs-gui repo.
        </div>

      </div>
    </div>
  );
}

export default App;
