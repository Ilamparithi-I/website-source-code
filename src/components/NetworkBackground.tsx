import { useEffect, useRef } from "react";

interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
}

export default function NetworkBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const nodes: Node[] = [];
        var numNodes = 200;
        var connectionDistance = 150;
        if (canvas.width < 1024 || canvas.height < 512) {
            numNodes = 100;
            connectionDistance = 100;
        }
        const maxSpeed = 0.5;

        for (let i = 0; i < numNodes; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * maxSpeed,
                vy: (Math.random() - 0.5) * maxSpeed,
            });
        }

        const animate = () => {
            // Clear the entire canvas with black background
            ctx.fillStyle = "rgba(0, 0, 0, 1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            nodes.forEach((node) => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                ctx.beginPath();
                ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = "#00ff00";
                ctx.fill();

                nodes.forEach((otherNode) => {
                    const dx = otherNode.x - node.x;
                    const dy = otherNode.y - node.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.strokeStyle = `rgba(0, 255, 0, ${
                            1 - distance / connectionDistance
                        })`;
                        ctx.stroke();
                    }
                });
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            // window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full -z-10"
            aria-hidden="true"
        />
    );
}
