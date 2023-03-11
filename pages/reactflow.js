import ReactFlow, {
  Controls,
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  ReactFlowInstance,
  Background,
  ReactFlowProvider,
} from "reactflow";

import { useCallback } from "react";
import React from "react";
import "reactflow/dist/style.css";
import Navbar from "../components/Navbar";
import StartNode from "../components/reactflow/StartNode";
import MiddleNode from "../components/reactflow/MiddleNode";
import EndNode from "../components/reactflow/EndNode";
const nodeTypes = {
  start: StartNode,
  middle: MiddleNode,
  end: EndNode,
};
const initialNodes = [
  {
    id: "1",
    type: "start",
    data: { label: "Start Designing Coupon" },
    position: { x: 100, y: 5 },
  },
  {
    id: "2",
    type: "middle",
    data: { label: "Add data" },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "end",
    data: { label: "Pick Customers to publish" },
    position: { x: 100, y: 200 },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "2", target: "3", animated: true },
];

const ReactFlowPage = () => {
  const selectedNodeStyle = {
    background: "#0080FB",
    color: "#fff",
    border: "1px solid #0080FB",
  };

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const onNodesClick = (e, object) => {
    let nodes = [...initialNodes];
    console.log({ nodes });
    nodes = nodes.map((node) => {
      if (node.id === object.id) {
        node.data.style = selectedNodeStyle;
        return { ...node };
      } else {
        delete node.data.style;
        return node;
      }
    });
    setNodes(nodes);
  };
  return (
    <div className="h-screen ">
      <Navbar />
      <div className="w-[50vw] h-screen">
        <ReactFlowProvider>
          <Controls />
          <ReactFlow
            nodes={nodes}
            onNodesChange={onNodesChange}
            edges={edges}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            nodeTypes={nodeTypes}
            onNodeClick={onNodesClick}
            style={{ background: "#F6F7FC", borderRight: "solid 1px black" }}
          >
            <Background color="#aaa" gap={50} size={3} />
          </ReactFlow>
        </ReactFlowProvider>
      </div>
    </div>
  );
};

export default ReactFlowPage;
