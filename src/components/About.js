import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>

  <h1>Welcome!</h1>

  <h2>What is this?</h2>
  <p>This <strong>IPFS GUI family mental model</strong> offers a framework for understanding how IPFS’ various GUI-based tools work together to provide cohesive, consistent enablers to using and building on IPFS for a variety of developer and non-developer stakeholder groups.  It's intended to be used to facilitate prioritization and roadmap decisions by helping weigh and merge qualitative and quantitative motivations.</p>

  <h2>Source documents</h2>
  <p>This model was created in Summer 2020 as part of an overarching effort to evaluate backlogs, calibrate on user needs, and reboot value-driving work on the IPFS GUI family. It draws heavily on core-team discussion/iteration (including the February 2020 IPFS Team Week), as well as the following foundational work:</p>
  <ul>
    <li><a href="https://airtable.com/shrQoB6LnOSPBo9Yr" class="fw6" target="_blank" rel="noopener noreferrer">IPFS Information Ecosystem Audit:</a> Baseline definitions and stack-ranks for IPFS’ stakeholders, workstreams (journeys), core goals, and channels (initially as of spring 2020 but updated quarterly)</li>
    <li class="mb1"><a href="https://docs.google.com/document/d/1V5sDSxMqhhplpcB8u8CffiGWHUvw-t4p_sn5vigdR90/edit#" class="fw6" target="_blank" rel="noopener noreferrer">IPFS GUI tools user research:</a> June 2020 analysis and summarization/recommendation work on two user surveys:</li>
    <ul class="mb1">
      <li><a href="https://docs.google.com/forms/d/1YWVELaXHtXxSfaNd8ZcvxtnEOqurTxJdodlAl2qwyMc/edit#responses" target="_blank" rel="noopener noreferrer">Spring 2020 GUI Tools Use Survey:</a> Open survey to the global IPFS community on which IPFS GUI tools they use, how, and why</li>
      <li><a href="https://docs.google.com/forms/d/1JFSNS90Y0BQPexDU4n7MLdf8_fdaUyGBof8BN2IUoFE/edit#responses" target="_blank" rel="noopener noreferrer">IPFS Companion Uninstall Feedback Survey:</a> Optional “why” survey suggested upon a Companion user’s uninstalling the extension</li>
    </ul>
    <li><a href="https://github.com/ipfs-inactive/docs/issues/355" class="fw6" target="_blank" rel="noopener noreferrer">Fall 2019 Colorado IPFS User Testing Day:</a> Open-ended user testing (within the framework of the docs beta launch) on desires, pain points, and goals</li>
    <li><a href="https://app.mural.co/t/protocollabs6957/m/protocollabs6957/1564779785852/cf7669f3c1773508a811a3fa0eadfb99efb310bf" class="fw6" target="_blank" rel="noopener noreferrer">Summer 2019 User/Goal Personae:</a> Initial work on core user personae, validated by engaged IPFS collabs and expanded upon in the ecosystem audit </li>
  </ul>

  <h2>How to use this model</h2>
  <p>This model is based on three primary axes: <strong>tools</strong> (or types of tools), <strong>stakeholders</strong>, and <strong>repos</strong>. Each item within one of the axes (for example, the <code>ipfs-css</code> repo) relates to one or more items elsewhere (in this example, <code>ipfs-css</code> is instrumental in all six apps/app types, and is relevant to all stakeholder groups). To better understand how all these items work together to provide overall tooling for users evaluating, using, or building on IPFS, simply explore:</p>
  <ul>
    <li><strong>Tools &amp; tool types</strong> illustrates how the 17 repos in this model combine to create a unified tool set — highlighting frequently-used repos and unsung heroes </li>
    <li><strong>Stakeholders</strong> consolidates the ecosystem audit’s 14 core stakeholder types into 7 types relevant to this work, and offers both a basic journey map and use-by-time/expertise quadrant graph for each  </li>
    <li><strong>Repos</strong> illustrate how each project factors into the ecosystem audit’s 9 core stakeholder goals, the stakeholders for which a project is useful, and  our assumptions of user savvy for each project </li>
  </ul>

  <p>As you explore the mental model, it’s also very useful to consider this work alongside other industry-wide longitudinal studies, such as the  <a href="https://medium.com/fluence-network/decentralized-web-developer-report-2020-5b41a8d86789" target="_blank" rel="noopener noreferrer">Fluence DWeb Developer Report</a> from June 2020. </p>

  <p>If you're in a hurry, you can also skip directly to the <NavLink to='/recommendations'>notes and recommendations</NavLink>.</p>

  <h2>Comments, questions, issues</h2>
  <p>This artifact was originally created by <a href="https://github.com/jessicaschilling" target="_blank" rel="noopener noreferrer">@jessicaschilling</a> in June 2020 and is subject to ongoing modification as the apps, repos, and stakeholders referenced continue to evolve. For questions or comments, please open an issue in the <a href="https://github.com/ipfs/ipfs-gui" target="_blank" rel="noopener noreferrer">IPFS GUI Working Group</a> repo.</p>

  </div>
);

export default Home;
