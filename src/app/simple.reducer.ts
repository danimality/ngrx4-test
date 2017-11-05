import { Action } from "@ngrx/store";

export  function simpleReducer(state: string = "Hello World!", action: Action): string {
  console.log(action.type, state);

  switch (action.type) {
    case 'SPANISH':
      return state = 'Hola Mundo!';
    case 'FRENCH':
      return state = 'Bonjour le monde!';
    case 'GERMAN':
      return state = 'Hallo Welt!';
    case 'ENGLISH':
      return state = 'Hello World!';

    default:
      return state;
  }
}
