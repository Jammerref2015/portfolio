import React from 'react';
import Title from '../components/Title'
import ImageSection from '../components/ImageSection';
import SkillsSection from '../components/SkillsSection';

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
        </div>
    )
};

export default AboutPage;