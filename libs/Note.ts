import { CHROMATIC_SCALE_NOTES, C_MAJOR_SCALE_NOTES } from "./constant";
import { DegreeRing } from "./DegreeRing";

export class Note {
  public noteIndex: number;
  private degreeRing: DegreeRing;

  private static verifyNoteName(name: string): void {
    const pureName = name.split("")[0];
    if (!C_MAJOR_SCALE_NOTES.includes(pureName))
      throw new Error(
        `Error Note.verifyNoteName: input name ${name} is not valid`
      );
  }

  constructor(public name: string) {
    Note.verifyNoteName(name);
    this.noteIndex = CHROMATIC_SCALE_NOTES.findIndex(
      (note) => note === this.name
    );
    this.degreeRing = new DegreeRing(name);
  }

  public get minorSecond(): Note {
    return this.transferToDegree(1, 2);
  }

  public get majorSecond(): Note {
    return this.transferToDegree(2, 2);
  }

  public get minorThird(): Note {
    return this.transferToDegree(3, 3);
  }

  public get majorThird(): Note {
    return this.transferToDegree(4, 3);
  }

  public get perfectFourth(): Note {
    return this.transferToDegree(5, 4);
  }

  public get diminishedFifth(): Note {
    return this.transferToDegree(6, 5);
  }

  public get perfectFifth(): Note {
    return this.transferToDegree(7, 5);
  }

  public get augmentedFifth(): Note {
    return this.transferToDegree(8, 5);
  }

  public get minorSixth(): Note {
    return this.transferToDegree(8, 6);
  }

  public get majorSixth(): Note {
    return this.transferToDegree(9, 6);
  }

  public get diminishedSeventh(): Note {
    return this.transferToDegree(9, 7);
  }

  public get minorSeventh(): Note {
    return this.transferToDegree(10, 7);
  }

  public get majorSeventh(): Note {
    return this.transferToDegree(11, 7);
  }

  public get perfectOctave(): Note {
    return this.transferToDegree(12, 8);
  }

  public get minorNinth(): Note {
    return this.transferToDegree(13, 9);
  }

  public get majorNinth(): Note {
    return this.transferToDegree(14, 9);
  }

  public getNoteBySemitones(num: number): Note {
    const nextIndex = (this.noteIndex + num) % CHROMATIC_SCALE_NOTES.length;
    return new Note(CHROMATIC_SCALE_NOTES[nextIndex]);
  }

  public getIntervalFrom(other: Note): number {
    const semitonesCount = this.getSemitonesCount(other);
    return Math.abs(semitonesCount) + 1;
  }

  private getSemitonesCount(other: Note): number {
    const pureName1 = this.name.split("")[0];
    const pureName2 = other.name.split("")[0];
    const index1 = C_MAJOR_SCALE_NOTES.findIndex((note) => note === pureName1);
    const index2 = C_MAJOR_SCALE_NOTES.findIndex((note) => note === pureName2);
    return index1 - index2;
  }

  public transferToDegree(semi: number, degree: number): Note {
    const note = this.getNoteBySemitones(semi);
    const targetNoteName = this.degreeRing.getNoteOnDegree(degree);
    const targetNote = new Note(targetNoteName);
    const semitonesCount = targetNote.getSemitonesCount(note);
    if (semitonesCount === 0) return note;

    let symbol = semitonesCount < 0 ? "#" : "b";
    let transferredNoteName = targetNoteName;
    for (let i = 0; i < semitonesCount; i++) {
      transferredNoteName += symbol;
    }

    return new Note(transferredNoteName);
  }
}
