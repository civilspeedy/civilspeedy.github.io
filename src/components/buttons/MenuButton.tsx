import lightIcon from "../../assets/icons/menu-light.svg";
import darkIcon from "../../assets/icons/menu-dark.svg";
import { Theme } from "../..";
import * as m from "motion/react-m";
import "./buttonStyles.css";
import React, { useState } from "preact/compat";
import Menu from "../displays/Menu";

export default function MenuButton(): React.JSX.Element {
    const [state, setState] = useState(false);
    const icon = Theme.value ? lightIcon : darkIcon;
    return (
        <m.div>
            <m.img
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setState(!state)}
                src={icon}
                id="themeButton"
                style={{
                    backgroundColor: Theme.value ? "black" : "white",
                }}
            />
            <Menu state={state} />
        </m.div>
    );
}
