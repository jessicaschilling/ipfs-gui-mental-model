import React from 'react';
import { NavLink } from 'react-router-dom';

const AllReposByUseFrequency = () => (

<div>
  <h2>All GUI repos by use frequency</h2>
  <p>Note: Frequency isn’t the <strong>only</strong> indicator of importance (docs code is only used once!), but it <strong>can</strong> reveal "small but mighty" repos that play a role in multiple apps/projects.</p>
  <div className='chart-box'>
    <div>
      <dl>
        <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/repos/ipfs/i18n'>i18n</NavLink>:&nbsp;&nbsp;<strong>6</strong></span></dd>
        <dd class='percentage percentage-100'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-css'>ipfs-css</NavLink>:&nbsp;&nbsp;<strong>6</strong></span></dd>
        <dd class='percentage percentage-83'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipld-explorer-components'>ipld-explorer-components</NavLink>:&nbsp;&nbsp;<strong>5</strong></span></dd>
        <dd class='percentage percentage-83'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-share-files'>ipfs-share-files</NavLink>:&nbsp;&nbsp;<strong>5</strong></span></dd>
        <dd class='percentage percentage-67'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-ui-style-guide'>ipfs-ui-style-guide</NavLink>:&nbsp;&nbsp;<strong>4</strong></span></dd>
        <dd class='percentage percentage-67'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipld-explorer'>ipld-explorer</NavLink>:&nbsp;&nbsp;<strong>4</strong></span></dd>
        <dd class='percentage percentage-50'><span class='percentage-label'><NavLink to='/repos/ipfs/public-gateway-checker'>public-gateway-checker</NavLink>:&nbsp;&nbsp;<strong>3</strong></span></dd>
        <dd class='percentage percentage-50'><span class='percentage-label'><NavLink to='/repos/ipfs/dir-index-html'>dir-index-html</NavLink>:&nbsp;&nbsp;<strong>3</strong></span></dd>
        <dd class='percentage percentage-33'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-webui'>ipfs-webui</NavLink>:&nbsp;&nbsp;<strong>2</strong></span></dd>
        <dd class='percentage percentage-33'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/awesome-ipfs'>awesome-ipfs</NavLink>:&nbsp;&nbsp;<strong>2</strong></span></dd>
        <dd class='percentage percentage-33'><span class='percentage-label'><NavLink to='/repos/ipfs/distributions'>distributions</NavLink>:&nbsp;&nbsp;<strong>2</strong></span></dd>
        <dd class='percentage percentage-17'><span class='percentage-label'><NavLink to='/repos/ipfs/website'>website</NavLink>:&nbsp;&nbsp;<strong>1</strong></span></dd>
        <dd class='percentage percentage-17'><span class='percentage-label'><NavLink to='/repos/ipfs/js-ipfs-io'>js.ipfs.io</NavLink>:&nbsp;&nbsp;<strong>1</strong></span></dd>
        <dd class='percentage percentage-17'><span class='percentage-label'><NavLink to='/repos/ipfs/ipfs-docs'>ipfs-docs</NavLink>:&nbsp;&nbsp;<strong>1</strong></span></dd>
        <dd class='percentage percentage-17'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-desktop'>ipfs-desktop</NavLink>:&nbsp;&nbsp;<strong>1</strong></span></dd>
        <dd class='percentage percentage-17'><span class='percentage-label'><NavLink to='/repos/ipfs-shipyard/ipfs-companion'>ipfs-companion</NavLink>:&nbsp;&nbsp;<strong>1</strong></span></dd>
        <dd class='percentage percentage-0'><span class='percentage-label'><em><NavLink to='/repos/ipfs/ipfs-gui'>ipfs-gui</NavLink>:&nbsp;&nbsp;N/A</em></span></dd>
      </dl>
    </div>
  </div>
</div>

);

export default AllReposByUseFrequency;
