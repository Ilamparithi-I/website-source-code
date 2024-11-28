import { Link } from "react-router-dom";
import { ChevronLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
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
                        <AlertTriangle className="inline-block mr-2 h-10 w-10" />
                    </h1>
                    <p className="text-xl text-green-400">
                        This page is like a unicorn... it doesn’t exist.
                    </p>
                </div>
            </div>
        </div>
    );
}
