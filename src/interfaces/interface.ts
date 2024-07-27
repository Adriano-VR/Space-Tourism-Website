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
    crew: Array<any>; // Defina corretamente de acordo com os dados reais
    technology: Array<any>; // Defina corretamente de acordo com os dados reais
  }
  


