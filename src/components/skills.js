import '../App.css';
import {Header} from './header'
import { Footer } from './footer';
import Skill from './skill';



function Skills() {
 
  return (
    <div className="skills">
      <Header/>
      <section id="skillsSection">
      <div className="container">
        <h2>Skills</h2>
        <section className='skillsSection'>
        <Skill
        name='TypeScript'
        imageUrl='https://raw.githubusercontent.com/rmolinamir/typescript-cheatsheet/master/TypeScript.png'
        description='Applied TypeScript proficiently during internship for robust, typed JavaScript development.'
        experience='Professional'
        />
         <Skill
        name='JavaScript'
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
        description='Acquired foundational JavaScript knowledge from a course, solidified through extensive practical application.'
        experience= 'Professional, Personal, Educational'
        />
        <Skill
          name='React JS'
          imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
          description='Self-taught React enthusiast; honed expertise via personal projects, transitioning to professional utilization.'
          experience= 'Professional, Personal'
        />
         <Skill
        name='C#'
        imageUrl='https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png'
        description='Acquired C# skills in school for game development, later utilized professionally in API development.'
        experience= 'Professional, Educational'
        />
        
        <Skill
        name='HTML5 + CSS3'
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/2560px-CSS3_and_HTML5_logos_and_wordmarks.svg.png'
        description='Initially acquired HTML5+CSS3 basics in school; furthered through personal endeavors and professional applications.'
        experience='Professional, Educational, Personal'
        />
        <Skill
        name='Git'
        imageUrl='https://avatars.githubusercontent.com/u/18133?s=280&v=4'
        description='Employed Git for version control across many projects, integrating with GitHub and Azure for collaboration and deployment.'
        experience= 'Professional, Educational, Personal'
        />
        <Skill
        name='Node'
        imageUrl='https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png'
        description='Learned Node.js in backend development and web services classes, employing Express; applied for personal REST APIs.'
        experience= 'Educational, Personal'
        />
         <Skill
        name='SQL'
        imageUrl='https://ojt.com/wp-content/uploads/2021/08/sql.png'
        description='Acquired SQL proficiency in database design courses, experienced in constructing relational databases using MySQL.'
        experience='Educational'
        />
        <Skill
        name='MongoDB'
        imageUrl='https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png'
        description='Gained MongoDB expertise in web service class, exploring non-relational database concepts.'
        experience= 'Educational, Personal'
        />
       
        <Skill
        name='Python'
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png'
        description='Started with Python as my first language, initially for simple projects, later leveraging Pandas for data science tasks.'
        experience='Educational'
        />
        <Skill
        name='Svelte'
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1702px-Svelte_Logo.svg.png'
        description='Learned and employed Svelte for various web frontend projects.'
        experience= 'Educational'
        />
         <Skill
        name='React Native'
        imageUrl='https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png'
        description='Self-learned React Native, applied in various personal projects for practical experience.'
        experience= 'Personal'
        />
        <Skill
        name='PHP'
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png'
        description='Studied PHP in a backend web class, utilized PHPMyAdmin for database management.'
        experience= 'Educational'
        />
        <Skill
        name='Firebase'
        imageUrl='https://cdn.icon-icons.com/icons2/2699/PNG/512/firebase_logo_icon_171157.png'
        description='Self-taught Firebase for personal projects, focusing on non-relational database design—an initial exposure to non-relational databases.'
        experience= 'Personal'
        />
        <Skill
        name='Figma'
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png'
        description='Utilized Figma for hackathon project design and in a user experience design and research class.'
        experience= 'Educational, Personal'
        />
       <Skill
        name='Angular'
        imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
        description='Self taught Angular to make web apps.'
        experience='Personal'
        />
        
          
        </section>
      </div>
    </section>
     <Footer/>
    </div>
  );
}

export {Skills} ;
