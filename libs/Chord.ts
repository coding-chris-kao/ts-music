import { Note } from "./Note";
import { ScaleFactory, ScaleType } from "./Scale";

export enum ChordType {
  Major,
  Minor,
  Diminished,
  Augmented,
  MajorSeventh,
  MinorSeventh,
  DominantSeventh,
  DiminishedSeventh,
  HalfDiminishedSeventh,
  MinorMajorSeventh,
  AugmentedMajorSeventh,
  MajorNinth,
  MinorNinth,
  DominantNinth,
  DominantMinorNinth,
  SixNinth,
  MinorSixNinth,
}

export class Chord {
  public assemblies: Note[];

  constructor(public name: string, public chordType: ChordType) {
    const tonic = new Note(name);
    switch (chordType) {
      // Triad
      case ChordType.Major:
        this.assemblies = [tonic, tonic.majorThird, tonic.perfectFifth];
        break;
      case ChordType.Minor:
        this.assemblies = [tonic, tonic.minorThird, tonic.perfectFifth];
        break;
      case ChordType.Diminished:
        this.assemblies = [tonic, tonic.minorThird, tonic.diminishedFifth];
        break;
      case ChordType.Augmented:
        this.assemblies = [tonic, tonic.majorThird, tonic.minorSixth];
        break;
      // Seventh
      case ChordType.MajorSeventh:
        this.assemblies = [
          tonic,
          tonic.majorThird,
          tonic.perfectFifth,
          tonic.majorSeventh,
        ];
        break;
      case ChordType.MinorSeventh:
        this.assemblies = [
          tonic,
          tonic.minorThird,
          tonic.perfectFifth,
          tonic.minorSeventh,
        ];
        break;
      case ChordType.DominantSeventh:
        this.assemblies = [
          tonic,
          tonic.majorThird,
          tonic.perfectFifth,
          tonic.minorSeventh,
        ];
        break;
      case ChordType.DiminishedSeventh:
        this.assemblies = [
          tonic,
          tonic.minorThird,
          tonic.diminishedFifth,
          tonic.diminishedSeventh,
        ];
        break;
      case ChordType.HalfDiminishedSeventh:
        this.assemblies = [
          tonic,
          tonic.minorThird,
          tonic.diminishedFifth,
          tonic.minorSeventh,
        ];
        break;
      case ChordType.MinorMajorSeventh:
        this.assemblies = [
          tonic,
          tonic.minorThird,
          tonic.perfectFifth,
          tonic.majorSeventh,
        ];
        break;
      case ChordType.AugmentedMajorSeventh:
        this.assemblies = [
          tonic,
          tonic.majorThird,
          tonic.augmentedFifth,
          tonic.majorSeventh,
        ];
        break;
      // Ninth
      case ChordType.MajorNinth:
        this.assemblies = [
          tonic,
          tonic.majorThird,
          tonic.perfectFifth,
          tonic.majorSeventh,
          tonic.majorNinth,
        ];
        break;
      case ChordType.MinorNinth:
        this.assemblies = [
          tonic,
          tonic.minorThird,
          tonic.perfectFifth,
          tonic.minorSeventh,
          tonic.majorNinth,
        ];
        break;
      case ChordType.DominantNinth:
        this.assemblies = [
          tonic,
          tonic.majorThird,
          tonic.perfectFifth,
          tonic.minorSeventh,
          tonic.majorNinth,
        ];
        break;
      case ChordType.DominantMinorNinth:
        this.assemblies = [
          tonic,
          tonic.majorThird,
          tonic.perfectFifth,
          tonic.minorSeventh,
          tonic.minorNinth,
        ];
        break;
      case ChordType.SixNinth:
        this.assemblies = [
          tonic,
          tonic.majorThird,
          tonic.perfectFifth,
          tonic.majorSixth,
          tonic.majorNinth,
        ];
        break;
      case ChordType.MinorSixNinth:
        this.assemblies = [
          tonic,
          tonic.minorThird,
          tonic.perfectFifth,
          tonic.minorSixth,
          tonic.majorNinth,
        ];
        break;
      default:
        this.assemblies = [tonic, tonic.majorThird, tonic.perfectFifth];
        break;
    }
  }

  public getAssemblies() {
    return this.assemblies.map((note) => note.name).join(", ");
  }

  public toString() {
    switch (this.chordType) {
      case ChordType.Major:
        return this.name;
      case ChordType.Minor:
        return this.name + "m";
      case ChordType.Diminished:
        return this.name + "dim";
      case ChordType.Augmented:
        return this.name + "aug";
      case ChordType.MajorSeventh:
        return this.name + "maj7";
      case ChordType.MinorSeventh:
        return this.name + "m7";
      case ChordType.DominantSeventh:
        return this.name + "7";
      case ChordType.DiminishedSeventh:
        return this.name + "dim7";
      case ChordType.HalfDiminishedSeventh:
        return this.name + "m7b5";
      default:
        return this.name;
    }
  }
}

export class ChordFactory {
  private scaleFactory = new ScaleFactory();

  public getDiatonicChords(key: string, scaleType: ScaleType) {
    const scale = this.scaleFactory.getScale(key, scaleType);

    switch (scaleType) {
      case ScaleType.Minor:
      case ScaleType.Aeolian:
        return [
          new Chord(scale.tonic.name, ChordType.Minor),
          new Chord(scale.superTonic.name, ChordType.Diminished),
          new Chord(scale.mediant.name, ChordType.Major),
          new Chord(scale.subdominant.name, ChordType.Minor),
          new Chord(scale.dominant.name, ChordType.Minor),
          new Chord(scale.submediant.name, ChordType.Major),
          new Chord(scale.leadingTone.name, ChordType.Major),
          new Chord(scale.tonic.name, ChordType.Minor),
        ];
      case ScaleType.Major:
      case ScaleType.Ionian:
      default:
        return [
          new Chord(scale.tonic.name, ChordType.Major),
          new Chord(scale.superTonic.name, ChordType.Minor),
          new Chord(scale.mediant.name, ChordType.Minor),
          new Chord(scale.subdominant.name, ChordType.Major),
          new Chord(scale.dominant.name, ChordType.Major),
          new Chord(scale.submediant.name, ChordType.Minor),
          new Chord(scale.leadingTone.name, ChordType.Diminished),
          new Chord(scale.tonic.name, ChordType.Major),
        ];
    }
  }

  public getDiatonicSeventhChords(key: string, scaleType: ScaleType) {
    const scale = this.scaleFactory.getScale(key, scaleType);

    switch (scaleType) {
      case ScaleType.Minor:
      case ScaleType.Aeolian:
        return [
          new Chord(scale.tonic.name, ChordType.MinorSeventh),
          new Chord(scale.superTonic.name, ChordType.DiminishedSeventh),
          new Chord(scale.mediant.name, ChordType.MajorSeventh),
          new Chord(scale.subdominant.name, ChordType.MinorSeventh),
          new Chord(scale.dominant.name, ChordType.MinorSeventh),
          new Chord(scale.submediant.name, ChordType.MajorSeventh),
          new Chord(scale.leadingTone.name, ChordType.DominantSeventh),
          new Chord(scale.tonic.name, ChordType.MinorSeventh),
        ];
      case ScaleType.Major:
      case ScaleType.Ionian:
      default:
        return [
          new Chord(scale.tonic.name, ChordType.MajorSeventh),
          new Chord(scale.superTonic.name, ChordType.MinorSeventh),
          new Chord(scale.mediant.name, ChordType.MinorSeventh),
          new Chord(scale.subdominant.name, ChordType.MajorSeventh),
          new Chord(scale.dominant.name, ChordType.DominantSeventh),
          new Chord(scale.submediant.name, ChordType.MinorSeventh),
          new Chord(scale.leadingTone.name, ChordType.HalfDiminishedSeventh),
          new Chord(scale.tonic.name, ChordType.MajorSeventh),
        ];
    }
  }
}
