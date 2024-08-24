import React, { createContext } from 'react';
import { h1Original, setH1Size } from '../logic/consistencyControl';
import { scaleContent, scaleText } from '../logic/contentScaler';

type ScaleContentType = {
  item: number;
};

const context = createContext<ScaleContentType | undefined>(undefined);

type types = { children: React.ReactNode };

export default function ScaleContext({ children }: types): React.JSX.Element {
  const scaleAll = (): void => {
    setH1Size(scaleText(h1Original));
  };
}
