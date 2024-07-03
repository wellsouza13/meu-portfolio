import React from 'react';
import { Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import '../scss/light-slider.scss';
import '../scss/dark-slider.scss';

interface Technology {
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

interface ProjectDetailsModalProps {
    data: ProjectData | null;
    show: boolean;
    onHide: () => void;
}

const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({ data, show, onHide }) => {
    if (!data) {
        return null;
    }

    const { title, description, url, technologies, images } = data;

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal-inside"
        >
            <span onClick={onHide} className="modal-close">
                <i className="fas fa-times fa-3x close-icon"></i>
            </span>
            <div className="col-md-12">
                <div className="col-md-10 mx-auto" style={{ paddingBottom: "50px" }}>
                    <div className="slider-tab">
                        <span className="iconify slider-iconfiy" data-icon="emojione:red-circle" data-inline="false" style={{ marginLeft: "5px" }}></span>
                        &nbsp;
                        <span className="iconify slider-iconfiy" data-icon="twemoji:yellow-circle" data-inline="false"></span>
                        &nbsp;
                        <span className="iconify slider-iconfiy" data-icon="twemoji:green-circle" data-inline="false"></span>
                    </div>
                    <AwesomeSlider
                        animation="scaleOutAnimation"
                        className="slider-image"
                    >
                        {images.map((src, index) => (
                            <div key={index} data-src={src} />
                        ))}
                    </AwesomeSlider>
                </div>
                <div className="col-md-10 mx-auto">
                    <h3 style={{ padding: "5px 5px 0 5px" }}>
                        {title}
                        {url && (
                            <a href={url} target="_blank" rel="noopener noreferrer" className="link-href">
                                <i className="fas fa-external-link-alt" style={{ marginLeft: "10px" }}></i>
                            </a>
                        )}
                    </h3>
                    <p className="modal-description">{description}</p>
                    <div className="col-md-12 text-center">
                        <ul className="list-inline mx-auto">
                            {technologies.map((tech, index) => (
                                <li className="list-inline-item mx-3" key={index}>
                                    <span>
                                        <div className="text-center">
                                            <i className={tech.class} style={{ fontSize: "300%" }}>
                                                <p className="text-center" style={{ fontSize: "30%" }}>
                                                    {tech.name}
                                                </p>
                                            </i>
                                        </div>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectDetailsModal;
