import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { memo, ReactNode, useCallback } from 'react';

export interface TabItem {
  value: string;
  content: string;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo(function Tabs(props: TabsProps) {
  const { className, tabs, value, onTabClick } = props;

  const clickHandler = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <>
      <div className={classNames(cls.Tabs, {}, [className])}>
        {tabs.map((tab) => (
          <div className={classNames(cls.tab, { [cls.activeTab]: tab.value === value }, [])} key={tab.value} onClick={clickHandler(tab)}>
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
});
