import React from 'react';
import { NavLink } from 'react-router-dom';
import AllReposByUseFrequency from './AllReposByUseFrequency';

const ToolsMiscTools = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Tool type:</span> Miscellaneous tools</h1>

    <h2>Repos used by this tool type</h2>
    <p>The GUI-related repos examined in this model that are critical to IPFS GUI tools <em>other than</em> Companion, Web UI, and Desktop, including dependencies of these tools. Click any of the buttons to drill deeper into details for a specific repo.</p>
    <div className='chart-box'>
      <NavLink to='/repos/ipfs/dir-index-html'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>dir-index-html</code></span></NavLink>
      <NavLink to='/repos/ipfs/distributions'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>distributions</code></span></NavLink>
      <NavLink to='/repos/ipfs/i18n'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>i18n</code></span></NavLink>
      <NavLink to='/repos/ipfs/public-gateway-checker'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>public-gateway-checker</code></span></NavLink>
      <NavLink to='/repos/ipfs/awesome-ipfs'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>awesome-ipfs</code></span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-css'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>ipfs-css</code></span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-share-files'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>ipfs-share-files</code></span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-ui-style-guide'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>ipfs-ui-style-guide</code></span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>ipld-explorer</code></span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipld-explorer-components'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'><code>ipld-explorer-components</code></span></NavLink>
    </div>

    <AllReposByUseFrequency />

  </div>
);

export default ToolsMiscTools;
