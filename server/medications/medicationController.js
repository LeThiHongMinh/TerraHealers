import medicationService from "./medicationService";

async function getMedicationById(req, res) {
  try {
    const data = await medicationService.getMedicationById();
  } catch (err) {

  }
}

export { getMedicationById };