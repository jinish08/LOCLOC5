import React from "react";
import { Handle, NodeProps, Position } from "reactflow";
const sourceHandleStyleA = { left: 50 };
const MiddleNode = ({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <div
        className="w-36  border-2 border-gray-300 rounded-full "
        style={data.style}
      >
        <p className="p-4 text-center text-[8px] ">{data.label}</p>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={sourceHandleStyleA}
      />
    </>
  );
};

export default MiddleNode;
