export interface QnaContentsProps {
  title: string;
  id: string;
  content: Array<{
    title: string;
    body: string;
  }>;
}

export interface QnaProps {
  label: string;
  uniqueId: string;
  list: Array<QnaContentsProps>;
}

export interface QnaContentsLayoutProps {
  tabContent: Array<QnaProps>;
  uniqueId: string;
  link: string;
}
