import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type OverviewProps = {
    overview: {
        description: string;
        techStack: string[];
    };
};

export default function Overview({ overview }: OverviewProps) {
    return (
        <div>
            <h2 className="text-3xl font-semibold text-green-500 items-center flex mb-4">
                <Eye className="mr-2 h-6 w-6" />
                Project Overview
            </h2>
            <p className="text-green-400 mb-6">{overview.description}</p>
            <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
                {overview.techStack.map((tech) => (
                    <Badge
                        key={tech}
                        className="bg-green-500 text-black hover:bg-green-600 rounded-full"
                    >
                        {tech}
                    </Badge>
                ))}
            </div>
        </div>
    );
}
