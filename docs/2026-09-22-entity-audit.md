# Chelsey Fanning: identity, reviews and experience audit

Research date: September 22, 2026. Scope: public profiles, production website and repository, plus the pending footer/image preview. Findings below distinguish public evidence from independently verified regulatory records. Changes are preview-only.

## Assessment

The site has a useful foundation: server-rendered pages, readable article text, canonical URLs, Person and RealEstateAgent identities, brokerage relationships, topic-organized testimonials, and internal links. Its main weakness was evidence maintenance: old figures and an inconsistent license identifier were repeated across visible copy and machine-readable files. More schema alone would reproduce those weaknesses.

Google says ordinary SEO fundamentals apply to AI Overviews and AI Mode: accessible and indexed pages, useful text, internal links, appropriate imagery, and structured data that agrees with visible content. It specifies no special AI schema or AI text file requirement. Inclusion remains discretionary. This work improves clarity and corroboration; it does not certify rankings or citations. [Google AI guidance](https://developers.google.com/search/docs/appearance/ai-features)

## Evidence and changes

| Area | Finding | Preview response |
| --- | --- | --- |
| License identifier | Site used LC54829. The team profile, Realtor.com and Homes.com identify Chelsey as SP47170. | Corrected the identifier consistently in footer, person credential, About page, agent.json and llms.txt. |
| Experience | Public profiles say licensed since 2018. | Replaced the aging seven-year formulation with the stable start year. |
| Team | Current team profile identifies Lifestyle North Realty, brokered by eXp Realty. | Added a visible affiliation and separate Organization node linked from Chelsey's Person node. |
| Career production | Site claimed 100+ transactions without a reconciled supporting record in the repository. | Removed the unsupported headline; replaced it with links to selected, attributed recent work. This is not a finding that the claim is false. |
| Review freshness | Google count was derived from 27 saved entries, including one rating without text. | Labeled the saved collection as April 2026, rather than presenting it as a current Google feed. |
| Additional review evidence | Zillow displays 5.0 from 13 reviews. | Added a separately labeled source card and dated homepage statistic; no cross-platform combined score. |
| Review attribution | Cards lacked platform links; some short quotes were paraphrases inside quotation marks. | Added source links and exact excerpt fallback; changed “full story” to “related guide.” |
| Peer testimony | Desiree Jones describes professional collaboration, but was labeled a client. | Relabeled as industry-peer feedback. Existing lender/fellow-professional badges remain. |
| Listings | About page linked to an unreplaced YOUR_PROFILE placeholder. | Replaced with Chelsey's real team profile; added direct listing-source links. |
| Authorship | Articles named the author without a visible biography link. | Linked the byline to About, added author URL in article schema, and connected About's ProfilePage to the canonical Person. |
| Review markup | Self-published syndicated reviews were used in Review and AggregateRating JSON-LD. | Removed those rich-result claims while preserving human-readable feedback. |
| Sitemap dates | Every build claimed every page had just changed. | Removed blanket lastmod until real per-page modification dates can be supplied. |
| Content accuracy | Jumbo article used the prior year's baseline as the 2026 figure. | Corrected to the 2026 national baseline, explained county variation, cited FHFA, and updated the article's modification date. |

## Identity and credential evidence

The [Lifestyle North Realty profile](https://lifestylenorthrealty.com/agent/chelsey-fanning) identifies SP47170, Chelsey's direct phone, team affiliation, and eXp brokerage. Its team-wide footer phone is different from her individual phone; do not substitute the team's number for Chelsey's canonical contact. The team page links to an eXp subdomain rather than the independent domain: ask its administrator to add chelseyfanning.com as the primary website.

[Realtor.com](https://www.realtor.com/realestateagents/5bc7b0ea76e8ec0011336928) corroborates SP47170, a 2018 licensing start, and REALTOR membership. It lists Pinegrove closed August 17, Gavin Loop July 27, Kidd Island July 13, and Minam Loop March 20, 2026. Roles were cross-checked against the other profiles. Its listing coverage has a limited time window and is explicitly incomplete.

[Homes.com](https://www.homes.com/real-estate-agents/chelsey-fanning/q63yz7z/) corroborates the license and start year. It distinguishes buyer, seller, and co-listing roles. Its five-year total is a portal coverage figure, not a complete career total. The displayed contact number differs from Chelsey's direct number and may be a forwarding number; confirm its function before requesting any change.

[BBB](https://www.bbb.org/us/id/post-falls/profile/real-estate-agent/chelsey-fanning-realtor-1296-1000195312) reports a February 27, 2018 business start and an A+ rating, but explicitly says the business is not accredited. No accreditation badge or membership claim was added. Business start is not proof of an exact license-issuance date.

The [Idaho Real Estate Commission](https://dopl.idaho.gov/rec/) links to the [official license lookup](https://edopl.idaho.gov/OnlineServices/?link=PubSearch). The interactive record was not readable through this research interface. SP47170 is strongly corroborated by three public profiles, but current active status, expiration, discipline, and exact original issue date were not independently certified against the live register. Confirm those in the register before making such claims. No specialist certification, award, education, or association leadership position was invented.

## Reviews: how they should support discovery

The existing category structure is worthwhile: first-time buyers, luxury, relocation, sellers and repeat clients help readers find relevant experience. The site already links several reviews to related guides. Preserve that.

[Zillow](https://www.zillow.com/profile/ChelseyFanning/) shows 13 reviews at 5.0, with buyer/seller context and feedback reaching back to 2018. Its current page showed 56 total sales while an indexed snippet showed 55. This illustrates why portal totals should not silently become lifetime production claims. One apparent duplicate land listing also makes a raw listing count unsuitable as a homepage claim. No external review text was copied into the site during this audit.

Current Google rating/count could not be independently refreshed: the site's Google short link did not return readable review data. The existing 27-entry dataset remains an explicitly dated historical collection. A screenshot or export of Chelsey's current Google profile is needed to reconcile newer reviews, original dates, direct review URLs, and the current rating/count. Do not treat saved entries as a live feed. Do not add Google and Zillow counts together: the same person may review on both platforms.

Google excludes self-serving Organization/LocalBusiness reviews from its review-star feature, including third-party widgets embedded on the reviewed business's own site. It also says not to aggregate other websites' ratings. This is a rich-result policy, not a claim that all testimonial text is prohibited or that Schema.org cannot describe reviews. The implementation retains testimonials and visible source evidence without suggesting eligibility for stars. [Review guidance](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)

Follow-up: refresh sources periodically; label platform and capture date; keep original quotation wording; distinguish professional endorsements from client experiences; obtain permission before publishing private client details or case-study narratives. Do not infer a transaction address from a reviewer's identity.

## Entity graph and page structure

Preserved canonical IDs: /#agent, /#business, /#exp-realty and /#website. Added a separate team node at /#lifestyle-north-realty using Person.affiliation. It is not modeled as ownership of Chelsey's independent practice. Business directory profiles now identify the practice; personal agent profiles identify Chelsey. Existing profile links were retained unless stronger attribution was available.

About is a ProfilePage with mainEntity pointing to Chelsey. Article authors reference the same Person and biography URL. Recent Work is a CollectionPage containing summaries of selected transactions, with source citations and a clear snapshot date. It does not falsely model an off-market home as a live offer. Credentials, relationships and selected work are visible to humans as well as represented in schema.

[Google ProfilePage guidance](https://developers.google.com/search/docs/appearance/structured-data/profile-page), [Google Article guidance](https://developers.google.com/search/docs/appearance/structured-data/article), [Schema.org affiliation](https://schema.org/affiliation).

The address-removal request is preserved: no street address or office coordinates were fabricated to satisfy validators. Google's LocalBusiness rich-result requirements and general Schema.org validity are distinct. Without an address, do not describe this as fully eligible for Google's LocalBusiness enhancement. [LocalBusiness guidance](https://developers.google.com/search/docs/appearance/structured-data/local-business)

Robots permits crawling, and useful information is server-rendered. llms.txt and agent.json now reflect the same facts, but they are supplementary and are not evidence of ingestion by any model. Actual Googlebot/CDN access, Search Console indexing, Bing coverage, analytics, and lead conversion were not verified because account access was not available. No performance score or AI citation lift is claimed.

## Work history and production: what still needs confirmation

Older property records carry Professional Realty Services Idaho and REAL BROKER LLC branding. That is transaction-era context, not enough to reconstruct exact employment dates or contractual relationships. Do not publish a fabricated career timeline or make former brokerages current worksFor entities.

Ask Chelsey for a broker/MLS production report covering her career, separated by buyer/seller sides, co-listings, team versus personal credit, and reporting period. Reconcile it against public profiles before restoring a lifetime number. Public portals are incomplete and use different windows. No sale prices were copied into the new work cards because several sources display last-list prices or undisclosed closing prices.

Current availability changes: the new page refers visitors to live listing sources and dates its observations. Before creating a full on-site property inventory, establish the authorized MLS/IDX source, permitted photography, status-update process and attribution. Generated blog illustrations must never be presented as photos of these actual transactions.

## Content quality and maintenance

The jumbo guide now cites [FHFA's 2026 announcement](https://www.fhfa.gov/news/news-release/fhfa-announces-conforming-loan-limit-values-for-2026): the one-unit national baseline is $832,750, with higher limits in some counties. It no longer asserts a uniform Idaho-wide amount.

A wider editorial pass remains advisable for unsupported numerical statements in existing guides: percentages of online buyers, pricing-to-days-on-market outcome tables, travel times, and broad claims about schools or future appreciation. Distinguish examples from measured results; cite dated primary data for market claims. This audit did not independently validate every financial or legal statement in all eleven articles. [Google helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

## Validation and release

Preview-only. Build, TypeScript, targeted lint, and rendered-HTML/JSON-LD checks are the release checks. Confirm the Google snapshot, regulator record, and lifetime production before making stronger claims. Measure after release using Search Console queries/pages, referral sources and qualified inquiry conversions; observed changes cannot be attributed to schema alone.

Completed checks: production build and TypeScript passed; targeted ESLint passed; 21 generated HTML files and 56 JSON-LD nodes parsed and checked. Confirmed removal of the old license, old address, placeholder URL and review-rich-result markup; verified visible source dates, team/credential relationships, and the new sitemap route. The previous 11 blog images remain installed. Browser screenshot QA was unavailable because this environment lacks a browser executable; review the Vercel preview visually before publication.


## Production integration

The repository default branch was not the deployed production branch. The approved changes were subsequently applied to `main`, preserving its five area pages, two additional articles, geographical identity links, article about/mentions relationships, and breadcrumb/FAQ relationships. The production build and existing schema audit passed. The About introduction explicitly uses dark text on its cream background.
