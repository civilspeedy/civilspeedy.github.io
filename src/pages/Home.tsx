import React from "preact/compat";
import { motion } from "motion/react";
import AboutMe from "../components/displays/AboutMe";
import "./pageStyle.css";
import PageButton from "../components/buttons/PageButton";
import { beforePageOpen, pageOpen } from "../logic/animations";
import { pages } from "../logic/assetManagement";
import { BrowserView, MobileView } from "react-device-detect";

export default function Home(): React.JSX.Element {
    return (
        <>
            <BrowserView>
                <motion.div
                    id="page"
                    initial={beforePageOpen}
                    animate={pageOpen}
                >
                    <h1>Charlie Slorick</h1>
                    <motion.div initial={{ x: "100%", y: "50%" }} id="btnDiv">
                        {pages.map((item, index) => (
                            <PageButton text={item} key={index} />
                        ))}
                    </motion.div>
                    <AboutMe />
                </motion.div>
            </BrowserView>
            <MobileView>
                <motion.div
                    id="mobilePage"
                    initial={beforePageOpen}
                    animate={pageOpen}
                >
                    <motion.div id="mobileHomeDiv" initial={{ y: "50%" }}>
                        {pages.map((page, index) => (
                            <PageButton text={page} key={index} />
                        ))}
                    </motion.div>
                </motion.div>
            </MobileView>
        </>
    );
}
