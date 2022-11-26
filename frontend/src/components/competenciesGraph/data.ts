import { Node, Edge, Position, MarkerType } from 'reactflow';

export const graphColors = ['#FFA8A8', '#FFC078', '#FFE066', '#C0EB75', '#8CE99A'];

export const getNodes = (skillsRate: number[], skills: string[]): Node[] => {
  return [
    {
      id: '1',
      style: { backgroundColor: graphColors[skillsRate[0]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[0] },
      position: { x: 220, y: 0 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '2',
      style: { backgroundColor: graphColors[skillsRate[1]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[1] },
      position: { x: 60, y: 80 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '3',
      style: { backgroundColor: graphColors[skillsRate[2]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[2] },
      position: { x: 220, y: 110 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '4',
      style: { backgroundColor: graphColors[skillsRate[3]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[3] },
      position: { x: 380, y: 80 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '5',
      style: { backgroundColor: graphColors[skillsRate[4]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[4] },
      position: { x: 380, y: 160 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '6',
      style: { backgroundColor: graphColors[skillsRate[5]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[5] },
      position: { x: 380, y: 240 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '7',
      style: { backgroundColor: graphColors[skillsRate[6]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[6] },
      position: { x: 380, y: 380 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '8',
      style: { backgroundColor: graphColors[skillsRate[7]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[7] },
      position: { x: 100, y: 250 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '9',
      style: { backgroundColor: graphColors[skillsRate[8]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[8] },
      position: { x: 100, y: 330 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '10',
      style: { backgroundColor: graphColors[skillsRate[9]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[9] },
      position: { x: 30, y: 380 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '11',
      style: { backgroundColor: graphColors[skillsRate[10]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[10] },
      position: { x: 130, y: 480 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
    {
      id: '9',
      style: { backgroundColor: graphColors[skillsRate[8]], fontWeight: 600, fontSize: 18 },
      data: { label: skills[8] },
      position: { x: 280, y: 530 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    },
  ];
};

export const initialEdges: Edge[] = [
  {
    id: '1-2',
    source: '1',
    target: '2',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: '1-3',
    source: '1',
    target: '3',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: '1-4',
    source: '1',
    target: '4',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: '4-5',
    source: '4',
    target: '5',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: '5-6',
    source: '5',
    target: '6',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: '6-7',
    source: '6',
    target: '7',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: '8-9',
    source: '8',
    target: '9',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: '8-10',
    source: '8',
    target: '10',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: '8-11',
    source: '8',
    target: '11',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

//Frontend

export const frontendSkills = [
  'React',
  'CSS',
  'Hooks (базовые)',
  'JSX',
  'Props and state',
  'Жизненный цикл компоненты',
  'React-router-dom',
  'Доп. навыки',
  'Jira',
  'Git',
  'Figma',
  'Agile',
  'Базовый SQL',
];

export const frontendSkillsRate = [4, 3, 3, 2, 1, 1, 3, 3, 4, 3, 2, 3, 1, 0];
