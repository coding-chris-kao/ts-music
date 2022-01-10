import { C_MAJOR_SCALE_NOTES } from "../libs/constant";

export class DegreeRing {
  private notesOnDegree: string[];

  constructor(tonic: string) {
    const pureTonic = tonic.split("")[0] as string;
    const tonicIndex = C_MAJOR_SCALE_NOTES.indexOf(pureTonic);
    if (tonicIndex === -1)
      throw new Error(`Error DegreeRing: tonic ${tonic} is wrong`);

    this.notesOnDegree = C_MAJOR_SCALE_NOTES.slice(tonicIndex).concat(
      C_MAJOR_SCALE_NOTES.slice(0, tonicIndex)
    );
  }

  public getNoteOnDegree(degree: number) {
    const noteIndex = degree % 7 === 0 ? 6 : (degree % 7) - 1;
    return this.notesOnDegree[noteIndex];
  }
}
