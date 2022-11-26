import React, { useCallback } from 'react';
import ReactFlow, { Node, Edge, useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import './CompetenciesGraph.css';
import { getNodes, graphColors, initialEdges } from './data';
import { Drawer, Stepper, Text, ColorSwatch, Card } from '@mantine/core';

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
    <Drawer
      opened={opened}
      onClose={() => setOpened()}
      title={<Text fz={'lg'}>{props.title}</Text>}
      padding="xl"
      size="80%"
      position={'bottom'}
    >
      <Card shadow={'sm'} radius={'md'} withBorder sx={{ width: '100%' }}>
        <Text pb={16}>Уровень понимания</Text>
        <Stepper contentPadding={'xs'} iconSize={15} active={-1}>
          {graphColors.map((item, index) => (
            <Stepper.Step label={index + 1} key={item} icon={<ColorSwatch color={item} />} />
          ))}
        </Stepper>
      </Card>
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
