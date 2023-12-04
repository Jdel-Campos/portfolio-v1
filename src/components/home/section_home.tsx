'use client'

export default function SectionHome() {
    return (

        <div id="home" className="pt-[220px] pb-[150px] px-20 h-screen flex justify-center items-center bg-brand-background">
            <div className="flex flex-col justify-between h-[330px] items-center">
                <div className="flex flex-col gap-10 justify-center items-center">
                    <h2 className="font-bold italic text-5xl text-brand-primary"> FullStack Developer </h2>
                    <p className="px-20 text-xl text-center text-brand-text"> I&apos;m <span className="font-semibold text-brand-secondary text-center">Jardel Campos</span>, and I&apos;m here to showcase my work. If you have any questions or would like to discuss a project, feel free to reach out. Let&apos;s create something amazing together! </p>
                </div>
                <div>
                    <a href="https://linkwhats.app/e732a5" target="_blank" className="border-[1px] border-brand-secondary py-3 px-8 rounded-full w-[245px] flex items-center justify-center hover:opacity-75 cursor-pointer">
                        <p className="font-bold text-lg text-brand-secondary underline decoration-brand-primary italic"> Let&apos;s Get Started! </p>
                    </a>
                </div>
            </div>
        </div>

    );
};