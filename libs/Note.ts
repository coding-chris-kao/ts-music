import {
  NoteName,
  CHROMATIC_SCALE_NOTES,
  C_MAJOR_SCALE_NOTES,
} from "./constant";

export class Note {
  public noteIndex: number;

  constructor(public name: NoteName) {
    this.noteIndex = CHROMATIC_SCALE_NOTES.findIndex(
      (note) => note === this.name
    );
  }

  public get minorSecond(): Note {
    return this.getNoteBySemitones(1);
  }

  public get majorSecond(): Note {
    return this.getNoteBySemitones(2);
  }

  public get minorThird(): Note {
    return this.getNoteBySemitones(3);
  }

  public get majorThird(): Note {
    return this.getNoteBySemitones(4);
  }

  public get perfectFourth(): Note {
    return this.getNoteBySemitones(5);
  }

  public get diminishedFifth(): Note {
    return this.getNoteBySemitones(6);
  }

  public get perfectFifth(): Note {
    return this.getNoteBySemitones(7);
  }

  public get minorSixth(): Note {
    return this.getNoteBySemitones(8);
  }

  public get majorSixth(): Note {
    return this.getNoteBySemitones(9);
  }

  public get minorSeventh(): Note {
    return this.getNoteBySemitones(10);
  }

  public get majorSeventh(): Note {
    return this.getNoteBySemitones(11);
  }

  public get perfectOctave(): Note {
    return this.getNoteBySemitones(12);
  }

  public getNoteBySemitones(num: number) {
    const nextIndex = (this.noteIndex + num) % CHROMATIC_SCALE_NOTES.length;
    return new Note(CHROMATIC_SCALE_NOTES[nextIndex]);
  }

  public getIntervalFrom(other: Note) {
    const pureName1 = this.name.split("")[0];
    const pureName2 = other.name.split("")[0];
    const index1 = C_MAJOR_SCALE_NOTES.findIndex((note) => note === pureName1);
    const index2 = C_MAJOR_SCALE_NOTES.findIndex((note) => note === pureName2);
    return Math.abs(index1 - index2) + 1;
  }
}
