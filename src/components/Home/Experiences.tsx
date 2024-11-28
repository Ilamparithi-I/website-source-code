// data imports
import { experiences } from "@/data/HomeData";

export default function Experiences() {
    return (
        <div className="space-y-6">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="border border-green-500 rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-black group"
                >
                    <h3 className="text-xl font-semibold text-green-500 group-hover:text-black">
                        {exp.title}
                    </h3>
                    <p className="text-green-400 group-hover:text-black">
                        {exp.company}
                    </p>
                    <p className="text-green-400 text-sm group-hover:text-black">
                        {exp.period}
                    </p>
                </div>
            ))}
        </div>
    );
}
