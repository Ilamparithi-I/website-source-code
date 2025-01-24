// React imports
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

// data imports
import Projects from "@/data/ProjectsData";

// shadcn imports
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// page imports
import NotFound from "@/pages/NotFound";

// component imports
import Overview from "@/components/Project/Overview";
import Features from "@/components/Project/Features";
import Challenges from "@/components/Project/Challenges";
import Future from "@/components/Project/Future";

// icon imports
import {
    ExternalLink,
    Terminal,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { SiGithub as Github } from "react-icons/si";

export default function Project() {
    const { proj } = useParams<{ proj: string }>() as { proj: string };
    const [activeTab, setActiveTab] = useState("overview");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const project = Projects(proj);

    if (project === undefined) {
        return <NotFound />;
    }

    const nextImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex + 1) % project.images.length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) =>
                (prevIndex - 1 + project.images.length) % project.images.length
        );
    };

    return (
        <div className="min-h-screen text-green-500 py-12 px-4 sm:px-6 lg:px-8 font-mono">
            <div className="max-w-4xl mx-auto">
                <Button
                    variant="outline"
                    size="lg"
                    className="p-3 bg-black border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors duration-300 mb-8"
                    asChild
                >
                    <Link to="/">
                        <ChevronLeft className="h-5 w-5" /> Back
                    </Link>
                </Button>
                <div className="text-center mb-12 bg-black bg-opacity-90 border border-green-500 rounded-lg p-8 shadow-lg shadow-green-500/20">
                    <h1 className="text-4xl font-bold mb-4">
                        <Terminal className="inline-block mr-2 h-10 w-10" />
                        {project.name}
                    </h1>
                    <p className="text-xl text-green-400">{project.overview}</p>
                </div>

                <div className="mb-12 relative">
                    <div className="relative h-[400px] md:h-[500px] rounded-lg bg-black border-2 border-green-500 overflow-hidden">
                        {project.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Project screenshot ${index + 1}`}
                                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                                    index === currentImageIndex
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                            />
                        ))}
                        <div className="absolute inset-0"></div>
                    </div>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous image</span>
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 border-green-500 text-green-500 hover:bg-green-500 hover:text-black"
                        onClick={nextImage}
                    >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next image</span>
                    </Button>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {project.images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    index === currentImageIndex
                                        ? "bg-green-500"
                                        : "bg-green-500/50"
                                }`}
                                onClick={() => setCurrentImageIndex(index)}
                            >
                                <span className="sr-only">
                                    Go to image {index + 1}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center space-x-4 mb-8">
                    {project.githubLink && (
                        <Button
                            size="lg"
                            className="bg-green-500 text-black hover:bg-green-600"
                            asChild
                        >
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github className="mr-2 h-5 w-5" />
                                View Source
                            </a>
                        </Button>
                    )}
                    {project.liveLink && (
                        <Button
                            size="lg"
                            className="bg-green-500 text-black hover:bg-green-600"
                            asChild
                        >
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ExternalLink className="mr-2 h-5 w-5" />
                                Live
                            </a>
                        </Button>
                    )}
                </div>

                {/* Dropdown for small screens */}
                <div className="sm:hidden mb-8">
                    <select
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                        className="w-full bg-black text-green-500 border border-green-500 rounded-lg py-3 px-4"
                    >
                        <option value="overview">Overview</option>
                        <option value="features">Features</option>
                        <option value="challenges">Challenges</option>
                        <option value="future">Future</option>
                    </select>
                </div>
                {/* Tabs for larger screens */}
                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="hidden sm:block border bg-black bg-opacity-95 border-green-500 rounded-lg overflow-hidden mb-8"
                >
                    <TabsList className="w-full grid grid-cols-4 bg-transparent">
                        <TabsTrigger
                            value="overview"
                            className="text-green-500 py-3 data-[state=active]:bg-green-500 data-[state=active]:text-black"
                        >
                            Overview
                        </TabsTrigger>
                        <TabsTrigger
                            value="features"
                            className="text-green-500 py-3 data-[state=active]:bg-green-500 data-[state=active]:text-black"
                        >
                            Features
                        </TabsTrigger>
                        <TabsTrigger
                            value="challenges"
                            className="text-green-500 py-3 data-[state=active]:bg-green-500 data-[state=active]:text-black"
                        >
                            Challenges
                        </TabsTrigger>
                        <TabsTrigger
                            value="future"
                            className="text-green-500 py-3 data-[state=active]:bg-green-500 data-[state=active]:text-black"
                        >
                            Future
                        </TabsTrigger>
                    </TabsList>

                    {/* Tabs Content for Larger Screens */}
                    <TabsContent
                        value="overview"
                        className="p-6 bg-black bg-opacity-80 rounded-lg"
                    >
                        <Overview
                            overview={{
                                description: project.description,
                                techStack: project.techStack,
                            }}
                        />
                    </TabsContent>
                    <TabsContent
                        value="features"
                        className="p-6 bg-black bg-opacity-80 rounded-lg"
                    >
                        <Features features={{ features: project.features }} />
                    </TabsContent>
                    <TabsContent
                        value="challenges"
                        className="p-6 bg-black bg-opacity-80 rounded-lg"
                    >
                        <Challenges
                            challenges={{ challenges: project.challenges }}
                        />
                    </TabsContent>
                    <TabsContent
                        value="future"
                        className="p-6 bg-black bg-opacity-80 rounded-lg"
                    >
                        <Future
                            future={{
                                futureEnhancements: project.futureEnhancements,
                            }}
                        />
                    </TabsContent>
                </Tabs>

                {/* Tab Contents for Small Screens (Dropdown view) */}
                <div className="sm:hidden">
                    {activeTab === "overview" && (
                        <div className="sm:block border bg-black bg-opacity-95 border-green-500 rounded-lg overflow-hidden mb-8 p-6 ">
                            <Overview
                                overview={{
                                    description: project.description,
                                    techStack: project.techStack,
                                }}
                            />
                        </div>
                    )}
                    {activeTab === "features" && (
                        <div className="sm:block border bg-black bg-opacity-95 border-green-500 rounded-lg overflow-hidden mb-8 p-6 ">
                            <Features
                                features={{ features: project.features }}
                            />
                        </div>
                    )}
                    {activeTab === "challenges" && (
                        <div className="sm:block border bg-black bg-opacity-95 border-green-500 rounded-lg overflow-hidden mb-8 p-6 ">
                            <Challenges
                                challenges={{ challenges: project.challenges }}
                            />
                        </div>
                    )}
                    {activeTab === "future" && (
                        <div className="sm:block border bg-black bg-opacity-95 border-green-500 rounded-lg overflow-hidden mb-8 p-6 ">
                            <Future
                                future={{
                                    futureEnhancements:
                                        project.futureEnhancements,
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
