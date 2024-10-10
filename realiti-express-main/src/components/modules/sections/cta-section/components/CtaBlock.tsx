import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";


export function CtaBlock({ title, description, buttonText }: { title: string, description: string, buttonText: string }) {
    return (
        <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 items-center">
            <div>
                <h2 className="text-7xl text-realiti-gray-light z-10 w-full font-semibold mb-6">{title}</h2>
                <Button variant={'outline'} size={'2xl'} asChild>
                    <Link href="#tickets">
                        {buttonText}
                    </Link>
                </Button>
            </div>
            <div className=" z-10 w-full font-sanchez text-white">
                <p>{description}</p>
            </div>
        </div>
    )
}
