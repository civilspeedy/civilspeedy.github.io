import React from "react";
import { Link } from "react-router-dom";
import { aboutMePage, PageBasic, scale } from "../logic/types";
import { useScale2D, useScaleText } from "../logic/consistencyControl";
import { H1, H4, P } from "../components/Text";
import Email from "../components/Email";

type types = {
  page: PageBasic;
  buttonLabels: () => string[];
  getPage: (name: string) => any;
};

export default function Home({
  page,
  buttonLabels,
  getPage,
}: types): React.JSX.Element {
  const buttonNames: string[] = buttonLabels();
  const btnSize: scale = useScale2D("btn");
  const btnFontSize: number = useScaleText("btnFont");
  const aboutMe: aboutMePage = getPage("About Me");

  return (
    <>
      <div>
        <H1 text={page.h1} />
        <div id="container">
          <div id="sub">
            <div id="aboutMe">
              <div
                style={{ display: "flex", flexDirection: "row", gap: "10px" }}
              >
                <Link to={aboutMe.linkedin}>
                  <P text="LinkedIn" />
                </Link>
                <Email based={aboutMe.email} />
              </div>
              <P text={aboutMe.bio} />
              {aboutMe.education.map((item, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                  <H4 text={item.name} />
                  {item.subjects.map((subItem, subDex) => (
                    <P
                      text={subItem.subject + " - " + subItem.grade}
                      key={subDex}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div id="sub">
            <div id="btnDiv">
              {buttonNames.map((item, index) => (
                <Link to={"/" + item} key={index}>
                  <button
                    style={{
                      width: btnSize.width,
                      height: btnSize.height,
                      fontSize: btnFontSize,
                      alignSelf: "center",
                    }}
                    title={item}
                  >
                    {item}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
