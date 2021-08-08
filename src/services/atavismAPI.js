export const fetchAllAdventurers = async (page) => {
  const res = await fetch('http://127.0.0.1:7890/api/toons'); 
  const json = await res.json();
  return json.slice((page - 1) * 50, page * 50);
};
