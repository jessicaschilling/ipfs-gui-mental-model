import React from 'react';
import './style.scss';
import 'tachyons';
import 'ipfs-css';

const Nav = () => {
  return (
    <div id="nav" className='bg-snow-muted pt4 pl3 pr3 pb3'>
      <div className='f4 fw5 montserrat charcoal ttu mb1 pt2'>Welcome</div>
      <div className='link'>About this model</div>

      <div className='f4 fw5 montserrat charcoal ttu mt4 mb1'>Tools &amp; tool types</div>
      <div className='link'>IPFS Companion</div>
      <div className='link mt1'>Web UI</div>
      <div className='link mt1'>IPFS Desktop</div>
      <div className='link mt1'>Misc tools</div>
      <div className='link mt1'>Misc info/download sources</div>
      <div className='link mt1'>Included by third parties</div>

      <div className='f4 fw5 montserrat charcoal ttu mt4 mb1'>Stakeholders</div>
      <div className='link'>Devs: dedicated/pro/collab</div>
      <div className='link mt1'>Devs: hobbyist/hacker</div>
      <div className='link mt1'>Business users: eng mgrs</div>
      <div className='link mt1'>Crypto enthusiasts: devs</div>
      <div className='link mt1'>Crypto enthusiasts: non-devs</div>
      <div className='link mt1'>Dweb-curious: relevant area</div>
      <div className='link mt1'>Dweb-curious: “civilians”</div>

      <div className='f4 fw5 montserrat charcoal ttu mt4'>Repos</div>
      <div className='f5 fw4 montserrat charcoal ttu mt2'>ipfs org</div>
      <div className='link'>dir-index-html</div>
      <div className='link mt1'>distributions</div>
      <div className='link mt1'>i18n</div>
      <div className='link mt1'>ipfs-docs</div>
      <div className='link mt1'>ipfs-gui</div>
      <div className='link mt1'>js.ipfs.io</div>
      <div className='link mt1'>public-gateway-checker</div>
      <div className='link mt1'>website</div>

      <div className='f5 fw4 montserrat charcoal ttu mt3'>ipfs-shipyard org</div>
      <div className='link mt1'>awesome-ipfs</div>
      <div className='link mt1'>ipfs-companion</div>
      <div className='link mt1'>ipfs-css</div>
      <div className='link mt1'>ipfs-desktop</div>
      <div className='link mt1'>ipfs-share-files</div>
      <div className='link mt1'>ipfs-ui-style-guide</div>
      <div className='link mt1'>ipfs-webui</div>
      <div className='link mt1'>ipld-explorer</div>
      <div className='link mt1'>ipld-explorer-components</div>
    </div>
  )
}

export default Nav;
