import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './About';
import Recommendations from './Recommendations';
import ToolsIpfsCompanion from './ToolsIpfsCompanion';
import ToolsWebui from './ToolsWebui';
import ToolsIpfsDesktop from './ToolsIpfsDesktop';
import ToolsMiscTools from './ToolsMiscTools';
import ToolsMiscInfoDownloadResources from './ToolsMiscInfoDownloadResources';
import ToolsIncludedByThirdParties from './ToolsIncludedByThirdParties';
import StakeholdersDevsDedicatedProCollab from './StakeholdersDevsDedicatedProCollab';
import StakeholdersDevsHobbyistHacker from './StakeholdersDevsHobbyistHacker';
import StakeholdersBusinessUsersEngineeringManagers from './StakeholdersBusinessUsersEngineeringManagers';
import StakeholdersCryptoEnthusiastsDevs from './StakeholdersCryptoEnthusiastsDevs';
import StakeholdersCryptoEnthusiastsNonDevs from './StakeholdersCryptoEnthusiastsNonDevs';
import StakeholdersDwebCuriousRelevantArea from './StakeholdersDwebCuriousRelevantArea';
import StakeholdersDwebCuriousCivilians from './StakeholdersDwebCuriousCivilians';
import ReposIpfsDirIndexHtml from './ReposIpfsDirIndexHtml';
import ReposIpfsDistributions from './ReposIpfsDistributions';
import ReposIpfsI18n from './ReposIpfsI18n';
import ReposIpfsIpfsDocs from './ReposIpfsIpfsDocs';
import ReposIpfsIpfsGui from './ReposIpfsIpfsGui';
import ReposIpfsJsIpfsIo from './ReposIpfsJsIpfsIo';
import ReposIpfsPublicGatewayChecker from './ReposIpfsPublicGatewayChecker';
import ReposIpfsWebsite from './ReposIpfsWebsite';
import ReposIpfsShipyardAwesomeIpfs from './ReposIpfsShipyardAwesomeIpfs';
import ReposIpfsShipyardIpfsCompanion from './ReposIpfsShipyardIpfsCompanion';
import ReposIpfsShipyardIpfsCss from './ReposIpfsShipyardIpfsCss';
import ReposIpfsShipyardIpfsDesktop from './ReposIpfsShipyardIpfsDesktop';
import ReposIpfsShipyardIpfsShareFiles from './ReposIpfsShipyardIpfsShareFiles';
import ReposIpfsShipyardIpfsUiStyleGuide from './ReposIpfsShipyardIpfsUiStyleGuide';
import ReposIpfsShipyardIpfsWebui from './ReposIpfsShipyardIpfsWebui';
import ReposIpfsShipyardIpldExplorer from './ReposIpfsShipyardIpldExplorer';
import ReposIpfsShipyardIpldExplorerComponents from './ReposIpfsShipyardIpldExplorerComponents';


const Main = () => (
  <Switch>
    <Route exact path='/'><Redirect to='/about' /></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/recommendations' component={Recommendations}></Route>
    <Route exact path='/tools/ipfs-companion' component={ToolsIpfsCompanion}></Route>
    <Route exact path='/tools/webui' component={ToolsWebui}></Route>
    <Route exact path='/tools/ipfs-desktop' component={ToolsIpfsDesktop}></Route>
    <Route exact path='/tools/misc-tools' component={ToolsMiscTools}></Route>
    <Route exact path='/tools/misc-info-download-resources' component={ToolsMiscInfoDownloadResources}></Route>
    <Route exact path='/tools/included-by-third-parties' component={ToolsIncludedByThirdParties}></Route>
    <Route exact path='/stakeholders/devs-dedicated-pro-collab' component={StakeholdersDevsDedicatedProCollab}></Route>
    <Route exact path='/stakeholders/devs-hobbyist-hacker' component={StakeholdersDevsHobbyistHacker}></Route>
    <Route exact path='/stakeholders/business-users-engineering-managers' component={StakeholdersBusinessUsersEngineeringManagers}></Route>
    <Route exact path='/stakeholders/crypto-enthusiasts-devs' component={StakeholdersCryptoEnthusiastsDevs}></Route>
    <Route exact path='/stakeholders/crypto-enthusiats-non-devs' component={StakeholdersCryptoEnthusiastsNonDevs}></Route>
    <Route exact path='/stakeholders/dweb-curious-relevant-area' component={StakeholdersDwebCuriousRelevantArea}></Route>
    <Route exact path='/stakeholders/dweb-curious-civilians' component={StakeholdersDwebCuriousCivilians}></Route>
    <Route exact path='/repos/ipfs/dir-index-html' component={ReposIpfsDirIndexHtml}></Route>
    <Route exact path='/repos/ipfs/distributions' component={ReposIpfsDistributions}></Route>
    <Route exact path='/repos/ipfs/i18n' component={ReposIpfsI18n}></Route>
    <Route exact path='/repos/ipfs/ipfs-docs' component={ReposIpfsIpfsDocs}></Route>
    <Route exact path='/repos/ipfs/ipfs-gui' component={ReposIpfsIpfsGui}></Route>
    <Route exact path='/repos/ipfs/js-ipfs-io' component={ReposIpfsJsIpfsIo}></Route>
    <Route exact path='/repos/ipfs/public-gateway-checker' component={ReposIpfsPublicGatewayChecker}></Route>
    <Route exact path='/repos/ipfs/website' component={ReposIpfsWebsite}></Route>
    <Route exact path='/repos/ipfs-shipyard/awesome-ipfs' component={ReposIpfsShipyardAwesomeIpfs}></Route>
    <Route exact path='/repos/ipfs-shipyard/ipfs-companion' component={ReposIpfsShipyardIpfsCompanion}></Route>
    <Route exact path='/repos/ipfs-shipyard/ipfs-css' component={ReposIpfsShipyardIpfsCss}></Route>
    <Route exact path='/repos/ipfs-shipyard/ipfs-desktop' component={ReposIpfsShipyardIpfsDesktop}></Route>
    <Route exact path='/repos/ipfs-shipyard/ipfs-share-files' component={ReposIpfsShipyardIpfsShareFiles}></Route>
    <Route exact path='/repos/ipfs-shipyard/ipfs-ui-style-guide' component={ReposIpfsShipyardIpfsUiStyleGuide}></Route>
    <Route exact path='/repos/ipfs-shipyard/ipfs-webui' component={ReposIpfsShipyardIpfsWebui}></Route>
    <Route exact path='/repos/ipfs-shipyard/ipld-explorer' component={ReposIpfsShipyardIpldExplorer}></Route>
    <Route exact path='/repos/ipfs-shipyard/ipld-explorer-components' component={ReposIpfsShipyardIpldExplorerComponents}></Route>
  </Switch>
);

export default Main;
