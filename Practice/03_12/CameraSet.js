class CameraSet {
  constructor(
    cameraBrand,
    cameraModel,
    sensorResolution,
    cropMode,
    imageType,
    lenses,
    dateAcquired
  ) {
    this.cameraBrand = cameraBrand;
    this.cameraModel = cameraModel;
    this.sensorResolution = sensorResolution;
    this.cropMode = cropMode;
    this.imageType = imageType;
    this.lenses = lenses;
    this.dateAcquired = dateAcquired;
  }

  setCropMode(enabled) {
    this.cropMode = enabled;
  }

  setImageType(imageType) {
    if (imageType === "raw" || imageType === "jpg") {
      this.imageType = imageType;
    }
  }

  addLens(lens) {
    if (typeof lens === "object" && "brand" in lens && "model" in lens) {
      this.lenses.push(lens);
    }
  }

  cameraSetAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsedMs = now - acquired;
    let daysSinceAcquired = Math.floor(elapsedMs / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default CameraSet;

const myCameraSet = new CameraSet(
  "Sony",
  "A7R III",
  "42MP",
  false,
  "raw",
  [],
  "Dec 5, 2022 15:00:00 PST"
);

myCameraSet.addLens({ brand: "Sony", model: "28mm" });
myCameraSet.setCropMode(true);

console.log(myCameraSet);
console.log("This set is " + myCameraSet.cameraSetAge() + " days old.");
