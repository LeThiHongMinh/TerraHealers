import medicationService from "./medicationService";

async function getMedicationById(req, res) {
  const id = req.params.id;

  try {
    const data = await medicationService.getMedicationById(id);
    res.status(200).json(data);
  } catch (err) {

  }
}

export { getMedicationById };