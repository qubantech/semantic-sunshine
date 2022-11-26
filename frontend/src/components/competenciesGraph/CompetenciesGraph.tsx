import React, { useCallback } from 'react';
import ReactFlow, { Node, Edge, useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import './CompetenciesGraph.css';
import { getNodes, initialEdges } from './data';
import { Drawer, Text } from '@mantine/core';

interface ICompetenciesGraphProps {
  opened: boolean;
  setOpened: () => void;
  title: string;
  skills: string[];
  skillsRate: number[];
}

export const CompetenciesGraph: React.FC<ICompetenciesGraphProps> = props => {
  const { opened, setOpened, skillsRate, skills } = props;

  const [nodes, , onNodesChange] = useNodesState<Node[]>(getNodes(skillsRate, skills));
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);
  const onConnect = useCallback(connection => setEdges((eds: any) => addEdge(connection, eds)), []);

  //Render
  return (
    <Drawer opened={opened} onClose={() => setOpened()} title="Register" padding="xl" size="xl">
      <Text fz={'lg'}>{props.title}</Text>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        className="touchdevice-flow"
        fitView
      />
    </Drawer>
  );
};
