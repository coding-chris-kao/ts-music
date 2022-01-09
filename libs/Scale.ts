import { NotImplementedError } from "../utils/error";
import { Note, NoteName, ScaleType } from "./core";

export abstract class Scale {
  public tonic: Note;

  constructor(public tonicName: NoteName) {
    this.tonic = new Note(tonicName);
  }

  public abstract get superTonic(): Note;
  public abstract get mediant(): Note;
  public abstract get subdominant(): Note;
  public abstract get dominant(): Note;
  public abstract get submediant(): Note;
  public abstract get leadingTone(): Note;

  public abstract getNoteByDegree(degree: number): Note;

  protected normalizeDegree(degree: number) {
    if (degree <= 0)
      throw new Error(
        "MajorScaleStrategy.getNoteByDegree: degree must greater than 0"
      );
    degree = degree % 7;
    return degree === 0 ? 7 : degree;
  }
}

export class MajorScale extends Scale {
  public get superTonic(): Note {
    return this.getNoteByDegree(2);
  }
  public get mediant(): Note {
    return this.getNoteByDegree(3);
  }
  public get subdominant(): Note {
    return this.getNoteByDegree(4);
  }
  public get dominant(): Note {
    return this.getNoteByDegree(5);
  }
  public get submediant(): Note {
    return this.getNoteByDegree(6);
  }
  public get leadingTone(): Note {
    return this.getNoteByDegree(7);
  }
  public getNoteByDegree(degree: number) {
    degree = this.normalizeDegree(degree);
    let note: Note;
    switch (degree) {
      case 2:
        note = this.tonic.getNoteBySemitones(2);
        break;
      case 3:
        note = this.tonic.getNoteBySemitones(4);
        break;
      case 4:
        note = this.tonic.getNoteBySemitones(5);
        break;
      case 5:
        note = this.tonic.getNoteBySemitones(7);
        break;
      case 6:
        note = this.tonic.getNoteBySemitones(9);
        break;
      case 7:
        note = this.tonic.getNoteBySemitones(11);
        break;
      case 1:
      default:
        note = this.tonic.getNoteBySemitones(0);
        break;
    }

    return note;
  }
}

export class ScaleFactory {
  public getScale(tonicName: NoteName, type: ScaleType) {
    switch (type) {
      case ScaleType.Minor:
        throw new NotImplementedError();
      case ScaleType.Dim:
        throw new NotImplementedError();
      case ScaleType.Major:
      default:
        return new MajorScale(tonicName);
    }
  }
}
