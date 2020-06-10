import React from 'react';
import quadrant from '../img/quadrant-crypto-enthusiasts-devs.svg';
import { NavLink } from 'react-router-dom';

const StakeholdersCryptoEnthusiastsDevs = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Stakeholders:</span> Cryptocurrency enthusiasts &mdash; devs</h1>
    <p>This stakeholder group includes <strong>developers</strong> whose primary interest in IPFS is related to their <strong>work or interest in the cryptocurrency space</strong>. As time goes on, these stakeholders may become <NavLink to='/stakeholders/devs-dedicated-pro-collab'>dedicated/pro/collab devs</NavLink>, but this is strongly dependent upon where IPFS might or might not fit in to their primary interest.  Overall tech savvy is assumed to be high for this group, and while dweb savvy is still somewhat variable, it's usually boosted by their existing knowledge of the crypto space.</p>
    <p>The seven stakeholder groups used in this mental model are a subset of the 18 core IPFS stakeholder groups, consolidated for relevance to this model's focus on GUI tools. To learn more about the entire stakeholder group set, see the <a href="https://airtable.com/shrYKtv0dMETI0lVu" target="_blank" rel="noopener noreferrer">Spring 2020 IPFS Information Ecosystem Audit</a>.</p>

    <h2>Repo relevance by time and expertise</h2>
    <div className='chart-box flex'>
      <div className="dib">
        <img src={quadrant} className='quadrant' alt='Assumed range of user savvy for general tech knowledge and dweb-specific knowledge'/>
      </div>
      <div className="dib ml3">
      <p>This quadrant grid illustrates how the tools and resources from IPFS GUI repos enable this stakeholder group, both in terms of their <strong>relevance over time</strong> and their <strong>usefulness as stakeholder expertise grows</strong>.</p>
      <ul>
        <li><strong>Horizontal axis</strong> = time spent exploring/using IPFS</li>
        <li><strong>Vertical axis</strong> = depth of stakeholder expertise</li>
        <li><strong className="aqua">Aqua pins/lines</strong> = repos that are useful to the stakeholder for a long time</li>
        <li><strong className="teal">Teal pins/lines</strong> = repos that are useful for a long time <em>and</em> can support stakeholder as expertise deepens</li>
      </ul>
      <p>Note that some repos (particularly high-level info resources) may lose their relevance over time as expertise increases; other repos (such as <code>dir-index-html</code>) remain consistently relevant due to their tools' ubiquity but don't necessarily need to scale in complexity as a stakeholder grows in expertise.</p>
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
