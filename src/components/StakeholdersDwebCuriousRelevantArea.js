import React from 'react';
import quadrant from '../img/quadrant-dweb-curious-relevant-area.svg';
import { NavLink } from 'react-router-dom';

const StakeholdersDwebCuriousRelevantArea = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Stakeholders:</span> Dweb-curious &mdash; relevant app area</h1>

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

        <h2>Stakeholder journey</h2>
        <p>This journey map summarizes at a high level the basic stages this stakeholder group goes through when exploring, evaluating, and adopting IPFS, as well as the group's goals, their pain points, and the IPFS resources they use at each stage.</p>
        <p><strong>All seven stakeholder groups in this model experience the two initial stages before making an adoption decision</strong> (curiosity/info-gathering and evaluating IPFS). However, the details of this pre-decision phase can vary significantly between groups, as do groups' post-decision stages overall &mdash; primarily depending upon the depth of their IPFS adoption (e.g. users vs developers).</p>
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
              Spec out solutions for their app area
            </div>
            <div className='journey-box bg-aqua-muted'>
              Work with devs to build and problem-solve
            </div>
            <div className='journey-box bg-aqua-muted'>
              Scaling
            </div>
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
              Decide if IPFS can be used to benefit their app area
            </div>
            <div className='journey-yes'>
            </div>
            <div className='journey-box bg-white'>
              Determine specifics for how IPFS can solve their app area’s problems
            </div>
            <div className='journey-box bg-white'>
              Go from specs to working code on IPFS
            </div>
            <div className='journey-box bg-white'>
              Grow their project as its needs and IPFS both evolve
            </div>
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
              No in-depth case studies; initial assumed savvy too high; poor API/CLI docs
            </div>
            <div className='journey-box bg-white'>
              “Hard” docs often out of date; poor API/LCI docs; unclear where to get help
            </div>
            <div className='journey-box bg-white'>
              Needs outpace IPFS development; uncertain roadmap
            </div>
            <div className='journey-box'></div>
          </div>
          <div className='flex mt3'>
            <div className='journey-label'>
              Repos used
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>, <NavLink to='/repos/ipfs/website'><code>website</code></NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-share-files'><code>ipfs-share-files</code></NavLink>
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'><code>ipfs-desktop</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'><code>ipfs-webui</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'><code>ipfs-companion</code></NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs/js-ipfs-io'><code>js.ipfs.io</code></NavLink>, <NavLink to='/repos/ipfs/distributions'><code>distributions</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>
            </div>
            <div className='journey-yes'>
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'><code>ipfs-desktop</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'><code>ipfs-webui</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'><code>ipfs-companion</code></NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs/distributions'><code>distributions</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'><code>ipfs-desktop</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'><code>ipfs-webui</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'><code>ipfs-companion</code></NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink> (and forums), <NavLink to='/repos/ipfs/distributions'><code>distributions</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>
            </div>
            <div className='journey-box bg-white'>
              <NavLink to='/repos/ipfs/website'><code>website</code></NavLink> (specifically blog for announcements), <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs/distributions'><code>distributions</code></NavLink>
            </div>
            <div className='journey-box'></div>
          </div>
        </div>

      </div>
    );

export default StakeholdersDwebCuriousRelevantArea;
