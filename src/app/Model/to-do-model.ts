import { Status } from "./status-enum";
export class ToDoModel {
  constructor(
  public title: string,
  public description: string,
  public status: Status,
  ){}
}
