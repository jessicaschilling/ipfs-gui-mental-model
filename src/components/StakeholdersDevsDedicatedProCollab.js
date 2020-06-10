import React from 'react';

const StakeholdersDevsDedicatedProCollab = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Stakeholders:</span> Devs &mdash; dedicated/pro/collabs</h1>

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
          Baseline learning & early building
        </div>
        <div className='journey-box bg-aqua-muted'>
          In-depth building
        </div>
        <div className='journey-box bg-aqua-muted'>
          Problem-solving
        </div>
        <div className='journey-box bg-aqua-muted'>
          Scaling
        </div>
      </div>
      <div className='flex mt3'>
        <div className='journey-label'>
          Goals
        </div>
        <div className='journey-box bg-white'>
          Basic understanding of IPFS/dweb concepts
        </div>
        <div className='journey-box bg-white'>
          Decide if IPFS is right solution for them
        </div>
        <div className='journey-yes'>
        </div>
        <div className='journey-box bg-white'>
          Learn enough to get started building
        </div>
        <div className='journey-box bg-white'>
          Effectively use IPFS to improve/enable their project
        </div>
        <div className='journey-box bg-white'>
          Solve tricky IPFS implementation problems
        </div>
        <div className='journey-box bg-white'>
          Grow their project as its needs and IPFS both evolve
        </div>
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
          Few how-to docs; poor API/CLI docs; initial assumed savvy too high
        </div>
        <div className='journey-box bg-white'>
          “Hard” docs often out of date; poor API/LCI docs; no in-depth case studies
        </div>
        <div className='journey-box bg-white'>
          Unclear where to get help; no StackExchange; “hard” docs out of date
        </div>
        <div className='journey-box bg-white'>
          Needs outpace IPFS development; uncertain roadmap
        </div>
      </div>
      <div className='flex mt3'>
        <div className='journey-label'>
          Repos used
        </div>
        <div className='journey-box bg-white'>
          website, awesome-ipfs,  ipfs-docs, ipld-explorer
        </div>
        <div className='journey-box bg-white'>
          awesome-ipfs, ipfs-desktop, ipfs-webui, ipfs-companion, ipfs-docs, js.ipfs.io, distributions, ipld-explorer
        </div>
        <div className='journey-yes'>
        </div>
        <div className='journey-box bg-white'>
          awesome-ipfs, ipfs-desktop, ipfs-webui, ipfs-companion, ipfs-docs, distributions, ipld-explorer
        </div>
        <div className='journey-box bg-white'>
          awesome-ipfs, ipfs-desktop, ipfs-webui, ipfs-companion, ipfs-docs, distributions, ipld-explorer
        </div>
        <div className='journey-box bg-white'>
          ipfs-docs (and forums by extension)
        </div>
        <div className='journey-box bg-white'>
          website (specifically blog for announcements), ipfs-docs, distributions
        </div>
      </div>
    </div>

  </div>
);

export default StakeholdersDevsDedicatedProCollab;
