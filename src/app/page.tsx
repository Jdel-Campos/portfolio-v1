'use client';

import SectionHeader from '@/components/header/section_header';
import SectionHome from '@/components/home/section_home';
import SectionSkill from '@/components/skill/section_skill';
import SectionProject from '@/components/project/section_project';
import SectionFooter from '@/components/footer/section_footer';


export default function Home() {
    return (
        <main className='relative'>
            <SectionHeader  />
            <SectionHome />
            <SectionSkill />
            <SectionProject />
            <SectionFooter />
        </main>
    )
};