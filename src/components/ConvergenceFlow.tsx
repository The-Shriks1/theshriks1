"use client";

import { ReactFlow, Background, BackgroundVariant, Position, type Node, type Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const LABELS = ["ENGAGEMENT", "INVESTMENT", "PRESS", "COLLABORATION"];

const nodeStyle: React.CSSProperties = {
  background: "#0a0a0a",
  border: "1px solid rgba(242,242,242,0.25)",
  borderRadius: 0,
  color: "#f2f2f2",
  fontFamily: "var(--font-geist-mono)",
  fontSize: 10,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  padding: "10px 14px",
  width: 150,
};

const nodes: Node[] = [
  ...LABELS.map((label, i) => ({
    id: `src-${i}`,
    position: { x: 0, y: i * 70 },
    data: { label },
    style: nodeStyle,
    sourcePosition: Position.Right,
  })),
  {
    id: "inbox",
    position: { x: 320, y: 95 },
    data: {
      label: (
        <div className="text-center">
          <div className="caps font-semibold text-[12px]">INBOX</div>
          <div className="mono text-[8px] opacity-55 mt-1">ONE READING</div>
        </div>
      ),
    },
    style: {
      ...nodeStyle,
      width: 120,
      borderRadius: "50%",
      height: 120,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid rgba(42,138,90,0.6)",
      boxShadow: "0 0 24px rgba(42,138,90,0.15)",
    },
    targetPosition: Position.Left,
  },
];

const edges: Edge[] = LABELS.map((_, i) => ({
  id: `e-${i}`,
  source: `src-${i}`,
  target: "inbox",
  animated: true,
  style: { stroke: "rgba(242,242,242,0.25)", strokeWidth: 1 },
}));

/** Real node/edge graph (React Flow) — four intent types converging on one inbox. */
export function ConvergenceFlow() {
  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        fitView
        fitViewOptions={{ padding: 0.25 }}
        proOptions={{ hideAttribution: true }}
      >
        <Background variant={BackgroundVariant.Dots} gap={16} size={0.6} color="rgba(242,242,242,0.12)" />
      </ReactFlow>
    </div>
  );
}
