interface IRadarData {
  id: string,
  name: string,
  value: string
};

const radarData: Array<IRadarData> = [
  { id: 'completeness', name: '完整性', value: '75' },
  { id: 'accuracy', name: '准确性', value: '80' },
  { id: 'freshness', name: '时效性', value: '90' },
  { id: 'unique', name: '唯一性', value: '100' },
  { id: 'consistency', name: '规范性', value: '45' },
  { id: 'stability', name: '稳定性', value: '100' },
];

export default {
  radarData
};
