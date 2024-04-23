import React from 'react'

import SkillsLanguages from './SkillsLanguages'
import Skillsitem from './Skillsitem'

const Skills = () => {
  return (
    
    <div id="education&skills" className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        
        <h1 className='heading'>Education & <span className='text-yellow-400'>Skill</span></h1>
        <Skillsitem />
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-2 md:grid-cols-5 gap-[2rem] items-center'>
        
        
        <div>
            
            <SkillsLanguages skill1="html" skill2="css" skill3="javascript" skill4="reactjs" 
            level1="w-[91%]" level2="w-[88%]" level3='w-[88%]'
            level4="w-[91%]" 
            />
        </div>
        <div>
            
            <SkillsLanguages skill1="JQuery" skill2="Bootstrap" skill3="Spring" skill4="SDLC" 
            level1="w-[91%]" level2="w-[88%]" level3='w-[88%]'
            level4="w-[91%]" 
            />
        </div>
        <div>
            
            <SkillsLanguages skill1="WireFraming" skill2="Prototyping" skill3="StoryBoarding" skill4="API" 
            level1="w-[91%]" level2="w-[88%]" level3='w-[88%]'
            level4="w-[91%]" 
            />
        </div>
        <div>
            
            <SkillsLanguages skill1="Git" skill2="MYSQL" skill3="MongoDB" skill4="Communication" 
            level1="w-[91%]" level2="w-[88%]" level3='w-[88%]'
            level4="w-[91%]" 
            />
        </div>
        <div>
            
            <SkillsLanguages skill1="Big Data Management" skill2="nextjs" skill3="Figma" skill4="PowerApp" 
            level1="w-[91%]" level2="w-[88%]" level3='w-[88%]'
            level4="w-[91%]" 
            />
        </div>
        </div>
        
    </div>
  )
}

export default Skills