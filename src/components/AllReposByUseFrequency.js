import React from 'react';
import { NavLink } from 'react-router-dom';

const AllReposByUseFrequency = () => (

<div>
  <h2>All GUI repos by use frequency</h2>
  <p>See how this tool or tool type's constituent repos fit into the overall frequency of use for all IPFS GUI repos below. <strong>Values indicate the number of instances of a repo's inclusion</strong> in one of the six tools/tool types examined in this model.</p>
  <p>Note: Frequency isn’t the <strong>only</strong> indicator of importance (for example, the code in <code>docs</code> is only used once), but it <strong>can</strong> reveal "small but mighty" repos that play an important role in multiple core- or community-built tools.</p>
  <div className='chart-box'>
    <div>
      <dl>
        <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/repos/ipfs/i18n'><code>i18n</code></NavLink>:&nbsp;&nbsp;<strong>6</strong></span></dd>
        <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-css'><code>ipfs-css</code></NavLink>:&nbsp;&nbsp;<strong>6</strong></span></dd>
        <dd class='percentage percentage-83'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipld-explorer-components'><code>ipld-explorer-components</code></NavLink>:&nbsp;&nbsp;<strong>5</strong></span></dd>
        <dd class='percentage percentage-83'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-share-files'><code>ipfs-share-files</code></NavLink>:&nbsp;&nbsp;<strong>5</strong></span></dd>
        <dd class='percentage percentage-67'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-ui-style-guide'><code>ipfs-ui-style-guide</code></NavLink>:&nbsp;&nbsp;<strong>4</strong></span></dd>
        <dd class='percentage percentage-67'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipld-explorer'><code>ipld-explorer</code></NavLink>:&nbsp;&nbsp;<strong>4</strong></span></dd>
        <dd class='percentage percentage-50'><span class='percentage-label'><NavLink to='/repos/ipfs/public-gateway-checker'><code>public-gateway-checker</code></NavLink>:&nbsp;&nbsp;<strong>3</strong></span></dd>
        <dd class='percentage percentage-50'><span class='percentage-label'><NavLink to='/repos/ipfs/dir-index-html'><code>dir-index-html</code></NavLink>:&nbsp;&nbsp;<strong>3</strong></span></dd>
        <dd class='percentage percentage-33'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-webui'>i<code>pfs-webui</code></NavLink>:&nbsp;&nbsp;<strong>2</strong></span></dd>
        <dd class='percentage percentage-33'><span class='percentage-label'><NavLink to='/repos/ipfs/awesome-ipfs'><code>awesome-ipfs</code></NavLink>:&nbsp;&nbsp;<strong>2</strong></span></dd>
        <dd class='percentage percentage-33'><span class='percentage-label'><NavLink to='/repos/ipfs/distributions'><code>distributions</code></NavLink>:&nbsp;&nbsp;<strong>2</strong></span></dd>
        <dd class='percentage percentage-17'><span class='percentage-label'><NavLink to='/repos/ipfs/website'><code>website</code></NavLink>:&nbsp;&nbsp;<strong>1</strong></span></dd>
        <dd class='percentage percentage-17'><span class='percentage-label'><NavLink to='/repos/ipfs/js-ipfs-io'>j<code>s.ipfs.io</code></NavLink>:&nbsp;&nbsp;<strong>1</strong></span></dd>
        <dd class='percentage percentage-17'><span class='percentage-label'><NavLink to='/repos/ipfs/ipfs-docs'><code>ipfs-docs</code></NavLink>:&nbsp;&nbsp;<strong>1</strong></span></dd>
        <dd class='percentage percentage-17'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-desktop'><code>ipfs-desktop</code></NavLink>:&nbsp;&nbsp;<strong>1</strong></span></dd>
        <dd class='percentage percentage-17'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-companion'><code>ipfs-companion</code></NavLink>:&nbsp;&nbsp;<strong>1</strong></span></dd>
        <dd class='percentage percentage-0'><span class='percentage-label'><em><NavLink to='/repos/ipfs/ipfs-gui'><code>ipfs-gui</code></NavLink>:&nbsp;&nbsp;N/A</em></span></dd>
      </dl>
    </div>
  </div>
</div>

);

export default AllReposByUseFrequency;
