import React from 'react';
import { NavLink } from 'react-router-dom';

const ReposIpfsJsIpfsIo = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Repo:</span> ipfs/js.ipfs.io</h1>

    <h2>Core goal relevance</h2>
    <p>Note: Relevance can be either inherent to the repo itself, or to the repo's ability to facilitate the <em>user's</em> core goals.</p>
    <div className='chart-box'>
      <div>
        <dl>
          <dd class='percentage percentage-0'><span class='percentage-label'>Disaster resilience/recovery</span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'>Corporate/gov't freedom</span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'>Data integrity</span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'>Self-sovereign identity</span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'>File storage/retrieval</span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'>File streaming</span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'>Permanent archiving</span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'>Big data</span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'>Developer enablement</span></dd>
        </dl>
      </div>
    </div>


    <h2>Stakeholder usefulness</h2>
    <div className='chart-box'>
      <div>
        <dl>
          <dd class='percentage percentage-0'><span class='percentage-label'><NavLink to='/stakeholders/devs-dedicated-pro-collab'>Devs: dedicated/pro/collab</NavLink></span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'><NavLink to='/stakeholders/devs-hobbyist-hacker'>Devs: hobbyist/hacker</NavLink></span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'><NavLink to='/stakeholders/business-users-engineering-managers'>Business users: eng mgrs</NavLink></span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'><NavLink to='/stakeholders/crypto-enthusiasts-devs'>Crypto enthusiasts: devs</NavLink></span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'><NavLink to='/stakeholders/crypto-enthusiats-non-devs'>Crypto enthusiasts: non-devs</NavLink></span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'><NavLink to='/stakeholders/dweb-curious-relevant-area'>Dweb-curious: relevant area</NavLink></span></dd>
          <dd class='percentage percentage-0'><span class='percentage-label'><NavLink to='/stakeholders/dweb-curious-civilians'>Dweb-curious: “civilians”</NavLink></span></dd>
        </dl>
      </div>
    </div>

    <h2>Assumed user savvy: range and average</h2>
    <div className='chart-box'>
      <div>
        <dl>
        <dd class='percentage percentage-0'><span class='percentage-label'>Disaster resilience/recovery</span></dd>
        </dl>
      </div>
    </div>

  </div>
);

export default ReposIpfsJsIpfsIo;
