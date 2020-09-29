import React from "react"
import Layout from "../components/layout"
import Paper from "../components/paper"
import Abstract from "../components/abstract"
// Asset declarations
import indexStyles from "./index.module.css"
import online_appendix from "../files/indeterminacy_zlb_appendix.pdf";

export default function Home() {
    return (
        <Layout>
            <div id={indexStyles.research}>
                <h1><i>Research</i></h1>
                {/* Working Papers section */}
                <section>
                    <h2>Working Papers</h2>
                    <ul>
                        <li>
                            <Paper
                                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2786194"
                                title="How to Escape a Liquidity Trap with Interest Rate Rules"
                                citations="January 2019"></Paper>
                            <Abstract>
                                I study how central banks should communicate monetary policy in liquidity trap
                                scenarios in which the zero lower bound on nominal interest rates is binding.
                                Using a standard New Keynesian model, I argue that the key to preventing
                                self-fulfilling deflationary spirals and anchoring expectations is to promise to
                                keep nominal interest rates pegged at zero for a length of time that depends on
                                the state of the economy.
                            </Abstract>
                            <a href={online_appendix} target="_blank" rel="noopener noreferrer">Online Appendix</a>
                        </li>
                        <li>
                            <Paper
                                href="https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr826.pdf"
                                title="Empirical Network Contagion for U.S. Financial Insitutions"
                                citations="with Collin Jones, November 2017"></Paper>
                            <Abstract>
                                We construct an empirical measure of expected network spillovers that arise
                                through default cascades for the US financial system for the period 2002-2016.
                                Compared to existing studies, we include a much larger cross-section of US
                                financial firms that comprise all bank holding companies, all broker-dealers and
                                all insurance companies, and consider their entire empirical balance sheet
                                exposures instead of relying on simulations or on exposures arising just through
                                one specific market (like the Fed Funds market) or one specific financial
                                instrument (like credit default swaps).
                            </Abstract>
                        </li>
                        <li>
                            <Paper
                                href="https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr804.pdf?la=en"
                                title="Financial Vulnerability and Monetary Policy"
                                citations="with Tobias Adrian, September 2017"></Paper>
                            <Abstract>
                                We present a microfounded New Keynesian model that features financial
                                vulnerabilities. Financial intermediaries' occasionally binding value at risk
                                constraints give rise to vulnerabilities that generate time varying downside
                                risk of the output gap. Monetary policy impacts the output gap directly via the
                                IS curve, and indirectly via its impact on the tightness of the value at risk
                                constraint.
                            </Abstract>
                        </li>
                        <li>
                            <Paper
                                href="https://www.newyorkfed.org/medialibrary/media/research/economists/duarte/short_horizon.pdf"
                                title="Institutional Investors' Intrinsic Trading Frequency and the Cross-Section of Stock Returns"
                                citations="with Sahar Parsa, May 2013"></Paper>
                            <Abstract>
                                We show a novel relation between the institutional investors’ intrinsic trading
                                frequency — a commonly used proxy for the investors’ investment horizon — and
                                the cross-section of stock returns. We show that the 20% of stocks with the
                                lowest trading frequency earn mean returns that are 6 percentage points per year
                                higher than the 20% of stocks that have the highest trading frequency.
                            </Abstract>
                        </li>
                        <li>
                            <Paper
                                href="https://www.newyorkfed.org/medialibrary/media/research/economists/duarte/asset_pricing_with_menu_costs.pdf"
                                title="Cross-sectional inflation risk in menu cost models with heterogeneous firms"
                                citations="with Jonas Mishara-Blomberger, December 2012"></Paper>
                            <Abstract>
                                We show that firms in models with menu costs, when calibrated to have the
                                empirically observed frequency and size of individual-goods price adjustments,
                                have stock returns that are always positively correlated with inflation. The
                                cross-sectional dispersion in this correlation is almost negligible, even though
                                firms have very diverse micro-level pricing behavior.
                            </Abstract>
                        </li>
                        <li>
                            <Paper
                                href="https://www.newyorkfed.org/medialibrary/media/research/economists/duarte/investment_and_vol_fd.pdf"
                                title="Aggregate Investment and Stock Returns"
                                citations="with Leonid Kogan and Dmitry Livdan, April 2012"></Paper>
                            <Abstract>
                                In this paper we study the relation between returns on the aggregate stock
                                market and aggregate real investment. While it is well known that the aggregate
                                investment rate is negatively correlated with subsequent excess stock market
                                returns, we find that it is positively correlated with future stock market
                                volatility.
                            </Abstract>
                        </li>
                    </ul>
                </section>
                {/* Publications section */}
                <section>
                    <h2>Publications</h2>
                    <ul>
                        <li>
                            <Paper
                                href="https://www.aeaweb.org/articles?id=10.1257/pandp.20201023"
                                title="NKV: A New Keynesian Model with Vulnerability"
                                citations="with Tobias Adrian, Nellie Liang and Pawel Zabczyk, May 2020"
                                publisher="AEA Papers and Proceedings, vol. 110, May 2020 (pp. 470-76)"></Paper>
                            <a
                                href="https://www.openicpsr.org/openicpsr/project/117546/version/V1/view"
                                target="_blank"
                                rel="noopener noreferrer">
                                Code and Data
                            </a>
                        </li>
                        <li>
                            <Paper
                                href="https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr645.pdf"
                                title="Fire-Sale Spillovers and Systemic Risk"
                                citations="with Thomas Eisenbach, December 2019"
                                publisher="Journal of Finance, forthcoming"></Paper>
                            <a
                                href="https://github.com/fernando-duarte"
                                target="_blank"
                                rel="noopener noreferrer">
                                Code
                            </a>
                        </li>
                        <li>
                            <Paper
                                href="https://www.sciencedirect.com/science/article/abs/pii/S0304393219301679?via%3Dihub"
                                title="Comment on “Forward Guidance: Communication,
                                Commitment, or Both?” by Marco Bassetto"
                                citations="December 2019"
                                publisher="Journal of Monetary Economics, Volume 108, December 2019"></Paper>
                        </li>
                        <li>
                            <Paper
                                href="https://www.sciencedirect.com/science/article/abs/pii/S0304405X19302429"
                                title="Time-Varying Inflation Risk and the Cross Section of Stock Returns"
                                citations="with Martijn Boons, Frans de Roon, and Marta Szymanowska, April 2019"
                                publisher="Journal of Financial Economics, forthcoming"></Paper>
                            <a
                                href="https://www.sciencedirect.com/science/article/pii/S0304405X19302429"
                                target="_blank"
                                rel="noopener noreferrer">
                                Code and Data
                            </a>
                        </li>
                        <li>
                            <Paper
                                href="https://www.elibrary.imf.org/doc/IMF073/25076-EFMPEAEX/25076-EFMPEAEX/Other_formats/Source_PDF/25076-EFMOETEX.pdf?redirect=true"
                                title="Monetary Policy and Financial Conditions: A Cross-Country Study"
                                citations="with Tobias Adrian, Federico Grinberg and Tommaso Mancini-Griffoli, April 2018"></Paper>
                            <i>Chapter 7,&nbsp;
                                <a
                                    href="https://bookstore.imf.org/books/title/advancing-the-frontiers-of-monetary-policy"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Advancing the Frontiers of Monetary Policy
                                </a>
                                , Tobias Adrian, Doug Laxton and Maurice Obstfeld, editors, International
                                Monetary Fund, Washington DC, April 2018</i>
                        </li>
                        <li>
                            <Paper
                                href="https://www.newyorkfed.org/medialibrary/media/research/epr/2015/2015_epr_equity-risk-premium.pdf?la=en"
                                title="The Equity Risk Premium: A Review of Models"
                                citations="with Carlo Rosa, December 2015"></Paper>
                            <i>
                                Federal Reserve Bank of New York&nbsp;
                                <a
                                    href="https://www.newyorkfed.org/medialibrary/media/research/epr/2015/epr_2015_vol21no2.pdf?la=en"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Economic Policy Review, Volume 21, No. 2, December 2015
                                </a>
                            </i>
                            <br></br>
                            <a href="../files/ERP.xlsx" download="ERP.xlsx">Latest ERP Estimates (September 2019)</a>
                            <br></br>
                            <a
                                href="https://fernandoduarte.github.io/src/files/ERP.xlsx"
                                target="_blank"
                                rel="noopener noreferrer">All Vintages</a>
                            <br></br>
                            <a
                                href="files/ERP.xlsx"
                                target="_blank"
                                rel="noopener noreferrer">Code and Data</a>
                        </li>
                    </ul>
                </section>
            </div>
        </Layout>
    );
}