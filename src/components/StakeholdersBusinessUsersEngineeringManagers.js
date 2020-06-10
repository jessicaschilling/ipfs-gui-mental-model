import React from 'react';

const StakeholdersBusinessUsersEngineeringManagers = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Stakeholders:</span> Business users &mdash; engineering managers</h1>

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
              website, awesome-ipfs, ipfs-docs, ipld-explorer, ipfs-share-files
            </div>
            <div className='journey-box bg-white'>
              awesome-ipfs, ipfs-desktop, ipfs-webui, ipfs-companion, ipfs-docs, js.ipfs.io, ipld-explorer
            </div>
            <div className='journey-yes'>
            </div>
            <div className='journey-box bg-white'>
              awesome-ipfs, ipfs-desktop, ipfs-webui, ipfs-companion, ipfs-docs (and forums), distributions, ipld-explorer
            </div>
            <div className='journey-box bg-white'>
              website (specifically blog for announcements), ipfs-docs, distributions
            </div>
            <div className='journey-box'></div>
            <div className='journey-box'></div>
          </div>
        </div>

      </div>
    );

export default StakeholdersBusinessUsersEngineeringManagers;
