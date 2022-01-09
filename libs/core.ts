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
  | "B"
  | "B#";
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
}
