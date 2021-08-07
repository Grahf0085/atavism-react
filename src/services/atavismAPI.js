export const fetchAllAdventurers = async (page) => {
  const res = await fetch(''); //ADDY!!!!??????!!
  const json = await res.json();
  return json.slice((page - 1) * 10, page * 10);
};
