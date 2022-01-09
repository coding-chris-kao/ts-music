import { NoteName, ScaleType, Note } from "./core";
import { Scale, ScaleFactory } from "./Scale";

export class Chord {
  private assemblies: NoteName[];
  constructor(public name: NoteName, public scale: ScaleType) {
    switch (scale) {
      case ScaleType.Minor:
        this.assemblies = [];
        break;
      case ScaleType.Dim:
        this.assemblies = [];
        break;
      case ScaleType.Major:
      default:
        this.assemblies = [];
        break;
    }
  }
  public toString() {
    switch (this.scale) {
      case ScaleType.Minor:
        return this.name + "m";
      case ScaleType.Dim:
        return this.name + "dim";
      case ScaleType.Major:
      default:
        return this.name;
    }
  }
}

export class ChordFactory {
  private scaleFactory = new ScaleFactory();

  public getDiatonicChords(key: NoteName, scaleType: ScaleType) {
    const scale = this.scaleFactory.getScale(key, scaleType);

    const results = [
      new Chord(scale.tonic.name, ScaleType.Major),
      new Chord(scale.superTonic.name, ScaleType.Minor),
      new Chord(scale.mediant.name, ScaleType.Minor),
      new Chord(scale.subdominant.name, ScaleType.Major),
      new Chord(scale.dominant.name, ScaleType.Major),
      new Chord(scale.submediant.name, ScaleType.Minor),
      new Chord(scale.leadingTone.name, ScaleType.Dim),
      new Chord(scale.tonic.name, ScaleType.Major),
    ];

    return results;
  }
}
