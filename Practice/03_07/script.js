/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cameraSet = {
  cameraBrand: "Sony",
  cameraModel: "A7R III",
  sensorResolution: "42MP",
  cropMode: false,
  setCropMode: function (enabled) {
    this.cropMode = enabled;
  },
  imageType: "raw",
  setImageType: function (imageType) {
    if (imageType === "raw" || imageType === "jpg") {
      this.imageType = imageType;
    }
  },
  lenses: [
    {
      brand: "Sony",
      model: "28mm f/2.0",
    },
    {
      brand: "Sony",
      model: "50mm f/1.8",
    },
    {
      brand: "Tamron",
      model: "17-28mm f/2.8",
    },
    {
      brand: "Sigma",
      model: "28-70mm f/2.8",
    },
  ],
};
