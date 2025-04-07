import type { ReactNode } from 'react';

export interface TitleAreaProps {
  label: string;
  updateDate?: string;
  subTxt?: ReactNode;
  className?: string;
}
