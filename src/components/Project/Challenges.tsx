import { AlertTriangle, Terminal } from "lucide-react";

type ChallengesProps = {
    challenges: {
        challenges: string[];
    };
};

export default function Challenges({ challenges }: ChallengesProps) {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-green-500 items-center flex mb-4">
                <AlertTriangle className="mr-2 h-6 w-6" />
                Technical Challenges
            </h2>
            <ul className="list-none space-y-2">
                {challenges.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                        <Terminal className="mr-2 h-5 w-5 mt-1 flex-shrink-0" />
                        <span>{challenge}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
