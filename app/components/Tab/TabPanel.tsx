import clsx from 'clsx';

interface TabPanelProps {
  children: React.ReactNode;
  selected: number;
  index: number;
  uniqueId: string;
}

function TabPanel({ children, selected, index, uniqueId }: TabPanelProps) {
  return (
    <div
      className={clsx('tab-panel', selected === index && 'active')}
      role="tabpanel"
      aria-labelledby={`${uniqueId}-tabpanel-${index}`}
    >
      {children}
    </div>
  );
}

export default TabPanel;
