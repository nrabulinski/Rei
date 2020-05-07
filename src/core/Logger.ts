import LogDocument from "../models/Log";

export default class Logger {
  constructor() {}

  public async info(content: string, additional?: Object) {
    this.log("INFO", content, additional);
    new LogDocument({
      loglevel: "INFO",
      content,
      additional,
    }).save();
  }

  public async warning(content: string, additional?: Object) {
    this.log("WARNING", content, additional);
    new LogDocument({
      loglevel: "WARNING",
      content,
      additional,
    }).save();
  }

  public async error(content: string, additional?: Object) {
    this.log("ERROR", content, additional);
    new LogDocument({
      loglevel: "ERROR",
      content,
      additional,
    }).save();
  }

  private log(level: string, message: string, additional?: Object) {
    if (additional) console.log(`[${level}] ${this.generateTimeStamp()} ${message}`, additional);
    else console.log(`[${level}] ${this.generateTimeStamp()} ${message}`);
  }

  // TODO: Improve to be an actual timestamp
  // Fine for now
  private generateTimeStamp() {
    return Date.now();
  }
}