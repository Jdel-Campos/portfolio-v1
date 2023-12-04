'use client'

import { GrDocumentDownload  } from 'react-icons/gr';
import Link from 'next/link';
import Skill from '../card/skill';

export default function SectionSkill() {

    return (
        <div id="about_skill" className="flex flex-col justify-around h-full">
                <div className="w-full bg-text-color-masala-50 flex flex-col items-center gap-8">
                    <div className="flex flex-col gap-6 px-20 pt-24 text-justify">
                        <h3 className="font-semibold text-xl decoration-brand-text text-brand-primary">About me</h3>
                        <p className="text-brand-primary font-medium text-justify"> I'm a Full Stack developer with a passion for technology, specializing in React.js, Next.js, Typescript and Python (Django). My skills include Express, Node.js, Nest.js, Tailwind CSS, Sass, UI Design, CSS and HTML. I'd like to highlight my experience in agile methodologies, particularly Scrum, where I've worked as a Scrum Master on academic projects, ensuring effective deliveries. In addition, I am exploring the world of design, with a focus on UI (User Interface) and Design, recognizing the fundamental importance of solid design in providing an exceptional user experience. Throughout my studies, I have developed several projects, continuing to seek knowledge and expand my repertoire. </p>
                    </div>
                </div>  
                <div className="w-full bg-text-color-masala-50 flex flex-col items-center gap-8 pb-20">
                    <div className="flex flex-col gap-6 px-20 pt-24 text-justify">
                        <h3 className="font-semibold text-xl decoration-brand-text text-brand-primary">Skills</h3>
                        <div className='w-full flex flex-wrap gap-2'>
                            <Skill title={'JAVASCRIPT'} />
                            <Skill title={'TYPESCRIPT'} />
                            <Skill title={'REACT.JS'} />
                            <Skill title={'CSS'} />
                            <Skill title={'HTML'} />
                            <Skill title={'SASS'} />
                            <Skill title={'NODE.JS'} />
                            <Skill title={'EXPRESS.JS'} />
                            <Skill title={'POSTGRESQL'} />
                            <Skill title={'PYTHON'} />
                            <Skill title={'TAILWIND'} />
                            <Skill title={'STYLED-COMPONENTS'} />
                            <Skill title={'DJANGO'} />
                            <Skill title={'PRISMA'} />
                            <Skill title={'GIT'} />
                            <Skill title={'SCRUM'} />
                            <Skill title={'VSCODE'} />
                            <Skill title={'POSTMAN'} />
                            <Skill title={'INSOMNIA'} />
                            <Skill title={'NEST.JS'} />
                            <Skill title={'NEXT.JS'} />
                            <Skill title={'MONGO DB'} />
                            <Skill title={'CYPRESS'} />
                            <Skill title={'ZUSTAND'} />
                            <Skill title={'GITLAB'} />
                            <Skill title={'FIGMA'} />
                        </div>
                    </div>
                </div> 
                <div className=" flex flex-col items-center pt-16 pb-20 bg-text-color-masala-50">
                    <p className="font-semibold text-lg underline decoration-brand-text text-brand-text"> Would you like to see CV? </p>
                    <div className="flex gap-2 hover:opacity-75">
                            <Link href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:8f6d39c3-2b40-3ea1-bb3c-060524e34a20" className="text-sm font-medium italic text-brand-secondary target"> Click here. </Link>
                            <GrDocumentDownload className="text-brand-secondary "/>
                    </div>
                </div>
        </div>
    );
};