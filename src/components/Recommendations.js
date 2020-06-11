import React from 'react';

const Recommendations = () => (
  <div id='content' className='pt3 pr4 pl4 pb4 w-100'>

  <h1>Notes &amp; recommendations</h1>

  <p>Many of the observations and recommendations here have already been captured in greater detail &mdash; including stack-ranking by overall calculated value &mdash; in the recommendations section of the <a href="https://airtable.com/shrTtO3FEUPGril29" target="_blank" rel="noopener noreferrer">IPFS Information Ecosystem Audit</a>. You can find further information regaring prioritization and scheduling there.</p>

  <p>This mental model is at its core intended to offer a means of <strong>exploring, visualizing, and cross-linking the myriad repos and other projects that, combined, give a GUI face to the IPFS protocol and its tooling</strong>. While it's not meant to propose definitive next steps for the future of IPFS GUI tools, the intent is that it provides ongoing value as a conversation starter and means of finding common ground as we determine and align on those next steps.</p>

  <h2>Notes</h2>
  <p>A heavily cross-linked analysis such as this mental model provides an opportunity to <strong>identify force multipliers for efficiency and enablement</strong> that touch multiple repos, stakeholders, and tools. Some things to consider when doing so may include the following:</p>

  <ul>
    <li>Though <strong>stakeholder journeys</strong> diverge considerably after the point of making an adoption decision, all stakeholder groups (technical and less technical) align considerably in the front of the funnel in terms of the questions they ask, the resources they use, and the granularity of the information they need in order to get to the next stage.</li>
    <li>Regardless of technical expertise, <strong>stakeholder pain points</strong> across the board focus heavily on a lack of high-level illustrations, how-to docs, and a percieved assumption that the bar to entry is too high. (Note as well that these sentiments are consistently emphasized in both official and community-powered forums and blogs.)</li>
    <li>When examining <strong>stakeholder/repo relevance quadrants</strong>, it's notable that the <a href="https://ipfs.io" target="_blank" rel="noopener noreferrer">ipfs.io</a> and <a href="https://js.ipfs.io" target="_blank" rel="noopener noreferrer">js.ipfs.io</a> information/"sales sites" are unique for their considerable influence over a very limited duration. This may indicate future communications directions &mdash; particularly as we investigate a rework of ipfs.io &mdash; as well as a potential benefit in building additional friendly "sales sites" for go-ipfs or other high-impact projects.</li>
    <li><strong>Stakeholder/repo quadrant</strong> items with consistently long duration but little depth represent a unique opportunity: While they aren't necessarily enabling developer expertise, their ubiquity offers a space for IPFS to give a consistently good impression.</li>
    <li>Similarly, <strong>"tiny but mighty" repos</strong> &mdash; particularly ones such as <code>ipfs-css</code> that are used frequently by the community as well as the core team &mdash; represent a similar opportunity to consistently enable and delight.</li>
    <li>An examination of <strong>core goals by repo</strong> indicates a fairly messy spread of focus, with the exception of a very strong attention to developer enablement. While this is very much an intentional decision at this point in the IPFS Project's lifespan, an overall examination of these core goals to look for trends or opportunities to make particularly strong impact will be beneficial soon.</li>
    <li>When looking at the <strong>assumed technical savvy</strong> of our GUI-focused repos, it's notable that &mdash; even considering that GUI tools tend to trend "easier" than non-GUI tools &mdash; the assumed range of savvy for these repos is closer to newcomer level than we might be adequately serving right now.</li>
  </ul>

  <h2>Recommendations</h2>
  <p>As stated above, these aren't intended to be hard-and-fast proposals. Instead, let's consider starting conversations about some of the following (most are already captured in the audit recommendations, and can be ranked and scheduled from there):</p>
  <ul>
    <li>Prioritize closing issues (and even adding user-delighting details) in <code>dir-index-html</code> due to its ubiquity</li>
    <li>Prioritize adding explanatory context and/or additional backlog features in <code>ipld-explorer</code>: this improves a long-life tool while also providing interactive, high-level documentation</li>
    <li>Prioritize backlog issues in <code>public-gateway-checker</code> as a benefit to both community acknowledgment/visibility and improving a long-lived tool</li>
    <li>Prioritize the creation of more high-level resources (such as case studies) that offer an entry point to deeper documentation for those who wish, while also providing clear guidance to less technical stakeholders</li>
    <li>Focus on the creation of more pragmatic, how-to, and illustrative documentation &mdash; not <em>instead</em> of deep technical documentation, but <em>in addition</em> to it</li>
    <li>Acknowledge and address the critical importance of robust, easy-to-use API and CLI docs as a means of unblocking user adoption earlier in the funnel</li>
    <li>Prioritize the quality, consistency and continuity of the UI in Companion, Web UI, and Desktop: this lowers the perceived learning curve for IPFS while also smoothing the day-to-day experience of power users</li>
    <li>Prioritize "official" interaction and support in the forums in ways that don't deplete our own key developers &mdash; this may mean better automation of monitoring, more explicit playbooks for responding to forums and social, prioritizing dev-rel hiring, or a combination of these</li>
    <li>As we eventually transition our support and focus lens beyond developer enablement, commit to prioritizing developer-focused improvements that <em>also</em> serve other stakeholders</li>
    <li>Similarly, ensure that our prioitization decisions continue to consider the additional benefit afforded by unblocking multiple, high-impact, or underserved core goals</li>
    <li>Dig deeper (particularly surrounding Filecoin launch) on the needs, assumptions, stereotypes, and desires of those who arrive at IPFS due to their interest in cryptocurrency</li>
  </ul>

  </div>
);

export default Recommendations;
