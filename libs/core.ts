export type NoteName =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B";
export enum ScaleType {
  Major,
  Minor,
  Dim,
}
export const ALL_NOTES: NoteName[] = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
export const C_MAJOR_NOTES: NoteName[] = ["C", "D", "E", "F", "G", "A", "B"];

export class Note {
  public noteIndex: number;

  constructor(public name: NoteName) {
    this.noteIndex = ALL_NOTES.findIndex((note) => note === this.name);
  }

  public getNoteBySemitones(num: number) {
    const nextIndex = (this.noteIndex + num) % ALL_NOTES.length;
    return new Note(ALL_NOTES[nextIndex]);
  }

  public getHigherNote() {
    return this.getNoteBySemitones(1);
  }

  public getLowerNote() {
    return this.getNoteBySemitones(-1);
  }

  public getIntervalFrom(other: Note) {
    const pureName1 = this.name.split("")[0];
    const pureName2 = other.name.split("")[0];
    const index1 = C_MAJOR_NOTES.findIndex((note) => note === pureName1);
    const index2 = C_MAJOR_NOTES.findIndex((note) => note === pureName2);
    return Math.abs(index1 - index2) + 1;
  }
}
