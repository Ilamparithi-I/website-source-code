// React imports
import { Link } from "react-router-dom";

// data imports
import { projects } from "@/data/HomeData";

// shadcn imports
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// icon imports
import { Terminal } from "lucide-react";

export default function Projects() {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
                <Card
                    key={project.name}
                    className="bg-black border border-green-500 overflow-hidden group"
                >
                    <CardContent className="p-6 relative">
                        <div className="absolute top-0 left-0 w-full h-full bg-green-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                        <div className="relative z-10 transition-colors duration-300 group-hover:text-black">
                            <h3 className="text-xl font-semibold text-green-500 group-hover:text-black mb-2">
                                {project.name}
                            </h3>
                            <p className="text-green-400 group-hover:text-black mb-4">
                                {project.description}
                            </p>
                            <Button
                                variant="outline"
                                className="text-green-500 border-green-500 bg-transparent group-hover:text-black group-hover:border-black hover:bg-green-500"
                                asChild
                            >
                                <Link to={project.link}>
                                    View Project{" "}
                                    <Terminal className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
