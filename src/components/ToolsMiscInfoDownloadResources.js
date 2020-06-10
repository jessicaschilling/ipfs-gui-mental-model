import React from 'react';
import { NavLink } from 'react-router-dom';
import AllReposByUseFrequency from './AllReposByUseFrequency';

const ToolsMiscInfoDownloadresources = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Tool type:</span> Miscellaneous info/download resources</h1>

    <h2>Repos used by this tool type</h2>
    <p>The GUI-related repos examined in this model that are critical to IPFS information, education, and download resources, including dependencies of these resources. Click any of the buttons to drill deeper into details for a specific repo.</p>
    <div className='chart-box'>
      <NavLink to='/repos/ipfs/awesome-ipfs'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>awesome-ipfs</span></NavLink>
      <NavLink to='/repos/ipfs/dir-index-html'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>dir-index-html</span></NavLink>
      <NavLink to='/repos/ipfs/distributions'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>distributions</span></NavLink>
      <NavLink to='/repos/ipfs/i18n'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>i18n</span></NavLink>
      <NavLink to='/repos/ipfs/ipfs-docs'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-docs</span></NavLink>
      <NavLink to='/repos/ipfs/js-ipfs-io'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>js.ipfs.io</span></NavLink>
      <NavLink to='/repos/ipfs/website'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>website</span></NavLink>
      <NavLink to='/repos/ipfs/public-gateway-checker'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>public-gateway-checker</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-css'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-css</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipfs-share-files'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipfs-share-files</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipld-explorer'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipld-explorer</span></NavLink>
      <NavLink to='/repos/ipfs-shipyard/ipld-explorer-components'><span className='f4 grow no-underline br3 ba bw1 ph3 pv2 ma2 dib teal bg-white'>ipld-explorer-components</span></NavLink>
    </div>

    <AllReposByUseFrequency />

  </div>
);

export default ToolsMiscInfoDownloadresources;
