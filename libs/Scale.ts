import { NotImplementedError } from "../utils/error";
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

  constructor(public tonicName: string) {
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
        note = this.tonic.transferToDegree(2, degree);
        break;
      case 3:
        note = this.tonic.transferToDegree(4, degree);
        break;
      case 4:
        note = this.tonic.transferToDegree(5, degree);
        break;
      case 5:
        note = this.tonic.transferToDegree(7, degree);
        break;
      case 6:
        note = this.tonic.transferToDegree(9, degree);
        break;
      case 7:
        note = this.tonic.transferToDegree(11, degree);
        break;
      case 1:
      default:
        note = this.tonic.transferToDegree(0, degree);
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
        note = this.tonic.transferToDegree(2, degree);
        break;
      case 3:
        note = this.tonic.transferToDegree(3, degree);
        break;
      case 4:
        note = this.tonic.transferToDegree(5, degree);
        break;
      case 5:
        note = this.tonic.transferToDegree(7, degree);
        break;
      case 6:
        note = this.tonic.transferToDegree(8, degree);
        break;
      case 7:
        note = this.tonic.transferToDegree(10, degree);
        break;
      case 1:
      default:
        note = this.tonic.transferToDegree(0, degree);
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
        note = this.tonic.transferToDegree(2, degree);
        break;
      case 3:
        note = this.tonic.transferToDegree(3, degree);
        break;
      case 4:
        note = this.tonic.transferToDegree(5, degree);
        break;
      case 5:
        note = this.tonic.transferToDegree(7, degree);
        break;
      case 6:
        note = this.tonic.transferToDegree(9, degree);
        break;
      case 7:
        note = this.tonic.transferToDegree(10, degree);
        break;
      case 1:
      default:
        note = this.tonic.transferToDegree(0, degree);
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
        note = this.tonic.transferToDegree(1, degree);
        break;
      case 3:
        note = this.tonic.transferToDegree(3, degree);
        break;
      case 4:
        note = this.tonic.transferToDegree(5, degree);
        break;
      case 5:
        note = this.tonic.transferToDegree(7, degree);
        break;
      case 6:
        note = this.tonic.transferToDegree(8, degree);
        break;
      case 7:
        note = this.tonic.transferToDegree(10, degree);
        break;
      case 1:
      default:
        note = this.tonic.transferToDegree(0, degree);
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
        note = this.tonic.transferToDegree(2, degree);
        break;
      case 3:
        note = this.tonic.transferToDegree(4, degree);
        break;
      case 4:
        note = this.tonic.transferToDegree(6, degree);
        break;
      case 5:
        note = this.tonic.transferToDegree(7, degree);
        break;
      case 6:
        note = this.tonic.transferToDegree(9, degree);
        break;
      case 7:
        note = this.tonic.transferToDegree(11, degree);
        break;
      case 1:
      default:
        note = this.tonic.transferToDegree(0, degree);
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
        note = this.tonic.transferToDegree(2, degree);
        break;
      case 3:
        note = this.tonic.transferToDegree(4, degree);
        break;
      case 4:
        note = this.tonic.transferToDegree(5, degree);
        break;
      case 5:
        note = this.tonic.transferToDegree(7, degree);
        break;
      case 6:
        note = this.tonic.transferToDegree(9, degree);
        break;
      case 7:
        note = this.tonic.transferToDegree(10, degree);
        break;
      case 1:
      default:
        note = this.tonic.transferToDegree(0, degree);
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
        note = this.tonic.transferToDegree(1, degree);
        break;
      case 3:
        note = this.tonic.transferToDegree(3, degree);
        break;
      case 4:
        note = this.tonic.transferToDegree(5, degree);
        break;
      case 5:
        note = this.tonic.transferToDegree(6, degree);
        break;
      case 6:
        note = this.tonic.transferToDegree(8, degree);
        break;
      case 7:
        note = this.tonic.transferToDegree(10, degree);
        break;
      case 1:
      default:
        note = this.tonic.transferToDegree(0, degree);
        break;
    }

    return note;
  }
}

export class ScaleFactory {
  public getScale(tonicName: string, type: ScaleType) {
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
