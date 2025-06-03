import { createContext, useState } from 'react';
import type { AppData } from '../pages/interfaces';

export const AppDataContext = createContext<{
  appData: AppData;
  setAppData: React.Dispatch<React.SetStateAction<AppData>>;
}>({
  appData: {
    profileData: null,
    videoSegments: [],
    videoFile: null
  },
  setAppData: () => {}
});

export function AppDataProvider({ children }: { children: React.ReactNode }) {
  const [appData, setAppData] = useState<AppData>({
    profileData: null,
    videoSegments: [],
    videoFile: null
  });

  return (
    <AppDataContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppDataContext.Provider>
  );
} 