interface TitleProps{
    title: string
}

export default function Skill({ title }: Readonly<TitleProps>) {

    return (
        <div className="border-2 border-brand-secondary py-1 px-3 rounded-lg bg-accent-color-mint-green-100">
            <h3 className="font-semibold text-brand-primary"> {title} </h3>
        </div>
    );
};