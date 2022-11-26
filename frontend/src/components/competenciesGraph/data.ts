import { Node, Edge, Position, MarkerType } from 'reactflow';

const colors = ['#FFA8A8', '#FFC078', '#FFE066', '#C0EB75', '#8CE99A'];

export const getNodes = (skillsRate: number[], skills: string[]): Node[] => {
  return [
    {
      id: '1',
      style: { backgroundColor: colors[skillsRate[0]] },
      data: { label: skills[0] },
      position: { x: 70, y: 100 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: '2',
      style: { backgroundColor: colors[skillsRate[1]] },
      data: { label: skills[1] },
      position: { x: 300, y: -50 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: '3',
      style: { backgroundColor: colors[skillsRate[2]] },
      data: { label: skills[2] },
      position: { x: 300, y: 100 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: '4',
      style: { backgroundColor: colors[skillsRate[3]] },
      data: { label: skills[3] },
      position: { x: 300, y: 250 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: '5',
      style: { backgroundColor: colors[skillsRate[4]] },
      data: { label: skills[4] },
      position: { x: 350, y: 25 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: '6',
      style: { backgroundColor: colors[skillsRate[5]] },
      data: { label: skills[5] },
      position: { x: 350, y: 175 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: '7',
      style: { backgroundColor: colors[skillsRate[6]] },
      data: { label: skills[6] },
      position: { x: 300, y: 310 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: '8',
      style: { backgroundColor: colors[skillsRate[7]] },
      data: { label: skills[7] },
      position: { x: 70, y: 490 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: '9',
      style: { backgroundColor: colors[skillsRate[8]] },
      data: { label: skills[8] },
      position: { x: 300, y: 400 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: '10',
      style: { backgroundColor: colors[skillsRate[9]] },
      data: { label: skills[9] },
      position: { x: 300, y: 500 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: '11',
      style: { backgroundColor: colors[skillsRate[10]] },
      data: { label: skills[10] },
      position: { x: 370, y: 450 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
    },
    {
      id: '9',
      style: { backgroundColor: colors[skillsRate[8]] },
      data: { label: skills[8] },
      position: { x: 370, y: 550 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
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
    id: '1-5',
    source: '1',
    target: '5',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: '1-6',
    source: '1',
    target: '6',
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: '1-7',
    source: '1',
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
  'Hooks (базовые)',
  'JSX',
  'Props and state',
  'Жизненный цикл компоненты',
  'React-router-dom',
  'CSS',
  'Дополнительные навыки',
  'Jira',
  'Git',
  'Figma',
  'Agile',
  'Базовый SQL',
];

export const frontendSkillsRate = [4, 3, 3, 2, 1, 1, 3, 3, 4, 3, 2, 3, 1, 0];
