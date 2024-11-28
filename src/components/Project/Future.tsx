import { Rocket, Lightbulb } from "lucide-react";

type FutureProps = {
    future: {
        futureEnhancements: string[];
    };
};

export default function Future({ future }: FutureProps) {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-green-500 items-center flex mb-4">
                <Rocket className="mr-2 h-6 w-6" />
                Potential Future Enhancements
            </h2>
            <ul className="list-none space-y-2">
                {future.futureEnhancements.map((enhancement, index) => (
                    <li key={index} className="flex items-start">
                        <Lightbulb className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                        <span>{enhancement}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
