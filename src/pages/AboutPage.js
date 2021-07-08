import React from 'react';
import Title from '../components/Title'
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';
import ServicesSection from '../components/ServicesSection';
import design from '../img/design.svg'
import intelligence from '../img/intelligence.svg'
import gamedev from '../img/game-dev.svg'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title= {'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title= {'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML'} progress={'80%'} width={'80%'}/>
                <SkillsSection skill={'CSS'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Javascript'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Python'} progress={'75%'} width={'75%'}/>
                <SkillsSection skill={'Github'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Web Design'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'ReactJS'} progress={'70%'} width={'70%'}/>
                <SkillsSection skill={'Photoshop'} progress={'70%'} width={'70%'}/>
            </div>
            <Title title= {'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Web Design'} text={'text text text text text text'}/>
                <ServicesSection image={intelligence} title={'Artifical Intelligence'} text={'text text text text text text'}/>
                <ServicesSection image={gamedev} title={'Game Development'} text={'text text text text text text'}/>
            </div>
        </div>
    )
};

export default AboutPage;