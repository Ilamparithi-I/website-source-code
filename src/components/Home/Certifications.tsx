// React imports
import { Link } from "react-router-dom";

// data imports
import { certifications } from "@/data/HomeData";

// shadcn imports
import { Button } from "@/components/ui/button";

// icon imports
import { ChevronRight } from "lucide-react";

export default function Certifications() {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, index) => (
                <div
                    key={index}
                    className="border border-green-500 rounded-lg p-4 transition-all duration-300 ease-in-out hover:bg-green-500 hover:text-black group flex flex-col justify-between"
                >
                    <div>
                        <div className="flex items-center mb-2">
                            <div className="w-6 h-6">{cert.icon}</div>
                            <h3 className="text-lg font-semibold text-green-500 group-hover:text-black ml-2">
                                {cert.name}
                            </h3>
                        </div>
                    </div>
                    {cert.link && (
                        <div>
                            <p className="text-green-400 group-hover:text-black text-sm">
                                {cert.code}
                            </p>
                            <Button
                                variant="outline"
                                className="text-green-500 border-green-500 bg-transparent group-hover:text-black group-hover:border-black mt-2 hover:bg-green-500"
                                asChild
                            >
                                <Link to={cert.link} target="_blank">
                                    View Certificate{" "}
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
