import AboutMeClient from "@/components/about";

async function fetchInformation(): Promise<any> {
    const res = await fetch(`http://localhost:3000/about-me.json`);
    if (!res.ok) {
        throw new Error('Failed to fetch information');
    }
    const data = await res.json();
    return data[0]; 
}

export default async function AboutMe() {
    const info = await fetchInformation();
    
    return (
        <AboutMeClient info={info} />
    );
}
