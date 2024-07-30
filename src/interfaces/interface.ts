// src/interfaces/interface.ts
export interface Isection {
    destinations: Array<{
      name: string;
      images: {
        png: string;
        webp: string;
      };
      description: string;
      distance: string;
      travel: string;
    }>;
    crew: Array<{
      name:string;
      images: {
        png:string;
        webp:string;
      }
      role:string;
      bio:string

    }>; 
    technology: Array<{
      name:string;
      images:{
        portrait:string;
        landscape:string;
      }
      description:string;
    }>; 
  }
  


