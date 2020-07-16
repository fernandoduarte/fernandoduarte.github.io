import React from "react"
import Layout from "../components/layout"
import Paper from "../components/paper"

import socialMediaStyles from "./socialMedia.module.css"

export default function socialMedia() {
    return (
        <Layout>
            <div id={socialMediaStyles.social_media}>
                <h1><i>Social Media</i></h1>
                <ul>
                    <li>
                        <Paper
                            href="https://libertystreeteconomics.newyorkfed.org/2019/12/banking-system-vulnerability-annual-update.html"
                            title="Banking System Vulnerability: Update"
                            citations="With Kristian S. Blickle, Thomas M. Eisenbach, and Anna Kovner, December 19, 2019"
                            publisher="Federal Reserve Bank of New York Liberty Street Economics"></Paper>
                    </li>
                    <li>
                        <Paper
                            href="https://libertystreeteconomics.newyorkfed.org/2019/06/how-large-are-default-spillovers-in-the-us-financial-system.html"
                            title="How Large Are Default Spillovers in the U.S. Financial System?"
                            citations="With Collin Jones and Francisco Ruela, June 26, 2019"
                            publisher="Federal Reserve Bank of New York Liberty Street Economics"></Paper>
                    </li>
                    <li>
                        <Paper
                            href="https://libertystreeteconomics.newyorkfed.org/2019/06/assessing-contagion-risk-in-a-financial-network.html"
                            title="Assessing Contagion Risk in a Financial Network"
                            citations="With Collin Jones and Francisco Ruela, June 24, 2019"
                            publisher="Federal Reserve Bank of New York Liberty Street Economics"></Paper>
                    </li>
                    <li>
                        <Paper
                            href="https://libertystreeteconomics.newyorkfed.org/2018/11/ten-years-after-the-crisis-is-the-banking-system-safer.html"
                            title="Ten Years after the Crisis, Is the Banking System Safer?"
                            citations="With Dong Beom Choi, Thomas M. Eisenbach, and James Vickery, November 14, 2018"
                            publisher="Federal Reserve Bank of New York Liberty Street Economics"></Paper>
                    </li>
                    <li>
                        <Paper
                            href="http://libertystreeteconomics.newyorkfed.org/2016/02/quantifying-potential-spillovers-from-runs-on-high-yield-funds.html"
                            title="Quantifying Potential Spillovers from Runs on High-Yield Funds"
                            citations="With Nicola Cetorelli, Thomas M. Eisenbach, and Emily Eisner, February 19, 2016"
                            publisher="Federal Reserve Bank of New York Liberty Street Economics"></Paper>
                    </li>
                    <li>
                        <Paper
                            href="http://libertystreeteconomics.newyorkfed.org/2016/02/are-asset-managers-vulnerable-to-fire-sales.html"
                            title="Are Asset Managers Vulnerable to Fire Sales?"
                            citations="With Nicola Cetorelli and Thomas M. Eisenbach, February 18, 2016"
                            publisher="Federal Reserve Bank of New York Liberty Street Economics"></Paper>
                    </li>
                    <li>
                        <Paper
                            href="http://libertystreeteconomics.newyorkfed.org/2014/10/what-can-we-learn-from-prior-periods-of-low-volatility.html"
                            title="What Can We Learn from Prior Periods of Low Volatility?"
                            citations="With Juan Navarro-Staicos and Carlo Rosa, October 06, 2014"
                            publisher="Federal Reserve Bank of New York Liberty Street Economics"></Paper>
                    </li>
                    <li>
                        <Paper
                            href="http://libertystreeteconomics.newyorkfed.org/2014/04/on-fire-sale-externalities-tarp-was-close-to-optimal.html"
                            title="On Fire-Sale Externalities, TARP Was Close to Optimal"
                            citations="With Thomas M. Eisenbach, April 15, 2014"
                            publisher="Federal Reserve Bank of New York Liberty Street Economics"></Paper>
                    </li>
                    <li>
                        <Paper
                            href="http://libertystreeteconomics.newyorkfed.org/2013/11/a-way-with-words-the-economics-of-the-feds-press-conference.html"
                            title="A Way With Words: The Economics of the Fed's Press Conference"
                            citations="With Carlo Rosa, November 25, 2013"
                            publisher="Federal Reserve Bank of New York Liberty Street Economics"></Paper>
                    </li>
                    <li>
                        <Paper
                            href="http://libertystreeteconomics.newyorkfed.org/2013/05/are-stocks-cheap-a-review-of-the-evidence.html"
                            title="Are Stocks Cheap? A Review of the Evidence"
                            citations="With Carlo Rosa, May 08, 2013"
                            publisher="Federal Reserve Bank of New York Liberty Street Economics"></Paper>
                    </li>
                </ul>
            </div>
        </Layout>
    );
}