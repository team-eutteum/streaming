import clsx from 'clsx';

interface TabPanelProps {
  children: React.ReactNode;
}

function TabPanel({ children }: TabPanelProps) {
  return (
    <div className={clsx('tab-panel')} role="tabpanel">
      {children}
    </div>
  );
}

export default TabPanel;
