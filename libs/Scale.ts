import { NotImplementedError } from "../utils/error";
import { NoteName } from "./constant";
import { Note } from "./Note";

export enum ScaleType {
  Major,
  Minor,
  Dim,
  Ionian,
  Dorian,
  Phrygian,
  Lydian,
  Mixolydian,
  Aeolian,
  Locrian,
}

export abstract class Scale {
  public tonic: Note;

  constructor(public tonicName: NoteName) {
    this.tonic = new Note(tonicName);
  }

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

export class MinorScale extends Scale {
  public getNoteByDegree(degree: number) {
    degree = this.normalizeDegree(degree);
    let note: Note;
    switch (degree) {
      case 2:
        note = this.tonic.getNoteBySemitones(2);
        break;
      case 3:
        note = this.tonic.getNoteBySemitones(3);
        break;
      case 4:
        note = this.tonic.getNoteBySemitones(5);
        break;
      case 5:
        note = this.tonic.getNoteBySemitones(7);
        break;
      case 6:
        note = this.tonic.getNoteBySemitones(8);
        break;
      case 7:
        note = this.tonic.getNoteBySemitones(10);
        break;
      case 1:
      default:
        note = this.tonic.getNoteBySemitones(0);
        break;
    }

    return note;
  }
}

export class DorianScale extends Scale {
  public getNoteByDegree(degree: number) {
    degree = this.normalizeDegree(degree);
    let note: Note;
    switch (degree) {
      case 2:
        note = this.tonic.getNoteBySemitones(2);
        break;
      case 3:
        note = this.tonic.getNoteBySemitones(3);
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
        note = this.tonic.getNoteBySemitones(10);
        break;
      case 1:
      default:
        note = this.tonic.getNoteBySemitones(0);
        break;
    }

    return note;
  }
}

export class PhrygianScale extends Scale {
  public getNoteByDegree(degree: number) {
    degree = this.normalizeDegree(degree);
    let note: Note;
    switch (degree) {
      case 2:
        note = this.tonic.getNoteBySemitones(1);
        break;
      case 3:
        note = this.tonic.getNoteBySemitones(3);
        break;
      case 4:
        note = this.tonic.getNoteBySemitones(5);
        break;
      case 5:
        note = this.tonic.getNoteBySemitones(7);
        break;
      case 6:
        note = this.tonic.getNoteBySemitones(8);
        break;
      case 7:
        note = this.tonic.getNoteBySemitones(10);
        break;
      case 1:
      default:
        note = this.tonic.getNoteBySemitones(0);
        break;
    }

    return note;
  }
}

export class LydianScale extends Scale {
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
        note = this.tonic.getNoteBySemitones(6);
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

export class MixolydianScale extends Scale {
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
        note = this.tonic.getNoteBySemitones(10);
        break;
      case 1:
      default:
        note = this.tonic.getNoteBySemitones(0);
        break;
    }

    return note;
  }
}

export class LocrianScale extends Scale {
  public getNoteByDegree(degree: number) {
    degree = this.normalizeDegree(degree);
    let note: Note;
    switch (degree) {
      case 2:
        note = this.tonic.getNoteBySemitones(1);
        break;
      case 3:
        note = this.tonic.getNoteBySemitones(3);
        break;
      case 4:
        note = this.tonic.getNoteBySemitones(5);
        break;
      case 5:
        note = this.tonic.getNoteBySemitones(6);
        break;
      case 6:
        note = this.tonic.getNoteBySemitones(8);
        break;
      case 7:
        note = this.tonic.getNoteBySemitones(10);
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
      case ScaleType.Aeolian:
        return new MinorScale(tonicName);
      case ScaleType.Dim:
        throw new NotImplementedError();
      case ScaleType.Locrian:
        return new LocrianScale(tonicName);
      case ScaleType.Dorian:
        return new DorianScale(tonicName);
      case ScaleType.Phrygian:
        return new PhrygianScale(tonicName);
      case ScaleType.Lydian:
        return new LydianScale(tonicName);
      case ScaleType.Mixolydian:
        return new MixolydianScale(tonicName);
      case ScaleType.Major:
      case ScaleType.Ionian:
      default:
        return new MajorScale(tonicName);
    }
  }
}
