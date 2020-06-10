import React from 'react';
import { NavLink } from 'react-router-dom';
import AllReposByUseFrequency from './AllReposByUseFrequency';

const ToolsIpfsDesktop = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Tool:</span> IPFS Desktop</h1>

    <h2>Repos used by this tool</h2>
    <div id='tools-repos-used'>
      <NavLink to='/repos/ipfs/i18n'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>i18n</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-css'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-css</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-desktop</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-share-files'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-share-files</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-ui-style-guide'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-ui-style-guide</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-webui'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-webui</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipld-explorer</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipld-explorer-components'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipld-explorer-components</span></NavLink>
    </div>

    <AllReposByUseFrequency />

  </div>
);

export default ToolsIpfsDesktop;
