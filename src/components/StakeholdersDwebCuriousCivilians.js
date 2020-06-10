import React from 'react';
import { NavLink } from 'react-router-dom';

const StakeholdersDwebCuriousCivilians = () => (
  <div id='content' className='pt3 pr4 pl4 w-100'>
    <h1><span className='nav-category'>Stakeholders:</span> Dweb-curious &mdash; "civilians"</h1>

            <h2>Simplified stakeholder journey</h2>
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
                  Storing and sharing files
                </div>
                <div className='journey-box bg-aqua-muted'>
                  Conceptual learning & exploring deeper usage
                </div>
                <div className='journey-box'></div>
                <div className='journey-box'></div>
              </div>
              <div className='flex mt3'>
                <div className='journey-label'>
                  Goals
                </div>
                <div className='journey-box bg-white'>
                  Basic understanding of IPFS/dweb concepts
                </div>
                <div className='journey-box bg-white'>
                  Decide if IPFS is useful in their day-to-day life
                </div>
                <div className='journey-yes'>
                </div>
                <div className='journey-box bg-white'>
                  Store files using IPFS and easily share them with other civilians
                </div>
                <div className='journey-box bg-white'>
                  Learn about IPFS/dweb concepts and maybe explore basic development
                </div>
                <div className='journey-box'></div>
                <div className='journey-box'></div>
              </div>
              <div className='flex mt3'>
                <div className='journey-label'>
                  Pain points
                </div>
                <div className='journey-box bg-white'>
                  Little high-level info; net-new topic for many
                </div>
                <div className='journey-box bg-white'>
                  Very little civilian-friendly material; all geared to devs
                </div>
                <div className='journey-yes'>
                </div>
                <div className='journey-box bg-white'>
                  Little “product” polish; no docs targeted to civilians
                </div>
                <div className='journey-box bg-white'>
                  Initial assumed savvy too high; few how-to docs; unclear where to get help
                </div>
                <div className='journey-box'></div>
                <div className='journey-box'></div>
              </div>
              <div className='flex mt3'>
                <div className='journey-label'>
                  Repos used
                </div>
                <div className='journey-box bg-white'>
                  <NavLink to='/repos/ipfs/website'>website</NavLink>, <NavLink to='/repos/ipfs-shipyard/awesome-ipfs'>awesome-ipfs</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-share-files'>ipfs-share-files</NavLink>
                </div>
                <div className='journey-box bg-white'>
                  <NavLink to='/repos/ipfs-shipyard/awesome-ipfs'>awesome-ipfs</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'>ipfs-desktop</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'>ipfs-webui</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'>ipfs-companion</NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'>ipfs-docs</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-share-files'>ipfs-share-files</NavLink>
                </div>
                <div className='journey-yes'>
                </div>
                <div className='journey-box bg-white'>
                  <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'>ipfs-desktop</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'>ipfs-webui</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'>ipfs-companion</NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'>ipfs-docs</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-share-files'>ipfs-share-files</NavLink>
                </div>
                <div className='journey-box bg-white'>
                  <NavLink to='/repos/ipfs-shipyard/awesome-ipfs'>awesome-ipfs</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-desktop'>ipfs-desktop</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-webui'>ipfs-webui</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipfs-companion'>ipfs-companion</NavLink>, <NavLink to='/repos/ipfs/ipfs-docs'>ipfs-docs</NavLink>, <NavLink to='/repos/ipfs/distributions'>distributions</NavLink>, <NavLink to='/repos/ipfs-shipyard/ipld-explorer'>ipld-explorer</NavLink>
                </div>
                <div className='journey-box'></div>
                <div className='journey-box'></div>
              </div>
            </div>

          </div>
        );

export default StakeholdersDwebCuriousCivilians;
