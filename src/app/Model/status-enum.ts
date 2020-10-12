export enum Status {
  ToDo = 'TODO',
  InProgress = 'IN-PROGRESS',
  Done = 'DONE',
  Archive = 'ARCHIVE'
}
export namespace Status {

  export function values() {
    return Object.keys(Status).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }
}
