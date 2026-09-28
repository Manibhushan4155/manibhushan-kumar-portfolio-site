import React, { useState } from 'react';

export const GeometricProfileVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Nodes for neural network visual representing competencies
  const nodes = [
    { id: 1, cx: 140, cy: 110, r: 5, label: "Machine Learning", color: "#60A5FA" },
    { id: 2, cx: 260, cy: 90, r: 6, label: "NLP", color: "#818CF8" },
    { id: 3, cx: 340, cy: 160, r: 5, label: "Computer Vision", color: "#A78BFA" },
    { id: 4, cx: 330, cy: 290, r: 6, label: "Data Analysis", color: "#38BDF8" },
    { id: 5, cx: 240, cy: 360, r: 5, label: "Python", color: "#818CF8" },
    { id: 6, cx: 120, cy: 310, r: 6, label: "Data Structures & Algorithms", color: "#60A5FA" },
    { id: 7, cx: 90, cy: 200, r: 5, label: "DBMS & MySQL", color: "#A78BFA" },
    { id: 8, cx: 200, cy: 200, r: 8, label: "AI & Data Science", color: "#3B82F6" },
  ];

  const edges = [
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 1],
    [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7],
    [1, 4], [2, 5], [3, 6], [7, 3]
  ];

  return (
    <div
      className="relative w-full max-w-[440px] aspect-square mx-auto flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setActiveNode(null);
      }}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-violet-600/15 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow" />

      {/* Main geometric canvas */}
      <div className="relative w-full h-full p-4 rounded-3xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-md shadow-2xl overflow-hidden flex items-center justify-center group transition-all duration-500 hover:border-blue-500/30">
        
        {/* Subtle background matrix grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Decorative corner indicators */}
        <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-500/70 tracking-wider">
          AI & DATA SCIENCE
        </div>
        <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-500/70 tracking-wider">
          EXPECTED 2027
        </div>
        <div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-500/70 tracking-wider">
          POORNIMA COLLEGE OF ENGINEERING
        </div>
        <div className="absolute bottom-3 right-3 text-[10px] font-mono text-blue-400/80 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
          SYSTEM
        </div>

        {/* SVG Geometric Network */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full max-w-[380px] max-h-[380px] transition-transform duration-700 ease-out"
          style={{
            transform: isHovered ? "scale(1.02)" : "scale(1)",
          }}
        >
          <defs>
            <linearGradient id="gradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="gradGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.9" />
            </linearGradient>

            <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#6366F1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center ambient glow circle */}
          <circle cx="200" cy="200" r="120" fill="url(#centerGlow)" />

          {/* Outer Orbital Rings */}
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="#1E293B"
            strokeWidth="1"
            strokeDasharray="4 6"
            className="animate-orbit origin-center"
          />
          <circle
            cx="200"
            cy="200"
            r="125"
            fill="none"
            stroke="#334155"
            strokeWidth="1"
            strokeDasharray="8 8"
            className="animate-orbit-reverse origin-center opacity-60"
          />
          <circle
            cx="200"
            cy="200"
            r="75"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="2 4"
          />

          {/* Network Edges */}
          {edges.map(([fromId, toId], idx) => {
            const from = nodes.find((n) => n.id === fromId)!;
            const to = nodes.find((n) => n.id === toId)!;
            const isHighlighted = activeNode === fromId || activeNode === toId;

            return (
              <line
                key={`edge-${idx}`}
                x1={from.cx}
                y1={from.cy}
                x2={to.cx}
                y2={to.cy}
                stroke={isHighlighted ? "#60A5FA" : "#1E293B"}
                strokeWidth={isHighlighted ? 1.75 : 1}
                strokeOpacity={isHighlighted ? 0.9 : 0.6}
                className="transition-colors duration-300"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const isHoveredNode = activeNode === node.id;
            return (
              <g
                key={`node-${node.id}`}
                className="cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                {/* Node halo */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={isHoveredNode ? node.r + 7 : node.r + 3}
                  fill={node.color}
                  fillOpacity={isHoveredNode ? 0.35 : 0.12}
                  className="transition-all duration-300"
                />
                {/* Node center point */}
                <circle
                  cx={node.cx}
                  cy={node.cy}
                  r={isHoveredNode ? node.r + 2 : node.r}
                  fill={isHoveredNode ? "#FFFFFF" : node.color}
                  stroke="#0A0F1D"
                  strokeWidth="2"
                  className="transition-all duration-200"
                />
              </g>
            );
          })}

          {/* Central Monogram Emblem Hexagon */}
          <g transform="translate(200, 200)">
            {/* Rotating central ring */}
            <circle
              cx="0"
              cy="0"
              r="38"
              fill="#0F172A"
              stroke="url(#gradPrimary)"
              strokeWidth="1.5"
              className="shadow-lg"
            />
            {/* Core stylized MK monogram */}
            <text
              x="0"
              y="6"
              textAnchor="middle"
              className="text-lg font-bold tracking-wider font-mono fill-white pointer-events-none"
              style={{ fontSize: "17px", fontWeight: 700 }}
            >
              MK
            </text>
          </g>
        </svg>

        {/* Hover inspection pill (clean contextual info) */}
        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-center pointer-events-none transition-all duration-300">
          <div className="text-xs font-mono text-blue-300 tracking-wide bg-slate-950/80 px-3 py-1 rounded border border-blue-500/20 backdrop-blur-sm shadow-md whitespace-nowrap">
            {activeNode
              ? nodes.find((n) => n.id === activeNode)?.label
              : "AI & Data Science · Poornima College of Engineering"}
          </div>
        </div>
      </div>
    </div>
  );
};
