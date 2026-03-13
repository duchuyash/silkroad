"use client";

import { useEffect, useRef } from "react";

export default function RenderChart17({size, lineWidth, rotate}:any) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    var options = {
        size: size ? parseInt(size) : 70,
        lineWidth: lineWidth ? parseInt(lineWidth) : 11,
        rotate: rotate ? parseInt(rotate) : 145,
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = options.size;
        canvas.height = options.size;

        ctx.translate(options.size / 2, options.size / 2);
        ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

        const radius = (options.size - options.lineWidth) / 2;

        const drawCircle = (color: string, percent: number) => {
            percent = Math.min(Math.max(0, percent), 1);

            ctx.beginPath();
            ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
            ctx.strokeStyle = color;
            ctx.lineWidth = options.lineWidth;
            ctx.lineCap = "round";
            ctx.stroke();
        };

        drawCircle("#E4E6EF", 1);
        drawCircle("#0d6efd", 100 / 150);
        drawCircle("#198754", 100 / 250);

    }, []);

    return <canvas ref={canvasRef}></canvas>;
}