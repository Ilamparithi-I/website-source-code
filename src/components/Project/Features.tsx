import { Activity, Star } from "lucide-react";

type FeaturesProps = {
    features: {
        features: string[];
    };
};

export default function Features({ features }: FeaturesProps) {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-green-500 items-center flex mb-4">
                <Activity className="mr-2 h-6 w-6" />
                Key Features
            </h2>
            <ul className="list-none space-y-2">
                {features.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <Star className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
