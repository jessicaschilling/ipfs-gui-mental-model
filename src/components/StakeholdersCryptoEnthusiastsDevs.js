import React from 'react';
import quadrant from '../img/quadrant-crypto-enthusiasts-devs.svg';
import { NavLink } from 'react-router-dom';

const StakeholdersCryptoEnthusiastsDevs = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Stakeholders:</span> Cryptocurrency enthusiasts &mdash; devs</h1>

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
              Basic understanding of IPFS/dweb concepts and intersections with crypto
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
              Not much comparative info against concepts they already understand
            </div>
            <div className='journey-box bg-white'>
              Few case studies/examples; docs don’t dovetail with what they already know
            </div>
            <div className='journey-yes'>
            </div>
            <div className='journey-box bg-white'>
              Few how-to docs; poor API/CLI docs; little crypto-specific info
            </div>
            <div className='journey-box bg-white'>
              “Hard” docs often out of date; poor API/LCI docs; no in-depth case studies
            </div>
            <div className='journey-box bg-white'>
              Unclear where to get help; no StackExchange; “hard” docs out of date
            </div>
            <div className='journey-box bg-white'>
              Needs outpace IPFS development; uncertain roadmap, particularly FIL
            </div>
          </div>
          <div className='flex mt3'>
            <div className='journey-label'>
              Repos used
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>, <NavLink to='/repos/ipfs/website'><code>website</code></NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'><code>ipfs-desktop</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'><code>ipfs-webui</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'><code>ipfs-companion</code></NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>, <NavLink to='/repos/ipfs/public-gateway-checker'><code>public-gateway-checker</code></NavLink>
            </div>
            <div className='journey-yes'>
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'><code>ipfs-desktop</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'><code>ipfs-webui</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'><code>ipfs-companion</code></NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs/distributions'><code>distributions</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>, <NavLink to='/repos/ipfs/public-gateway-checker'><code>public-gateway-checker</code></NavLink>
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'><code>ipfs-desktop</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'><code>ipfs-webui</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'><code>ipfs-companion</code></NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs/distributions'><code>distributions</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink> (and forums by extension)
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/website'><code>website</code></NavLink>, (specifically blog for announcements), <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs/distributions'><code>distributions</code></NavLink>
            </div>
          </div>
        </div>

      </div>
    );

export default StakeholdersCryptoEnthusiastsDevs;
