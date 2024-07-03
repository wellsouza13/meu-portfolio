import React from 'react';
import { Icon } from '@iconify/react';
import angularIcon from '@iconify-icons/logos/angular-icon';
import reactIcon from '@iconify-icons/logos/react';
import vueIcon from '@iconify-icons/logos/vue';
import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import styled from '@emotion/styled';

interface SharedBasicInfo {
    image: string;
}

interface ResumeBasicInfo {
    section_name: {
        about: string;
    };
    description_header: string;
    description: string;
}

interface AboutProps {
    sharedBasicInfo?: SharedBasicInfo;
    resumeBasicInfo?: ResumeBasicInfo;
}

const Polaroid = styled.div`
  background: #ffffff;
  display: inline-block;
  margin: 0 auto 5% auto;
  padding: 10px 10px 5px;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.2s linear;
  z-index: 0;
  position: relative;
`;

const About: React.FC<AboutProps> = ({ sharedBasicInfo, resumeBasicInfo }) => {
    const profilepic = sharedBasicInfo ? `images/${sharedBasicInfo.image}` : '';
    const sectionName = resumeBasicInfo ? resumeBasicInfo.section_name.about : '';
    const hello = resumeBasicInfo ? resumeBasicInfo.description_header : '';
    const about = resumeBasicInfo ? resumeBasicInfo.description : '';

    return (
        <section id="about">
            <Container>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {sectionName}
                    </Typography>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={4} className="center">
                            <Polaroid>
                                <img height="250px" src={profilepic} alt="Avatar placeholder" />
                                <Icon icon={angularIcon} style={{ fontSize: '400%', margin: '9% 5% 0 5%' }} />
                                <Icon icon={reactIcon} style={{ fontSize: '400%', margin: '9% 5% 0 5%' }} />
                                <Icon icon={vueIcon} style={{ fontSize: '400%', margin: '9% 5% 0 5%' }} />
                            </Polaroid>
                        </Grid>
                        <Grid item xs={12} md={8} className="center">
                            <Card>
                                <CardContent>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span>
                                        &nbsp;
                                        <span className="iconify" data-icon="twemoji:yellow-circle" data-inline="false"></span>
                                        &nbsp;
                                        <span className="iconify" data-icon="twemoji:green-circle" data-inline="false"></span>
                                    </Box>
                                    <Typography
                                        sx={{
                                            height: 'auto',
                                            fontSize: '132%',
                                            lineHeight: '200%',
                                            mt: 2,
                                        }}
                                        className="font-trebuchet text-justify"
                                    >
                                        <br />
                                        <span className="wave">{hello} :) </span>
                                        <br />
                                        <br />
                                        {about}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    );
};

export default About;
