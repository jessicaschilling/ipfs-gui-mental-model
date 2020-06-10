import React from 'react';
import quadrant from '../img/quadrant-business-users-engineering-managers.svg';
import { NavLink } from 'react-router-dom';

const StakeholdersBusinessUsersEngineeringManagers = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Stakeholders:</span> Business users &mdash; engineering managers</h1>

      <h2>Repo relevance by time and expertise</h2>
      <div className='chart-box flex'>
        <div className="dib">
          <img src={quadrant} style={{width: 680}} alt='Assumed range of user savvy for general tech knowledge and dweb-specific knowledge'/>
        </div>
        <div className="dib ml3">
        <p><strong>Horizontal</strong> axis represents the <strong>duration</strong> of the stakeholder’s interactions with and/or usage of IPFS.</p>
        <p><strong>Vertical</strong> axis represents the depth of a stakeholder’s <strong>expertise</strong>.</p>
        <p><strong className="aqua">Aqua</strong> represents repos that are valuable due to the <strong>duration of their use by the stakeholder</strong>.</p>
        <p><strong className="teal">Teal</strong> represents repos whose value lies in <strong>both long-term duration and the ability to scale to greater depths of expertise</strong>.</p>
        </div>
      </div>

        <h2>Simplified stakeholder journey</h2>
        <div className='chart-box journey-chart w-100'>
          <div className='flex'>
            <div className='journey-label'>
              Stages
            </div>
            <div className='journey-box bg-aqua-muted'>
              Curiosity/info-gathering
            </div>
            <div className='journey-box bg-aqua-muted'>
              Evaluating IPFS
            </div>
            <div className='journey-yes'>
              <span role="img" aria-label="yes">👍</span>
            </div>
            <div className='journey-box bg-aqua-muted'>
              Building & problem-solving
            </div>
            <div className='journey-box bg-aqua-muted'>
              Scaling
            </div>
            <div className='journey-box'></div>
            <div className='journey-box'></div>
          </div>
          <div className='flex mt3'>
            <div className='journey-label'>
              Goals
            </div>
            <div className='journey-box bg-white'>
              Basic understanding of IPFS/dweb concepts
            </div>
            <div className='journey-box bg-white'>
              Decide if IPFS is right solution for their team
            </div>
            <div className='journey-yes'>
            </div>
            <div className='journey-box bg-white'>
              Empower their team to build on IPFS and solve problems that arise on the way
            </div>
            <div className='journey-box bg-white'>
              Be reassured IPFS will scale alongside with their needs
            </div>
            <div className='journey-box'></div>
            <div className='journey-box'></div>
          </div>
          <div className='flex mt3'>
            <div className='journey-label'>
              Pain points
            </div>
            <div className='journey-box bg-white'>
              Little high-level info; net-new topic for many
            </div>
            <div className='journey-box bg-white'>
              Few case studies/stack examples; inconsistent maintenance; unclear docs
            </div>
            <div className='journey-yes'>
            </div>
            <div className='journey-box bg-white'>
              “Hard” docs often out of date; poor API/LCI docs; no in-depth case studies
            </div>
            <div className='journey-box bg-white'>
              Needs outpace IPFS development; uncertain roadmap; few big names
            </div>
            <div className='journey-box'></div>
            <div className='journey-box'></div>
          </div>
          <div className='flex mt3'>
            <div className='journey-label'>
              Repos used
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/awesome-ipfs'>awesome-ipfs</NavLink>, <NavLink to='/repos/ipfs/website'>website</NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'>ipfs-docs</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'>ipld-explorer</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-share-files'>ipfs-share-files</NavLink>
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/awesome-ipfs'>awesome-ipfs</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'>ipfs-desktop</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'>ipfs-webui</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'>ipfs-companion</NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'>ipfs-docs</NavLink>, <NavLink to='/repos/ipfs/js-ipfs-io'>js.ipfs.io</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'>ipld-explorer</NavLink>
            </div>
            <div className='journey-yes'>
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/awesome-ipfs'>awesome-ipfs</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'>ipfs-desktop</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'>ipfs-webui</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'>ipfs-companion</NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'>ipfs-docs</NavLink> (and forums), <NavLink to='/repos/ipfs/distributions'>distributions</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'>ipld-explorer</NavLink>
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/website'>website</NavLink> (specifically blog for announcements), <NavLink to='/repos/ipfs/ipfs-docs'>ipfs-docs</NavLink>, <NavLink to='/repos/ipfs/distributions'>distributions</NavLink>
            </div>
            <div className='journey-box'></div>
            <div className='journey-box'></div>
          </div>
        </div>

      </div>
    );

export default StakeholdersBusinessUsersEngineeringManagers;
