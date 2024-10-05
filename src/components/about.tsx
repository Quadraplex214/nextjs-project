'use client';

import Image from "next/image";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Meteors } from "@/components/ui/meteors";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function AboutMeClient({ info }:any) {
    console.log('info', info);
    return (
        <div className="dark:bg-black-100">
            <div className="relative container mx-auto px-4 py-24">
                <CardSpotlight className="relative z-20 h-full overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 pointer-events-none">
                        <Meteors number={30} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-2/5 lg:w-1/3">
                            <BackgroundGradient className="aspect-[3/4] relative overflow-hidden rounded-lg bg-white dark:bg-zinc-900">
                                <Image
                                    src={`/Photo-Me.jpeg`}
                                    alt="jordans"
                                    height="300"
                                    width="700"
                                    className="object-contain"
                                />
                            </BackgroundGradient>
                        </div>
                        <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col z-20 justify-center space-y-4">
                            <h1 className="text-3xl font-bold">{info.name}</h1>
                            <p className="text-lg text-muted-foreground">
                                {info.proffesion}
                            </p>
                            <p className="text-muted-foreground">
                                {info.about}
                            </p>
                            <p className="text-muted-foreground">
                                {info.freetime}
                            </p>
                        </div>
                    </div>
                </CardSpotlight>
            </div>
        </div>
    );
}
