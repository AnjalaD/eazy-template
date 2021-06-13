export type Field = { filter: string; name: string; value: string };

export type Fields = {
  [key: string]: Field;
};

export type SavedTemplate = {
  name: string;
  value: string;
};

export interface AppState {
  template: string;
  fields: Fields;
}
