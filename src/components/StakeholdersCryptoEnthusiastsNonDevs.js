import React from 'react';
import quadrant from '../img/quadrant-crypto-enthusiasts-non-devs.svg';
import { NavLink } from 'react-router-dom';

const StakeholdersCryptoEnthusiastsNonDevs = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Stakeholders:</span> Cryptocurrency enthusiasts &mdash; non-devs</h1>

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
            Using (but not building with) IPFS
          </div>
          <div className='journey-box bg-aqua-muted'>
            Conceptual learning & exploring deeper usage
          </div>
          <div className='journey-box'></div>
          <div className='journey-box'></div>
        </div>
        <div className='flex mt3'>
          <div className='journey-label'>
            Goals
          </div>
          <div className='journey-box bg-white'>
            Basic understanding of IPFS/dweb concepts and intersections with crypto
          </div>
          <div className='journey-box bg-white'>
            Decide if IPFS is useful in terms of their crypto interests
          </div>
          <div className='journey-yes'>
          </div>
          <div className='journey-box bg-white'>
            Store and share files, and any other relevant use
          </div>
          <div className='journey-box bg-white'>
            Dig deeper into IPFS concepts and maybe explore basic development
          </div>
          <div className='journey-box'></div>
          <div className='journey-box'></div>
        </div>
        <div className='flex mt3'>
          <div className='journey-label'>
            Pain points
          </div>
          <div className='journey-box bg-white'>
            Not much comparative info against concepts they already understand
          </div>
          <div className='journey-box bg-white'>
            Very little civilian-friendly material; all geared to devs
          </div>
          <div className='journey-yes'>
          </div>
          <div className='journey-box bg-white'>
            Few illustrations of how IPFS helps goals; initial assumed savvy too high
          </div>
          <div className='journey-box bg-white'>
            Few tutorials or illustrations of how IPFS helps goals; unclear where to get help
          </div>
          <div className='journey-box'></div>
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
            <NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'><code>ipfs-desktop</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'><code>ipfs-webui</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'><code>ipfs-companion</code></NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>
          </div>
          <div className='journey-yes'>
          </div>
          <div className='journey-box bg-white'>
            <NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'><code>ipfs-desktop</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'><code>ipfs-webui</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'><code>ipfs-companion</code></NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>
          </div>
          <div className='journey-box bg-white'>
            <NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'><code>ipfs-desktop</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'><code>ipfs-webui</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'><code>ipfs-companion</code></NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>, <NavLink to='/repos/ipfs/distributions'><code>distributions</code></NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>, <NavLink to='/repos/ipfs/public-gateway-checker'><code>public-gateway-checker</code></NavLink>
          </div>
          <div className='journey-box'></div>
          <div className='journey-box'></div>
        </div>
      </div>

    </div>
  );

export default StakeholdersCryptoEnthusiastsNonDevs;
