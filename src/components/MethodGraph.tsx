"use client";

import { ReactFlow, Position, type Node, type Edge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const nodeStyle: React.CSSProperties = {
  background: "#0a0a0a",
  border: "1px solid rgba(242,242,242,0.25)",
  borderRadius: 0,
  color: "#f2f2f2",
  fontFamily: "var(--font-geist-sans)",
  fontSize: 13,
  letterSpacing: "0.01em",
  textTransform: "uppercase",
  padding: "14px 18px",
  width: 420,
  textAlign: "left" as const,
};

/** Real node/edge graph (React Flow) — the working method as an ordered, connected sequence. */
export function MethodGraph({ items }: { items: readonly string[] }) {
  const nodes: Node[] = items.map((item, i) => ({
    id: `step-${i}`,
    position: { x: 0, y: i * 92 },
    data: {
      label: (
        <div className="flex items-baseline gap-3">
          <span className="mono text-[10px] opacity-45 shrink-0">{String(i + 1).padStart(2, "0")}</span>
          <span>{item}</span>
        </div>
      ),
    },
    style: nodeStyle,
    sourcePosition: Position.Bottom,
    targetPosition: Position.Top,
  }));

  const edges: Edge[] = items.slice(1).map((_, i) => ({
    id: `e-${i}`,
    source: `step-${i}`,
    target: `step-${i + 1}`,
    animated: true,
    style: { stroke: "rgba(242,242,242,0.3)", strokeWidth: 1 },
  }));

  return (
    <div className="w-full" style={{ height: items.length * 92 + 60 }}>
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
        fitViewOptions={{ padding: 0.15 }}
        proOptions={{ hideAttribution: true }}
      />
    </div>
  );
}
