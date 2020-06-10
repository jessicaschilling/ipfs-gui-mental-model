import React from 'react';
import savvy from '../img/savvy-distributions.svg';
import { NavLink } from 'react-router-dom';

const ReposIpfsDistributions = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Repo:</span> ipfs/distributions</h1>

    <p>This repo contains the source code for the IPFS Distributions site at <a href="https://dist.ipfs.io" target="_blank" rel="noopener noreferrer">dist.ipfs.io</a>, containing all IPFS Project official software distributions. <a href="https://github.com/ipfs/distributions" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>

    <h2>Core goal relevance</h2>
    <p>How the tooling provided in this repo helps facilitate a user's or developer's overarching goals and motivations for using IPFS and the dweb. See more about how the nine user/developer core goals intersect with developers' application areas and IPFS' current readiness to facilitate them in the <a href="https://airtable.com/invite/l?inviteId=invSHl2KmYhUhH8tB&inviteToken=f2b67161224dae0770c9b9b00ec36533639f9a2432d265d9c57267a7b1dd5534" target="_blank" rel="noopener noreferrer">Spring 2020 IPFS Information Ecosystem Audit</a>.</p>
    <div className='chart-box'>
      <div>
        <dl>
          <dd class='percentage percentage-1'><span class='percentage-label'>Disaster resilience/recovery</span></dd>
          <dd class='percentage percentage-1'><span class='percentage-label'>Corporate/gov't freedom</span></dd>
          <dd class='percentage percentage-1'><span class='percentage-label'>Data integrity</span></dd>
          <dd class='percentage percentage-1'><span class='percentage-label'>Self-sovereign identity</span></dd>
          <dd class='percentage percentage-1'><span class='percentage-label'>File storage/retrieval</span></dd>
          <dd class='percentage percentage-1'><span class='percentage-label'>File streaming</span></dd>
          <dd class='percentage percentage-1'><span class='percentage-label'>Permanent archiving</span></dd>
          <dd class='percentage percentage-1'><span class='percentage-label'>Big data</span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'>Developer enablement</span></dd>
        </dl>
      </div>
    </div>


    <h2>Stakeholder usefulness</h2>
    <div className='chart-box'>
      <div>
        <dl>
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/devs-dedicated-pro-collab'>Devs: dedicated/pro/collab</NavLink></span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/devs-hobbyist-hacker'>Devs: hobbyist/hacker</NavLink></span></dd>
          <dd class='percentage percentage-33'><span class='percentage-label'><NavLink to='/stakeholders/business-users-engineering-managers'>Business users: eng mgrs</NavLink></span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/crypto-enthusiasts-devs'>Crypto enthusiasts: devs</NavLink></span></dd>
          <dd class='percentage percentage-1'><span class='percentage-label'><NavLink to='/stakeholders/crypto-enthusiats-non-devs'>Crypto enthusiasts: non-devs</NavLink></span></dd>
          <dd class='percentage percentage-33'><span class='percentage-label'><NavLink to='/stakeholders/dweb-curious-relevant-area'>Dweb-curious: relevant area</NavLink></span></dd>
          <dd class='percentage percentage-1'><span class='percentage-label'><NavLink to='/stakeholders/dweb-curious-civilians'>Dweb-curious: “civilians”</NavLink></span></dd>
        </dl>
      </div>
    </div>

    <h2>Assumed user savvy: range and average</h2>
    <div className='chart-box'>
      <div className="tc">
        <img src={savvy} style={{width: 780}}alt='Assumed range of user savvy for general tech knowledge and dweb-specific knowledge'/>
      </div>
    </div>

  </div>
);

export default ReposIpfsDistributions;
