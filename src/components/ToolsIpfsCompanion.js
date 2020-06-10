import React from 'react';
import { NavLink } from 'react-router-dom';
import AllReposByUseFrequency from './AllReposByUseFrequency';

const ToolsIpfsCompanion = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Tool:</span> IPFS Companion</h1>

    <h2>Repos used by this tool</h2>
    <p>The GUI-related repos examined in this model that are ingredients in IPFS Companion. Click any of the buttons to drill deeper into details for a specific repo.</p>
    <div className='chart-box'>
      <NavLink to='/repos/ipfs/i18n'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>i18n</code></span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-companion'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>ipfs-companion</code></span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-css'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>ipfs-css</code></span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-share-files'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>ipfs-share-files</code></span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-ui-style-guide'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>ipfs-ui-style-guide</code></span></NavLink>
    </div>

    <AllReposByUseFrequency />

  </div>
);

export default ToolsIpfsCompanion;
