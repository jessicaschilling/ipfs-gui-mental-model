import React from 'react';
import savvy from '../img/savvy-ipfs-docs.svg';
import { NavLink } from 'react-router-dom';

const ReposIpfsIpfsDocs = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Repo:</span> ipfs/docs</h1>

    <p>This repo contains the source code for the <a href="https://docs.ipfs.io" target="_blank" rel="noopener noreferrer">IPFS Documentation</a> VuePress site. <a href="https://github.com/ipfs/ipfs-docs" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>

    <h2>Core goal relevance</h2>
    <p>How the tooling provided in this repo helps facilitate a user's or developer's overarching goals and motivations for using IPFS and the dweb. See more about how the nine user/developer core goals intersect with developers' application areas and IPFS' current readiness to facilitate them in the <a href="https://airtable.com/shrQoB6LnOSPBo9Yr" target="_blank" rel="noopener noreferrer">Spring 2020 IPFS Information Ecosystem Audit</a>.</p>
    <div className='chart-box'>
      <div>
        <dl>
          <dd class='percentage percentage-33'><span class='percentage-label'>Disaster resilience/recovery</span></dd>
          <dd class='percentage percentage-33'><span class='percentage-label'>Corporate/gov't freedom</span></dd>
          <dd class='percentage percentage-33'><span class='percentage-label'>Data integrity</span></dd>
          <dd class='percentage percentage-33'><span class='percentage-label'>Self-sovereign identity</span></dd>
          <dd class='percentage percentage-70'><span class='percentage-label'>File storage/retrieval</span></dd>
          <dd class='percentage percentage-40'><span class='percentage-label'>File streaming</span></dd>
          <dd class='percentage percentage-50'><span class='percentage-label'>Permanent archiving</span></dd>
          <dd class='percentage percentage-40'><span class='percentage-label'>Big data</span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'>Developer enablement</span></dd>
        </dl>
      </div>
    </div>


    <h2>Stakeholder usefulness</h2>
    <p>The degree to which the tooling provided in this repo is relevant to a particular stakeholder group's goals. Note that stakeholder needs and engagement with a particular repo's tooling change over time as part of their user journey; to examine these patterns in more detail, click on any of the group names in this chart.</p>
    <p>The seven stakeholder groups used in this mental model are a subset of the 18 core IPFS stakeholder groups; to learn more about the entire stakeholder group set, see the <a href="https://airtable.com/shrYKtv0dMETI0lVu" target="_blank" rel="noopener noreferrer">Spring 2020 IPFS Information Ecosystem Audit</a>.</p>
    <div className='chart-box'>
      <div>
        <dl>
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/devs-dedicated-pro-collab'>Devs: dedicated/pro/collab</NavLink></span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/devs-hobbyist-hacker'>Devs: hobbyist/hacker</NavLink></span></dd>
          <dd class='percentage percentage-33'><span class='percentage-label'><NavLink to='/stakeholders/business-users-engineering-managers'>Business users: eng mgrs</NavLink></span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/crypto-enthusiasts-devs'>Crypto enthusiasts: devs</NavLink></span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/crypto-enthusiats-non-devs'>Crypto enthusiasts: non-devs</NavLink></span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/dweb-curious-relevant-area'>Dweb-curious: relevant area</NavLink></span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/dweb-curious-civilians'>Dweb-curious: “civilians”</NavLink></span></dd>
        </dl>
      </div>
    </div>

    <h2>User tech savvy: range and average</h2>
    <p>The overall range (light aqua bar) and average (aqua dot) of technical savvy that this repo's tooling ideally supports. Because a user's overall tech savvy may be significantly different from their dweb-specific savvy (at least initially), these are indicated separately in the chart, with the range/average of <strong>general tech savvy on the left</strong> and <strong>overall tech savvy on the right</strong>. For high-level or broad-reaching tools, however, <strong>these may meet or even overlap</strong> in the middle.</p>
    <div className='chart-box'>
      <div className="tc">
        <img src={savvy} style={{width: 780}}alt='Assumed range of user savvy for general tech knowledge and dweb-specific knowledge'/>
      </div>
    </div>

  </div>
);

export default ReposIpfsIpfsDocs;
