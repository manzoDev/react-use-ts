export type ActionType =
  | { type: 'incrementar'; }
  | { type: 'disminuir'; }
  | { type: 'custom'; payload: number }