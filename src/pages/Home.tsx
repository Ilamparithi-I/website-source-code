//  React imports
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// shadcn imports
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// component imports
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";
import Experiences from "@/components/Home/Experiences";
import Certifications from "@/components/Home/Certifications";

// icon imports
import { LuMail as Mail } from "react-icons/lu";
import { SiGithub as Github, SiLinkedin as Linkedin } from "react-icons/si";

export default function Component() {
    const [activeTab, setActiveTab] = useState("about");
    const [typedText, setTypedText] = useState("");
    const fullText = "Hello, World! This is Ilam.";

    useEffect(() => {
        const typeText = async () => {
            for (let i = 0; i <= fullText.length; i++) {
                setTypedText(fullText.slice(0, i));
                await new Promise((resolve) => setTimeout(resolve, 50));
            }
        };
        typeText();
    }, []);

    return (
        <div className="min-h-screen text-green-500 py-12 px-4 sm:px-6 lg:px-8 font-mono">
            <div className="max-w-4xl mx-auto">
                <div className="text-center bg-black bg-opacity-95 mb-12 border border-green-500 rounded-lg p-8 shadow-lg shadow-green-500/20">
                    <div className="relative w-40 h-40 mx-auto mb-4 bg-black">
                        <img
                            src="/profile.jpg?height=160&width=160"
                            alt="Profile Picture"
                            className="rounded-full border-2 border-green-500 opacity-60"
                        />
                    </div>
                    <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-green-500">
                        <span className="inline-block border-r-2 border-green-500 pr-1 animate-blink">
                            {typedText}
                        </span>
                    </h1>
                </div>
                <Tabs
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="border bg-black bg-opacity-95 border-green-500 rounded-lg overflow-hidden mb-8"
                >
                    <TabsList className="w-full grid grid-cols-5 bg-transparent">
                        <TabsTrigger
                            value="about"
                            className="text-green-500 py-3 data-[state=active]:bg-green-500 data-[state=active]:text-black"
                        >
                            About
                        </TabsTrigger>
                        <TabsTrigger
                            value="skills"
                            className="text-green-500 py-3 data-[state=active]:bg-green-500 data-[state=active]:text-black"
                        >
                            Skills
                        </TabsTrigger>
                        <TabsTrigger
                            value="projects"
                            className="text-green-500 py-3 data-[state=active]:bg-green-500 data-[state=active]:text-black"
                        >
                            Projects
                        </TabsTrigger>
                        <TabsTrigger
                            value="experience"
                            className="text-green-500 py-3 data-[state=active]:bg-green-500 data-[state=active]:text-black"
                        >
                            Experience
                        </TabsTrigger>
                        <TabsTrigger
                            value="certifications"
                            className="text-green-500 py-3 data-[state=active]:bg-green-500 data-[state=active]:text-black"
                        >
                            Certs.
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="about" className="p-6">
                        <About />
                    </TabsContent>
                    <TabsContent value="skills" className="p-6">
                        <Skills />
                    </TabsContent>
                    <TabsContent value="projects" className="p-6">
                        <Projects />
                    </TabsContent>
                    <TabsContent value="experience" className="p-6">
                        <Experiences />
                    </TabsContent>
                    <TabsContent value="certifications" className="p-6">
                        <Certifications />
                    </TabsContent>
                </Tabs>
                <div className="flex justify-center space-x-4 mb-8">
                    <Button
                        size="lg"
                        className="bg-green-500 text-black hover:bg-green-600"
                    >
                        <Link
                            to="https://github.com/Ilamparithi-I"
                            target="_blank"
                            className="flex items-center"
                        >
                            <Github className="mr-2 h-5 w-5" />
                            GitHub
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        className="bg-green-500 text-black hover:bg-green-600"
                    >
                        <Link
                            to="https://www.linkedin.com/in/ilamparithi-i"
                            target="_blank"
                            className="flex items-center"
                        >
                            <Linkedin className="mr-2 h-5 w-5" />
                            LinkedIn
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        className="bg-green-500 text-black hover:bg-green-600"
                    >
                        <Link
                            to="mailto:contact@ilam.page"
                            target="_blank"
                            className="flex items-center"
                        >
                            <Mail className="mr-2 h-5 w-5" />
                            Email
                        </Link>
                    </Button>
                </div>{" "}
            </div>
        </div>
    );
}
