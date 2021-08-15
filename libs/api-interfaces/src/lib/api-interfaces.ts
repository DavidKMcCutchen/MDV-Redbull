export interface Redbull {
  id: string;
  name: string;
  flavor: string;
  seasonal: boolean;
};

export const emptyRedbull: Redbull = {
  id: '',
  name: '',
  flavor: '',
  seasonal: false
}