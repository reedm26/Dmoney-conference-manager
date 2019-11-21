import Speaker from "./Speaker.js";
import { generateId } from "../Utils.js";

export default class Session {
  constructor({ id = generateId(), name, speakers }) {
    this.id = id;
    this.name = name;
    this.speakers = speakers.map(s => new Speaker(s));
  }

  get template() {
    return `
      <div class="col-5 mt-3 p-3 border rounded bg-info">
          <h1 class="text-center border-bottom">${this.name}</h1>
        </div>
    `
  }
}
