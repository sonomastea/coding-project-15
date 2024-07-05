export default (skills)
return(
<div className='Skills'>
       <h2 className='title'>Skills</h2>
 {skills.map(skill, index) =>(
    <skill={skill.name} level={skill.level}

 )}
    

</div>
        )