import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav id="nav" className='bg-snow-muted pa3'>

      <h3>Welcome</h3>
      <ul>
        <li><NavLink to='/about'>About this model</NavLink></li>
        <li><NavLink to='/recommendations'>Recommendations &amp; notes</NavLink></li>
      </ul>

      <h3>Stakeholders</h3>
      <ul>
        <li><NavLink to='/stakeholders/devs-dedicated-pro-collab'>Devs: dedicated/pro/collab</NavLink></li>
        <li><NavLink to='/stakeholders/devs-hobbyist-hacker'>Devs: hobbyist/hacker</NavLink></li>
        <li><NavLink to='/stakeholders/business-users-engineering-managers'>Business users: eng mgrs</NavLink></li>
        <li><NavLink to='/stakeholders/crypto-enthusiasts-devs'>Crypto enthusiasts: devs</NavLink></li>
        <li><NavLink to='/stakeholders/crypto-enthusiats-non-devs'>Crypto enthusiasts: non-devs</NavLink></li>
        <li><NavLink to='/stakeholders/dweb-curious-relevant-area'>Dweb-curious: relevant area</NavLink></li>
        <li><NavLink to='/stakeholders/dweb-curious-civilians'>Dweb-curious: “civilians”</NavLink></li>
      </ul>

      <h3>Tools &amp; tool types</h3>
      <ul>
        <li><NavLink to='/tools/ipfs-companion'>IPFS Companion</NavLink></li>
        <li><NavLink to='/tools/webui'>Web UI</NavLink></li>
        <li><NavLink to='/tools/ipfs-desktop'>IPFS Desktop</NavLink></li>
        <li><NavLink to='/tools/misc-tools'>Misc tools</NavLink></li>
        <li><NavLink to='/tools/misc-info-download-resources'>Misc info/download resources</NavLink></li>
        <li><NavLink to='/tools/included-by-third-parties'>Included by third parties</NavLink></li>
       </ul>

      <h3>Repos</h3>
      <h4>ipfs org</h4>
      <ul>
        <li><NavLink to='/repos/ipfs/dir-index-html'>dir-index-html</NavLink></li>
        <li><NavLink to='/repos/ipfs/distributions'>distributions</NavLink></li>
        <li><NavLink to='/repos/ipfs/i18n'>i18n</NavLink></li>
        <li><NavLink to='/repos/ipfs/ipfs-docs'>ipfs-docs</NavLink></li>
        <li><NavLink to='/repos/ipfs/ipfs-gui'>ipfs-gui</NavLink></li>
        <li><NavLink to='/repos/ipfs/js-ipfs-io'>js.ipfs.io</NavLink></li>
        <li><NavLink to='/repos/ipfs/public-gateway-checker'>public-gateway-checker</NavLink></li>
        <li><NavLink to='/repos/ipfs/website'>website</NavLink></li>
      </ul>

      <h4>ipfs-shipyard org</h4>
      <ul>
        <li><NavLink to='/repos/ipfs-shipyard/awesome-ipfs'>awesome-ipfs</NavLink></li>
        <li><NavLink to='/repos/ipfs-shipyard/ipfs-companion'>ipfs-companion</NavLink></li>
        <li><NavLink to='/repos/ipfs-shipyard/ipfs-css'>ipfs-css</NavLink></li>
        <li><NavLink to='/repos/ipfs-shipyard/ipfs-desktop'>ipfs-desktop</NavLink></li>
        <li><NavLink to='/repos/ipfs-shipyard/ipfs-share-files'>ipfs-share-files</NavLink></li>
        <li><NavLink to='/repos/ipfs-shipyard/ipfs-ui-style-guide'>ipfs-ui-style-guide</NavLink></li>
        <li><NavLink to='/repos/ipfs-shipyard/ipfs-webui'>ipfs-webui</NavLink></li>
        <li><NavLink to='/repos/ipfs-shipyard/ipld-explorer'>ipld-explorer</NavLink></li>
        <li><NavLink to='/repos/ipfs-shipyard/ipld-explorer-components'>ipld-explorer-components</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav;
