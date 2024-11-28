// React imports
import { useState } from "react";

// data imports
import { devOpsSkills, fullStackSkills } from "@/data/HomeData";

// shadcn imports
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <Tabs defaultValue="fullstack" className="w-full">
            <TabsList className="grid w-full bg-transparent grid-cols-2 mb-4">
                <TabsTrigger
                    value="fullstack"
                    className="text-green-500 py-2 data-[state=active]:bg-green-500 data-[state=active]:text-black"
                >
                    Full Stack
                </TabsTrigger>
                <TabsTrigger
                    value="devops"
                    className="text-green-500 py-2 data-[state=active]:bg-green-500 data-[state=active]:text-black"
                >
                    DevOps
                </TabsTrigger>
            </TabsList>
            <TabsContent value="fullstack">
                <div className="space-y-4">
                    {fullStackSkills.map((skill) => (
                        <SkillBar
                            key={skill.name}
                            skill={skill}
                            hoveredSkill={hoveredSkill}
                            setHoveredSkill={setHoveredSkill}
                        />
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="devops">
                <div className="space-y-4">
                    {devOpsSkills.map((skill) => (
                        <SkillBar
                            key={skill.name}
                            skill={skill}
                            hoveredSkill={hoveredSkill}
                            setHoveredSkill={setHoveredSkill}
                        />
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    );
}

interface Skill {
    name: string;
    icon: React.ReactNode;
    level: number;
}

interface SkillBarProps {
    skill: Skill;
    hoveredSkill: string | null;
    setHoveredSkill: (skillName: string | null) => void;
}

const SkillBar: React.FC<SkillBarProps> = ({
    skill,
    hoveredSkill,
    setHoveredSkill,
}) => {
    return (
        <div
            className="flex items-center transition-all duration-300 ease-in-out transform hover:scale-105"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
        >
            <span className="w-32 text-green-400 font-medium flex items-center">
                {skill.icon}
                <span className="ml-2">{skill.name}</span>
            </span>
            <div className="flex-1 bg-green-900 rounded-full h-2 ml-4">
                <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                        width:
                            hoveredSkill === skill.name
                                ? `${skill.level}%`
                                : `${skill.level}%`,
                    }}
                ></div>
            </div>
            <span className="ml-4 text-green-400">{skill.level}%</span>
        </div>
    );
};
