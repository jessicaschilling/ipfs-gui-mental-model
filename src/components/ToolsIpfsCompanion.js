import React from 'react';
import { NavLink } from 'react-router-dom';

const ToolsIpfsCompanion = () => (
  <div id='content' className='pt3 pr4 pb4 pl4 w-100'>
    <h1><span className='nav-category'>Tool:</span> IPFS Companion</h1>

    <h2>Repos used by this tool</h2>
    <div id='tools-repos-used'>
      <NavLink to='/repos/ipfs/i18n'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>i18n</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-companion'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-companion</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-css'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-css</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-share-files'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-share-files</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-ui-style-guide'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-ui-style-guide</span></NavLink>
    </div>


  </div>
);

export default ToolsIpfsCompanion;
