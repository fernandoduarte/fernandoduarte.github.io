import React from "react"
import Layout from "../components/layout"
import Paper from "../components/paper"
import Abstract from "../components/abstract"
// Asset declarations
import indexStyles from "./index.module.css"

export default function Home() {
    return (
        <Layout>
            <div id={indexStyles.research}>
                <h1><i>Research</i></h1>
                {/* Publications section */}
                <section>
                    <h2>Publications</h2>
                    <ul>
                         <li>
                            <Paper
                                href="https://onlinelibrary.wiley.com/doi/10.1111/jofi.13010"
                                title="Fire-Sale Spillovers and Systemic Risk"
                                citations="with Thomas Eisenbach"
                                publisher="The Journal of Finance, 76: 1251-1294, February 2021"></Paper>
                            <a
                                href="https://onlinelibrary.wiley.com/action/downloadSupplement?doi=10.1111%2Fjofi.13010&file=jofi13010-sup-0001-ReplicationCode.zip"
                                target="_blank"
                                rel="noopener noreferrer">
                                Replication Code
                            </a>
                            <a
                                href="https://onlinelibrary.wiley.com/action/downloadSupplement?doi=10.1111%2Fjofi.13010&file=jofi13010-sup-0001-InternetAppendix.pdf"
                                target="_blank"
                                rel="noopener noreferrer">
                                Internet Appendix
                            </a>
                        </li>
                        <li>
                            <Paper
                                href="https://www.sciencedirect.com/science/article/abs/pii/S0304405X19302429"
                                title="Time-varying Inflation Risk and Stock Returns"
                                citations="with Martijn Boons, Frans de Roon, and Marta Szymanowska"
                                publisher="Journal of Financial Economics, Volume 136, Issue 2, Pages 444-470, May 2020"></Paper>
                            <a
                                href="https://fernandoduarte.github.io/src/files/inflation_NRC_replication.zip"
                                target="_blank"
                                rel="noopener noreferrer">
                                Replication Code and Data
                            </a>
                           <a
                                href="https://fernandoduarte.github.io/src/files/inflation_NRC_onlineAppendix.pdf"
                                target="_blank"
                                rel="noopener noreferrer">
                                Internet Apprendix
                            </a>
                        </li>
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
                                Replication Code and Data
                            </a>
                        </li>                        
                        <li>
                            <Paper
                                href="https://www.sciencedirect.com/science/article/abs/pii/S0304393219301679?via%3Dihub"
                                title="Comment on “Forward Guidance: Communication, Commitment, or Both?” by Marco Bassetto"
                                citations=""
                                publisher="Journal of Monetary Economics, Volume 108, Pages 87-92, December 2019"></Paper>
                        </li>
                        <li>
                            <Paper
                                href="https://www.elibrary.imf.org/doc/IMF073/25076-EFMPEAEX/25076-EFMPEAEX/Other_formats/Source_PDF/25076-EFMOETEX.pdf?redirect=true"
                                title="Monetary Policy and Financial Conditions: A Cross-Country Study"
                                citations="with Tobias Adrian, Federico Grinberg and Tommaso Mancini-Griffoli"></Paper>
                            <i>Chapter 7,&nbsp;
                                <a
                                    href="https://bookstore.imf.org/books/title/advancing-the-frontiers-of-monetary-policy"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Advancing the Frontiers of Monetary Policy
                                </a>
                                , Tobias Adrian, Doug Laxton and Maurice Obstfeld, editors, International
                                Monetary Fund, Washington DC, April 2018</i>
                               <a
                                    href="https://www.newyorkfed.org/medialibrary/media/research/staff_reports/sr890.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Working paper (ungated)
                                </a>
                        </li>
                        <li>
                            <Paper
                                href="https://www.newyorkfed.org/medialibrary/media/research/epr/2015/2015_epr_equity-risk-premium.pdf?la=en"
                                title="The Equity Risk Premium: A Review of Models"
                                citations="with Carlo Rosa"></Paper>
                            <i>
                                Federal Reserve Bank of New York&nbsp;
                                <a
                                    href="https://www.newyorkfed.org/medialibrary/media/research/epr/2015/epr_2015_vol21no2.pdf?la=en"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Economic Policy Review, Volume 21, No. 2, Pages 39-57, December 2015
                                </a>
                            </i>
                            <br></br>
                            <a 
                               href="https://fernandoduarte.github.io/src/files/ERP.xlsx" 
                               target="_blank"
                               rel="noopener noreferrer">
                                   Latest ERP Estimates (February 2021)
                            </a>
                            <br></br>
                            <a
                                href="https://fernandoduarte.github.io/src/files/ERP_vintages.xlsx"
                                target="_blank"
                                rel="noopener noreferrer">
                                    All Vintages
                            </a>
                            <br></br>
                            <a
                                href="https://github.com/fernando-duarte/ERP"
                                target="_blank"
                                rel="noopener noreferrer">
                                    Code and Data
                            </a>
                        </li>
                    </ul>
                </section>
                {/* Working Papers section */}
                <section>
                    <h2>Working Papers</h2>
                    <ul>
                         <li>
                            <Paper
                                href="https://fernandoduarte.github.io/src/files/AdrianDuarte_NK_Vulnerabilities.pdf"
                                title="Financial Vulnerability and Monetary Policy"
                                citations="with Tobias Adrian, November 2020"></Paper>
                            <Abstract>
                               We present a microfounded New Keynesian model that features
                                financial vulnerabilities. Financial intermediaries' occasionally binding
                                value at risk constraints give rise to variation in the pricing of risk that
                                generates time varying risk in the conditional mean and volatility of the
                                output gap. The conditional mean and volatility of the output gap are negatively related:
                                during times of easy financial conditions, growth tends to be high, and risk
                                tends to be low. Monetary policy affects output directly via the IS curve,
                                and indirectly via the pricing of risk that relates to the tightness of the
                                value at risk constraint. The optimal monetary policy rule always depends on
                                financial vulnerabilities in addition to the output gap, inflation, and the
                                natural rate. We show that a classic Taylor rule exacerbates deviations of
                                the output gap from its target value of zero relative to an optimal interest
                                rate rule that includes vulnerability. Simulations show that optimal policy
                                significantly increases welfare relative to a classic Taylor rule. The model 
                                provides a microfoundation for optimal monetary policy frameworks that 
                                include financial stability. 
                            </Abstract>
                        </li>
                        <li>
                            <Paper
                                href="https://fernandoduarte.github.io/src/files/Monetary and Macroprudential Policy with Endogenous Risk.pdf"
                                title="Monetary and Macroprudential Policy with Endogenous Risk"
                                citations="with Tobias Adrian, Nellie Liang, and Pawel Zabczyk, November 2020"></Paper>
                            <Abstract>
                               We extend the New Keynesian (NK) model to include endogenous risk, microfounded using
                                diagnostic expectations and intermediation frictions captured by a Value-at-Risk constraint.
                                Lower interest rates not only shift consumption intertemporally but also conditional
                                 output risk via their impact on risk-taking, giving rise to a vulnerability channel 
                                 of monetary policy. The model fits the conditional output gap distribution and can 
                                 account for medium-term increases in downside risks when financial conditions are loose.
                                 The policy prescriptions are very different from those in the standard NK model: 
                                 monetary policy that focuses purely on inflation and output-gap stabilization can
                                 lead to instability. Macroprudential measures can mitigate the intertemporal risk-return 
                                 tradeoff created by the vulnerability channel.
                            </Abstract>
                        </li>
                        <li>
                            <Paper
                                href="https://fernandoduarte.github.io/src/files/NetworkContagion_DuarteJones.pdf"
                                title="Empirical Network Contagion for U.S. Financial Insitutions"
                                citations="with Collin Jones, October 2019"></Paper>
                            <Abstract>
                                We construct an empirical measure of expected network spillovers that arise through
                                default cascades for the US financial system for the period 2002-2016. Compared
                                to existing studies, we include a much larger cross-section of US financial firms that
                                comprises all bank holding companies, all broker-dealers and all insurance companies,
                                 and consider their entire empirical balance sheet exposures instead of relying
                                on simulations or on exposures arising just through one specific market (like the
                                Fed Funds market) or one specific financial instrument (like credit default swaps).
                                We find negligible expected spillovers from 2002 to 2007 and from 2013 to 2016.
                                However, between 2008 and 2012, we find that default spillovers can amplify 
                                expected losses by up to 25%, a significantly higher estimate than previously found
                                in the literature.
                            </Abstract>
                        </li>
                        <li>
                            <Paper
                                href="https://fernandoduarte.github.io/src/files/indeterminacy_zlb_paper.pdf"
                                title="How to Escape a Liquidity Trap with Interest Rate Rules"
                                citations="January 2019"></Paper>
                            <Abstract>
                                I study how central banks should communicate monetary policy in liquidity trap scenarios in which the zero lower bound on nominal interest rates is binding.
                                Using a standard New Keynesian model, I argue that the key to preventing self-fulfilling deflationary spirals and anchoring expectations is to promise to keep 
                                nominal interest rates pegged at zero for a length of time that depends on the state of the economy. I derive necessary and sufficient conditions for
                                this type of state contingent forward guidance to implement the welfare maximizing equilibrium as a globally determinate (i.e., unique) equilibrium. Even though the zero
                                lower bound prevents the Taylor principle from holding, determinacy can be obtained if the central bank sufficiently extends the duration of the zero interest rate peg
                                 in response to deflationary or contractionary changes in expectations or outcomes.
                                Fiscal policy is passive, so it plays no role for determinacy. The interest rate rules I consider are easy to communicate, require little institutional change and 
                                do not entail any unnecessary social welfare losses.
                            </Abstract>
                            <a href="https://fernandoduarte.github.io/src/files/indeterminacy_zlb_appendix.pdf" target="_blank" rel="noopener noreferrer">Online Appendix</a>
                            <a href="https://fernandoduarte.github.io/src/files/indeterminacy_zlb.pdf" target="_blank" rel="noopener noreferrer">Paper and Online Appendix (with hyperlinks)</a>
                            <a href="https://fernandoduarte.github.io/src/files/zlb_ode_interactive.zip" target="_blank" rel="noopener noreferrer">Interactive Mathematica notebook</a>
                        </li>                        
                        <li>
                            <Paper
                                href="https://fernandoduarte.github.io/src/files/short_horizon.pdf"
                                title="Institutional Investors' Intrinsic Trading Frequency and the Cross-Section of Stock Returns"
                                citations="with Sahar Parsa, May 2013"></Paper>
                            <Abstract>
                                We show a novel relation between the institutional investors’ intrinsic trading
                                frequency — a commonly used proxy for the investors’ investment horizon — and
                                the cross-section of stock returns. We show that the 20% of stocks with the
                                lowest trading frequency earn mean returns that are 6 percentage points per year
                                higher than the 20% of stocks that have the highest trading frequency. The magnitude and predictability
                                of these returns persist or even increase when
                                risk-adjusted by common indicators of systematic risks such as the Fama-French, liquidity or momentum
                                factors. Our results show that the characteristics of stock holders affect expected returns
                                of the very securities they hold, supporting the view that heterogeneity among investors is an
                                important dimension of asset prices.
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
                                firms have very diverse micro-level pricing behavior. Because in this class of models positive nominal shocks are good
                                states of nature and the correlation between stock returns and inflation is positive,
                                agents are willing to pay a premium to hold assets whose returns covary negatively
                                with inflation. In contrast, we empirically find that the dispersion in the correlation
                                between stock returns and inflation is about 100 times larger than in the model, and
                                that correlations are negative about half the time. Furthermore, and also at odds
                                with sticky-price models, investors require a premium to hedge against states of high
                                inflation. 
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
                                volatility. Thus, conditionally on past
                                aggregate investment, the mean-variance tradeoff in aggregate stock returns is negative.
                                We interpret these patterns within a general equilibrium production economy. In our
                                model, investment is determined endogenously in response to two types of shocks:
                                shocks to productivity and preference shocks affecting discount rates. Preference shocks
                                affect expected stock returns, aggregate investment rate, and stock return volatility in
                                equilibrium, helping model reproduce the empirical relations between these variables.
                                Thus, our results emphasize that the time-varying price of aggregate risk plays and
                                important role in shaping the aggregate investment dynamics.
                            </Abstract>
                        </li>
                    </ul>
                </section>
                 {/* Work in progress section */}
                <section>
                    <h2>Work in Progress</h2>
                    <ul>
                     <li>
                            <Paper
                                href="https://fernandoduarte.github.io/src/files/NRC_stock_bonds.pdf"
                                title="Long-Run Consumption and Inflation Risks in Stock and Bond Returns"
                                citations="with Leonardo Elias and Marta Szymanowska, November 2020"></Paper>
                            <Abstract>
                               We propose a long-run risk model with real effects of inflation that matches a broader set of empirical 
                               moments than has been previously possible, while simultaneously keeping risk aversion and the elasticity 
                               of intertemporal substitution low. The moments we match capture the joint dynamics of stock returns,
                               bond returns, bond yields, and macroeconomic fundamentals. We also match moments that have remained 
                               elusive in the literature ---including those from predictability regressions of stock returns, consumption, 
                               and dividends on the price-dividend ratio--- as well as some that have been only matched piecemeal by a 
                               collection of different versions of the long-run risk model. The key element that we introduce in the 
                               model is that inflation non-neutralities are time-varying in a manner consistent with the data, with inflationary shocks predicting higher 
                               or lower real consumption growth depending on the current state of the economy.
                            </Abstract>
                        </li>
                         <li>
                            <Paper
                                href="https://fernandoduarte.github.io/src/files/ZLB_neural_nets.pdf"
                                title="The Past is Present: Optimal Monetary Policy at the Effective Lower Bound"
                                citations="with Benjamin Marrow, September 2020"></Paper>
                            <Abstract>
                               We use a New Keynesian model with an effective lower bound (ELB) and a general
                             stochastic process for the natural rate to study optimal monetary policy. 
                             The central bank has perfect commitment and an interest rate smoothing term in its 
                             loss function. Despite the ELB binding occasionally and endogenously, we can derive a 
                             closed-form solution for the optimal interest rate: it is the maximum of zero and a 
                             weighted average of all past realizations of the output gap. This implies that the
                             optimal interest rate (i) takes a simple form, (ii) is path dependent at all times,
                             (iii) should be pre-emptively lowered when close to the ELB --or kept at zero if at the ELB--
                             if and only if the weighted average of past output gaps is negative, and
                             (iv) behaves very differently from the Taylor rule. We illustrate these insights by 
                             solving for key variables in the New Keynesian model using a neural network.
                            </Abstract>
                        </li>                       
                    </ul>
                </section>
            </div>
        </Layout>
    );
}
