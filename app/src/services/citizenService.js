module.exports = (citizenRepository) => {
  const getAllCitizens = async () => {
    return citizenRepository.getAll()
  }

  return {
    getAllCitizens
  }
}