import React from 'react';
import savvy from '../img/savvy-website.svg';
import { NavLink } from 'react-router-dom';

const ReposIpfsWebsite = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Repo:</span> ipfs/website</h1>

    <p>This repo contains the source code for the IPFS Project website at <a href="https://ipfs.io/" target="_blank" rel="noopener noreferrer">ipfs.io</a>, offering high-level information about the project, docs and download links, and acting as an overarching "sales site" for IPFS. <a href="https://github.com/ipfs/website" target="_blank" rel="noopener noreferrer">View on GitHub</a></p>

    <h2>Core goal relevance</h2>

    <div className='chart-box'>
      <div>
        <dl>
          <dd class='percentage percentage-100'><span class='percentage-label'>Disaster resilience/recovery</span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'>Corporate/gov't freedom</span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'>Data integrity</span></dd>
          <dd class='percentage percentage-33'><span class='percentage-label'>Self-sovereign identity</span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'>File storage/retrieval</span></dd>
          <dd class='percentage percentage-33'><span class='percentage-label'>File streaming</span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'>Permanent archiving</span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'>Big data</span></dd>
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
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/business-users-engineering-managers'>Business users: eng mgrs</NavLink></span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/crypto-enthusiasts-devs'>Crypto enthusiasts: devs</NavLink></span></dd>
          <dd class='percentage percentage-50'><span class='percentage-label'><NavLink to='/stakeholders/crypto-enthusiats-non-devs'>Crypto enthusiasts: non-devs</NavLink></span></dd>
          <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/stakeholders/dweb-curious-relevant-area'>Dweb-curious: relevant area</NavLink></span></dd>
          <dd class='percentage percentage-50'><span class='percentage-label'><NavLink to='/stakeholders/dweb-curious-civilians'>Dweb-curious: “civilians”</NavLink></span></dd>
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

export default ReposIpfsWebsite;
