// Header photo
// realiti.express
// October 18-19, 2024
// House 10, Tallinn
// “Buy a ticket” ja “Add to calendar” buttons


const heroContent: HeroContent = {
    title: 'realiti.express'
};

export type HeroContent = {
    title: string;
}

export async function getHeroContent(): Promise<HeroContent> {
    return heroContent;
}