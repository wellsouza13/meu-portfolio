import React, { useState } from 'react';
import Typical from 'react-typical';
import Switch from 'react-switch';

export interface SocialNetwork {
    name: string;
    url: string;
    class: string;
}

export interface BasicInfo {
    name: string;
    image: string;
    section_name: {
        about: string;
        experience: string;
        projects: string;
        skills: string;
    };
    description_header: string;
    description: string;
    titles: string[];
    social: SocialNetwork[];
}

export interface Experience {
    title: string;
    company: string;
    years: string;
    mainTech: string[];
    technologies: string[];
}

export interface Technology {
    class: string;
    name: string;
}

export interface ProjectData {
    title: string;
    description: string;
    url?: string;
    technologies: Technology[];
    images: string[];
    startDate: string;
}

export interface SharedData {
    basic_info: BasicInfo;
    skills: {
        icons: Technology[];
    };
}

export interface ResumeData {
    basic_info: BasicInfo;
    projects: ProjectData[];
    experience: Experience[];
}


export interface HeaderProps {
    sharedData: BasicInfo;
}

const Header: React.FC<HeaderProps> = ({ sharedData }) => {
    const [checked, setChecked] = useState(false);

    const onThemeSwitchChange = (checked: boolean) => {
        setChecked(checked);
        setTheme();
    };

    const setTheme = () => {
        const dataThemeAttribute = "data-theme";
        const body = document.body;
        const newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    };

    const titles = sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat();

    const HeaderTitleTypeAnimation = React.memo(() => {
        return <Typical steps={titles} loop={50} wrapper="p" />;
    }, (props, prevProp) => true);

    return (
        <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
            <div className="row aligner" style={{ height: '100%' }}>
                <div className="col-md-12">
                    <div>
                        <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
                        <br />
                        <h1 className="mb-0">
                            <Typical steps={[sharedData.name]} wrapper="p" />
                        </h1>
                        <div className="title-container">
                            <HeaderTitleTypeAnimation />
                        </div>
                        <Switch
                            checked={checked}
                            onChange={onThemeSwitchChange}
                            offColor="#baaa80"
                            onColor="#353535"
                            className="react-switch mx-auto"
                            width={90}
                            height={40}
                            uncheckedIcon={
                                <span
                                    className="iconify"
                                    data-icon="twemoji:owl"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "20px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            checkedIcon={
                                <span
                                    className="iconify"
                                    data-icon="noto-v1:sun-with-face"
                                    data-inline="false"
                                    style={{
                                        display: "block",
                                        height: "100%",
                                        fontSize: 25,
                                        textAlign: "end",
                                        marginLeft: "10px",
                                        color: "#353239",
                                    }}
                                ></span>
                            }
                            id="icon-switch"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
