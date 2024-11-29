import { LuDatabase as Database } from "react-icons/lu";
import {
    SiGithub as Github,
    SiPython as Python,
    SiNodedotjs as NodeJS,
    SiReact as ReactJS,
    SiDocker as Docker,
    SiKubernetes as Kubernetes,
    SiAnsible as Ansible,
    SiTerraform as Terraform,
    SiAmazonwebservices as AWS,
    SiMicrosoftazure as Azure,
    SiSpringboot as SpringBoot,
    SiJest as Jest,
    SiDotnet as DotNet,
    SiJenkins as Jenkins,
} from "react-icons/si";

export const fullStackSkills = [
    { name: "Node.js", level: 90, icon: <NodeJS className="w-5 h-5" /> },
    { name: "Python", level: 90, icon: <Python className="w-5 h-5" /> },
    {
        name: "Spring Boot",
        level: 60,
        icon: <SpringBoot className="w-5 h-5" />,
    },
    { name: ".Net", level: 60, icon: <DotNet className="w-5 h-5" /> },
    { name: "React", level: 80, icon: <ReactJS className="w-5 h-5" /> },
    {
        name: "PostgreSQL",
        level: 80,
        icon: <Database className="w-5 h-5" />,
    },
    { name: "MongoDB", level: 80, icon: <Database className="w-5 h-5" /> },
    { name: "Jest", level: 70, icon: <Jest className="w-5 h-5" /> },
];

export const devOpsSkills = [
    {
        name: "AWS",
        level: 80,
        icon: <AWS className="w-5 h-5" />,
    },
    {
        name: "Azure",
        level: 80,
        icon: <Azure className="w-5 h-5" />,
    },
    {
        name: "Terraform",
        level: 80,
        icon: <Terraform className="w-5 h-5" />,
    },
    {
        name: "Ansible",
        level: 60,
        icon: <Ansible className="w-5 h-5" />,
    },
    {
        name: "GH Actions",
        level: 80,
        icon: <Github className="w-5 h-5" />,
    },
    {
        name: "Jenkins",
        level: 60,
        icon: <Jenkins className="w-5 h-5" />,
    },
    { name: "Docker", level: 80, icon: <Docker className="w-5 h-5" /> },
    {
        name: "Kubernetes",
        level: 60,
        icon: <Kubernetes className="w-5 h-5" />,
    },
];

export const projects = [
    {
        name: "CourseQA",
        description:
            "A course document based Q&A platform for students to ask questions",
        link: "/projects/CourseQA",
    },
    {
        name: "BookIt",
        description:
            "A study space booking and browsing app solution for UBC students",
        link: "/projects/BookIt",
    },
    {
        name: "Portfolio Website",
        description:
            "A personal portfolio website to showcase projects and skills",
        link: "/projects/PortfolioWebsite",
    },
    {
        name: "Web Application Attack Sandbox",
        description:
            "A web application for students to learn about web application attacks",
        link: "/projects/WebAppAttackSB",
    },
];

export const experiences = [
    {
        title: "Cloud Engineer",
        company: "Qonsult Systems Pvt. Ltd.",
        period: "May 2023 - Aug 2023",
    },
    {
        title: "Software Engineer",
        company: "Qonsult Systems Pvt. Ltd.",
        period: "May 2022 - Aug 2022",
    },
];

export const certifications = [
    {
        name: "Microsoft Certified Azure Developer Associate",
        code: "AZ-204",
        icon: <Azure className="w-5 h-5" />,
        link: "https://learn.microsoft.com/en-us/users/ilamparithiimayavaramban-8027/credentials/3ae0f849514670bf",
    },
    {
        name: "AWS Certified SysOps Administrator - Associate",
        code: "SOA-C02",
        icon: <AWS className="w-5 h-5" />,
        link: "https://www.credly.com/badges/1147dde1-eca8-47f4-bd96-d0462e6c295d/",
    },
    {
        name: "HashiCorp Certified: Terraform Associate",
        code: "HCTA0-003",
        icon: <Terraform className="w-5 h-5" />,
        link: "https://www.credly.com/badges/da47d143-4bd1-4e0f-b086-8d441449e0aa/",
    },
    {
        name: "Microsoft Certified Azure Fundamentals",
        code: "AZ-900",
        icon: <Azure className="w-5 h-5" />,
        link: "https://learn.microsoft.com/api/credentials/share/en-us/IlamparithiImayavaramban-8027/918DFF5EAA17D3F3?sharingId=48F671554387996E",
    },
    {
        name: "Microsoft Certified Azure AI Fundamentals",
        code: "AI-900",
        icon: <Azure className="w-5 h-5" />,
        link: "https://learn.microsoft.com/en-us/users/ilamparithiimayavaramban-8027/credentials/c631e68778053153",
    },
];
