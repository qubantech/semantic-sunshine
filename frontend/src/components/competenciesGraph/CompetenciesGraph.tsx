import React, { useCallback, useRef, useState } from 'react';
import ReactFlow, { Node, Edge, useNodesState, useEdgesState, addEdge, ReactFlowProvider, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import './CompetenciesGraph.css';
import { getNodes, graphColors, initialEdges } from './data';
import { Button, Drawer, Stepper, Text, ColorSwatch, Card, Space, Group } from '@mantine/core';
interface ICompetenciesGraphProps {
  opened: boolean;
  setOpened: () => void;
  title: string;
  role?: string;
  skills: string[];
  skillsRate: number[];
}

const frontEndNodes = ['MobX', 'Webpack'];
const backEndNodes = ['noSQL', 'CI/CD'];

export const CompetenciesGraph: React.FC<ICompetenciesGraphProps> = props => {
  const { opened, setOpened, skillsRate, skills } = props;

  const reactFlowWrapper = useRef<any>(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>(getNodes(skillsRate, skills));
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>(initialEdges);
  const onConnect = useCallback(connection => setEdges((eds: any) => addEdge(connection, eds)), []);

  //Handlers

  const handleAddNode = (item: string, index: number) => {
    setNodes([
      ...nodes,
      {
        id: item,
        style: { backgroundColor: graphColors[0], fontWeight: 600, fontSize: 18 },
        data: { label: item } as any,
        position: { x: 150 * index, y: 550 },
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
      },
    ]);
  };

  //Renders
  const renderDragAndDrop = () => {
    return (
      <>
        <div className="description">Мы рекомендуем добавить</div>
        <Group grow>
          {props.role === 'FRONTEND_LEAD'
            ? frontEndNodes.map((item, index) => {
                return (
                  <Button variant={'outline'} onClick={() => handleAddNode(item, index)}>
                    {item}
                  </Button>
                );
              })
            : backEndNodes.map((item, index) => {
                return (
                  <Button variant={'outline'} onClick={() => handleAddNode(item, index)}>
                    {item}
                  </Button>
                );
              })}
        </Group>
      </>
    );
  };

  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened()}
      title={<Text fz={'lg'}>{props.title}</Text>}
      padding="xl"
      size="90%"
      position={'bottom'}
    >
      <div className="dndflow">
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <Card shadow={'sm'} radius={'md'} withBorder sx={{ width: '100%' }}>
              <Text pb={16}>Уровень понимания</Text>
              <Stepper contentPadding={'xs'} iconSize={15} active={-1}>
                {graphColors.map((item, index) => (
                  <Stepper.Step
                    label={<Text fz={'xl'}>{index + 1}</Text>}
                    key={item}
                    icon={<ColorSwatch color={item} />}
                  />
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
            {(props.role === 'FRONTEND_LEAD' || props.role === 'BACKEND_LEAD') && renderDragAndDrop()}
            <Space h={'lg'} pb={180} />
          </div>
        </ReactFlowProvider>
      </div>
    </Drawer>
  );
};
