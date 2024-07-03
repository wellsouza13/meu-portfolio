import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Badge } from 'react-bootstrap';
import { Container, Box, Typography, Grid } from '@mui/material';

interface WorkExperience {
    title: string;
    company: string;
    years: string;
    mainTech: string[];
    technologies: string[];
}

interface ResumeBasicInfo {
    section_name: {
        experience: string;
    };
}

interface ExperienceProps {
    resumeExperience: WorkExperience[];
    resumeBasicInfo: ResumeBasicInfo;
}

const Experience: React.FC<ExperienceProps> = ({ resumeExperience, resumeBasicInfo }) => {
    const sectionName = resumeBasicInfo.section_name.experience;

    return (
        <section id="resume" className="pb-5">
            <Container>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom className="section-title" style={{ color: 'black', textAlign: 'center' }}>
                        {sectionName}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <VerticalTimeline>
                                {resumeExperience.map((work, i) => (
                                    <VerticalTimelineElement
                                        key={i}
                                        className="vertical-timeline-element--work"
                                        date={work.years}
                                        iconStyle={{ background: '#AE944F', color: '#fff', textAlign: 'center' }}
                                        icon={<i className="fab fa-angular experience-icon"></i>}
                                    >
                                        <div style={{ textAlign: 'left', marginBottom: '4px' }}>
                                            {work.mainTech.map((tech, i) => (
                                                <Badge pill className="main-badge mr-2 mb-2" key={i}>
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <Typography variant="h5" component="h3" style={{ textAlign: 'left' }}>
                                            {work.title}
                                        </Typography>
                                        <Typography variant="h6" component="h4" style={{ textAlign: 'left' }}>
                                            {work.company}
                                        </Typography>
                                        <div style={{ textAlign: 'left', marginTop: '15px' }}>
                                            {work.technologies.map((tech, i) => (
                                                <Badge pill className="experience-badge mr-2 mb-2" key={i}>
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </VerticalTimelineElement>
                                ))}
                                <VerticalTimelineElement
                                    iconStyle={{ background: '#AE944F', color: '#fff', textAlign: 'center' }}
                                    icon={<i className="fas fa-hourglass-start mx-auto experience-icon"></i>}
                                />
                            </VerticalTimeline>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default Experience;
