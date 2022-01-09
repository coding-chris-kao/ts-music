import { Note, NoteName } from "./core";
import { ScaleFactory, ScaleType } from "./Scale";

export enum ChordType {
  Major,
  Minor,
  Diminished,
  Augmented,
}

export class Chord {
  public assemblies: Note[];

  constructor(public name: NoteName, public chordType: ChordType) {
    const tonic = new Note(name);
    switch (chordType) {
      case ChordType.Minor:
        this.assemblies = [
          tonic,
          tonic.getNoteBySemitones(3),
          tonic.getNoteBySemitones(7),
        ];
        break;
      case ChordType.Diminished:
        this.assemblies = [
          tonic,
          tonic.getNoteBySemitones(3),
          tonic.getNoteBySemitones(6),
        ];
        break;
      case ChordType.Augmented:
        this.assemblies = [
          tonic,
          tonic.getNoteBySemitones(4),
          tonic.getNoteBySemitones(8),
        ];
        break;
      case ChordType.Major:
      default:
        this.assemblies = [
          tonic,
          tonic.getNoteBySemitones(4),
          tonic.getNoteBySemitones(7),
        ];
        break;
    }
  }

  public getAssemblies() {
    return this.assemblies.map((note) => note.name).join(", ");
  }

  public toString() {
    switch (this.chordType) {
      case ChordType.Minor:
        return this.name + "m";
      case ChordType.Diminished:
        return this.name + "dim";
      case ChordType.Augmented:
        return this.name + "aug";
      case ChordType.Major:
      default:
        return this.name;
    }
  }
}

export class ChordFactory {
  private scaleFactory = new ScaleFactory();

  public getDiatonicChords(key: NoteName, scaleType: ScaleType) {
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
}
